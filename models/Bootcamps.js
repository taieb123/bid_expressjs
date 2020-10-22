const mongoose = require('mongoose');
const BootcampSchema = new mongoose.Schema({
    name : {
        type: String,
        required:[true, 'Please add the name'],
        unique:true,
        trim:true,
        maxlength:[50, 'name cannot be more then 50 char']
    },
    slug : String,
    description: {
        type: String,
        required:[true, 'Please add the description'],
        maxlength:[500, 'name cannot be more then 500 char']
    },
    website:{
        type: String,
        match: [
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
            "Please use a valid URL with HTTP or HTTTPS"
        ]
    },
    phone :{
        type:  String,
        maxlength: [20, 'Phone number can not be more then 20 char']
    },
    email:{
        type:String,
        match:[
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please add valid email"
        ],
    },
    address : {
        type:String,
        required: [true, 'Please add an address']
    }, 
    location:{
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
          },
          coordinates: {
            type: [Number],
            index: '2dsphere'
          },
          formattedAddress : String,
          street : String,
          city : String,
          stats : String,
          zipcode : String,
          country : String
    },
    careers:{
        type: [String],
        required: true,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Testeur'
        ]
    },
    averageRating: {
        type: Number,
        min: [1,"Rating must be at least 1"],
        max: [ 10,'Rating can not be more then 10']
    },
    averageCost: Number,

    photo : {
        type:String,
        default:'no-photo.jpg'
    },

    housing: {
        type:Boolean,
        default:false
    },
    jobAssistance: {
        type:Boolean,
        default:false
    },
    jobGuarantee: {
        type:Boolean,
        default:false
    },

    acceptGi: {
        type:Boolean,
        default:false
    },
    createdAt: {
        type:Date,
        default:Date.now
    },
});

module.exports = mongoose.model('Bootcamp',BootcampSchema);