const express = require('express');
const {
    getBootcamps,
    getBootcamp,
    creatBootcamp,
    updateBootcamp,
    deleteBootcamp
} = require('../controllers/bootcamps');

const router = express.Router();

router.route('/').get(getBootcamps).post(creatBootcamp);
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp); 

module.exports = router;