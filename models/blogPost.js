const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date()

    }
});

//Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);


module.exports=BlogPost;