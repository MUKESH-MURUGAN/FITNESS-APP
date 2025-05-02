const mongoose = require('mongoose');

const coneectDb = async() =>{
    mongoose.connect('mongodb+srv://pavithrars22cse:Zd6wCiQqNzBZ5b0Q@cluster0.rqj4mkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}

module.exports = coneectDb;