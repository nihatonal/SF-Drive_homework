const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const userSchema = new mongoose.Schema({
    userName: {                            
        type: String                 
    },
    birthdayDate: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    passport: {
        type: String
    },
    datepassport: {
        type: String
    },
    issued: {
        type: String
    },
    code: {
        type: String
    },
    license: {
        type: String
    },
    licenseDate: {
        type: String
    }
  });


const User = mongoose.model('User', userSchema);

router.get('/', async (req, res) => {
    const data = await User.find();
    res.send(data);
   // res.send('Here are your users list: [...]');
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    res.send(user);
});

router.post('/', async (req, res) => {
    const userData = req.body;
    const newUser = new User(userData);

    await newUser.save();
    res.send('Your user has been saved!');
});

module.exports = {
    usersRouter: router
};