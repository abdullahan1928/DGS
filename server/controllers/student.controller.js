const Student = require('../models/student.model');

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({ students });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.getStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await Student.findById(id);
        res.status(200).json({ student });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.getStudentByGrNo = async (req, res) => {
    const { gr_no } = req.params;
    try {
        const student = await Student.findOne({ gr_no });
        res.status(200).json({ student });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.getStudentsCount = async (req, res) => {
    try {
        const studentsCount = await Student.countDocuments();
        res.status(200).json({ studentsCount });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
