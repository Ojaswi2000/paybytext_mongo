//to connect with the mongoDB database
const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'payByText',
    useNewUrlParser: true,
    useUnifiedTopology: true
        }, err => err ? console.log(err) : 
            console.log('Connected to payByText database'));


//Defining Schema for users of the app
const userSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
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
            required: false,
        }
    },

    modifiedBy:{
        type: String,
        required: true,
    }
}, {timestamps: true});

const User = mongoose.model('User',userSchema);


// for backend and express

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res,next)=>{
    console.log("App working fine");
    next();
})

app.post('/api/v1/paybytext',(req,res,next)=>{
    try {
        const {body} = req;
        const {accountName, active, accountNumber, createdOn, issuer,paymentType,
        modifiedOn, merchantId, createdBy, executeFlag, identityId,
        paymentMethod, walletId, modifiedBy, _id} = body;
        
        const user = new User({
            accountName,active,accountNumber,createdOn, issuer, paymentType, modifiedOn,
            merchantId, createdBy, executeFlag, identityId, paymentMethod:{walletId}, 
            modifiedBy,_id
        })

        user.save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                newUser: result
            })
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            errorCode:500,
            errorBody: error
        })
    }
})

app.listen(3000);
