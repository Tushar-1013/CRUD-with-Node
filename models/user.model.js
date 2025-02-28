const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    adminname: {
        type: String,
        required: function () {
            return this.role === "user"; // Only required if role is Admin
        },

    },
    role: {
        type: String,
        enum: {
            values: ['user', 'admin'],
            message: `{VALUE} is not a valid role`
        },
        default: "user",
    },
    pin: {
        type: String,
    }
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel

