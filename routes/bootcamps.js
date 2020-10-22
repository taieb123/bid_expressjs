const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.status(200).json( {success: true, msg : "Show all"});
});

router.get('/:id',(req , res) => {
    res.status(200).json({success:true, msg:`Display single  Bootcamps ${req.params.id}`});
});

router.post('/',(req , res) => {
    res.status(200).json({success:true, msg:'creat new bootcamps'});
});

router.put('/:id',(req , res) => {
    res.status(200).json({success:true, msg:`Update Bootcamps ${req.params.id}`});
});

router.delete('/:id',(req , res) => {
    res.status(200).json({success:true, msg:`delete Bootcamps ${req.params.id}`});
});

module.exports = router;