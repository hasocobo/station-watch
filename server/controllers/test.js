const Test = require("../models/test");
const Machine = require("../models/machine");
const User = require("../models/user");


exports.createTest = async (req, res) => {
    try {

      //  const creationBy = req.body.userId;
        const test = new Test({
            ...req.body,
        });
        await test.save();
        res.status(201).json({ success: true, test });
    
    } 
    
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.getTests = async (req, res) => {
    try {
        const tests = await Test.find().populate("machine").populate("creationBy").populate("lastModifiedBy");
        res.status(200).json(tests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getTest = async (req, res) => {
    try {
        const test = await Test.findById(req.params.id).populate("machine").populate("creationBy").populate("lastModifiedBy");
        if (!test) {
            return res.status(404).json({ message: "Test not found" });
        }
        res.status(200).json(test);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateTest = async (req, res) => {
    try {
        const modifiedBy = req.params.userId;
        const test = await Test.findById(req.params.id);
        if (!test) {
            return res.status(404).json({message: "Test not found"});
        }
        test.set({
            ...req.body,
            lastModifiedBy: modifiedBy,
            lastModifiedDate: Date.now(),
        });
        await test.save();
        res.status(200).json({success: true, test});
    } catch (error) {
        res.status(400).json({message: error.message});
    }

}

exports.startTest = async (req, res) => {
    try {
        const test = await Test.findById(req.params.id);
        const machine = await Machine.findById(req.params.machineId);
        if (!test) {
            return res.status(404).json({message: "Test not found"});
        }
        test.status = "active";
        machine.tests.push(test);
        test.machine.push(machine);
        await test.save();
        await machine.save();
        res.status(200).json({success: true, test});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.finishTest = async (req, res) => {
    try {
        const test = await Test.findById(req.params.id);
        if (!test) {
            return res.status(404).json({message: "Test not found"});
        }
        test.status = "finished";
        await test.save();
        res.status(200).json({success: true, test});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.stopTest = async (req, res) => {
    try {
        const test = await Test.findById(req.params.id);
        if (!test) {
            return res.status(404).json({message: "Test not found"});
        }
        test.status = "passive";
        await test.save();
        res.status(200).json({success: true, test});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.assignTestToMachine = async (req, res) => {
    try {
        const test = await Test.findById(req.params.id);
        const machine = await Machine.findById(req.params.machineId);
        if (!test || !machine) {
            return res.status(404).json({message: "Test or machine not found"});
        }
        test.machine.push(machine);
        machine.tests.push(test);
        await test.save();
        await machine.save();
        res.status(200).json({success: true, test});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.deleteTest = async (req, res) => {
    try {
        const test = await Test.findByIdAndDelete(req.params.id);
        if (!test) {
            return res.status(404).json({message: "Test not found"});
        }
        res.status(200).json({message: "Test deleted"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
