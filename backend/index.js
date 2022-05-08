// importing The mongoose model
const User = require('./models/user');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'payByText',
    useNewUrlParser: true,
    useUnifiedTopology: true
        }, err => err ? console.log(err) : 
            console.log('Connected to payByText database'));


// for backend and express

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/preferences',(req,res,next)=>{
    res.redirect('../src/App.js')
})

app.get('/',(req,res,next)=>{
    res.redirect('/preferences');
    next();
})
// 1. Handler for displaying all users- handleGetAllUsers
const handleGetAllUsers = (req,res,next) => {
    try {
        User.find().sort({_id:-1})
            .then(result => {
                res.status(200).json({
                    messageCode: 200,
                    messageBody: result
                })
            })
            .catch(error => {
                console.log(error);
                res.status(404).json({
                    errorCode: 404,
                    errorBody: error
                })
            })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            errorCode: 404,
            errorBody: error
    })
        
}}

// 2. Handler for getting information based on a single id- handleGetPayByTextByIdentityId
const handleGetPayByTextByIdentityId = (req,res,next) => {
    try {
        const {params} = req;
        const {id} = params;
        
        User.findById(id)
        .then(result =>{
            res.status(200).json({
                messageCode:200,
                messageBody: result
            })
        } )

        .catch(error => {
            console.log(error);
            res.status(404).json({
                errorCode:400,
                errorBody: "Not found the given id!"
        })
    })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            errorCode: 500,
            errorBody: "Internal Server error"
        })
    }
}

// 3. Handler for posting a new user to the database
const handleUpsertPayByText = (req,res,next) => {
    try {
        const {body} = req;
        const {accountName, active, accountNumber, createdOn, issuer,paymentType,
        modifiedOn, merchantId, createdBy, executeFlag, identityId,
        paymentMethod, walletId, modifiedBy} = body;
        
        const user = new User({
            accountName,active,accountNumber,createdOn, issuer, paymentType, modifiedOn,
            merchantId, createdBy, executeFlag, identityId, 
            paymentMethod:{walletId : paymentMethod.walletId}, 
            modifiedBy
        })

        // saving in the database

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
}


// 4. Handler for deleting a user from the database
const handleDeletePayByTextById = (req,res,next) => {
    try {
        const {params} = req;
        const {id} = params;
        
        User.findByIdAndDelete({_id: id}) // delete from the database
        .then(result => {
            console.log(result);
            res.status(200).json({
                messageCode: 200,
                messageBody: "Sucessfully deleted the id"
            })
        }).catch(error=>{
            console.log(error);
            res.status(404).json({
                errorCode: 404,
                errorBody: "Not found the id"
            })
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            errorCode: 500,
            errorBody: "Internal Server error"
        })
    }
    
}


// 5. Handler for updating a user's details from the database
const handleUpdatePayByText = (req,res,next) => {
    try {
        const {body, params} = req;
        const {id} = params;

        const {accountName, active, accountNumber, createdOn, issuer,paymentType,
        modifiedOn, merchantId, createdBy, executeFlag, identityId,
        paymentMethod, walletId, modifiedBy} = body;

        User.findByIdAndUpdate(id,{
            $set:{
                accountName, active, accountNumber, createdOn, issuer, paymentType,
                modifiedOn, merchantId, createdBy, executeFlag, identityId,
                paymentMethod, walletId, modifiedBy
            }
        }).then(result => {
            console.log(result);
            res.status(200).json({
                messageCode: 200,
                updatedResult: result
            })
        }).catch(error => {
            res.status(404).json({
                errorCode: 404,
                errorBody: error
            })
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            errorCode: 500,
            errorBody: "Internal Server error"
        })
    }
}


// get request to display all the user accounts in the browser
app.get('/api/v1/all-users', handleGetAllUsers)



// get request to display a user account based on a single id
app.get('/api/v1/paybytext/list/byIdentity/:id', handleGetPayByTextByIdentityId)



// post request for adding a new user to the database
app.post('/api/v1/paybytext', handleUpsertPayByText)



// delete request for a single id
app.delete('/api/v1/paybytext/:id', handleDeletePayByTextById)



// the put request for updation of a user account
app.put('/api/v1/paybytext/:id', handleUpdatePayByText)

app.listen(3000);
