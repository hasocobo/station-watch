const Component = require("../models/component");
const User = require("../models/user");


exports.createComponent = async (req, res) => {
  try {

    //const token = req.headers.authorization.split(' ')[1];;
    req.body.creationBy = await User.findById(req.userId);
    const component = new Component({...req.body});

    await component.save();
    res.status(201).json({ success: true, component });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

exports.getComponents = async (req, res) => {
  try {
    const components = await Component.find();
    res.status(200).json(components);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.getComponent = async (req, res) => {
    try {
        const component = await Component.findById(req.params.id);
        if (!component) {
        return res.status(404).json({ message: "Component not found" });
        }
        res.status(200).json(component);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateComponent = async (req, res) => {
    try {
        const component = await Component.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        });
          if (!component) {
            return res.status(404).json({ message: "Component not found" });
        }
        res.status(200).json(component);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.deleteComponent = async (req, res) => {
    try {
        const component = await Component.findByIdAndDelete(req.params.id);
        if (!component) {
            return res.status(404).json({ message: "Component not found" });
        }
        res.status(200).json({ message: "Component deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.assignComponentToMachine = async (req, res) => {
    try {
        const component = await Component.findById(req.params.id);
        const machine = await Machine.findById(req.params.machineId);
        if (!component || !machine) {
            return res.status(404).json({ message: "Component or machine not found" });
        }
        component.machine.push(machine);
        machine.components.push(component);
        await component.save();
        await machine.save();
        res.status(200).json({ success: true, component });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.unassignComponentFromMachine = async (req, res) => {
    try {
        const component = await Component.findById(req.params.id);
        const machine = await Machine.findById(req.params.machineId);
        if (!component || !machine) {
            return res.status(404).json({ message: "Component or machine not found" });
        }
        component.machine = null;

        machine.components = machine.components.filter(
            (c) => c.toString() !== req.params.id
        );
        
        await component.save();
        await machine.save();
        res.status(200).json({ success: true, component });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}