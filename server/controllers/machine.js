const Machine = require("../models/machine");
const Station = require("../models/station");
const multer = require("multer");
const upload = require("../middlewares/upload");

//const { GridFsStorage } = require("multer-gridfs-storage");


exports.createMachine =[
    upload.single("photo"),
    async (req, res) => {
      try {
        const machineData = req.body;
        if (req.file) {
          machineData.photo = req.file.buffer.toString("base64"); // Fotoğrafı base64 formatına çevir
        }
        const machine = new Machine(machineData);
        await machine.save();
        res.status(201).json({ success: true, machine });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  ];

exports.getMachines = async (req, res) => {
    try {
        const machines = await Machine.find().populate("station");
        res.status(200).json(machines);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getMachine = async (req, res) => {
    try {
        const machine = await Machine.findById(req.params.id).populate("station");
        if (!machine) {
            return res.status(404).json({ message: "Machine not found" });
        }
        res.status(200).json(machine);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.assignMachineToStation = async (req, res) => {
    try {
        const machine = await Machine.findById(req.params.machineId);
        const station = await Station.findById(req.params.stationId);
        if (!machine || !station) {
            return res.status(404).json({ message: "Machine or station not found" });
        }
        machine.station = station;
        station.isAvaliable = false;
        await machine.save();
        res.status(200).json({ success: true, machine });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.unassignMachineFromStation = async (req, res) => {
    try {
        const machine = await Machine.findById(req.params.machineId);
        const station = await Station.findById(req.params.stationId);
        if (!machine || !station) {
            return res.status(404).json({ message: "Machine or station not found" });
        }
        machine.station = null;
        station.isAvaliable = true;
        await machine.save();
        res.status(200).json({ success: true, machine });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.deleteMachine = async (req, res) => {
    try {
        const machine = await Machine.findByIdAndDelete(req.params.id);
        if (!machine) {
            return res.status(404).json({ message: "Machine not found" });
        }
        res.status(200).json({ message: "Machine deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateMachine = async (req, res) => {
    try {
        const machine = await Machine.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!machine) {
            return res.status(404).json({ message: "Machine not found" });
        }
        res.status(200).json(machine);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}



