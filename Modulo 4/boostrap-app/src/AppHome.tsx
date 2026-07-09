// src/AppHome.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RBNavbar from './components/rb/RBNavbar'
import RBFooter from './components/rb/RBFooter'
import HomeRB   from './pages/HomeRB'
import AboutRB  from './pages/AboutRB'
import ProyectsRB from './pages/ProyectsRB'

export default function AppHome() {
  return (
    <BrowserRouter>
      <RBNavbar />
      <Routes>
        <Route path="/"      element={<HomeRB />} />
        <Route path="/projects"      element={<ProyectsRB />} />
        <Route path="/about" element={<AboutRB />} />
      </Routes>
      <RBFooter />
    </BrowserRouter>
  )
}