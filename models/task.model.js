const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required : true,
            unique: true// TODO: it's may be unique or not depend on requirements
        },
        description: { 
            type: String,
            required: true,
        },
        mark: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

exports.Task = mongoose.model("Task", Schema);