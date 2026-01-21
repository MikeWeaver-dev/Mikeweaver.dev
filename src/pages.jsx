import React, { useState } from "react";
import { ProjectCard, ProjectPage } from './components';
import { ChevronDown, ChevronRight, ExternalLink, Play, Download, Code2, Briefcase, GraduationCap, Award, Mail, MapPin, Calendar, Github, Linkedin, Phone, Rocket, Sparkles, Plane, Music, ChefHat  } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import { NavLink} from "react-router-dom";

//I tried to use components here for re-useability. this is mostly props i pass to a component
export function Projects() {
  const projects = [
    {
      title: "CensusView",
      description: "Interactive data visualization platform that maps millions of Census data points to reveal demographic and housing trends across state, county, and neighborhood levels. Utilizes the Census API and sophisticated data manipulation to offer dynamic filters, point-in-time, and change-over-time data.",
      skills: ["R", "R-Shiny", "GIS Mapping", "Data Visualization", "Census API", "Data analysis"],
      liveUrl: "https://Mikeweaver.dev/CensusView",
      page: "CensusView",
      link: "/projects/censusview",
      gradient: "from-green-300 to-green-400",
      color: "text-green-400",
      softColor: "bg-green-50",
      border: "border-green-400",
      hover: "hover:text-green-400",
      mobile: false,
      appleLink: "https://Mikeweaver.dev/CensusView",
      playLink: "https://Mikeweaver.dev/CensusView",
      icon: MapPin
    },
    {
      title: "Voyage",
      description: "Full-service social media platform designed for travelers to share experiences. Features real-time updates, image uploads, third-party server and database hosting, authentication, profiles, likes, posts, sub-posts and more.",
      skills: ["React", "Firebase", "Realtime Database", "Authentication", "Cloud Storage", "Responsive Design"],
      liveUrl: "https://voyage.Mikeweaver.dev/",
      page: "Voyage",
      link: "/projects/voyage",
      gradient: "from-red-300 to-red-400",
      color: "text-red-400",
      softColor: "bg-red-50",
      border: "border-red-400",
      hover: "hover:text-red-400",
      mobile: false,
      appleLink: "https://voyage.Mikeweaver.dev/",
      playLink: "https://voyage.Mikeweaver.dev/",
      icon: Plane
    },
    {
      title: "AI Chef",
      description: "AI powered recipe generator that uses GPT-4 to create personalized meal suggestions based on ingredients in the users pantry. Features a stunning UI and optimization for mobile and web, with availability on the Apple and Google Play store.",
      skills: ["React Native", "Expo", "OpenAI API", "Ai Integration", "Firebase", "NativeWind", "Mobile Development"],
      liveUrl: "https://aichef.Mikeweaver.dev/",
      page: "AIChef",
      link: "/projects/aichef",
      gradient: "from-orange-300 to-orange-400",
      color: "text-orange-400",
      softColor: "bg-orange-50",
      border: "border-orange-400",
      hover: "hover:text-orange-400",
      mobile: true,
      appleLink: "https://apps.apple.com/us/app/ai-chef-mobile/id6757723555",
      playLink: "https://aichef.Mikeweaver.dev/",
      icon: ChefHat
    },
    {
      title: "SpotifyLab",
      description: "Playlist generator for iOS, Android, and web that analyzes your Spotify listening history to create perfectly curated playlists. Features AI integration, several APIs working in tandem, a third-party hosted backend, and a dynamic UI optimized for mobile and web.",
      skills: ["React Native", "Spotify API", "Mobile Development", "Expo", "OpenAI API", "AI Integration", "UI/UX"],
      liveUrl: "https://Mikeweaver.dev/SpotifyLab",
      page: "SpotifyLab",
      link: "/projects/spotifylab",
      gradient: "from-purple-300 to-purple-400",
      color: "text-purple-400",
      softColor: "bg-purple-50",
      border: "border-purple-400",
      hover: "hover:text-purple-400",
      mobile: true,
      appleLink: "https://Mikeweaver.dev/SpotifyLab",
      playLink: "https://Mikeweaver.dev/SpotifyLab",
      icon: Music
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 md:px-8">
      <div className="h-[40px] md:h-[120px]"></div>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 md:mb-30 mt-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-emerald-600 mr-0 ml-0 md:mr-2 md:ml-2" />
            <h1 className="text-4xl mb-2 md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-emerald-700 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <Sparkles className="w-8 h-8 text-emerald-600 mr-0 ml-0 md:mr-2 md:ml-2" />
          </div>
          <p className="text-xl bg-gradient-to-r from-gray-800 to-emerald-700 bg-clip-text text-transparent max-w-2xl mx-auto leading-relaxed ">
            A showcase of my full-stack applications built with modern technologies. 
            Click on any project to learn more about the development process.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 md:mb-16">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              skills={project.skills}
              liveUrl={project.liveUrl}
              link={project.link}
              gradient={project.gradient}
              color={project.color}
              softColor={project.softColor}
              border={project.border}
              hover={project.hover}
              mobile={project.mobile}
              appleLink={project.appleLink}
              playLink={project.playLink}
              icon={project.icon}
            />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Want to see the code?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All of my projects are open source and available on GitHub. Feel free to 
              explore the code, fork the repositories, or reach out if you have questions!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/MikeWeaver-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-xl hover:from-gray-800 hover:to-gray-900 transition-all shadow-lg"
              >
                View on GitHub
              </a>
              <NavLink
                to="/about"
                className="px-6 py-3 bg-gradient-to-r from-emerald-300 to-emerald-400 text-white font-semibold rounded-xl hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg"
              >
                Learn More About Me
              </NavLink>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-1">4</div>
            <div className="text-sm text-green-700 font-medium">Major Projects</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
            <div className="text-sm text-blue-700 font-medium">Languages, Frameworks, & Tools</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
            <div className="text-sm text-orange-700 font-medium">Responsive</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center border border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-1">Open</div>
            <div className="text-sm text-purple-700 font-medium">Source</div>
          </div>
        </div>

      </div>
    </div>
  );
}


export function About() {

  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);
  const [isJourneyExpanded, setIsJourneyExpanded] = useState(false);

  return (
    <div className="min-h-screen py-12 px-4 md:px-8">
      <div className="h-[40px] md:h-[120px]"></div>
      <div className="max-w-4xl mx-auto">
        
        {/* Header with resume added in*/}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <h1 className="text-4xl md:text-4xl font-bold text-gray-800 mb-2">About Me</h1>
            <p className="text-gray-600">Aspiring Software Developer</p>
          </div>
          <a 
            href="/assets/Michael Weaver Resume.pdf" 
            download
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        {/* I added a bio here*/}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Code2 className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Bio</h2>
          </div>
          <h2 className="text-md font-bold mb-8 mt-4 text-gray-600">
            Aspiring software developer who transitioned from consulting, analytics, and process automation. A fast learner and passionate about problem solving, coding, and tech.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I love coding and am hoping to make a career out of it. My previous work includes process automation, data analytics, and GIS visualization. More recently, I've developed a portfolio of full stack web and mobile applications using React, Expo, TailWind CSS, FireBase, Javascript, and Python to help expand my coding knowledge and become more marketable.
          </p>
        </div>

        {/* My contact info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>Washington, DC</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>mikeweaverg@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>336-937-5257</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 break-words text-left">
              <Github className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <a 
                href="https://github.com/MikeWeaver-dev" 
                className="text-emerald-600 hover:underline break-all"
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-700 break-words text-left">
              <Linkedin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <a 
                href="https://www.linkedin.com/in/mikeweaverg/" 
                className="text-emerald-600 hover:underline break-all"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Linkedin Profile
              </a>
            </div>
          </div>
        </div>

        {/* Skills section with different formatting for mobile */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center justify-left md:justify-start gap-3 mb-8">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Award className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold text-gray-800 mb-4 md:ml-2 text-center md:text-left">Frontend</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">React</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">React Native</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">JavaScript</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Tailwind CSS</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">HTML/CSS</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold text-gray-800 mb-4 md:ml-2 text-center md:text-left">Backend & Tools</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Node.js</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Express</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Firebase</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Git</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">API Integration</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold text-gray-800 mb-4 md:ml-2 text-center md:text-left">Data</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">GIS</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Data Analytics</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Python</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">R</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold text-gray-800 mb-4 md:ml-2 text-center md:text-left">Mobile</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Expo</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">iOS Development</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Android Development</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Nativewind</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience section got too big so i made it collapse if needed */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Briefcase className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
          </div>

          <div className={`relative overflow-hidden transition-all duration-500 ${isExperienceExpanded ? 'max-h-none' : 'max-h-96'}`}>
            {/* Fade overlay when collapsed */}
            {!isExperienceExpanded && (
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}

            <div className="space-y-6">
              <div className="border-l-4 border-emerald-400 pl-6 py-2">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                  <h3 className="text-lg font-semibold text-gray-800">MikeWeaver.dev portfolio</h3>
                  <span className="hidden md:flex text-sm text-gray-500 items-center gap-1">
                    <Calendar size={14} />
                    January 2025 - Present
                  </span>
                </div>
                <NavLink
                  to="/projects/censusview"
                  className="inline-block text-md font-semibold text-emerald-600 hover:text-emerald-800 hover:underline cursor-pointer transition-all duration-200 mb-2 focus:outline-none focus:underline"
                >
                  CensusView
                </NavLink>
                <p className="text-gray-700 leading-relaxed mb-8">
                  CensusView is an interactive data tool that leverages Census API data to track and visualize millions of data points. The app is intuitive and simple for users, but offers complex data handling and geospatial manipulation behind the scenes.
                </p>
                <NavLink
                  to="/projects/voyage"
                  className="inline-block text-md font-semibold text-emerald-600 hover:text-emerald-800 hover:underline cursor-pointer transition-all duration-200 mb-2 focus:outline-none focus:underline"
                >
                  Voyage
                </NavLink>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Voyage is a full-scale social media website geared towards travel. Users can create a profile, make posts, follow others, and like others' activity. Built using Firebase and offering dynamic updates and a robust third-party database, Voyage is ready to scale for an indefinite number of users and offers professional authentication and server-side capacity.
                </p>
                <NavLink
                  to="/projects/aichef"
                  className="inline-block text-md font-semibold text-emerald-600 hover:text-emerald-800 hover:underline cursor-pointer transition-all duration-200 mb-2 focus:outline-none focus:underline"
                >
                  AI Chef
                </NavLink>
                <p className="text-gray-700 leading-relaxed mb-8">
                  AI Chef is a GPT-4 powered recipe generator designed to inspire new meals based on foods users have on-hand. The app is optimized for web and mobile and available on both the App Store and Google Play Store. The app utilizes persistent data, Firebase authentication, Tailwind CSS, and mobile development frameworks to deliver something polished and professional across devices.
                </p>
                <NavLink
                  to="/projects/spotifylab"
                  className="inline-block text-md font-semibold text-emerald-600 hover:text-emerald-800 hover:underline cursor-pointer transition-all duration-200 mb-2 focus:outline-none focus:underline"
                >
                  SpotifyLab
                </NavLink>
                <p className="text-gray-700 leading-relaxed mb-8">
                  SpotifyLab is a playlist generator for iOS, Android, and web that analyzes your Spotify listening history to create perfectly curated playlists. The app features AI integration, several APIs working in tandem, a third-party hosted backend, and a dynamic UI optimized for mobile and web.
                </p>
              </div>

              <div className="border-l-4 border-emerald-400 pl-6 py-2 mt-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                  <h3 className="text-lg font-semibold text-gray-800">RCLCO: Business Intelligence & Process Automation</h3>
                  <span className="hidden md:flex text-sm text-gray-500 items-center gap-1">
                    <Calendar size={14} />
                    2020 - 2025
                  </span>
                </div>
                <p className="text-emerald-600 font-medium mb-2">Geospatial Data Mapping</p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  I often mapped large demographic datasets, creating visualization tools for internal and client use. One tool - the ULI Home Attainability Interactive Map - has been accessed by thousands of users.
                </p>
                <p className="text-emerald-600 font-medium mb-2">Screen Scraper</p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  I built a screen scraping tool that integrated directly within the company workflow, allowing my colleagues to automatically scrape rent data from several websites, enabling updated and automatic data.
                </p>
                <p className="text-emerald-600 font-medium mb-2">Interactive Client Tools</p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  I built interactive investment tools that allowed users to dynamically input investment criteria. The tool was hosted on the web and helped real estate professionals make updated and informed decisions about future development.
                </p>
                <p className="text-emerald-600 font-medium mb-2">Bespoke VBA Add-Ons</p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  I developed a suite of VBA add-ons for the broader company which automated several tasks, including fully automating several standard PowerPoint slides. The total time saved was in excess of 10 hours per project.
                </p>
              </div>

              <div className="border-l-4 border-emerald-400 pl-6 py-2 mt-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                  <h3 className="text-lg font-semibold text-gray-800">RCLCO: Real Estate Consulting & Data Analytics</h3>
                  <span className="hidden md:flex text-sm text-gray-500 items-center gap-1">
                    <Calendar size={14} />
                    2020 - 2025
                  </span>
                </div>
                <p className="text-emerald-600 font-medium mb-2">Senior Associate</p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  During my time as Senior Associate, I led teams through complex market analysis for mixed-use development projects, delivered fiscal and economic impact studies directly to jurisdiction heads, and delivered bespoke pricing and tax analysis models to my clients.
                </p>
                <p className="text-emerald-600 font-medium mb-2">Associate</p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  As an associate I delivered several studies for large sports-anchored developments, helped train junior team members, and routinely engineered complex fiscal impact models from scratch.
                </p>
                <p className="text-emerald-600 font-medium mb-2">Analyst</p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  As an analyst I specialized in residential feasibility, build-to-rent homes, and market conditions in the southern US.
                </p>
              </div>
            </div>
          </div>

          {/* Expand Button for Experience */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsExperienceExpanded(!isExperienceExpanded)}
              className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors flex items-center gap-2 mx-auto"
            >
              {isExperienceExpanded ? 'Show less' : 'Read more'}
              <ChevronDown className={`w-4 h-4 transition-transform ${isExperienceExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* My journey is a bit casual but whatever*/}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Rocket className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">My Journey</h2>
          </div>

          <div className={`relative overflow-hidden transition-all duration-500 ${isJourneyExpanded ? 'max-h-none' : 'max-h-96'}`}>
            {/* Fade overlay when collapsed */}
            {!isJourneyExpanded && (
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}

            <div className="space-y-6">
              <div className="border-l-4 border-emerald-400 pl-6 py-2 mt-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                  <h3 className="text-lg font-semibold text-gray-800">A candid look at my story and how I went from consultant to aspiring software engineer</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-8">
                  I first fell in love with coding while at an internship for Price Waterhouse (PwC). I got a job in their finance department thinking I would be crunching numbers or doing important finance calculations. Instead, my manager - a huge tech nerd - challenged me to automate some of the workflow for the accountants. I spent most of my days coding in VBA, making macros and add-ons to help them. I absolutely loved it!
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Following PwC, I started my senior year at UNC, where I was already committed to a dual major in economics and business. I decided to stay the course. I went on to work at a real estate consulting firm doing data analytics. I mostly used Excel, but also branched into more complex data processing software (R, Tableau), and sometimes made interactive tools for clients. I joined the company’s Business Intelligence team and developed several process automation software for myself and my colleagues.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  I quickly realized I prefer coding to traditional consulting or data work. I was hooked, sometimes forgetting to eat and staying late just to play with my code.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Despite 5 years at RCLCO and two promotions, I felt it was time to switch to full time software development. I knew it would be tricky, having no formal training and entering in the age of AI, but it just felt like the right life-choice. So here we are!
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  I made my software portfolio and all the related apps in an effort to expand my coding knowledge and become more marketable. I had a blast making it and I learned a ton!
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  If you're here reading this you may be a coder yourself. Perhaps you're even a recruiter looking to hire me! I know my coding journey isn't the most traditional, but I thank you for getting this far in my story and taking an interest in my work. I love the challenge and creative process of coding and hope one day to become a professional software developer!!
                </p>
              </div>
            </div>
          </div>

          {/* Expand button*/}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsJourneyExpanded(!isJourneyExpanded)}
              className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors flex items-center gap-2 mx-auto"
            >
              {isJourneyExpanded ? 'Show less' : 'Read more'}
              <ChevronDown className={`w-4 h-4 transition-transform ${isJourneyExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <GraduationCap className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Education</h2>
          </div>

          <div className="border-l-4 border-emerald-400 pl-6 py-2">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-700 mb-5">University of North Carolina at Chapel Hill</h3>
              <span className="hidden md:flex text-sm text-gray-500 items-center gap-1">
                <Calendar size={14} />
                2020
              </span>
            </div>
            <p className="text-emerald-600 font-medium mb-2">Dual Major in Business & Economics</p>
            <p className="text-gray-700 leading-relaxed">
              Graduated from UNC Honors College  |  GPA: 3.8
            </p>
          </div>
        </div>

        {/* Feels like a natural end */}
        <div className="bg-gradient-to-r from-emerald-300 to-emerald-400 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Thanks for viewing my portfolio!</h2>
          <p className="text-emerald-50 mb-6 text-lg">
            Interested in connecting? Send me an email!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:mikeweaverg@gmail.com"
              className="px-6 py-3 bg-white text-emerald-400 font-semibold rounded-xl hover:bg-emerald-50 transition-all shadow-lg"
            >
              Send me an email
            </a>
            <a 
              href="/assets/Michael Weaver Resume.pdf" 
              download
              className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-800 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

//I probably should have put the demo card function in the components page but I didn't feel like passing a million props again
export function Demos() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [expandedSkills, setExpandedSkills] = useState({});

  const demos = [
    {
      title: "CensusView",
      description: "Interactive data visualization platform that maps millions of Census data points to reveal demographic and housing trends across state, county, and neighborhood levels.",
      skills: ["R", "R-Shiny", "GIS Mapping", "Data Visualization", "Census API", "Data Analysis"],
      videoTags: ["Data Visualization", "Census API"],
      liveUrl: "https://Mikeweaver.dev/CensusView",
      githubUrl: "https://github.com/MikeWeaver-dev/CensusView",
      videoFile: "CensusView.mp4",
      thumbnail: "/assets/thumbnails/CensusView Thumbnail.png",
      gradient: "from-green-400 to-emerald-500",
      accentColor: "bg-green-500",
      textColor: "text-green-600",
      borderColor: "border-green-400",
      hoverGlow: "group-hover:shadow-green-500/20",
      icon: MapPin,
      page: "/projects/censusview"
    },
    {
      title: "Voyage",
      description: "Full-service social media platform designed for travelers to share experiences. Features real-time updates, image uploads, authentication, and more.",
      skills: ["React", "Firebase", "Realtime Database", "Authentication", "Cloud Storage", "Responsive Design"],
      videoTags: ["CRUD Operations", "Firebase"],
      liveUrl: "https://voyage.Mikeweaver.dev/",
      githubUrl: "https://github.com/MikeWeaver-dev/Voyage",
      videoFile: "Voyage.mp4",
      thumbnail: "/assets/thumbnails/Voyage Thumbnail.png",
      gradient: "from-red-400 to-pink-500",
      accentColor: "bg-red-500",
      textColor: "text-red-600",
      borderColor: "border-red-400",
      hoverGlow: "group-hover:shadow-red-500/20",
      icon: Plane,
      page: "/projects/voyage"
    },
    {
      title: "AI Chef",
      description: "AI powered recipe generator using GPT-4 to create personalized meal suggestions. Available on iOS, Android, and web.",
      skills: ["React Native", "Expo", "OpenAI API", "AI Integration", "Firebase", "Mobile Development"],
      videoTags: ["AI Integration", "Mobile"],
      liveUrl: "https://aichef.Mikeweaver.dev/",
      githubUrl: "https://github.com/MikeWeaver-dev/AIChef",
      videoFile: "AIChef.mp4",
      thumbnail: "/assets/thumbnails/AI Chef Thumbnail.png",
      gradient: "from-orange-400 to-red-500",
      accentColor: "bg-orange-500",
      textColor: "text-orange-600",
      borderColor: "border-orange-400",
      hoverGlow: "group-hover:shadow-orange-500/20",
      icon: ChefHat,
      page: "/projects/aichef"
    },
    {
      title: "SpotifyLab",
      description: "Playlist generator that analyzes your Spotify listening history to create perfectly curated playlists with AI integration.",
      skills: ["React Native", "Spotify API", "OpenAI API", "AI Integration", "Mobile Development"],
      videoTags: ["Spotify API", "Mobile"],
      liveUrl: "https://Mikeweaver.dev/SpotifyLab",
      githubUrl: "https://github.com/MikeWeaver-dev",
      videoFile: "SpotifyLab.mp4",
      thumbnail: "/assets/thumbnails/SpotifyLab Thumbnail.png",
      gradient: "from-purple-400 to-purple-600",
      accentColor: "bg-purple-500",
      textColor: "text-purple-600",
      borderColor: "border-purple-400",
      hoverGlow: "group-hover:shadow-purple-500/20",
      icon: Music,
      page: "/projects/spotifyLab"
    }
  ];

  const DemoCard = ({ demo, index }) => {
    const Icon = demo.icon;
    const isPlaying = activeVideo === index;
    const isExpanded = expandedSkills[index];

    const toggleSkills = (e) => {
      e.stopPropagation();
      setExpandedSkills(prev => ({ ...prev, [index]: !prev[index] }));
      setActiveVideo(null);
    };

    return (
      <div className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 ${demo.hoverGlow} hover:shadow-2xl`}>
        {/* Video Container */}
        <div className="relative aspect-video overflow-hidden bg-gray-900">
          {!isPlaying ? (
            <>
              {/* Thumbnail was tricky*/}
              <img
                src={demo.thumbnail}
                alt={demo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient overlay to try and get cool format on vid*/}
              <div className={`absolute inset-0 bg-gradient-to-br ${demo.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Play button */}
              <button
                onClick={() => setActiveVideo(index)}
                className="absolute inset-0 flex items-center justify-center z-10 group/play"
              >
                <div className="relative">
                  {/* Pulse ring from ChatGPT*/}
                  <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
                  {/* Button */}
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-full p-6 shadow-2xl transition-all duration-300 group-hover/play:scale-110 group-hover/play:bg-white">
                    <Play className="w-10 h-10 text-gray-900 fill-gray-900" />
                  </div>
                </div>
              </button>

              {/* Video tags subtle on top left*/}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                {demo.videoTags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              src={`/assets/${demo.videoFile}`}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Icon & Title */}
          <div className="flex items-start gap-4 mb-4">
            <div className={`p-3 bg-gradient-to-br ${demo.gradient} rounded-xl shadow-lg flex-shrink-0`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 mt-2">
              <NavLink
                to= {demo.page}
                className={`text-2xl font-bold ${demo.textColor} mt-2 mr-4 hover:underline underline-offset-4 text-left transition-all group/title`}
              >
                {demo.title}
                <ChevronRight className="inline-block w-6 h-6 ml-1 opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all" />
              </NavLink>
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 flex items-start hidden md:block">
            <p className="text-gray-600 leading-relaxed">
              {demo.description}
            </p>
          </div>

          {/* More tags i guess */}
          <div className="mb-8 mt-6">
            <div className="flex flex-wrap gap-2">
              {demo.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium transition-all border-1 border-gray-200 ${
                    !isExpanded && idx >= 3 ? 'hidden' : ''
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
            {demo.skills.length > 3 && (
              <button
                onClick={toggleSkills}
                className="mt-2 text-xs text-gray-500 hover:text-gray-700 font-medium flex items-center gap-1 transition-colors"
              >
                {isExpanded ? 'Show less' : `+${demo.skills.length - 3} more`}
                <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            )}
          </div>

          {/* Button */}
          <div className="flex gap-3">
            <a
              href={demo.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r ${demo.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Live</span>
            </a>
            <a
              href={demo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-5 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all"
            >
              <Github className="w-5 h-5 text-gray-700" />
            </a>
          </div>
        </div>

        {/* Accent line at bottom has a glitch one day I'll fix I don't think anyone will notice for now */}
        <div className={`h-1 bg-gradient-to-r ${demo.gradient}`}></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <div className="h-[40px] md:h-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
         {/* Header */}
        <div className="text-center mb-20 md:mb-30 mt-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-emerald-600 mr-0 ml-0 md:mr-2 md:ml-2" />
            <h1 className="text-4xl mb-2 md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-emerald-700 bg-clip-text text-transparent">
              Project Demos
            </h1>
            <Sparkles className="w-8 h-8 text-emerald-600 mr-0 ml-0 md:mr-2 md:ml-2" />
          </div>
          <p className="text-xl bg-gradient-to-r from-gray-800 to-emerald-700 bg-clip-text text-transparent max-w-2xl mx-auto leading-relaxed ">
            Watch videos of my projects here! Click on any title to dive deeper into the application, or visit my Github to look at the source code
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {demos.map((demo, idx) => (
            <DemoCard key={idx} demo={demo} index={idx} />
          ))}
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-700 mb-8 text-center">
            Built With Modern Tech
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { emoji: "⚛️", name: "React", gradient: "from-purple-400 to-purple-500" },
              { emoji: "🔥", name: "Firebase", gradient: "from-orange-400 to-red-500" },
              { emoji: "🤖", name: "AI APIs", gradient: "from-red-400 to-pink-500" },
              { emoji: "📱", name: "React Native", gradient: "from-green-400 to-emerald-500" }
            ].map((tech, idx) => (
              <div
                key={idx}
                className={`relative group text-center p-6 rounded-2xl bg-gradient-to-br ${tech.gradient} overflow-hidden transition-transform hover:scale-105`}
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-3">{tech.emoji}</div>
                  <div className="font-bold text-white text-md">{tech.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* End */}
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 rounded-3xl shadow-2xl p-12 text-center text-white">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-xl md:text-3xl font-bold mb-4">
              Want to See More?
            </h2>
            <p className="text-emerald-50 text-md mb-8 max-w-2xl mx-auto">
              All projects are open source. Explore the code, see how they work, or get in touch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/MikeWeaver-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              <a
                href="mailto:mikeweaverg@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Get In Touch
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//////////////////////////////////////////////////////////

//these all just call on a component
export function CensusView() {
  return (
    <ProjectPage
      title="CensusView"
      tagline="Interactive Census Data Visualization"
      description="A powerful data visualization platform that maps millions of Census data points to reveal demographic and housing trends across the United States."
      fullDescription={[
        "CensusView transforms complex Census Bureau data into intuitive, interactive visualizations. Users can explore demographic trends at state, county, and neighborhood levels with dynamic filtering and time-based analysis.",
        "The platform integrates directly with the Census API, processing and displaying millions of data points in real-time. It features sophisticated geospatial mapping and allows users to track changes over time or view point-in-time snapshots.",
        "Built with R and Shiny, CensusView demonstrates advanced data manipulation and visualization techniques while maintaining an intuitive user interface."
      ]}
      features={[
        "Real-time Census API integration",
        "Multi-level geographic visualization (state, county, neighborhood)",
        "Dynamic filtering and data manipulation",
        "Point-in-time and change-over-time analysis",
        "Interactive GIS mapping",
        "Responsive design for desktop and mobile"
      ]}
      techStack={["R", "R-Shiny", "GIS Mapping", "Data Visualization", "Census API", "Data Analysis"]}
      challenges={[
        {
          title: "Handling Large Datasets",
          solution: "Implemented efficient data caching and loading to handle millions of Census data points without performance issues."
        },
        {
          title: "Complex Geospatial Rendering",
          solution: "Optimized map rendering with Leaflet and TidyCensus and implemented cool zoom features to optimize user UI/UX"
        }
      ]}
      videoFile="CensusView.mp4"
      thumbnail="/assets/thumbnails/CensusView Thumbnail.png"
      liveUrl="https://Mikeweaver.dev/CensusView"
      githubUrl="https://github.com/MikeWeaver-dev/CensusView"
      gradient="from-green-300 to-green-400"
      color="text-green-600"
      softColor="bg-green-50"
      border="border-green-400"
      icon={MapPin}
    />
  );
}

export function Voyage() {
  return (
    <ProjectPage
      title="Voyage"
      tagline="Social Media for Travelers"
      description="A full-featured social media platform designed with scalability and sophisticated server interactions."
      fullDescription={[
        "Voyage is a social platform for travelers. Users can create profiles, share travel stories with photos, follow others, and like posts",
        "The platform is built on Firebase, providing real-time updates, professional authentication, and scalable cloud infrastructure. Every interaction feels instant and smooth, from uploading photos to seeing new posts from friends.",
        "With features like sub-posts, cloud storage for images, and real-time database synchronization, Voyage offers a complete social media experience."
      ]}
      features={[
        "User authentication and profile management",
        "Real-time post updates and notifications",
        "Image upload with cloud storage",
        "Likes, comments, and nested sub-posts",
        "Follow/unfollow system",
        "Responsive design for all devices",
        "Scalable Firebase backend"
      ]}
      techStack={["React", "Firebase", "Realtime Database", "Authentication", "Cloud Storage", "Responsive Design", "CRUD Operations"]}
      challenges={[
        {
          title: "Real-time Data Synchronization",
          solution: "Leveraged Firebase Realtime Database to ensure all users see updates instantly without manual refreshing."
        },
        {
          title: "Scalability",
          solution: "Implemented Firebase dynamic servers which allocate resources and handle CRUD operations appropriately to allow for indefinite scalability."
        }
      ]}
      videoFile="Voyage.mp4"
      thumbnail="/assets/thumbnails/Voyage Thumbnail.png"
      liveUrl="https://voyage.Mikeweaver.dev/"
      githubUrl="https://github.com/MikeWeaver-dev/Voyage"
      gradient="from-red-300 to-red-400"
      color="text-red-600"
      softColor="bg-red-50"
      border="border-red-400"
      icon={Plane}
    />
  );
}

export function AIChef() {
  return (
    <ProjectPage
      title="AI Chef"
      tagline="Your Personal AI Recipe Generator"
      description="An intelligent recipe generator powered by GPT-4 that creates personalized meal suggestions based on ingredients you already have in your pantry."
      fullDescription={[
        "AI Chef fascilitates meal planning by using artificial intelligence to suggest recipes based on what you have on hand. Simply input your available ingredients, and GPT-4 generates creative, customized recipes just for you.",
        "The app features a professional interface optimized for both web and mobile devices. It's available on the Apple App Store and Google Play Store",
        "Built with React Native and Expo, AI Chef demonstrates seamless AI integration, persistent data storage, and professional mobile development practices across platforms."
      ]}
      features={[
        "GPT-4 powered recipe generation",
        "Pantry ingredient tracking",
        "Personalized meal suggestions",
        "Cross-platform (iOS, Android, Web)",
        "Firebase authentication & login (web)",
        "Beautiful, intuitive UI",
        "Offline recipe access (mobile)",
        "CRUD operations and data hosted on third-party server (web)"
      ]}
      techStack={["React Native", "Expo", "OpenAI API", "AI Integration", "Firebase", "NativeWind", "Mobile Development", "UI/UX"]}
      challenges={[
        {
          title: "Cross-Platform Performance",
          solution: "Built using industry-standard Expo, React and React Native to work seemlessly across platforms."
        },
        {
          title: "AI Response Consistency",
          solution: "Crafted detailed prompts and implemented response validation to ensure GPT-4 generates properly formatted, practical recipes."
        }
      ]}
      videoFile="AIChef.mp4"
      thumbnail="/assets/thumbnails/AI Chef Thumbnail.png"
      liveUrl="https://aichef.Mikeweaver.dev/"
      githubUrl="https://github.com/MikeWeaver-dev/AIChef"
      appleLink="https://apps.apple.com/us/app/ai-chef-mobile/id6757723555"
      playLink="https://aichef.Mikeweaver.dev/"
      gradient="from-orange-300 to-orange-400"
      color="text-orange-600"
      softColor="bg-orange-50"
      border="border-orange-400"
      icon={ChefHat}
    />
  );
}

export function SpotifyLab(){
  return(
    <>
      <div className="h-[200px] md:h-[300px]"></div>
      <p className ="font-semibold mb-8 text-xl">
        🚧🚧🚧 Spotify put their API and Spotify Developer accounts on hold on January 5th 2026. Once the connection is back up you will be able to access SpotifyLab. Sorry for the inconvenience! 🚧🚧🚧
      </p>
      <h1 className ="text-lg"> 
        Check back soon!
      </h1>
      <div className="h-[1300px] md:h-[400px]"></div>
    </>
  )
}

export function CensusViewRouting(){
  return(
    <>
      <div className="h-[200px] md:h-[300px]"></div>
      <p className ="font-semibold mb-8 text-xl">
        🚧🚧🚧 CensusView is under construction and will be delivered January 15th 2026. 🚧🚧🚧
      </p>
      <h1 className ="text-lg"> 
        Check back soon!
      </h1>
      <div className="h-[1300px] md:h-[400px]"></div>
    </>
  )
}

export function VoyageRouting(){
  return(
    <>
      <div className="h-[200px] md:h-[300px]"></div>
      <p className ="font-semibold mb-8 text-xl">
        🚧🚧🚧 Voyage is under construction and will be delivered January 15th 2026. 🚧🚧🚧
      </p>
      <h1 className ="text-lg"> 
        Check back soon!
      </h1>
      <div className="h-[1300px] md:h-[400px]"></div>
    </>
  )
}

export function AIChefRouting(){
  return(
    <>
      <div className="h-[200px] md:h-[300px]"></div>
      <p className ="font-semibold mb-8 text-xl">
        🚧🚧🚧 Chef AI is under construction and will be delivered January 10th 2026. 🚧🚧🚧
      </p>
      <h1 className ="text-lg"> 
        Check back soon!
      </h1>
      <div className="h-[1300px] md:h-[400px]"></div>
    </>
  )
}

export function PrivacyAIChefIOS(){
  return(
    <>
      <div className="h-[100px] md:h-[150px]"></div>

      <div className="shadow-md shadow-gray-500 rounded-xl px-4 mt-4 border border-gray-100">
        <p className="font-bold mb-8 mt-4 text-xl text-green-500">
          AI Chef iOS App – Privacy Policy
        </p>

        <h1 className="text-md mb-6">
          This Privacy Policy applies specifically to the AI Chef iOS application.
          Your privacy is important, and this app is designed to minimize data
          collection while providing helpful cooking assistance.
        </h1>

        <div className="border border-gray-100 shadow-xl rounded-xl ml-0 mr-0 mt-8 mb-4">
          <div className="border-l-4 border-green-500 ml-4">

            <h1 className="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12">
              Information We Collect
              <ol className="font-normal mt-4">
                <li>- Ingredients, meal preferences, and prompts entered by the user</li>
                <li>- Basic device and app version information for troubleshooting</li>
              </ol>
            </h1>

            <h1 className="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12">
              How Your Data Is Used
              <ol className="font-normal mt-4">
                <li>- To generate recipe suggestions and cooking guidance</li>
                <li>- To respond to user requests within the app</li>
                <li>- To provide support when contacted by the user</li>
              </ol>
            </h1>

            <h1 className="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12">
              Data Storage
              <ol className="font-normal mt-4">
                <li>- All user data in the iOS google play app are stored locally on your device</li>
                <li>- AI Chef does not maintain user accounts</li>
                <li>- No personal data is stored on external servers for the iOS app</li>
              </ol>
            </h1>

            <h1 className="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12">
              Third-Party Processing
              <ol className="font-normal mt-4">
                <li>- User prompts are securely sent to an AI service (such as GPT) to generate responses</li>
                <li>- This data is used only to fulfill the requested functionality</li>
                <li>- AI Chef does not sell or use this data for advertising or tracking</li>
              </ol>
            </h1>

            <h1 className="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12">
              Children’s Privacy
              <ol className="font-normal mt-4">
                <li>- AI Chef is suitable for children ages 4 and up</li>
                <li>- The app does not knowingly collect personal information from children</li>
                <li>- No accounts exist on mobile, no social features, or messaging are included</li>
              </ol>
            </h1>

            <h1 className="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12">
              Data Sharing
              <ol className="font-normal mt-4">
                <li>- We do not sell personal data</li>
                <li>- Data is not shared for advertising or tracking purposes</li>
                <li>- Data is only shared when necessary to provide core app functionality</li>
              </ol>
            </h1>

            <h1 className="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12">
              Contact
              <ol className="font-normal mt-4">
                <li>
                  - For questions about privacy or support, contact:
                  <span className="text-green-500 font-bold ml-2">
                    Mikeweaverg@gmail.com
                  </span>
                </li>
              </ol>
            </h1>

            <h1 className="text-sm text-left mt-4 mb-12 ml-12 mr-12 text-gray-500">
              This Privacy Policy may be updated as the app evolves. Any changes will be reflected on this page.
            </h1>

          </div>
        </div>
      </div>

      <div className="h-[50px] md:h-[50px] mb-8"></div>
    </>
  )
}


export function SupportAIChefIOS(){
    return(
      <>
        <div className="h-[100px] md:h-[150px]"></div>
          <div className="shadow-md shadow-gray-500 rounded-xl px-4 mt-4 border border-gray-100">
            <p className ="font-bold mb-8 mt-4 text-xl text-green-500">
              AI Chef iOS App Support
            </p>
            <h1 className ="text-md"> 
              For specific questions about AI Chef or to report an issue, please email Mike Weaver at: <span className="text-green-500 font-bold ml-2"> Mikeweaverg@gmail.com</span>
            </h1>
            <div className="border border-gray-100 shadow-xl rounded-xl ml-0 mr-0 mt-8 mb-4">
              <div className = "border-l-4 border-green-500 ml-4">
                <h1 className ="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12"> 
                  When contacting for support, please include the following
                  <ol className ="font-normal mt-4">
                    <li>- Your Device Model</li>
                    <li>- iOS Version</li>
                    <li>- App Version</li>
                    <li>- Description of the Issue</li>
                  </ol>
                </h1>
                <h1 className ="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12"> 
                  Basic Troubleshooting
                  <ol className ="font-normal mt-4">
                    <li>- Make sure App is up to date</li>
                    <li>- Make sure iOS is up to date</li>
                    <li>- Restart the App</li>
                    <li>- Re-install the App if the issue persists</li>
                  </ol>
                </h1>
              </div>
            </div>
        </div>

       <div className="h-[50px] md:h-[50px] mb-8"></div>
          <div className="shadow-md shadow-gray-500 rounded-xl px-4 mb-8 border border-gray-100">
            <p className ="font-bold mb-8 mt-4 text-xl text-green-500">
              How to use AI Chef
            </p>
            <h1 className ="text-md"> 
              You can always click on the<span className="text-green-500 font-bold ml-0"> About </span>Tab, which includes a section titled<span className="text-green-500 font-bold ml-0"> How To</span>
            </h1>
            <div className="border border-gray-100 shadow-xl rounded-xl ml-0 mr-0 mt-8 mb-4">
              <div className = "border-l-4 border-green-500 ml-4">
                <h1 className ="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12"> 
                  First, scroll to the "pantry" tab. from here, you should
                  <ol className ="font-normal mt-4">
                    <li>- Add ingredients that are missing</li>
                    <li>- Edit your existing ingredients</li>
                    <li>- Delete items where appropriate</li>
                    <li>- Try to get the App to best match food you have on hand</li>
                  </ol>
                </h1>
                <h1 className ="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12"> 
                  Now head to "Chef". From here you can
                  <ol className ="font-normal mt-4">
                    <li>- Input the type of meal you want and your preferences in the chatbot</li>
                    <li>- Click the "send" button</li>
                    <li>- Wait for a response to load</li>
                  </ol>
                <h1 className ="text-md text-left font-semibold text-left mt-4 text-green-500"> 
                  That's it! Happy cooking!
                </h1>
                </h1>
              </div>
            </div>
        </div>
    </>
    )
}

export function PrivacyAIChefAndroid(){
  return(
    <>
      <div className="h-[100px] md:h-[150px]"></div>

      <div className="shadow-md shadow-gray-500 rounded-xl px-4 mt-4 border border-gray-100">
        <p className="font-bold mb-8 mt-4 text-xl text-green-500">
          AI Chef Android App – Privacy Policy
        </p>

        <h1 className="text-md mb-6">
          This Privacy Policy applies specifically to the AI Chef Android application.
          Your privacy is important, and this app is designed to minimize data
          collection while providing helpful cooking assistance.
        </h1>

        <div className="border border-gray-100 shadow-xl rounded-xl ml-0 mr-0 mt-8 mb-4">
          <div className="border-l-4 border-green-500 ml-4">

            <h1 className="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12">
              Information We Collect
              <ol className="font-normal mt-4">
                <li>- Ingredients, meal preferences, and prompts entered by the user</li>
                <li>- Basic device and app version information for troubleshooting</li>
              </ol>
            </h1>

            <h1 className="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12">
              How Your Data Is Used
              <ol className="font-normal mt-4">
                <li>- To generate recipe suggestions and cooking guidance</li>
                <li>- To respond to user requests within the app</li>
                <li>- To provide support when contacted by the user</li>
              </ol>
            </h1>

            <h1 className="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12">
              Data Storage
              <ol className="font-normal mt-4">
                <li>- All user data in the Android google play app are stored locally on your device</li>
                <li>- AI Chef does not maintain user accounts</li>
                <li>- No personal data is stored on external servers for the Android app</li>
              </ol>
            </h1>

            <h1 className="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12">
              Third-Party Processing
              <ol className="font-normal mt-4">
                <li>- User prompts are securely sent to an AI service (such as GPT) to generate responses</li>
                <li>- This data is used only to fulfill the requested functionality</li>
                <li>- AI Chef does not sell or use this data for advertising or tracking</li>
              </ol>
            </h1>

            <h1 className="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12">
              Children’s Privacy
              <ol className="font-normal mt-4">
                <li>- AI Chef is suitable for children ages 4 and up</li>
                <li>- The app does not knowingly collect personal information from children</li>
                <li>- No accounts exist on mobile, no social features, or messaging are included</li>
              </ol>
            </h1>

            <h1 className="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12">
              Data Sharing
              <ol className="font-normal mt-4">
                <li>- We do not sell personal data</li>
                <li>- Data is not shared for advertising or tracking purposes</li>
                <li>- Data is only shared when necessary to provide core app functionality</li>
              </ol>
            </h1>

            <h1 className="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12">
              Contact
              <ol className="font-normal mt-4">
                <li>
                  - For questions about privacy or support, contact:
                  <span className="text-green-500 font-bold ml-2">
                    Mikeweaverg@gmail.com
                  </span>
                </li>
              </ol>
            </h1>

            <h1 className="text-sm text-left mt-4 mb-12 ml-12 mr-12 text-gray-500">
              This Privacy Policy may be updated as the app evolves. Any changes will be reflected on this page.
            </h1>

          </div>
        </div>
      </div>

      <div className="h-[50px] md:h-[50px] mb-8"></div>
    </>
  )
}


export function SupportAIChefAndroid(){
    return(
      <>
        <div className="h-[100px] md:h-[150px]"></div>
          <div className="shadow-md shadow-gray-500 rounded-xl px-4 mt-4 border border-gray-100">
            <p className ="font-bold mb-8 mt-4 text-xl text-green-500">
              AI Chef Android App Support
            </p>
            <h1 className ="text-md"> 
              For specific questions about AI Chef or to report an issue, please email Mike Weaver at: <span className="text-green-500 font-bold ml-2"> Mikeweaverg@gmail.com</span>
            </h1>
            <div className="border border-gray-100 shadow-xl rounded-xl ml-0 mr-0 mt-8 mb-4">
              <div className = "border-l-4 border-green-500 ml-4">
                <h1 className ="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12"> 
                  When contacting for support, please include the following
                  <ol className ="font-normal mt-4">
                    <li>- Your Device Model</li>
                    <li>- Android Version</li>
                    <li>- App Version</li>
                    <li>- Description of the Issue</li>
                  </ol>
                </h1>
                <h1 className ="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12"> 
                  Basic Troubleshooting
                  <ol className ="font-normal mt-4">
                    <li>- Make sure App is up to date</li>
                    <li>- Make sure Android is up to date</li>
                    <li>- Restart the App</li>
                    <li>- Re-install the App if the issue persists</li>
                  </ol>
                </h1>
              </div>
            </div>
        </div>

       <div className="h-[50px] md:h-[50px] mb-8"></div>
          <div className="shadow-md shadow-gray-500 rounded-xl px-4 mb-8 border border-gray-100">
            <p className ="font-bold mb-8 mt-4 text-xl text-green-500">
              How to use AI Chef
            </p>
            <h1 className ="text-md"> 
              You can always click on the<span className="text-green-500 font-bold ml-0"> About </span>Tab, which includes a section titled<span className="text-green-500 font-bold ml-0"> How To</span>
            </h1>
            <div className="border border-gray-100 shadow-xl rounded-xl ml-0 mr-0 mt-8 mb-4">
              <div className = "border-l-4 border-green-500 ml-4">
                <h1 className ="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12"> 
                  First, scroll to the "pantry" tab. from here, you should
                  <ol className ="font-normal mt-4">
                    <li>- Add ingredients that are missing</li>
                    <li>- Edit your existing ingredients</li>
                    <li>- Delete items where appropriate</li>
                    <li>- Try to get the App to best match food you have on hand</li>
                  </ol>
                </h1>
                <h1 className ="text-md font-semibold text-left mt-12 mb-12 ml-12 mr-12"> 
                  Now head to "Chef". From here you can
                  <ol className ="font-normal mt-4">
                    <li>- Input the type of meal you want and your preferences in the chatbot</li>
                    <li>- Click the "send" button</li>
                    <li>- Wait for a response to load</li>
                  </ol>
                <h1 className ="text-md text-left font-semibold text-left mt-4 text-green-500"> 
                  That's it! Happy cooking!
                </h1>
                </h1>
              </div>
            </div>
        </div>
    </>
    )
}