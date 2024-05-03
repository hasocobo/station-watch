const Lab = require("../models/lab");

exports.createLab = async (req, res) => {
  try {
    const lab = new Lab(req.body);
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
  try {
    const lab = await Lab.findByIdAndDelete(req.params.id);
    if (!lab) {
      return res.status(404).json({ message: "Lab not found" });
    }
    res.status(200).json({ message: "Lab deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
