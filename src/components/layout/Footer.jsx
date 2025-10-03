// import React, { useState, useEffect } from 'react';
// import {
//   Mail,
//   MapPin,
//   Phone,
//   ChevronRight,
//   ChevronUp,
//   Facebook,
//   Instagram,
//   Linkedin,
//   MessageCircleMore,
// } from 'lucide-react';
// import { FaWhatsapp } from "react-icons/fa";
// import Logo from '../../assets/images/lekki_logo_bg.png';

// // Custom CSS
// const customCss = `
//   @keyframes bounce-animation {
//     0%, 100% { transform: translateY(0); }
//     50% { transform: translateY(-10px); }
//   }

//   .animate-bounce-custom {
//     animation: bounce-animation 1s infinite;
//   }

//   @keyframes pulse-once {
//     0%, 100% { transform: scale(1); }
//     50% { transform: scale(1.1); }
//   }
  
//   .animate-pulse-every-5s {
//     animation: pulse-once 1s ease-in-out infinite;
//     animation-delay: 5s;
//   }

//   /* ✨ Continuous Shimmer Effect */
//   @keyframes shimmer-sweep {
//     0% { transform: translateX(-100%); opacity: 0.6; }
//     50% { opacity: 1; }
//     100% { transform: translateX(150%); opacity: 0; }
//   }

//   .footer-shimmer {
//     position: relative;
//     overflow: hidden;
//   }

//   .footer-shimmer::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 80%;
//     height: 100%;
//     background: linear-gradient(
//       120deg,
//       rgba(255,255,255,0) 0%,
//       rgba(255,255,255,0.6) 50%,
//       rgba(255,255,255,0) 100%
//     );
//     animation: shimmer-sweep 4s ease-in-out infinite; 
//   }
// `;


// const Footer = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleScroll = () => {
//     if (window.scrollY > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       {/* Inject custom CSS for animation */}
//       <style>{customCss}</style>
      
//       <footer className="bg-black text-white footer-shimmer">
//         {/* Main footer content */}
//         <div className="container mx-auto px-5 py-20 md:px-8 lg:px-12">
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
//             {/* Discover Section */}
//             <div>
//               <h3 className="mb-4 text-xl font-semibold">Discover</h3>
//               <ul className="space-y-3 text-sm font-light text-white">
//                 <li className="flex items-center">
//                   <ChevronRight className="mr-2 h-4 w-4 text-white" />
//                   <a href="#" className="hover:underline">Ikoyi</a>
//                 </li>
//                 <li className="flex items-center">
//                   <ChevronRight className="mr-2 h-4 w-4 text-white" />
//                   <a href="#" className="hover:underline">Lekki</a>
//                 </li>
//                 <li className="flex items-center">
//                   <ChevronRight className="mr-2 h-4 w-4 text-white" />
//                   <a href="#" className="hover:underline">Banana Island</a>
//                 </li>
//               </ul>
//             </div>

//             {/* Contact Us Section */}
//             <div>
//               <h3 className="mb-4 text-xl font-semibold">Contact Us</h3>
//               <div className="space-y-4 text-sm font-light text-white">
//                 <div className="flex items-start">
//                   <MapPin className="mr-2 mt-1 h-5 w-5 flex-shrink-0" />
//                   <span className="max-w-xs">
//                     4th floor Kunech Towers, Km 18 Osapa, Lekki Penninsula II, Lagos, Nigeria
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <Mail className="mr-2 h-5 w-5 flex-shrink-0" />
//                   <a href="mailto:info@edenoasisrealty.com" className="hover:underline">
//                     info@Lekkikoyi.com
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer with dark orange background */}
//         <div className="bg-black/10 py-5">
//           <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-sm text-white md:flex-row md:px-8 lg:px-16">
//             {/* Copyright */}
//             <div className="order-2 text-center text-white font-light md:order-1 md:text-left">
//               © Lekkikoyi - All rights reserved
//             </div>

