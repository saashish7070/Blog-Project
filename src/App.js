import React from 'react'
import NavBar from './component/NavBar'
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Blogs from './component/Blogs'
export default function App(){
  return(
  <>  
      <NavBar />
      <Routes>
        <Route exact path='/blogs' element={<Blogs />} /> 
        <Route exact path='/' element={<Home />} />
      </Routes>
  </>
  
  )
}