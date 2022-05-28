//importing all the required element in the react 
import {Component,useState} from 'react'
import axios from 'axios'
import "../index.css"

//Function Calling
const Blog = props =>{
    return(
        <div className="container">
           {(props.blogs.title!==null)&&props.blogs.title}<br />
           {(props.blogs.content!==null)&&props.blogs.content}<br />
           <a href="#" onClick={()=>props.deleteBlog(props.blogs._id)}>Delete</a>
        </div>
    )
}
const BlogForm = props => {
    const [oBlog,setoBlog] = useState({blogs : {title:'',content:''}})
    function onSubmit(e){
        e.preventDefault();
        const blog = {
            title : oBlog.blogs.title,
            content: oBlog.blogs.content
        }
        
        console.log(blog)
        
    }
    function changeTitle(e){
        setoBlog({blogs: {
            title : e.target.value
    }})
    }
    function changeContent(e){
       setoBlog(
          {blogs : {content : e.target.value}}
       )
    }
    
    return (
        <div>
            <form  onSubmit = {onSubmit}>
                <label>
                    Blog Title
                </label>
                <input onChange={changeTitle()} type="text"/><br/>
                <label>
                    Blog Content
                </label>
                <input onChange={changeContent()} type="text"/>
                <input type="submit" />
            </form>
        </div>
    )
}
class Blogs extends Component{
    constructor(props){
        super(props);
        this.deleteBlog = this.deleteBlog.bind(this)
        this.state = {blogs : []}
    }
    componentDidMount(){
        axios.get('http://localhost:8080/blogs')
        .then(response => {
            this.setState({
                blogs : response.data
            })
            .catch(err => console.log(err))
        })
    }
    deleteBlog(id){
        axios.delete("http://localhost:8080/blogs/"+id)
        .then(response => console.log(response.data))
        this.setState({
            blogs : this.state.blogs.filter(el => el._id !== id)
        })
    }
    blogList(){
        return this.state.blogs.map(currentElement => <Blog blogs={currentElement} deleteBlog={this.deleteBlog} key={currentElement._id}/>)
    }
    formBlog(){
        return <BlogForm blogs={this.state}/>
    }
    render(){
        return(
            <div className="container_body">
              {this.blogList()}
              {this.formBlog()}
            </div>
        )
    }
}
export default Blogs