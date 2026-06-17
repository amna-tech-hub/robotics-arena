import React, { useState } from "react";
import logo from "../assets/images/logo.png"
import ButtonPrimary from "../components/page1components/ButtonPrimary";
import ButtonOutline from "../components/page1components/ButtonOutline";
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [activeLink, setActiveLink] = useState("events");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (e, path, linkName) => {
    e.preventDefault();
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
    console.log(`Amna your Navigating to: ${path}`);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "events", label: "Events", path: "/events" },
    { name: "programs", label: "Programs", path: "/programs" },
    { name: "community", label: "Community", path: "/community" },
    { name: "ranks", label: "Ranks", path: "/ranks" },
  ];

  return (
    <header className="bg-primary border-b border-border sticky top-0 z-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="BotLeague" className="h-8 sm:h-10 object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavigation(e, link.path, link.name)}
                className={`
                  font-orbitron text-sm lg:text-base transition nav-link relative 
                  ${
                    activeLink === link.name
                      ? "text-accent-red"
                      : "text-text-primary hover:text-accent-red"
                  }
                `}
              >
                {link.label}
                {/* Desktop underline - left aligned, full width */}
                <span
                  className={`
                  absolute bottom-[-28px] left-0 h-[2px] bg-accent-red transition-all duration-300
                  ${activeLink === link.name ? "w-full" : "w-0"}
                `}
                ></span>
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <ButtonOutline className="h-8 w-[68px] lg:w-[76px] text-[10px] lg:text-xs text-center border-1! cursor-pointer">
              LOGIN
            </ButtonOutline>
            <ButtonPrimary className="h-8 w-[130px] lg:w-[163px] text-[10px] lg:text-xs text-center cursor-pointer">
              REGISTER NOW
            </ButtonPrimary>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-text-primary hover:text-accent-red transition-colors duration-200 p-1 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu*/}
        <div 
          className={`
            md:hidden fixed inset-x-0 top-[57px] sm:top-[64px] bg-primary border-b border-border
            transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? 'max-h-[calc(100vh-57px)] sm:max-h-[calc(100vh-64px)] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
          `}
        >
          <div className="flex flex-col items-center justify-start px-6 py-8 space-y-6 overflow-y-auto h-full">
            {/* Navigation Links - Vertical Column */}
            <div className="flex flex-col items-center w-full space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleNavigation(e, link.path, link.name)}
                  className={`
                    font-orbitron text-lg transition nav-link relative w-full text-center py-2
                    ${
                      activeLink === link.name
                        ? "text-accent-red"
                        : "text-text-primary hover:text-accent-red"
                    }
                  `}
                >
                  {link.label}
                  {/* Mobile underline - centered, half width */}
                  <span
                    className={`
                      absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-accent-red transition-all duration-300
                      ${activeLink === link.name ? "w-1/2" : "w-0"}
                    `}
                  ></span>
                </a>
              ))}
            </div>
            
            {/* Divider */}
            <div className="w-full max-w-xs h-px bg-border"></div>
            
            {/* Mobile Buttons - Vertical Stack */}
            <div className="flex flex-col w-full max-w-xs space-y-3">
              <ButtonOutline className="w-full h-11 text-sm text-center border-1! cursor-pointer">
                LOGIN
              </ButtonOutline>
              <ButtonPrimary className="w-full h-11 text-sm text-center cursor-pointer">
                REGISTER NOW
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;