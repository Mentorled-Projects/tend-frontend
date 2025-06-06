"use client";
import { SetStateAction, useState } from "react";
import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";
import { MdOutlineMail } from "react-icons/md";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (section: SetStateAction<string>) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Header/Navigation */}
        <header className="flex justify-between items-center px-6 lg:px-20 py-4 bg-teal-800 sticky top-0 z-50 shadow-sm">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/assets/tend_logo.png"
                alt="TEND logo"
                width={100}
                height={40}
              />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                onClick={() => handleNavClick("home")}
                  className={`text-sm text-white hover:text-teal-300 relative pb-1 ${
                    activeSection === "home" 
                      ? "after:content-[''] after:absolute after:bottom-0 after:left-1/3 after:transform after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-teal-300" 
                      : ""
                  }`}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                 onClick={() => handleNavClick("about")}
                  className={`text-sm text-white hover:text-teal-300 relative pb-1 ${
                    activeSection === "about" 
                      ? "after:content-[''] after:absolute after:bottom-0 after:left-1/3 after:transform after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-teal-300" 
                      : ""
                  }`}>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                 onClick={() => handleNavClick("testimonial")}
                  className={`text-sm text-white hover:text-teal-300 relative pb-1 ${
                    activeSection === "testimonial" 
                      ? "after:content-[''] after:absolute after:bottom-0 after:left-1/3 after:transform after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-teal-300" 
                      : ""
                  }`}>
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                 onClick={() => handleNavClick("contact-us")}
                  className={`text-sm text-white hover:text-teal-300 relative pb-1 ${
                    activeSection === "contact-us" 
                      ? "after:content-[''] after:absolute after:bottom-0 after:left-1/3 after:transform after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-teal-300" 
                      : ""
                  }`}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="/pages/Signup"
              className="text-white bg-teal-400 hover:bg-teal-500 px-6 py-2 text-sm font-medium flex items-center rounded"
            >
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-40">
              <nav className="px-6 py-4">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#home"
                      className="block text-sm hover:text-teal-500 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="block text-sm hover:text-teal-500 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonial"
                      className="block text-sm hover:text-teal-500 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Testimonial
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact-us"
                      className="block text-sm hover:text-teal-500 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className="pt-4 border-t border-gray-200">
                    <a
                      href="/pages/Signup"
                      className="block text-white bg-teal-400 hover:bg-teal-500 px-6 py-3 text-sm font-medium text-center rounded"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get Started
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="px-6 lg:px-20 py-12 md:py-16 flex flex-col md:flex-row justify-between items-center bg-white"
        >
          <div className="max-w-xl mb-8 md:mb-0">
            <div className="text-sm font-medium text-gray-600 mb-2">
              EMPOWER 6+ MILLION
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
              TEND makes it easy and anonymous for remote teams to share how
              they really feel
            </h1>
            <p className="text-gray-600 mb-8">
              Anonymous Weekly check ins that builds a Healthier, More Connected
              Workplace
            </p>
            <div className="flex gap-3">
              <a
                href="/pages/Login"
                className="bg-teal-400 hover:bg-teal-500 px-6 py-2 text-white text-sm font-medium rounded"
              >
                Log In
              </a>
              <a
                href="/pages/Signup"
                className="bg-teal-400 hover:bg-teal-500 px-6 py-2 text-white text-sm font-medium rounded"
              >
                Sign Up
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/5 relative">
            <div className="bg-blue-100 rounded-lg p-6 mb-4 max-w-xs">
              <h4 className="text-lg font-medium mb-2">
                Your Wellness is Our Goal
              </h4>
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="flex items-center">
                    <img
                      src="/api/placeholder/40/40"
                      alt="Diamond icon"
                      className="mr-2"
                    />
                    <span className="font-medium">Trusted</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    Global Recognition
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/api/placeholder/400/320"
              alt="Happy person smiling"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </section>

        {/* Happiness Meter */}
        <section id="home" className="px-6 lg:px-20 py-8 bg-white">
          <div className="flex flex-col items-start">
            {/* Profile images */}
            <div className="flex -space-x-2 mb-6">
              <img
                src="/api/placeholder/40/40"
                alt="User"
                className="rounded-full border-2 border-white"
              />
              <img
                src="/api/placeholder/40/40"
                alt="User"
                className="rounded-full border-2 border-white"
              />
              <img
                src="/api/placeholder/40/40"
                alt="User"
                className="rounded-full border-2 border-white"
              />
              <img
                src="/api/placeholder/40/40"
                alt="User"
                className="rounded-full border-2 border-white"
              />
              <img
                src="/api/placeholder/40/40"
                alt="User"
                className="rounded-full border-2 border-white"
              />
            </div>

            {/* Happiness meter directly below profile images */}
            <div className="w-full md:w-1/2">
              <div className="mb-2">
                <span className="text-sm">😊 Happiness Increase</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 relative mb-2">
                <div className="bg-teal-400 h-2 rounded-full w-[80%] relative">
                  <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-7 bg-teal-400 text-white text-xs px-2 py-1 rounded">
                    93%
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-teal-400"></div>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500">
                *Base on our customer feedback
              </div>
            </div>
          </div>

          {/* Trusted by logos */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-60">
            <img src="/api/placeholder/100/30" alt="Mentored logo" />
            <img src="/api/placeholder/100/30" alt="LinkedIn logo" />
            <img src="/api/placeholder/100/30" alt="Google logo" />
            <img src="/api/placeholder/100/30" alt="Slack logo" />
            <img src="/api/placeholder/100/30" alt="Airbnb logo" />
            <img src="/api/placeholder/100/30" alt="National Geographic logo" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-6 lg:px-20 py-16">
          <div className="text-center mb-4 text-sm text-gray-600">ABOUT</div>
          <div className="bg-gray-100 rounded-lg px-8 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Empower Your Team's Wellness Journey
          </h2>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-4">
              At Tend Wellness Tracker, we believe emotional well-being is the
              foundation of a thriving team. We provide anonymous, data-driven
              wellness check-ins designed to help remote teams build healthier,
              more connected workplaces.
            </p>
            <p className="text-gray-600">
              Our platform ensures that individuals feel supported while
              leadership gains insights to nurture a happier, more resilient
              workforce.
            </p>
          </div>
          </div>
        </section>

        {/* Educational Resources Section */}
        <section id="about" className="px-6 lg:px-20 py-16 ">
          {/* <div className="max-w-3xl mb-10">
            <div className="text-sm font-medium text-gray-600 mb-2">
              LEARN FROM OUR CREATOR
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Listen or watch to learn more
            </h2>
            <p className="text-gray-600 mb-6">
              At Tend, our dedicated experts and advocates bring real-world
              insight and experience to help build stronger, healthier remote
              teams. From crafting thoughtful check-ins to developing meaningful
              resources, everything we do is designed to support team
              connection, growth, and well-being.
            </p>
            <button className="inline-flex items-center text-sm font-medium border border-gray-300 rounded-full px-5 py-2 hover:bg-gray-50">
              See all videos <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col">
           <div className="max-w-3xl mb-10">
            <div className="text-sm font-medium text-gray-600 mb-2">
              LEARN FROM OUR CREATOR
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Listen or watch to learn more
            </h2>
            <p className="text-gray-600 mb-6">
              At Tend, our dedicated experts and advocates bring real-world
              insight and experience to help build stronger, healthier remote
              teams. From crafting thoughtful check-ins to developing meaningful
              resources, everything we do is designed to support team
              connection, growth, and well-being.
            </p>
            <button className="inline-flex items-center text-sm font-medium border border-gray-300 rounded-full px-5 py-2 hover:bg-gray-50">
              See all videos <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>
          </div>
            {/* Resource 1 */}
            <div className="flex flex-col">
              <div className="mb-4">
                <img
                  src="/api/placeholder/350/220"
                  alt="Managing Stress Effectively"
                  className="rounded-lg w-full h-52 object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base">
                  Managing Stress Effectively
                </h3>
                <button className="bg-teal-400 hover:bg-teal-500 rounded-full p-2 ml-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 4.646V15.354a.5.5 0 00.79.407l7-5.354a.5.5 0 000-.814l-7-5.354A.5.5 0 008 4.646z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Resource 2 */}
            <div className="flex flex-col">
              <div className="mb-4">
                <img
                  src="/api/placeholder/350/220"
                  alt="Relaxation Exercise"
                  className="rounded-lg w-full h-52 object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base">Relaxation Exercise</h3>
                <button className="bg-teal-400 hover:bg-teal-500 rounded-full p-2 ml-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 4.646V15.354a.5.5 0 00.79.407l7-5.354a.5.5 0 000-.814l-7-5.354A.5.5 0 008 4.646z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Resource 3 */}
            <div className="flex flex-col">
              <div className="mb-4">
                <img
                  src="/api/placeholder/350/220"
                  alt="Coping with Anxiety"
                  className="rounded-lg w-full h-52 object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base">Coping with Anxiety</h3>
                <button className="bg-teal-400 hover:bg-teal-500 rounded-full p-2 ml-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 4.646V15.354a.5.5 0 00.79.407l7-5.354a.5.5 0 000-.814l-7-5.354A.5.5 0 008 4.646z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Resource 4 */}
            <div className="flex flex-col">
              <div className="mb-4">
                <img
                  src="/api/placeholder/350/220"
                  alt="Introduction to Meditation"
                  className="rounded-lg w-full h-52 object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base">
                  Introduction to Meditation
                </h3>
                <button className="bg-teal-400 hover:bg-teal-500 rounded-full p-2 ml-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 4.646V15.354a.5.5 0 00.79.407l7-5.354a.5.5 0 000-.814l-7-5.354A.5.5 0 008 4.646z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Resource 5 */}
            <div className="flex flex-col">
              <div className="mb-4">
                <img
                  src="/api/placeholder/350/220"
                  alt="Time Management"
                  className="rounded-lg w-full h-52 object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base">Time Management</h3>
                <button className="bg-teal-400 hover:bg-teal-500 rounded-full p-2 ml-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 4.646V15.354a.5.5 0 00.79.407l7-5.354a.5.5 0 000-.814l-7-5.354A.5.5 0 008 4.646z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>


          {/* Core Values Section */}
        <section id="about" className="px-6 lg:px-20 py-16 bg-white">        
            <div className="max-w-lg mb-8">
              <div className="text-sm font-medium text-gray-600 mb-2">
                CORE VALUE
              </div>
              <h2 className="text-3xl font-bold mb-3">
                Improving mental Wellness
              </h2>
              <p className="text-gray-600">
                Everyone has right to get easy access on mental Wellness
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="flex flex-col items-center">
                <div className="bg-white p-3 rounded-full mb-4">
                  <img src="/api/placeholder/40/40" alt="Check-in icon" />
                </div>
                <h3 className="font-medium text-center">Check In</h3>
              </div>

              {/* Value 2 */}
              <div className="flex flex-col items-center">
                <div className="bg-white p-3 rounded-full mb-4">
                  <img
                    src="/api/placeholder/40/40"
                    alt="Ease and Clarity icon"
                  />
                </div>
                <h3 className="font-medium text-center">Ease and Clarity</h3>
              </div>

              {/* Value 3 */}
              <div className="flex flex-col items-center">
                <div className="bg-white p-3 rounded-full mb-4">
                  <img src="/api/placeholder/40/40" alt="Anonymous icon" />
                </div>
                <h3 className="font-medium text-center">Anonymous</h3>
              </div>

              {/* Value 4 */}
              <div className="flex flex-col items-center">
                <div className="bg-white p-3 rounded-full mb-4">
                  <img src="/api/placeholder/40/40" alt="Team Growth icon" />
                </div>
                <h3 className="font-medium text-center">Team Growth</h3>
              </div>

              {/* Value 5 */}
              <div className="flex flex-col items-center">
                <div className="bg-white p-3 rounded-full mb-4">
                  <img src="/api/placeholder/40/40" alt="Resources icon" />
                </div>
                <h3 className="font-medium text-center">Resources</h3>
              </div>

              {/* Value 6 */}
              <div className="flex flex-col items-center">
                <div className="bg-white p-3 rounded-full mb-4">
                  <img src="/api/placeholder/40/40" alt="Care icon" />
                </div>
                <h3 className="font-medium text-center">Care</h3>
              </div>
            </div>
        </section>

          {/* Testimonials Section */}
        <section id="testimonial" className="px-6 lg:px-20 py-16 bg-gray-100 drop-shadow-sm">
          <div className="mb-4 text-sm text-gray-600">TESTIMONIAL</div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">
                Tend wellness tracker transformed my life. The support and
                guidance I received were truly invaluable.
              </h2>
              <div className="mt-4">
                <p className="font-medium">Favor Jeffery</p>
                <p className="text-sm text-gray-600">Client</p>
              </div>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img
                src="/api/placeholder/240/180"
                alt="User testimonial"
                className="rounded-lg w-full h-full object-cover"
              />
              <img
                src="/api/placeholder/240/180"
                alt="User testimonial"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          id="contact-us"
          className="bg-white px-6 lg:px-20 py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company info */}
            <div>
              <img
                src="/assets/tend_logo.png"
                alt="TEND logo"
                width={100}
                height={40}
                className="mb-4"
              />
              <p className="text-sm text-gray-600 mb-4">
                We provide anonymous, data-driven wellness check-ins designed to
                help remote teams build healthier, more connected workplaces.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Teams
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-medium mb-4">Get Support</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Blog Post
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-medium mb-4">Newsletter</h3>
              <div className="flex items-center mb-4">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MdOutlineMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-l w-full focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <button className="bg-gray-200 text-gray-600 p-2 rounded-r">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer bottom / copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              &copy; 2025 TEND All rights reserved.
            </div>
            <div className="flex space-x-4 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
