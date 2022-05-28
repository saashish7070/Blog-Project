import React from 'react'
import {Link} from 'react-router-dom'
export default class NavBar extends React.Component{
    render(){
        return(
                <div>
                    <Link to='/' exact>Home</Link>
                    <Link to='/blogs' exact>Blogs</Link>
                </div> 
        )
    }
}