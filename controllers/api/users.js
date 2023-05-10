const User = require('../../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
    create
}

async function create(req, res){
    try {
        //1. create user
        const user = await User.create(req.body);
        //2. create the jwt by passing in the user info for the jwt payload
        //createJWT() is when the user doc is converted to json and therefore the password is removed in this step
        const token = createJWT(user); 
        //3. send the new jwt to the client using res.json
        res.json(token);
    } catch (error) {
        // if error, we'll send the error to the client
        res.status(400).json(error);
    }
}

//helper function, defined outside bc we want it to be reuseable
function createJWT(user) {
    //jwt.sign() creates token and cryptographically 'sign' it using secret, to validate it was created by server and not expired
    //needs 3 things, user object to create our JWT payload, secret we create, and an optional settings object
    return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'})
}