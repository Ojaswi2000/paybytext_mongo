//to connect with the mongoDB database
const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'payByText',
    useNewUrlParser: true,
    useUnifiedTopology: true
        }, err => err ? console.log(err) : 
            console.log('Connected to yourDB-name database'));


//Defining Schema for users of the app
const userSchema = new Schema({
    accountName:{
        type: String,
        required: true
    },

    active:{
        type: Boolean,
        required: true,
    },

    accountNumber:{
        type: String,
        required: true,
        unique: true,
    },

    createdOn:{
        type: Date,
        required: true,
    },

    issuer:{
        type: String,
        required: true,
    },

    paymentType:{
        type: String,
        required: true,
    },

    modifiedOn:{
        type: Date,
        required: false,
    },

    merchantId:{
        type: String,
        required: true,
    },

    createdBy:{
        type: String,
        required: true,
    },

    executeFlag:{
        type: String,
        required: true,
    },

    identityId:{
        type: String,
        required: true,
    },

    paymentMethod:{
        walletId:{
            type: String,
            required: true,
        }
    },

    modifiedBy:{
        type: String,
        required: true,
    }
}, {timestamps: true});

const User = mongoose.model('users',userSchema);
module.exports = User; 