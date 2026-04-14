import React from 'react';
import { motion } from 'framer-motion';
import footerLogo from '../assets/footer-logo.svg';

const Footer = () => {
  return (
    <footer className="h-screen min-h-[800px] relative flex flex-col justify-end bg-[#F8F5F0] overflow-hidden">
      
      {/* Top Half: CTA Section centered dynamically above the slanted block */}
      <div className="absolute top-[10%] inset-x-0 flex flex-col items-center justify-center z-10 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-bold text-black tracking-tight leading-none mb-10 text-center"
        >
          Let's Get Hyped!
        </motion.h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Email Button */}
          <motion.div 
            whileHover={{ y: -5, rotate: -2 }}
            className="group inline-flex items-center gap-3 border-[2.5px] border-black rounded-full pl-5 pr-1 py-1 bg-[#F8F5F0] hover:shadow-lg transition-shadow cursor-pointer"
          >
            <span className="text-black font-extrabold text-[15px] pr-2">Mail ons direct</span>
            <div className="bg-[#111] rounded-full w-10 h-10 flex items-center justify-center text-white shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
              </svg>
            </div>
          </motion.div>

          {/* Get Results Button */}
          <motion.div 
            whileHover={{ y: -5, rotate: 2 }}
            className="group inline-flex items-center gap-3 bg-[#ff5e26] border-[2.5px] border-[#ff5e26] rounded-full pl-5 pr-1 py-1 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <span className="text-white font-extrabold text-[15px] pr-2">Get Results</span>
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-[#ff5e26] shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.5 14.5A2.5 2.5 0 0011 12c-3.968-3-2-8-2-8s2.5 2 4 5c2.25 4.5-.5 7.5-.5 7.5" />
                <path d="M14 20.5A4.5 4.5 0 019.5 16" />
                <path d="M12 22a7 7 0 01-7-7c0-4 3-8 3-8s1 2.5 3 4.5c2 2 3 5 3 5" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Half: Slanted Footer Block */}
      <div className="relative w-full h-[650px] md:h-[500px] lg:h-[460px] z-20 mt-auto bg-[#F8F5F0]">
        
        {/* Inner Wrapper spanning up to site max-width to keep background block symmetrically centered */}
        <div className="relative w-full h-full max-w-[1700px] mx-auto flex items-end">
            
            {/* The SVG Logo IS the left edge of the Slanted Card. NO ROTATION as the SVG has natural slant! */}
            <div className="absolute left-0 bottom-0 pointer-events-none z-0 w-[60vw] md:w-[45vw] lg:w-[32vw] max-w-[550px]">
               <img 
                 src={footerLogo} 
                 alt="Get Hyped Logo Outline" 
                 className="w-full h-auto drop-shadow-[-10px_10px_20px_rgba(0,0,0,0.1)]"
               />
            </div>

            {/* Composite Shape continuing the background to the right perfectly connecting with the SVG's beige background */}
            {/* Placed at w-[90%] right-0 so its left edge hides BEHIND the SVG, letting SVG dictate the strict left border width */}
            <div className="absolute right-0 bottom-0 top-0 w-[95%] lg:w-[85%] -z-10 drop-shadow-[10px_10px_20px_rgba(0,0,0,0.1)]">
              <div 
                 className="absolute top-0 w-full h-[120%] lg:h-full lg:rounded-tr-[60px] bg-[#EAE4D8] origin-top-right right-0"
                 style={{ transform: 'skewY(-8deg)' }}
              />
              <div className="absolute bottom-0 w-full h-[60%] bg-[#EAE4D8]" />
            </div>

            {/* Content Wrapper inside the slanted card -> Bottom Padding Removed */}
            <div className="absolute inset-0 flex flex-col justify-end px-6 lg:px-16 overflow-hidden lg:overflow-visible pb-2 z-10 pointer-events-none">
                
                {/* Master Grid Wrapper for all text elements pushed to the far right */}
                <div className="flex flex-col lg:flex-row justify-end items-end w-full lg:w-auto ml-auto pt-[120px] pointer-events-auto mt-auto mb-3 gap-12 lg:gap-20">
                   
                   {/* Left Cluster: Horizontal Nav Pills & Socials */}
                   <div className="flex flex-col items-start gap-12 lg:gap-[65px] lg:mb-0 mt-10 lg:mt-0">
                      
                      {/* Row 1: Horizontal Pills */}
                      <div className="flex flex-wrap lg:flex-nowrap gap-3 lg:gap-4">
                         <span className="bg-white rounded-[14px] px-5 py-2.5 text-[15px] font-bold text-black shadow-sm border-[2px] border-transparent hover:border-black transition-colors cursor-pointer">Expertises</span>
                         <span className="bg-white rounded-[14px] px-5 py-2.5 text-[15px] font-bold text-black shadow-sm border-[2px] border-transparent hover:border-black transition-colors cursor-pointer">Work</span>
                         <span className="bg-white rounded-[14px] px-5 py-2.5 text-[15px] font-bold text-black shadow-sm border-[2px] border-transparent hover:border-black transition-colors cursor-pointer">About</span>
                         <span className="bg-white rounded-[14px] px-5 py-2.5 text-[15px] font-bold text-black shadow-sm border-[2px] border-transparent hover:border-black transition-colors cursor-pointer">Contact</span>
                      </div>
                      
                      {/* Row 2: Follow Us */}
                      <div className="flex items-center gap-6">
                        <span className="font-extrabold text-black text-[18px]">Follow us</span>
                        <div className="flex gap-4">
                           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-sm">
                             <span className="font-black text-[15px] tracking-tighter">in</span>
                           </div>
                           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-sm">
                             <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
                           </div>
                           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-sm">
                             <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                           </div>
                           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-sm">
                             <svg width="22" height="22" viewBox="0 0 576 512" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.781 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                           </div>
                        </div>
                      </div>
                   </div>

                   {/* Right Cluster: Address Info */}
                   <div className="flex flex-col w-full lg:w-[13rem] gap-[45px] text-[15px] pt-12 lg:pt-0">
                     <div className="flex flex-col gap-1">
                       <h4 className="font-extrabold text-[19px] text-black mb-1.5">Contact</h4>
                       <p className="font-medium text-[#222] cursor-pointer hover:underline tracking-tight">info@gethyped.nl</p>
                       <p className="font-medium text-[#222] tracking-tight">+31 6 1533 7496</p>
                     </div>
                     <div className="flex flex-col gap-1">
                       <h4 className="font-extrabold text-[19px] text-black mb-1.5">Adres</h4>
                       <p className="font-medium text-[#222] tracking-tight">Beltrumsestraat 6,</p>
                       <p className="font-medium text-[#222] tracking-tight">7141 AL Groenlo</p>
                     </div>
                   </div>
                </div>

                {/* Legal Text Row natively aligned underneath corresponding columns */}
                <div className="flex flex-col lg:flex-row justify-end w-full lg:w-auto ml-auto gap-4 lg:gap-20 text-[14px] font-semibold text-gray-500 pointer-events-auto">
                   
                   {/* Under Left Cluster */}
                   <div className="flex w-full lg:w-auto justify-between lg:justify-start lg:gap-24">
                     <span>© 2025 Get Hyped</span>
                     <span>© Design by Dylan</span>
                   </div>

                   {/* Under Right Cluster */}
                   <div className="w-full lg:w-[13rem] flex justify-start">
                     <span className="cursor-pointer hover:text-black transition-colors block">Privacyvoorwaarden</span>
                   </div>
                </div>
            </div>

            {/* Floating Pink Badge anchored over the right wrapper safely spanning ultra wides uniformly */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute top-[-30px] md:top-[-50px] right-[10%] lg:right-[8%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#f8b2f1] flex items-center justify-center shadow-md cursor-pointer z-30"
            >
              {/* Circular Text via SVG Path */}
              <svg className="w-full h-full p-[6px] absolute inset-0" viewBox="0 0 100 100">
                <path id="curve" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                <text className="text-[12.5px] font-black fill-black uppercase tracking-[1px]">
                  <textPath href="#curve" startOffset="0%">
                    • GET HYPED • GET RESULTS • GET NOTICED 
                  </textPath>
                </text>
              </svg>
              <span className="font-black text-4xl text-black tracking-tighter" style={{ transform: 'scaleY(1.3)' }}>GH</span>
            </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
