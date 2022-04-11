const mongoose = require('mongoose');

// mongoose user schema, states fields users have
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true
    },
    username: {
        type: String,
        required: [true, "Please enter your username"],
        trim: true,
        unique:true,
        sparse:true
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        trim: true,
        unique:true,
        index:true,
        sparse:true
    },
   
    password: {
        type: String,
        required: [true, "Please enter your password"],
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
        
    },
    avatar: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        default: ""

    },
    oauth: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Users", userSchema);