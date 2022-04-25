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

app.get('/',(req,res,next)=>{
    console.log("App working fine");
    next();
})


// to display all the user accounts in the browser
app.get('/api/v1/all-users',(req,res,next)=>{
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
        
}})




app.get('/api/v1/paybytext/list/byIdentity/:id',(req,res,next)=>{
    try {
        const {params} = req;
        const {id} = params;
        
        User.findById({_id: id})
        .then(result =>{
            res.status(200).json({
                messageCode:200,
                messageBody: result
            })
        } )

    } catch (error) {
        console.log(error);
        res.status(404).json({
            errorCode:400,
            errorBody: "Not found the given id!"
        })
    }

})

app.post('/api/v1/paybytext',(req,res,next)=>{
    try {
        const {body} = req;
        const {accountName, active, accountNumber, createdOn, issuer,paymentType,
        modifiedOn, merchantId, createdBy, executeFlag, identityId,
        paymentMethod, walletId, modifiedBy} = body;
        
        const user = new User({
            accountName,active,accountNumber,createdOn, issuer, paymentType, modifiedOn,
            merchantId, createdBy, executeFlag, identityId, paymentMethod:{walletId}, 
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
})

//delete request for a single id
app.delete('/api/v1/paybytext/:id',(req,res,next)=>{
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
    
})

//the put request for updation of the user accounts

app.listen(3000);
