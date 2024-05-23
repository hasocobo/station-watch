const Test = require("../models/test");
const Machine = require("../models/machine");
const User = require("../models/user");


exports.createTest = async (req, res) => {
    try {

        const token = req.headers.authorization.split(' ')[1];;
        req.body.creationBy = await User.findById(req.userId);
        
        const test = new Test({
            ...req.body,
        });

        console.log(token);

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
        const token = req.headers.authorization.split(' ')[1];;
        req.body.lastModifiedBy = await User.findById(req.userId);
        const test = await Test.findById(req.params.id);
        if (!test) {
            return res.status(404).json({message: "Test not found"});
        }
        test.set({
            ...req.body,
           // lastModifiedBy: modifiedBy,
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
        const machine = await Machine.findById(test.machine);

        if (!test) {
            return res.status(404).json({message: "Test not found"});
        }

        if( !machine){
            return res.status(400).json({message: "Please assign a machine first."});
        }

        if(test.status = "active"){
            return res.status(400).json({message: "Test is already in start state"});
        }


        test.status = "active";
        machine.tests.push(test);
        test.machine = machine; 

        await test.save();
        //await machine.save();
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

        if(test.status = "finished"){
            return res.status(400).json({message: "Test is already in finished state"});
        }


        test.machine = null;
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
        const machine = await Machine.findById(req.body.machineId);
        if (!test || !machine) {
            return res.status(404).json({message: "Test or machine not found"});
        }

        console.log(machine.tests.indexOf(test.id));
       

        test.machine = machine;
        if (machine.tests.indexOf(test.id) == -1){
            machine.tests.push(test);
        }else{
            return res.status(400).json({message: "Test is already assigned to machine"});
        }

        console.log("");
        await test.save();
        console.log("");
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
