import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BasicLayout from '../layouts/BasicLayout'

const AppRoutes = () => {
  return (
    <Routes>
        <Route>
            <Route path='/' element={ < BasicLayout />}></Route>
        </Route>
    </Routes>
  )
}

export default AppRoutes
