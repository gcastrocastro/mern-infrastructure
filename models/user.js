const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const SALT_ROUNDS = 6;

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
    //ret(representation) is version of mongoose data document that can be mutated, then hand it back to model to create JWT from it
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

//Schema middleware
//'save' event happens when user doc is created or modified
userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next(); //breaks us out, doesn't hash password again
    //hash password
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next(); //return modified version of the doc with the hashed/salted password added to the database
})

module.exports =mongoose.model('User', userSchema);

