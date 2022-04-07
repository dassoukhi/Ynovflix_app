import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Media from './components/Media'
import ShomeMedia from './components/ShomeMedia'


const RoutesApp = () => {
  console.log("in route");
    return (
      <Router>
        <Routes>
          {/* Main 3 paths */}
          <Route path='/' element={<Home />}></Route>
          <Route path='/media/:media_id/:poster_id' element={<Media />}></Route>
           {/* <Redirect to='/'></Redirect> */}
        </Routes>
      </Router>
    )
  }
  
  export default RoutesApp