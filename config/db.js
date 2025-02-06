const mongoose = require('mongoose')

const DBConnection = async () => {
    await mongoose.connect('mongodb+srv://tusharsolanki458:ok4XPyqkIBU9Mqkh@tusharcluster.c8qzl.mongodb.net/payment')

        .then(() => {
            console.log('Connected to MongoDB')
        })

        .catch((error) => {
            console.log(error);

        })
}

module.exports = DBConnection;