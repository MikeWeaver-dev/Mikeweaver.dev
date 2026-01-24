import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import {Header, Navbar, Sidebar, Footer} from "./components.jsx";
import {Projects, Demos, About, CensusView, Voyage, AIChef, SpotifyLab, VoyageRouting, AIChefRouting, CensusViewRouting, PrivacyAIChefIOS, SupportAIChefIOS, PrivacyAIChefAndroid, SupportAIChefAndroid} from "./pages.jsx"
import { Routes, Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function RedirectToAIChef() {
  useEffect(() => {
    window.location.href = "https://aichef.mikeweaver.dev";
  }, []);

  return null; // nothing rendered
}

function RedirectToVoyage() {
  useEffect(() => {
    window.location.href = "https://voyage.mikeweaver.dev";
  }, []);

  return null; // nothing rendered
}

function RedirectToCensusView() {
  useEffect(() => {
    window.location.href = "https://019bb017-f381-3cf6-cf02-077820195931.share.connect.posit.cloud";
  }, []);

  return null; // nothing rendered
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

          <Route path="/privacy/aichef/ios" element={<PrivacyAIChefIOS />} />
          <Route path="/privacy/aichef/android" element={<PrivacyAIChefAndroid />} />
          <Route path="/support/aichef/ios" element={<SupportAIChefIOS />} />
          <Route path="/support/aichef/android" element={<SupportAIChefAndroid />} />

          {/* redirect redirect */}
          <Route path="/censusview" element={<RedirectToCensusView />} />
          <Route path="/voyage" element={<RedirectToVoyage />} />
          <Route path="/aichef" element={<RedirectToAIChef />} />

          <Route path="/spotifylab" element={<Navigate to="/projects/spotifylab" replace />} />
          <Route path="*" element={<Navigate to="/projects" replace />} />

        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
} 

const test = 3;

createRoot(document.getElementById("root")).render(<Main />);