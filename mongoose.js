require('dotenv').config();
const mongoose = require('mongoose');

const connect = () => {
    const connStr = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/diehardrollers`;
    console.log(connStr);
    mongoose.connect(connStr, {
        autoIndex: false,
        poolSize: 10,
        bufferMaxEntries: 0,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log('Mongoose is Connected.'))
        .catch((err) => {
            console.log(`Mongoose Failed to Connect: Retrying in 5 seconds`);
            console.log(`Mongoose Err: ${err}`);
            // setTimeout(connect(), 5000);
        })
}

connect();

exports.mongoose = mongoose;