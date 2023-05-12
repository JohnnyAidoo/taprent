const express = require('express');
const router = express.Router();
const post_model = require('../models/posts')

//get all posts

router.get('/', async(req, res) =>{
    try{
        const posts = await post_model.find()
        res.json(posts)
    }catch(err){
        res.status(500).json({message:err.message});
    }
})

//create a post
router.post('/', async(req, res) =>{
    const post = new post_model({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        tags: req.body.tags
    })

    try{
        const newPost = await post.save()
        res.status(201).json(newPost)
        
    }catch(err){
        res.status(400).json({message:err.message});
    }
})

// get one post
router.get('/:id', async(req, res) =>{
    try{
        const post = await post_model.findById(req.params.id)
    }catch(err){
        res.status(500).json({message:err.message});
    }
})


// update one post
router.patch('/:id', async (req, res) =>{
    try{
        const post = await post_model.findById(req.params.id)
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

// delete one post
router.delete('/:id', async (req, res) =>{
    try{
        
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

module.exports = router