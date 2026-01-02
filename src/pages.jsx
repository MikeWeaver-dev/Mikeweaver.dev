import React, { useState } from "react";
import { ProjectCard, ProjectPage } from './components';
import { ChevronDown, ChevronRight, ExternalLink, Play, Download, Code2, Briefcase, GraduationCap, Award, Mail, MapPin, Calendar, Github, Linkedin, Phone, Rocket, Sparkles, Plane, Music, ChefHat  } from 'lucide-react';


export function Projects({ setPage }) {
  const projects = [
    {
      title: "CensusView",
      description: "Interactive data visualization platform that maps millions of Census data points to reveal demographic and housing trends across state, county, and neighborhood levels. Utilizes the Census API and sophisticated data manipulation to offer dynamic filters, point-in-time, and change-over-time data.",
      skills: ["R", "R-Shiny", "GIS Mapping", "Data Visualization", "Census API", "Data analysis"],
      liveUrl: "https://Mikeweaver.dev/CensusView",
      page: "CensusView",
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
      liveUrl: "https://Mikeweaver.dev/Voyage",
      page: "Voyage",
      gradient: "from-purple-300 to-purple-400",
      color: "text-purple-400",
      softColor: "bg-purple-50",
      border: "border-purple-400",
      hover: "hover:text-purple-400",
      mobile: false,
      appleLink: "https://Mikeweaver.dev/Voyage",
      playLink: "https://Mikeweaver.dev/Voyage",
      icon: Plane
    },
    {
      title: "AI Chef",
      description: "AI powered recipe generator that uses GPT-4 to create personalized meal suggestions based on ingredients in the users pantry. Features a stunning UI and optimization for mobile and web, with availability on the Apple and Google Play store.",
      skills: ["React Native", "Expo", "OpenAI API", "Ai Integration", "Firebase", "NativeWind", "Mobile Development"],
      liveUrl: "https://Mikeweaver.dev/AIChef",
      page: "AIChef",
      gradient: "from-orange-300 to-orange-400",
      color: "text-orange-400",
      softColor: "bg-orange-50",
      border: "border-orange-400",
      hover: "hover:text-orange-400",
      mobile: true,
      appleLink: "https://Mikeweaver.dev/AIChef",
      playLink: "https://Mikeweaver.dev/AIChef",
      icon: ChefHat
    },
    {
      title: "SpotifyLab",
      description: "Playlist generator for iOS, Android, and web that analyzes your Spotify listening history to create perfectly curated playlists. Features AI integration, several APIs working in tandem, a third-party hosted backend, and a dynamic UI optimized for mobile and web.",
      skills: ["React Native", "Spotify API", "Mobile Development", "Expo", "OpenAI API", "AI Integration", "UI/UX"],
      liveUrl: "https://Mikeweaver.dev/SpotifyLab",
      page: "SpotifyLab",
      gradient: "from-blue-300 to-blue-400",
      color: "text-blue-400",
      softColor: "bg-blue-50",
      border: "border-blue-400",
      hover: "hover:text-blue-400",
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
              onLearnMore={() => setPage(project.page)}
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
              <button
                onClick={() => setPage('About')}
                className="px-6 py-3 bg-gradient-to-r from-emerald-300 to-emerald-400 text-white font-semibold rounded-xl hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg"
              >
                Learn More About Me
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-1">4</div>
            <div className="text-sm text-green-700 font-medium">Major Projects</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center border border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-1">10+</div>
            <div className="text-sm text-purple-700 font-medium">Languages, Frameworks, & Tools</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
            <div className="text-sm text-orange-700 font-medium">Responsive</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-1">Open</div>
            <div className="text-sm text-blue-700 font-medium">Source</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export function About({setPage}) {

  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);
  const [isJourneyExpanded, setIsJourneyExpanded] = useState(false);

  return (
    <div className="min-h-screen py-12 px-4 md:px-8">
      <div className="h-[40px] md:h-[120px]"></div>
      <div className="max-w-4xl mx-auto">
        
        {/* Header with Download Button */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <h1 className="text-4xl md:text-4xl font-bold text-gray-800 mb-2">About Me</h1>
            <p className="text-gray-600">Aspiring Software Developer</p>
          </div>
          <a 
            href="/src/assets/Mike Weaver Resume.pdf" 
            download
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        {/* Bio Section */}
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

        {/* Contact Info */}
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

        {/* Skills Section – Centered on Mobile Only */}
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

        {/* Experience Section - Collapsible */}
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
                <button 
                  onClick={() => setPage("CensusView")}
                  className="inline-block text-md font-semibold text-emerald-600 hover:text-emerald-800 hover:underline cursor-pointer transition-all duration-200 mb-2 focus:outline-none focus:underline"
                >
                  CensusView
                </button>
                <p className="text-gray-700 leading-relaxed mb-8">
                  CensusView is an interactive data tool that leverages Census API data to track and visualize millions of data points. The app is intuitive and simple for users, but offers complex data handling and geospatial manipulation behind the scenes.
                </p>
                <button 
                  onClick={() => setPage("Voyage")}
                  className="inline-block text-md font-semibold text-emerald-600 hover:text-emerald-800 hover:underline cursor-pointer transition-all duration-200 mb-2 focus:outline-none focus:underline"
                >
                  Voyage
                </button>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Voyage is a full-scale social media website geared towards travel. Users can create a profile, make posts, follow others, and like others' activity. Built using Firebase and offering dynamic updates and a robust third-party database, Voyage is ready to scale for an indefinite number of users and offers professional authentication and server-side capacity.
                </p>
                <button 
                  onClick={() => setPage("AIChef")}
                  className="inline-block text-md font-semibold text-emerald-600 hover:text-emerald-800 hover:underline cursor-pointer transition-all duration-200 mb-2 focus:outline-none focus:underline"
                >
                  AI Chef
                </button>
                <p className="text-gray-700 leading-relaxed mb-8">
                  AI Chef is a GPT-4 powered recipe generator designed to inspire new meals based on foods users have on-hand. The app is optimized for web and mobile and available on both the App Store and Google Play Store. The app utilizes persistent data, Firebase authentication, Tailwind CSS, and mobile development frameworks to deliver something polished and professional across devices.
                </p>
                <button 
                  onClick={() => setPage("SpotifyLab")}
                  className="inline-block text-md font-semibold text-emerald-600 hover:text-emerald-800 hover:underline cursor-pointer transition-all duration-200 mb-2 focus:outline-none focus:underline"
                >
                  SpotifyLab
                </button>
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

        {/* My Journey Section - Collapsible */}
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

          {/* Expand Button for My Journey */}
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

        {/* Call to Action */}
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
              href="/src/assets/Mike Weaver Resume.pdf" 
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

export function Demos({ setPage }) {
  const [expandedSkills, setExpandedSkills] = useState({});

  const demos = [
    {
      title: "CensusView",
      description: "Interactive data visualization platform that maps millions of Census data points to reveal demographic and housing trends across state, county, and neighborhood levels. Utilizes the Census API and sophisticated data manipulation to offer dynamic filters, point-in-time, and change-over-time data.",
      skills: ["R", "R-Shiny", "GIS Mapping", "Data Visualization", "Census API", "Data Analysis"],
      liveUrl: "https://Mikeweaver.dev/CensusView",
      githubUrl: "https://github.com/MikeWeaver-dev/CensusView",
      videoFile: "CensusView.mp4",
      thumbnail: "/src/assets/thumbnails/CensusView Thumbnail.png",
      gradient: "from-green-300 to-green-400",
      color: "text-emerald-500",
      softColor: "bg-green-50",
      border: "border-green-400",
      hoverBorder: "hover:border-green-600",
      shadow: "hover:shadow-green-400/30",
      mobile: false,
      topTags: ["Data Visualization", "Census API"],
      icon: MapPin,
      page: "CensusView"
    },
    {
      title: "Voyage",
      description: "Full-service social media platform designed for travelers to share experiences. Features real-time updates, image uploads, third-party server and database hosting, authentication, profiles, likes, posts, sub-posts and more.",
      skills: ["React", "Firebase", "Realtime Database", "Authentication", "Cloud Storage", "Responsive Design", "CRUD Operations"],
      liveUrl: "https://Mikeweaver.dev/Voyage",
      githubUrl: "https://github.com/MikeWeaver-dev/Voyage",
      videoFile: "Voyage.mp4",
      thumbnail: "/src/assets/thumbnails/Voyage Thumbnail.png",
      gradient: "from-purple-300 to-purple-400",
      color: "text-purple-500",
      softColor: "bg-purple-50",
      border: "border-purple-400",
      hoverBorder: "hover:border-purple-600",
      shadow: "hover:shadow-purple-400/30",
      mobile: false,
      topTags: ["Firebase", "CRUD Operations"],
      icon: Plane,
      page: "Voyage"
    },
    {
      title: "AI Chef",
      description: "AI powered recipe generator that uses GPT-4 to create personalized meal suggestions based on ingredients in the users pantry. Features a stunning UI and optimization for mobile and web, with availability on the Apple and Google Play store.",
      skills: ["React Native", "Expo", "OpenAI API", "AI Integration", "Firebase", "NativeWind", "Mobile Development", "UI/UX"],
      liveUrl: "https://Mikeweaver.dev/AIChef",
      githubUrl: "https://github.com/MikeWeaver-dev/AIChef",
      videoFile: "AIChef.mp4",
      thumbnail: "/src/assets/thumbnails/AI Chef Thumbnail.png",
      gradient: "from-orange-300 to-orange-400",
      color: "text-orange-500",
      softColor: "bg-orange-50",
      border: "border-orange-400",
      hoverBorder: "hover:border-orange-600",
      shadow: "hover:shadow-orange-400/30",
      mobile: true,
      topTags: ["AI Integration", "React Native"],
      icon: ChefHat,
      page: "AIChef"
    },
    {
      title: "SpotifyLab",
      description: "Playlist generator for iOS, Android, and web that analyzes your Spotify listening history to create perfectly curated playlists. Features AI integration, several APIs working in tandem, a third-party hosted backend, and a dynamic UI optimized for mobile and web.",
      skills: ["React Native", "Spotify API", "OpenAI API", "AI Integration", "Expo", "Mobile Development", "UI/UX", "NativeWind"],
      liveUrl: "https://Mikeweaver.dev/SpotifyLab",
      githubUrl: "https://github.com/MikeWeaver-dev",
      videoFile: "SpotifyLab.mp4",
      thumbnail: "/src/assets/thumbnails/SpotifyLab Thumbnail.png",
      gradient: "from-blue-300 to-blue-400",
      color: "text-blue-500",
      softColor: "bg-blue-50",
      border: "border-blue-400",
      hoverBorder: "hover:border-blue-600",
      shadow: "hover:shadow-blue-400/30",
      mobile: true,
      topTags: ["Mobile Development", "UI/UX"],
      icon: Music,
      page: "SpotifyLab"
    }
  ];

  const DemoCard = ({ demo, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const Icon = demo.icon;

    const toggleSkills = (e) => {
      e.stopPropagation();
      setExpandedSkills(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const handlePlayClick = (e) => {
      e.stopPropagation();
      setIsPlaying(true);
    };

    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          group bg-white rounded-2xl overflow-hidden 
          border-2 border-gray-100 
          transition-all duration-300
          ${isHovered ? `${demo.hoverBorder} ${demo.shadow} shadow-xl -translate-y-1` : 'shadow-md'}
        `}
      >
        <div className="relative h-64 overflow-hidden">
          {!isPlaying && (
            <>
              <img
                src={demo.thumbnail}
                alt={`${demo.title} preview`}
                className="w-full h-full object-cover brightness-90"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${demo.gradient} blur-2xl opacity-50`} />
              <div className="absolute inset-0 bg-black/10" />
            </>
          )}

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button
                onClick={handlePlayClick}
                className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-7 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-2xl"
                aria-label={`Play demo video for ${demo.title}`}
              >
                <Play className="w-12 h-12 text-white fill-white" />
              </button>
            </div>
          )}

          {isPlaying && (
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              src={`/src/assets/${demo.videoFile}`}
            >
              Your browser does not support the video tag.
            </video>
          )}

          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
            {demo.topTags.map((tag, i) => (
              <span key={i} className={`px-3 py-1 ${demo.softColor} ${demo.color} rounded-full text-xs font-semibold border ${demo.border}`}>
                {tag}
              </span>
            ))}
          </div>

          <div className={`
            absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl 
            border-2 transition-all duration-300 z-20
            ${isHovered ? `${demo.border} scale-110 shadow-lg` : 'border-transparent'}
          `}>
            <Icon className={`w-6 h-6 ${demo.color}`} />
          </div>

          {demo.mobile && (
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 border border-gray-200 z-20">
              📱 Mobile App
            </div>
          )}
        </div>

        <div className="p-6">
          <button
            onClick={() => setPage(demo.page)}
            className={`
              text-2xl font-bold mb-3 justify-center w-full focus:outline-none
              ${demo.color} 
              hover:${demo.color.replace('700', '800')} 
              hover:underline 
              underline-offset-4 
              transition-all duration-300
            `}
          >
            {demo.title}
          </button>

          <p className="text-gray-700 leading-relaxed mb-6">
            {demo.description}
          </p>

          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {demo.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 ${demo.softColor} ${demo.color} rounded-full text-xs font-medium border ${demo.border} ${expandedSkills[index] || idx < 4 ? '' : 'hidden'}`}
                >
                  {skill}
                </span>
              ))}
            </div>
            {demo.skills.length > 4 && (
              <button
                onClick={toggleSkills}
                className="mt-3 text-sm font-medium text-gray-600 hover:text-gray-800 flex items-center gap-1 transition-colors"
              >
                {expandedSkills[index] ? 'Show less' : `+ ${demo.skills.length - 4} more`}
                <ChevronDown className={`w-4 h-4 transition-transform ${expandedSkills[index] ? 'rotate-180' : ''}`} />
              </button>
            )}
          </div>

          <div className="flex gap-3">
            <a
              href={demo.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${demo.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all`}
            >
              View Live
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={demo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors border border-gray-200"
            >
              <Github className="w-5 h-5 text-gray-700" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="h-[40px] md:h-[120px]"></div>
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20 mt-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-emerald-600" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-emerald-700 bg-clip-text text-transparent">
              Interactive Demos
            </h1>
            <Sparkles className="w-8 h-8 text-emerald-600" />
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Watch my projects in action. Click on any project title to learn more about its development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {demos.map((demo, idx) => (
            <DemoCard key={idx} demo={demo} index={idx} />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Built With Modern Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
              <div className="text-3xl mb-2">⚛️</div>
              <div className="font-semibold text-gray-700">React</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl mb-2">🔥</div>
              <div className="font-semibold text-gray-700">Firebase</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
              <div className="text-3xl mb-2">🤖</div>
              <div className="font-semibold text-gray-700">AI APIs</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl mb-2">📱</div>
              <div className="font-semibold text-gray-700">React Native</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-300 to-emerald-400 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want to explore the code?
          </h2>
          <p className="text-emerald-50 mb-6 text-lg max-w-2xl mx-auto">
            All projects are open source and available on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/MikeWeaver-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all shadow-lg"
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
            </a>
            <a
              href="mailto:mikeweaverg@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all shadow-lg"
            >
              Get In Touch
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

//////////////////////////////////////////////////////////

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
          solution: "Implemented efficient data caching and lazy loading to handle millions of Census data points without performance degradation."
        },
        {
          title: "Complex Geospatial Rendering",
          solution: "Optimized map rendering with strategic aggregation and implemented zoom-based detail levels for smooth user experience."
        }
      ]}
      videoFile="CensusView.mp4"
      thumbnail="/src/assets/thumbnails/CensusView Thumbnail.png"
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
      description="A full-featured social media platform designed specifically for travelers to share experiences, connect with fellow explorers, and discover new destinations."
      fullDescription={[
        "Voyage brings the travel community together in a dedicated social platform. Users can create profiles, share travel stories with photos, follow other travelers, and engage with content through likes and comments.",
        "The platform is built on Firebase, providing real-time updates, professional authentication, and scalable cloud infrastructure. Every interaction feels instant and smooth, from uploading photos to seeing new posts from friends.",
        "With features like nested comments (sub-posts), cloud storage for images, and real-time database synchronization, Voyage offers a complete social media experience tailored for the travel community."
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
          title: "Scalable Image Storage",
          solution: "Implemented Firebase Cloud Storage with optimized compression and CDN delivery for fast image loading."
        }
      ]}
      videoFile="Voyage.mp4"
      thumbnail="/src/assets/thumbnails/Voyage Thumbnail.png"
      liveUrl="https://Mikeweaver.dev/Voyage"
      githubUrl="https://github.com/MikeWeaver-dev/Voyage"
      gradient="from-purple-300 to-purple-400"
      color="text-purple-600"
      softColor="bg-purple-50"
      border="border-purple-400"
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
        "AI Chef revolutionizes meal planning by using artificial intelligence to suggest recipes based on what you have on hand. Simply input your available ingredients, and GPT-4 generates creative, customized recipes just for you.",
        "The app features a beautiful, intuitive interface optimized for both web and mobile devices. It's available on both the Apple App Store and Google Play Store, bringing AI-powered cooking assistance to millions of users.",
        "Built with React Native and Expo, AI Chef demonstrates seamless AI integration, persistent data storage, and professional mobile development practices across platforms."
      ]}
      features={[
        "GPT-4 powered recipe generation",
        "Pantry ingredient tracking",
        "Personalized meal suggestions",
        "Save favorite recipes",
        "Cross-platform (iOS, Android, Web)",
        "Firebase authentication",
        "Beautiful, intuitive UI",
        "Offline recipe access"
      ]}
      techStack={["React Native", "Expo", "OpenAI API", "AI Integration", "Firebase", "NativeWind", "Mobile Development", "UI/UX"]}
      challenges={[
        {
          title: "AI Response Consistency",
          solution: "Crafted detailed prompts and implemented response validation to ensure GPT-4 generates properly formatted, practical recipes."
        },
        {
          title: "Cross-Platform Performance",
          solution: "Optimized rendering and API calls to maintain smooth performance across iOS, Android, and web platforms."
        }
      ]}
      videoFile="AIChef.mp4"
      thumbnail="/src/assets/thumbnails/AI Chef Thumbnail.png"
      liveUrl="https://Mikeweaver.dev/AIChef"
      githubUrl="https://github.com/MikeWeaver-dev/AIChef"
      appleLink="https://Mikeweaver.dev/AIChef"
      playLink="https://Mikeweaver.dev/AIChef"
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
        🚧🚧🚧 SpotifyLab under construction and will be delivered January 31st 2026. 🚧🚧🚧
      </p>
      <h1 className ="text-lg"> 
        Check back soon!
      </h1>
      <div className="h-[1300px] md:h-[400px]"></div>
    </>
  )
}