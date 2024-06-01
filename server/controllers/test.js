const Test = require("../models/test");
const Machine = require("../models/machine");
const User = require("../models/user");
const Lab = require("../models/lab");
const Station = require("../models/station");
const station = require("../models/station");
const sendEmail = require("../utils/email"); // E-posta gönderme işlevini içeri aktarın
const mongoose = require("mongoose");

exports.createTest = async (req, res) => {

  if (req.role != "engineer") {
    return res.status(403).json({ message: "Unauthorized fot this content." });
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    req.body.creationBy = await User.findById(req.userId);
    const machine = await Machine.findById(req.body.machine);
    const station = await Station.findById(req.body.station);

    if (machine.isAvailable) {
      //req.body.machine.isAvailable = false;
      const lab = await Lab.findById(req.body.lab);

      if (req.body.station != null) {
        req.body.status = "active";
        machine.isAvailable = false;
        station.isAvailable = false;
        await machine.save();
        await station.save();
      } else {
        req.body.status = "passive";
        // await station.save();
        // await lab.save();
      }

      const test = new Test({
        ...req.body,
      });

      console.log(token);

      await test.save();
      res.status(201).json({ success: true, test });
    } else {
      res.status(400).json({ message: "Machine is not avaible" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTests = async (req, res) => {
  try {
    const tests = await Test.find()
      .populate("machine")
      .populate("creationBy")
      .populate("lastModifiedBy");
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTest = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id)
      .populate("machine")
      .populate("creationBy")
      .populate("lastModifiedBy");

    if (!test) {
      return res.status(404).json({ message: "Test not found" });
    }
    res.status(200).json(test);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTest = async (req, res) => {

  if (req.role != "engineer") {
    return res.status(403).json({ message: "Unauthorized fot this content." });
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    req.body.lastModifiedBy = await User.findById(req.userId);
    req.body.machine = await Machine.findById(req.machineId);

    const test = await Test.findById(req.params.id);
    if (!test) {
      return res.status(404).json({ message: "Test not found" });
    }
    test.set({
      ...req.body,
      // lastModifiedBy: modifiedBy,
      lastModifiedDate: Date.now(),
    });
    await test.save();
    res.status(200).json({ success: true, test });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.startTest = async (req, res) => {
  try {
    if (req.role != "technician") {
      return res.status(403).json({ message: "Unauthorized fot this content." });
    }

    const test = await Test.findById(req.params.id);
    const machine = await Machine.findById(test.machine);

    if (!test) {
      return res.status(404).json({ message: "Test not found" });
    }

    if (!machine) {
      return res
        .status(400)
        .json({ message: "Please assign a machine first." });
    }

    if ((test.status = "active")) {
      return res
        .status(400)
        .json({ message: "Test is already in start state" });
    }

    test.status = "active";
    machine.tests.push(test);
    test.machine = machine;

    await test.save();
    //await machine.save();
    res.status(200).json({ success: true, test });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.assign = async (req, res) => {

  if (req.role != "engineer") {
    return res.status(403).json({ message: "Unauthorized fot this content." });
  }

  console.log("5");
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid test ID format" });
    }

    if (!mongoose.Types.ObjectId.isValid(req.body.station)) {
      return res.status(400).json({ message: "Invalid station ID format" });
    }

    const station = await Station.findById(req.body.station);
    if (!station) {
      return res.status(404).json({ message: "Station not found" });
    }

    const test = await Test.findById(req.params.id);
    if (!test) {
      return res.status(404).json({ message: "Test not found" });
    }

    station.isAvailable = false;
    test.status = "passive";
    await station.save();
    await test.save();

    res.status(200).json({ success: true, test });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.finishTest = async (req, res) => {

  if (req.role != "technician") {
    return res.status(403).json({ message: "Unauthorized fot this content." });
  }

  try {
    const test = await Test.findById(req.params.id);

    if (!test) {
      return res.status(404).json({ message: "Test not found" });
    }

    if (test.status == "finished") {
      return res
        .status(400)
        .json({ message: "Test is already in finished state" });
    }

    test.machine = null;
    test.status = "finished";

    const lab = await Lab.findById(test.lab);
    // Check for pending tests
    const pendingTests = await Test.find({
      lab: test.lab,
      status: "pending",
    }).populate("creationBy");

    if (pendingTests.length > 0) {
      // Send email to the creator of the pending test
      for (const pendingTest of pendingTests) {
        await sendEmail(
          pendingTest.creationBy.username,
          "A Station is Now Available",
          `Hello ${pendingTest.creationBy.name},\n\nA station in ${lab.name} lab is now available. Your pending test can now be started.`
        );
      }
    }

    await test.save();
    res.status(200).json({ success: true, test });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.stopTest = async (req, res) => {

  if (req.role != "technician") {
    return res.status(403).json({ message: "Unauthorized fot this content." });
  }

  try {
    const test = await Test.findById(req.params.id);
    if (!test) {
      return res.status(404).json({ message: "Test not found" });
    }
    test.status = "active";
    await test.save();
    res.status(200).json({ success: true, test });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTest = async (req, res) => {

  if (req.role != "engineer") {
    return res.status(403).json({ message: "Unauthorized fot this content." });
  }

  try {
    const test = await Test.findByIdAndDelete(req.params.id);
    if (!test) {
      return res.status(404).json({ message: "Test not found" });
    }
    res.status(200).json({ message: "Test deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
