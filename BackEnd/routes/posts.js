const express = require("express");
const Post = require("../model/post");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", async function(req, res){
    try {
        const posts = await Post.find();
        return res.json({
            status: "success",
            data: {
                posts
            }
        })
        
    } catch (e) {
        res.json({
            status: "failed",
            message: e.message
        })
    }

})

router.post("/", async function(req, res, next){
    const { title, body, Location, image } = req.body;
    console.log(req.user)
    const post = await Post.create({
        title, body, Location, image, user: req.user
    });

    res.json({
        status: "success",
        data: {
            post
        }
    })
    
})

router.put("/:id", async function(req, res){
    const { title } = req.body;
    const post = await Post.findOne({_id: req.params.id});
    console.log(post.user, req.user);

    if (!post){
        return res.status(404).json({
            status: "failed",
            message: "Post Not Found"
        })
    }
    
    if (String(post.user) !== req.user){
        return res.status(403).json({
            status: "failed",
            message: "Forbidden"
        })
    }

    await Post.updateOne({_id: req.params.id},{
        title
    });

    res.json({
        status: "success"
    })
});

router.delete("/:id", async function(req, res){
    const post = await Post.findOne({_id: req.params.id});
    if (!post){
        return res.status(404).json({
            status: "failed",
            message: "Post Not Found"
        })
    }

    if (String(post.user) !== req.user){
        return res.status(403).json({
            status: "failed",
            message: "Forbidden"
        })
    }

    await Post.deleteOne({_id: req.params.id});

    res.json({
        status: "success"
    }) 
})

module.exports = router;