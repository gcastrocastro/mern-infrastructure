const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

//connection is a property within mongoose that gives us info specific to our connection
const db = mongoose.connection; 

//connection.on method allows us to register eventlisteners for various mongoose related events, in this case it is 'connected'
db.on('connected', () => {
    console.log(`connected to MongoDB using ${db.name} at ${db.host}:${db.port}`);
})