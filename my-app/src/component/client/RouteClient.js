import React from 'react'
import Login from '../login'
import Register from './register/register'
import Home from './home'
import About from './about/about'
import Feedback from './Feedback to the system/Feedback'

import {
  BrowserRouter as Router,
  Routes,
  Route,


} from 'react-router-dom'
import ScheduleClient from './schedule/schedule'
export function RouteClient(props) {
  return (
    <div>
      <Home />
      <Routes >
        <Route path="/Login" element={<Login />} />

        <Route path="/Register" element={<Register />} />
        <Route path="/About" element={<About />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/ScheduleClient" element={<ScheduleClient />} />

      </Routes >
    </div>

  )
}