import React from "react";
import {useState} from "react";
import { Code2, ChevronRight, ChevronLeft, Github, Linkedin, Mail, Menu, X, Sparkles, ExternalLink, ArrowRight, Play, Award, Rocket } from 'lucide-react';
import { NavLink} from "react-router-dom";

// header for all pages
export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-emerald-50 via-white to-emerald-50 backdrop-blur-md shadow-sm z-50 border-b border-emerald-100">
      <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="p-1.5 md:p-2 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg shadow-md">
            <Code2 className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>
          <div>
            <h1 className="text-lg text-left md:text-2xl font-bold text-gray-800 tracking-tight">
              Mike Weaver
            </h1>
            <div className="flex justify-between">
                <Sparkles className=" w-3.5 h-3.5 mr-1 mt-0 md:mt-1 text-emerald-600"/>
                <p className="text-xs md:text-sm text-gray-500">
                  Frontend & Full Stack Developer
                </p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com/MikeWeaver-dev" target="_blank" className="p-2 hover:bg-emerald-100 rounded-lg transition-all">
            <Github className="w-5 h-5 text-gray-600" />
          </a>
          <a href="https://www.linkedin.com/in/mikeweaverg/" target="_blank" className="p-2 hover:bg-emerald-100 rounded-lg transition-all">
            <Linkedin className="w-5 h-5 text-gray-600" />
          </a>
          <a href="mailto:mikeweaverg@gmail.com" className="p-2 hover:bg-emerald-100 rounded-lg transition-all">
            <Mail className="w-5 h-5 text-gray-600" />
          </a>
        </div>
      </div>
    </header>
  );
}

//Navbar hides on mobile
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const buttonClass = (isActive) => 
    `font-semibold px-3 md:px-4 py-2 rounded-lg transition-all cursor-pointer text-xs md:text-sm whitespace-nowrap ${
      isActive 
        ? 'bg-gradient-to-r from-emerald-300 to-emerald-400 text-white shadow-md' 
        : 'text-gray-500 hover:bg-emerald-100 hover:text-emerald-600'
    }`;

  return (
    <>
      {/* Desktop*/}
      <nav className="hidden md:block fixed top-[73px] md:top-[92px] left-0 w-full bg-white/80 backdrop-blur-lg shadow-sm z-40 border-b border-gray-100">
        <div className="flex items-center gap-2 px-4 md:px-8 py-1.5 max-w-7xl mx-auto">
          <NavLink to="/projects" className={({ isActive }) => buttonClass(isActive)}>
            Featured Projects
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => buttonClass(isActive)}>
            Resume & About
          </NavLink>
          <NavLink to="/demos" className={({ isActive }) => buttonClass(isActive)}>
            Project Demos
          </NavLink>
        </div>
      </nav>

      {/* Mobile*/}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-[85px] right-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-emerald-100"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-black/50 z-40" onClick={() => setMobileMenuOpen(false)}>
          <div className="bg-white w-70 h-full shadow-xl p-4 space-y-2" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-center mt-4">
              <Sparkles className=" w-3.5 h-3.5 mr-2 mt-1 mb-1 text-emerald-600"/>
              <p className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">Navigation</p>
            </div>
            <div className="flex flex-wrap justify-center gap-1.5">
              <NavLink
                to="/projects" className={({ isActive }) => `${buttonClass(isActive)}`}
                onClick={() => {setMobileMenuOpen(false); }}
              >
                Featured Projects
              </NavLink>
              <NavLink
                to="/about" className={({ isActive }) => `${buttonClass(isActive)}`}
                onClick={() => {setMobileMenuOpen(false); }}
              >
                Resume & About
              </NavLink>
              <NavLink
                to="/demos" className={({ isActive }) => `${buttonClass(isActive)}`}
                onClick={() => {setMobileMenuOpen(false); }}
              >
                Project Demos
              </NavLink>
            </div>
            
            <div className="pt-4 mt-4 border-t border-gray-200">
              <div className="flex justify-center">
                <Sparkles className=" w-3.5 h-3.5 mr-2 mt-1 mb-2 text-emerald-600"/>
                <p className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">Projects</p>
              </div>
              <div className="flex flex-wrap justify-center gap-1.5">
                <NavLink
                  to="/projects/censusview" className={({ isActive }) => `${buttonClass(isActive)} block`}
                  onClick={() => {setMobileMenuOpen(false); }}
                >
                  CensusView
                </NavLink>
                <NavLink
                  to="/projects/voyage" className={({ isActive }) => `${buttonClass(isActive)} block`}
                  onClick={() => {setMobileMenuOpen(false); }}
                >
                  Voyage
                </NavLink>
                <NavLink
                  to="/projects/aichef" className={({ isActive }) => `${buttonClass(isActive)} block`}
                  onClick={() => {setMobileMenuOpen(false); }}
                >
                  AI Chef
                </NavLink>
                <NavLink
                  to="/projects/spotifylab" className={({ isActive }) => `${buttonClass(isActive)} block`}
                  onClick={() => {setMobileMenuOpen(false); }}
                >
                  SpotifyLab
                </NavLink>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-gray-200 flex gap-3 justify-center">
              <a href="https://github.com/MikeWeaver-dev" target="_blank" className="p-2 hover:bg-emerald-100 rounded-lg">
                <Github className="w-5 h-5 text-gray-600" />
              </a>
              <a href="https://www.Linkedin.com/in/mikeweaverg/" target="_blank" className="p-2 hover:bg-emerald-100 rounded-lg">
                <Linkedin className="w-5 h-5 text-gray-600" />
              </a>
              <a href="mailto:mikeweaverg@gmail.com" className="p-2 hover:bg-emerald-100 rounded-lg">
                <Mail className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// sidebar available for desktop
