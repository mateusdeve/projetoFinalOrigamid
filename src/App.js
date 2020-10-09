import React from 'react'
import { BrowserRouter,
          Routes,
          Route
 } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import Login from './Pages/Login'
import './App.css'
import {UserStorage} from './Context/UserContext'

const App = () => {
  return (
    <BrowserRouter>
    <UserStorage>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login/*" element={<Login />} />
      </Routes>
      <Footer/>      
    </UserStorage>
    </BrowserRouter>
  )
}

export default App
