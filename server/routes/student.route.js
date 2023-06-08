const { Router } = require('express');
const {
    getStudents,
    getStudentById,
    getStudentsCount,
    getStudentByGrNo
} = require('../controllers/student.controller');

const router = Router();

router.get('/count', getStudentsCount); 
router.get('/', getStudents);
router.get('/:id', getStudentById);
router.get('/gr/:gr_no', getStudentByGrNo);

module.exports = router;