export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const buttonClass = (isActive) => 
    `w-full text-left px-4 py-3 rounded-xl font-medium transition-all flex justify-left gap-6 justify-between  ${
      isActive 
        ? 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-white shadow-lg shadow-emerald-200'
        : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
    }`;

  return (
    <>
      {/* Desktop Sidebar Only */}
      <div className={`hidden md:block fixed left-0 top-[133px] md:top-[140px] z-30 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-64'
      }`}>
        {/* Sidebar */}
        <aside className="h-[calc(100vh-145px)] w-64 bg-white border-r border-gray-200 shadow-xl overflow-y-auto overflow-x-hidden">
          <div className="p-5 space-y-2">
            <div className="mb-6">
              <div className="flex justify-left">
                <Sparkles className="w-3.5 h-3.5 mr-1 mt-.5 mb-2 text-emerald-600"/>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-1 mb-1">Portfolio</h3>
              </div>
              <div className="h-1 w-12 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"></div>
            </div>
            
            <NavLink 
              to="/projects/censusview" 
              className={({ isActive }) => `${buttonClass(isActive)} group`}
            >
              <span className="">
                CensusView
              </span>
              <ChevronRight className="mt-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </NavLink>
            
            <NavLink
              to="/projects/voyage" 
              className={({ isActive }) => `${buttonClass(isActive)} group`}
            >
              <span className="">
                Voyage 
              </span>
              <ChevronRight className="mt-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </NavLink>
            
            <NavLink 
              to="/projects/aichef" 
              className={({ isActive }) => `${buttonClass(isActive)} group`}
            >
              <span className="">
                AI Chef
              </span>
              <ChevronRight className="mt-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </NavLink>
            
            <NavLink
              to="/projects/spotifylab" 
              className={({ isActive }) => `${buttonClass(isActive)} group`}
            >
              <span className="">
                SpotifyLab
              </span>
                <ChevronRight className="mt-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </NavLink>
          </div>
        </aside>

        {/* Toggle Tab */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-8 top-1/2 -translate-y-1/2 w-8 h-16 bg-white border border-l-0 border-gray-200 rounded-r-xl shadow-lg hover:bg-emerald-50 transition-all flex items-center justify-center group"
        >
          {isOpen ? (
            <ChevronLeft size={18} className="text-gray-600 group-hover:text-emerald-600" />
          ) : (
            <ChevronRight size={18} className="text-gray-600 group-hover:text-emerald-600" />
          )}
        </button>
      </div>
      <div className={`hidden md:block transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`} />
    </>
  );
}

export function ProjectCard({ 
  title,
  description, 
  skills, 
  liveUrl, 
  onLearnMore,
  gradient = "from-emerald-400 to-emerald-500",
  color,
  softColor,
  border,
  hover,
  link,
  mobile = false,
  appleLink,
  playLink,
  icon: Icon 
}) {
  
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
      {/* Gradient accent bar */}
      <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>
      
      <div className="p-8 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            )}
            <NavLink
              to={link}
              className={`text-2xl font-bold text-gray-800 ${hover} transition-colors text-left group/title cursor-pointer`}
            >
              {title}
              <ArrowRight className="inline-block w-5 h-5 ml-2 opacity-0 group-hover/title:opacity-100 group-hover/title:translate-x-1 transition-all" />
            </NavLink>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-12 flex-grow">
          {description}
        </p>

        {/* Skills */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-gray-600 tracking-wide mb-8">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span 
                key={idx}
                className={`px-3 py-1 ${softColor} ${color} rounded-lg text-sm font-medium border border-emerald-100`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Actions & Badges – pinned to bottom */}
        <div className="mt-auto">
          {/* Actions */}
          <div className="flex gap-3 pt-4 justify-center border-t border-gray-100">
            <NavLink
              to={link}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 font-semibold rounded-xl transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            >
              Learn More
            </NavLink>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 px-4 py-3 bg-gradient-to-r ${gradient} hover:opacity-90 text-white font-semibold rounded-xl transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center justify-center gap-2`}
            >
              Visit Site
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Mobile App Store Badges – only if mobile=true */}
          {mobile && (appleLink || playLink) && (
            <div className="flex justify-center gap-2 md:gap-6 pt-6 mt-6 border-t border-gray-100">
              {appleLink && (
                <a
                  href={appleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform duration-200 flex justify-center"
                >
                  <img 
                    src="/assets/App Store.svg" 
                    alt="Download on the App Store" 
                    className="h-12 md:h-12 w-auto object-contain"
                  />
                </a>
              )}
              {playLink && (
                <a
                  href={playLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform duration-200 flex justify-center"
                >
                  <img 
                    src="/assets/Google Play Store.png" 
                    alt="Get it on Google Play" 
                    className="h-12 md:h-12 w-auto object-contain"
                  />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className={`absolute inset-0 border-2 ${border} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>
    </div>
  );
}

