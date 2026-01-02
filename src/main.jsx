import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Header, Navbar, Sidebar, Footer} from "./components.jsx";
import {Projects, Demos, About, CensusView, Voyage, AIChef, SpotifyLab} from "./pages.jsx"

export function Hooks (){
  const [page, setPage] = useState("Projects");

    return{
      page, setPage
    }
  }


function Main(){
  const {page, setPage} = Hooks();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return(
    <div className="bg-white min-h-screen">
      <Header />
      <Navbar setPage={setPage} page={page} />
      <Sidebar setPage={setPage} page={page} />
      {page === "Projects" && <Projects setPage={setPage} page={page}/>}
      {page === "About" && <About setPage={setPage} page={page}/>}
      {page === "Demos" && <Demos setPage={setPage} page={page}/>}
      {page === "Voyage" && <Voyage/>}
      {page === "CensusView" && <CensusView/>}
      {page === "AIChef" && <AIChef/>}
      {page === "SpotifyLab" && <SpotifyLab/>}
      <Footer/>
    </div>
  )
}

createRoot(document.getElementById("root")).render(<Main />);