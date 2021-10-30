const mongoose = require("mongoose");

const PostSchema =  mongoose.Schema({
    title: {type: "string", require: true},
    body: {type: "string"},
    Location: {type: "string"},
    image: {type: "string", require: true},
    user: {type: mongoose.Types.ObjectId, ref: "EndUser"}
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;