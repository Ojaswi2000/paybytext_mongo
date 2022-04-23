const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'payByText',
    useNewUrlParser: true,
    useUnifiedTopology: true
        }, err => err ? console.log(err) : 
            console.log('Connected to yourDB-name database'));