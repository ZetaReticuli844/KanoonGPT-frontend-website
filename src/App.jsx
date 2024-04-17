import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Chat from './pages/Chat'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/login' Component={Login}/>
      <Route path='/register' Component={Register}/>
      <Route path='/chat'  Component={Chat}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
