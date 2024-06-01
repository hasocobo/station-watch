const Lab = require("../models/lab.js");
const Station = require("../models/station");

exports.createLab = async (req, res) => {
  try {

    if (req.role != "engineer") {
      return res.status(403).json({ message: "Unauthorized fot this content." });
    }
 
    const name = req.body.name;
    const stations = req.body.stations;
    const lab = new Lab({
      name,
      stations,
    });
    await lab.save();
    res.status(201).json({ success: true, lab });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getLabs = async (req, res) => {
  try {
    const labs = await Lab.find();
    res.status(200).json(labs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getLab = async (req, res) => {
  try {
    const lab = await Lab.findById(req.params.id).populate("stations");
    if (!lab) {
      return res.status(404).json({ message: "Lab not found" });
    }
    res.status(200).json(lab);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateLab = async (req, res) => {

  if (req.role != "engineer") {
    return res.status(403).json({ message: "Unauthorized fot this content." });
  }

  try {
    const lab = await Lab.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!lab) {
      return res.status(404).json({ message: "Lab not found" });
    }
    res.status(200).json(lab);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteLab = async (req, res) => {

  if (req.role != "engineer") {
    return res.status(403).json({ message: "Unauthorized fot this content." });
  }

  try {
    const lab = await Lab.findByIdAndDelete(req.params.id);
    console.log(lab.stations);
    lab.stations.forEach(async (stationId) => {
      console.log(stationId);
      await Station.findByIdAndDelete(stationId);
    });

    if (!lab) {
      return res.status(404).json({ message: "Lab not found" });
    }
    res.status(200).json({ message: "Lab deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
