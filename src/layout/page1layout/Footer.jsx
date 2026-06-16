import React from 'react';

// Social media vector icons matching your footer design
import { FaYoutube, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

function Footer() {
  const quickLinksColumn1 = [
    { name: "The Arena", href: "#" },
    { name: "Episodes", href: "#" },
    { name: "National Rankings", href: "#" },
    { name: "Programs", href: "#" },
    { name: "Rulebooks", href: "#" }
  ];

  const quickLinksColumn2 = [
    { name: "Join the Team", href: "#" },
    { name: "Sponsorships", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Legal", href: "#" }
  ];

  const socialMedias = [
    { icon: <FaYoutube className="w-5 h-5" />, href: "#", label: "YouTube" },
    { icon: <FaInstagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <FaFacebookF className="w-4 h-4" />, href: "#", label: "Facebook" },
    { icon: <FaTwitter className="w-4 h-4" />, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-12 px-6 md:px-16 border-t border-zinc-900 select-none font-roboto">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-start pb-12">
          
          {/* ================= LEFT SIDE: QUICK LINKS ================= */}
          <div className="md:col-span-8 space-y-6">
            <h4 className="font-orbitron text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
              QUICK LINKS
            </h4>
            
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              {/* Column 1 Links */}
              <ul className="space-y-3.5">
                {quickLinksColumn1.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      className="text-zinc-500 hover:text-accent-red text-sm tracking-wide transition-colors duration-200 block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Column 2 Links */}
              <ul className="space-y-3.5">
                {quickLinksColumn2.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      className="text-zinc-500 hover:text-accent-red text-sm tracking-wide transition-colors duration-200 block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ================= RIGHT SIDE: SOCIAL MEDIA ================= */}
          <div className="md:col-span-4 space-y-6 md:text-right flex flex-col md:items-end">
            <h4 className="font-orbitron text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
              SOCIAL MEDIA
            </h4>
            
            {/* Inline Vector Group */}
            <div className="flex gap-5 items-center">
              {socialMedias.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:border-accent-red transition-all duration-200 hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>


      </div>
    </footer>
  );
}

export default Footer;