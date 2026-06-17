import React from 'react';

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
    { icon: <FaYoutube className="w-7 h-7" />, href: "#", label: "YouTube" },
    { icon: <FaInstagram className="w-7 h-7" />, href: "#", label: "Instagram" },
    { icon: <FaFacebookF className="w-6 h-6" />, href: "#", label: "Facebook" },
    { icon: <FaTwitter className="w-6 h-6" />, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-12 px-6 md:px-16 border-t border-zinc-900 select-none font-roboto">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-start pb-12">
          
          <div className="md:col-span-8 space-y-6">
            <h4 className="font-orbitron  text-xl font-semibold! tracking-[0.2em] text-text-primary uppercase">
              QUICK LINKS
            </h4>
            
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              {/* Column 1 Links */}
              <ul className="space-y-3.5">
                {quickLinksColumn1.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      className="text-surfaceinner hover:text-accent-red text-sm tracking-wide transition-colors duration-200 block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Column 2  */}
              <ul className="space-y-3.5">
                {quickLinksColumn2.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      className="text-surfaceinner hover:text-accent-red text-sm tracking-wide transition-colors duration-200 block"
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
            <h4 className="font-orbitron text-xl font-semibold! tracking-[0.2em] text-text-primary uppercase">
              SOCIAL MEDIA
            </h4>
            
            {/* Inline Vector Group - LARGER ICONS */}
            <div className="flex gap-6 items-center">
              {socialMedias.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center text-surfaceinner hover:text-white hover:border-accent-red transition-all duration-200 hover:-translate-y-0.5"
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