//all the projects use this component

export function ProjectPage({
  title,
  tagline,
  description,
  fullDescription,
  features,
  techStack,
  challenges,
  videoFile,
  thumbnail,
  liveUrl,
  githubUrl,
  appleLink,
  playLink,
  gradient,
  color,
  softColor,
  border,
  icon: Icon,
  screenshots = []
}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen py-12 px-4 md:px-8">
      <div className="h-[40px] md:h-[120px]"></div>
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-4 bg-gradient-to-br ${gradient} rounded-2xl shadow-lg mb-8`}>
              <Icon className="w-14 h-14 text-white" />
            </div>
            <div>
              <h1 className="text-3xl ml-2 text-left md:text-5xl font-bold text-gray-800">
                {title}
              </h1>
              <p className={`text-lg ml-2 text-left mt-4 mb-8 md:text-xl ${color} font-medium mt-1`}>
                {tagline}
              </p>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Video Demo Section */}
        <div className={`bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border-2 ${border}`}>
          <div className="relative h-[300px] md:h-[500px]">
            {!isVideoPlaying ? (
              <>
                <img
                  src={thumbnail}
                  alt={`${title} preview`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="absolute inset-0 bg-gradient-to-br ${gradient}"></div>`;
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-full p-8 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-xl"
                  >
                    <Play className="w-16 h-16 text-white fill-white drop-shadow-lg" />
                  </button>
                </div>
              </>
            ) : (
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                src={`/assets/${videoFile}`}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>

        {/* Quick NavLinks */}
        <div className="flex flex-wrap gap-4 mb-4 md:mb-8 justify-center">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all`}
          >
            <ExternalLink className="w-5 h-5" />
            Visit Live Site
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-900 transition-all"
          >
            <Github className="w-5 h-5" />
            View Code
          </a>
        </div>

        {/* App Store Badges */}
        {(appleLink || playLink) && (
          <div className="flex flex-wrap gap-4 justify-center mb-12 pb-12 border-b border-gray-200">
            {appleLink && (
              <a
                href={appleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-transform"
              >
                <img 
                  src="/assets/App Store.svg" 
                  alt="Download on the App Store" 
                  className="h-12 md:h-12 w-auto"
                />
              </a>
            )}
            {playLink && (
              <a
                href={playLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-transform"
              >
                <img 
                  src="/assets/Google Play Store.png" 
                  alt="Get it on Google Play" 
                  className="h-12 md:h-12 w-auto"
                />
              </a>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Full Description */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 ${softColor} rounded-lg`}>
                <Code2 className={`w-6 h-6 ${color}`} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">About the Project</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {fullDescription.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 ${softColor} rounded-lg`}>
                <Sparkles className={`w-6 h-6 ${color}`} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Key Features</h2>
            </div>
            <ul className="space-y-3">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ChevronRight className={`w-5 h-5 ${color} flex-shrink-0 mt-0.5`} />
                  <span className="text-gray-700 text-left">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-2 ${softColor} rounded-lg`}>
              <Award className={`w-6 h-6 ${color}`} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Technologies Used</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className={`px-4 py-2 ${softColor} ${color} rounded-xl text-sm font-medium border ${border}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        {challenges && challenges.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 ${softColor} rounded-lg`}>
                <Rocket className={`w-6 h-6 ${color}`} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Challenges & Solutions</h2>
            </div>
            <div className="space-y-6">
              {challenges.map((challenge, idx) => (
                <div key={idx} className={`border-l-4 ${border} pl-6 py-2`}>
                  <h3 className={`font-semibold ${color} mb-2`}>{challenge.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{challenge.solution}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Screenshots */}
        {screenshots && screenshots.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Screenshots</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {screenshots.map((screenshot, idx) => (
                <img
                  key={idx}
                  src={screenshot}
                  alt={`${title} screenshot ${idx + 1}`}
                  className="rounded-xl shadow-md border border-gray-200"
                />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className={`bg-gradient-to-r ${gradient} rounded-2xl shadow-xl p-8 md:p-12 text-center text-white`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want to learn more?
          </h2>
          <p className="text-white/90 mb-6 text-lg">
            Check out the live site or view the source code on GitHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-800 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Site
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black transition-all shadow-lg"
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-center md:text-left">
            <p className="text-xs md:text-sm text-gray-600 font-medium">
              Mike Weaver Development Portfolio
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}