//             {/* Logo */}
//             <div className="order-1 flex flex-col items-center gap-1 md:order-2">
//               <img src={Logo} alt="Lekkikoyi Logo" className="h-20 w-auto" />
//               {/* <div className="text-xs font-light tracking-widest">LEKKIKOYI</div> */}
//             </div>

//             {/* Social Icons */}
//             <div className="order-3 flex items-center gap-4">
//               <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5 transition-colors hover:text-gray-700 text-white" /></a>
//               <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5 transition-colors hover:text-gray-700 text-white" /></a>
//               <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 transition-colors hover:text-gray-700 text-white" /></a>
//               <a href="#" aria-label="WhatsApp"><MessageCircleMore className="h-5 w-5 transition-colors hover:text-gray-700 text-white" /></a>
//             </div>
//           </div>
//         </div>

//         {/* Floating Buttons */}
//         <div className="fixed bottom-37 right-4 z-50">
//           {/* 'Got any questions?' button with pulse animation */}
//           <a
//             href="tel:2348130082248"
//             className="group flex items-center gap-3 rounded-full bg-slate-900/80 px-4 py-3 text-white shadow-lg backdrop-blur-sm transition-all duration-300 animate-pulse-every-5s"
//             aria-label="Got any questions?"
//           >
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-400 text-white transition-all duration-300 group-hover:scale-125 group-hover:bg-green-600">
//               <FaWhatsapp className="h-5 w-5" />
//             </div>
//             <span className="text-sm font-semibold">Got any questions?</span>
//           </a>
//         </div>
//       </footer>

//       {/* Scroll to Top Button, visible only on scroll */}
//       {isVisible && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff0000] text-white shadow-lg transition-transform hover:scale-110"
//           aria-label="Scroll to top"
//         >
//           <ChevronUp className="h-6 w-6" />
//         </button>
//       )}
//     </>
//   );
// };

// const App = () => {
//   return (
//       <Footer />
//   );
// };

// export default App;




//......................................................................
import React, { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ChevronUp,
  ChevronRight, 
  Youtube,
  YoutubeIcon,
  LinkedinIcon
} from "lucide-react";
import { FaLinkedin, FaWhatsapp, FaYoutube, FaYoutubeSquare } from "react-icons/fa";
import Logo from "../../assets/images/lekki_logo_bg.png";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="bg-black backdrop-blur-sm text-white shadow-[0_-4px_10px_rgba(0,0,0,0.04)] px-4">
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">
          {/* Logo & brief */}
          <div className="space-y-5">
            <img src={Logo} alt="Lekkikoyi Logo" className="h-16 w-auto" />
            <p className="text-sm leading-relaxed text-white">
              Premium real estate listings in Ikoyi, Lekki, Banana Island and
              beyond. We connect you with your dream property.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/lekkikoyi/?hl=en"
                aria-label="Instagram"
                className="hover:text-red-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/2348130082248"
                aria-label="WhatsApp"
                className="hover:text-green-500 transition-colors"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@LekkiKoyi"
                aria-label="LinkedIn"
                className="hover:text-red-600 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-red-600 transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Discover</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-red-600 transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4" />
                  Ikoyi 
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-600 transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4" />
                  Lekki
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-red-600 transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4" />
                  Banana Island
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-500" />
                <span>
                  Olamijuyin Avenue, Parkview Estate,
                  <br /> 
                  Ikoy, Lagos
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-500" />
                <a
                  href="mailto:info@lekkikoyi.com"
                  className="hover:text-red-600 transition-colors"
                >
                  info@lekkikoyi.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Lekkikoyi — All rights reserved</p>
          <p className="text-gray-400">
            Designed for a seamless real estate experience.
          </p>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/2348130082248"
        className="fixed bottom-20 right-5 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp className="h-5 w-5" />
        <span className="text-sm font-medium">Got any questions?</span>
      </a>

      {/* Scroll-to-top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default Footer;
//.................................................................................................................


