import React from 'react'
import "./App.css"
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Home from "./page/Home/Home"
import Login from './page/Login/Login'

const App = () => {
 
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<><Home /></>} />
        <Route path='/' element = {<Login /> }/>
      </Routes>
    </Router>
  )
}

export default App