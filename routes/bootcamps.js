const express = require('express');
const {
    getBootcamps,
    creatBootcamp,
    updateBootcamp,
    deleteBootcamp
} = require('../controllers/bootcamps');

const router = express.Router();

router.route('/').get(getBootcamps).post(creatBootcamp);
router.route('/:id').get(getBootcamps).put(updateBootcamp).delete(deleteBootcamp); 

module.exports = router;