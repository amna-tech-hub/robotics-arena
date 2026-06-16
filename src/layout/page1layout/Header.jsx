import React, { useState } from "react";
import logo from "../../assets/images/logo.png"
import ButtonPrimary from "../../components/page1components/ButtonPrimary";
import ButtonOutline from "../../components/page1components/ButtonOutline";

const Header = () => {
  const [activeLink, setActiveLink] = useState("events");

  const handleNavigation = (e, path, linkName) => {
    e.preventDefault();
    setActiveLink(linkName);
    console.log(`Amna your Navigating to: ${path}`);
  };

  const navLinks = [
    { name: "events", label: "Events", path: "/events" },
    { name: "programs", label: "Programs", path: "/programs" },
    { name: "community", label: "Community", path: "/community" },
    { name: "ranks", label: "Ranks", path: "/ranks" },
  ];

  return (
    <header className="bg-primary border-b border-border">
      <div className="max-w-container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="BotLeague" className="h-10 object-contain" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavigation(e, link.path, link.name)}
                className={`
                  font-orbitron text-[16px] transition nav-link relative 
                  ${
                    activeLink === link.name
                      ? "text-accent-red"
                      : "text-text-primary hover:text-accent-red"
                  }
                `}
              >
                {link.label}
                <span
                  className={`
                  nav-underline absolute bottom-[-4px] left-0 h-[2px] bg-accent-red transition-all duration-300
                  ${activeLink === link.name ? "w-full" : "w-0"}
                `}
                ></span>
              </a>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <ButtonOutline className="h-8 w-[76px] text-xs text-center border-1! cursor-pointer">
              LOGIN
            </ButtonOutline>
            <ButtonPrimary className="h-8 w-[163px] text-xs text-center cursor-pointer">
              REGISTER NOW
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
