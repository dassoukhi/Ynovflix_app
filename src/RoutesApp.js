import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AllFilm from './components/AllFilm'
import AllSerie from './components/AllSerie'
import Home from './components/Home'
import Media from './components/Media'


const RoutesApp = () => {
  console.log("in route");
    return (
      <Router>
        <Routes>
          {/* Main 3 paths */}
          <Route path='/' element={<Home />}></Route>
          <Route path='/film' element={<AllFilm />}></Route>
          <Route path='/serie' element={<AllSerie />}></Route>
          <Route path='/media/:media_id/:poster_id' element={<Media />}></Route>
           {/* <Redirect to='/'></Redirect> */}
        </Routes>
      </Router>
    )
  }
  
  export default RoutesApp