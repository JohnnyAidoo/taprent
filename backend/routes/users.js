const express = require('express');
const router = express.Router();
const users_model = require('../models/users')

//get all users
router.get('/', async (req, res) => {
    try{
        const users = await users_model.find()
        res.json(users)
    }catch (err) {
        res.status(500).json(err)
    }
})

//get one user
router.get('/:id', (req, res) => {
    res.send('get user ' + req.params.id);
})

//create new user
router.post('/', async (req, res) => {
    const user = new users_model({
        name: req.body.name,
        displayPicture : req.body.displayPicture,
        phoneNumber: req.body.phoneNumber,
        location : req.body.location,
    })
    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }catch (err) {
        res.status(400).json(err)
    }
})

//update one user
router.patch('/:id', (req, res) => {

})
//delete one user
router.delete('/:id', (req, res) => {
    
})


module.exports = router
