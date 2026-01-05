import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import {Header, Navbar, Sidebar, Footer} from "./components.jsx";
import {Projects, Demos, About, CensusView, Voyage, AIChef, SpotifyLab, VoyageRouting, AIChefRouting, CensusViewRouting} from "./pages.jsx"
import { Routes, Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function Main() {
  return(
    <BrowserRouter>
      <ScrollToTop/>
      <div className="bg-white min-h-screen">
        <Header />
        <Navbar/>
        <Sidebar/>
        <Routes>

          {/* Root redirects to /projects */}
          <Route path="/" element={<Navigate to="/projects" replace />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/about" element={<About />} />

          <Route path="/projects/censusview" element={<CensusView />} />
          <Route path="/projects/voyage" element={<Voyage />} />
          <Route path="/projects/aichef" element={<AIChef />} />
          <Route path="/projects/spotifylab" element={<SpotifyLab />} />


          {/* these are only helpful before deployment to let the user know it is under construction. I'll comment out as I go */}
          <Route path="/censusview" element={<CensusViewRouting />} />
          <Route path="/voyage" element={<VoyageRouting />} />
          {/* <Route path="/aichef" element={<AIChefRouting />} /> */}

          <Route path="/spotifylab" element={<Navigate to="/projects/spotifylab" replace />} />
          <Route path="*" element={<Navigate to="/featured-projects" replace />} />

        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

createRoot(document.getElementById("root")).render(<Main />);