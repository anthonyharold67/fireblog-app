import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import Details from '../pages/Details'
import NewBlog from '../pages/NewBlog'
import UpdateBlog from '../pages/UpdateBlog'
import About from '../pages/About'
import NavBar from '../components/Navbar'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <Router>
      <NavBar/>
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/profile" element={<Profile/>} />
            
            
            <Route path="/details/:id" element={<PrivateRouter/>}>
              <Route path="/details/:id" element={<Details/>} />
            </Route>
            <Route path="/newblog" element={<PrivateRouter/>} >
                <Route path="/newblog" element={<NewBlog/>} />
            </Route>
            <Route path="/updateblog/:id" element={<PrivateRouter/>}>
                <Route path="/updateblog/:id" element={<UpdateBlog/>} />
            </Route>
            <Route path="/about" element={<About/>} />
        </Routes>
    </Router>

  )
}

export default AppRouter