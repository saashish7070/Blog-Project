const Router = require('express').Router();
const Blogs = require('../models/Blogs')
Router.get('/',(req,res)=>{
    Blogs.find()
    .then(blog=>res.json(blog))
    .catch(err=>res.json(err))
})
Router.post('/',(req,res)=>{
   const title = req.body.title;
   const content = req.body.content;
   const blogObject = {
       title,
       content
   }
   const blog = new Blogs(blogObject);
   blog.save()
   .then(()=>res.json('Data saved'))
   .catch(err=>res.json(err))
})

Router.route('/:id').get((req,res)=>{
    Blogs.findById(req.params.id)
    .then(blog=> res.json(blog))
    .catch(err=>res.json(err))
}).post((req,res)=>{
    Blogs.findById(req.params.id)
    .then(blog => {
        blog.title = req.body.title;
        blog.content = req.body.content;

        blog.save()
        .then(()=>res.json('Blog updated'))
        .catch(err=> res.json(err))
    })
}).delete((req,res)=>{
    Blogs.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Blog is deleted'))
    .catch(err => res.json(err))
})
module.exports = Router;