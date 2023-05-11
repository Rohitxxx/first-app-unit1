import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'

export const MainRoute = () => {
    return (
        <BrowserRouter>

            <Link to={'/home'}>home</Link>
            <Link to={'/contact'}>contact</Link>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}
