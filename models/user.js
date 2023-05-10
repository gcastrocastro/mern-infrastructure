const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        trim: true //removes extra spaces
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
    }
}, {
    timestamps: true,
    //toJSON allows us to define a hook function that is invoked when the key happens, ie. when data is converted to json
    //doc is version of mongoose data document tht cannot be mutated
    //doc is version of mongoose data document tht can be mutated, then handed back to model to create JWT from it
    toJSON: function(doc, ret) {
        delete ret.password;
        return ret;
    }
});

module.exports =mongoose.model('User', userSchema);

