const express = require('express');
const router = express.Router();
const saved_post_model = require('../models/savedPost')


//get saved post
router.get('/:uid/', (req, res) => {
    const uid = req.params.uid;

    saved_post_model.find({uid: uid}).then((response)=> {
        res.json(response)
    })

})

//add saved post

router.post('/' ,async (req, res)=>{
    const save = new saved_post_model({
        uid: req.params.uid,
        itemId: req.params.itemId
    })

    try{
        const newsaved = await save.save()
        res.status(201).json(newsaved)
    }catch(err){
        res.status(400).json({message:err.message})
    }
})