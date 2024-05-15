const Station = require("../models/station");
const Lab = require("../models/lab");


exports.createStation = async (req, res) => {
  try {
    const labId = req.params.labid;
    const { name } = req.body;
    const station = new Station({
        name
    });

    const lab = await Lab.findById(labId);
    
    if (!lab) {
      return res.status(404).json({ message: "Lab not found" });
    }


    lab.stations.push(station.id);

    await lab.save();
    await station.save();
    res.status(201).json(station);
  } catch (error) {
    console.error(error); // Log to console for debugging
    res.status(400).json({ message: error.message });
  }
};

exports.getStations = async (req, res) => {
  try {
    const stations = await Station.find().populate("lab");
    res.status(200).json(stations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStation = async (req, res) => {
  try {
    const station = await Station.findById(req.params.id)
      .populate("lab");
    if (!station) {
      return res.status(404).json({ message: "Station not found" });
    }
    res.status(200).json(station);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateStation = async (req, res) => {
  try {
    const station = await Station.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!station) {
      return res.status(404).json({ message: "Station not found" });
    }
    res.status(200).json(station);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteStation = async (req, res) => {
  try {
    const station = await Station.findByIdAndDelete(req.params.id);
    if (!station) {
      return res.status(404).json({ message: "Station not found" });
    }
    res.status(200).json({ message: "Station deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
