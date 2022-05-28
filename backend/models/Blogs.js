const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title : String,
    content : String
})

const Blogs = mongoose.model('Blogs',blogSchema);

module.exports = Blogs;