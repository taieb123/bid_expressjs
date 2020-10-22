
//@desc   Get all bootcamps
//@route  GET /api/v1/bootcamps
//@access Public 
exports.getBootcamps = (req, res, next ) =>{
    res.status(200).json( {success: true, msg : "Show all"});
}; 

//@desc   Get Only one  bootcamps
//@route  GET /api/v1/bootcamps/:id
//@access Public 
exports.getBootcamps = (req, res, next ) =>{
    res.status(200).json({success:true, msg:`Display single  Bootcamps ${req.params.id}`});
}; 

//@desc   Create new  bootcamps
//@route  POST /api/v1/bootcamps/
//@access Private 
exports.creatBootcamp = (req, res, next ) =>{
    res.status(200).json({success:true, msg:'creat new bootcamps'});
}; 

//@desc   Get Only one  bootcamps
//@route  PUT /api/v1/bootcamps/:id
//@access Private 
exports.updateBootcamp = (req, res, next ) =>{
    res.status(200).json({success:true, msg:`Update Bootcamps ${req.params.id}`});
}; 

//@desc   Get Only one  bootcamps
//@route  DELETE /api/v1/bootcamps/:id
//@access Private 
exports.deleteBootcamp = (req, res, next ) =>{
    res.status(200).json({success:true, msg:`delete Bootcamps ${req.params.id}`});
}; 