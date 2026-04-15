import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowUpRight, HiArrowDown } from 'react-icons/hi2';
import orangeGirl from '../assets/orange-girl.webp';

const AboutSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="max-w-[1700px] mx-auto px-6 lg:px-10 pt-32 pb-16 md:pt-48 md:pb-24 bg-[#F9F4EE]">
      <div>

        {/* Main Heading - Resized and Narrowed to hit 4 Lines exactly */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[1.8rem] md:text-[3.2rem] lg:text-[4rem] font-bold leading-[1.05] tracking-tight text-black max-w-5xl mb-16 md:mb-28"
        >
          Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
        </motion.h2>

        {/* Content Grid - Reverted Image Size and Pure Black Text */}
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-40 items-start relative pb-20">

          {/* Left Column: Reverted to Previous Smaller Size with Mobile/Tab Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[35%]"
          >
            <div className="relative group overflow-hidden rounded-[28px] md:rounded-[36px] w-full max-w-[280px] md:max-w-[350px] rotate-[3deg] md:rotate-[4deg] lg:rotate-0 transition-transform duration-500 hover:rotate-0">
              <img
                src={orangeGirl}
                alt="Orange Girl"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Right Column: Pure Black Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-[65%] lg:pt-16"
          >
            <p className="text-lg md:text-2xl lg:text-[1.5rem] font-bold leading-relaxed text-black max-w-xl mb-10 md:mb-16">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
              Zo weet je precies what werkt en what niet. Nooit meer content zonder strategie.
              Nooit meer content zonder resultaat.
            </p>

            {/* Button: Leer ons kennen - Very Compact Padding */}
            <motion.div
              whileHover={{ y: -8, scale: 1.05, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="inline-flex items-center bg-transparent border-[2px] border-black rounded-xl p-0.5 px-2 md:px-5 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group active:scale-95 origin-bottom-left"
            >
              <span className="text-black font-bold text-base md:text-xl mr-4 md:mr-6">Leer ons kennen</span>
              <div className="bg-[#111] rounded-xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white">
                <HiArrowUpRight size={20} />
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Down Indicator - Upscaled & Fixed Rotating */}
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            animate={{ rotate: isHovered ? -12 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={() => {
              const target = document.getElementById('expertise');
              if (!target) return;
              const start = window.scrollY;
              const end = target.getBoundingClientRect().top + window.scrollY;
              const duration = 1400;
              const startTime = performance.now();
              const easeInOutCubic = (t) => t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;
              const step = (now) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                window.scrollTo(0, start + (end - start) * easeInOutCubic(progress));
                if (progress < 1) requestAnimationFrame(step);
              };
              requestAnimationFrame(step);
            }}
            className="absolute bottom-[-20px] right-0 z-50 hidden md:flex items-center justify-center w-14 h-14 rounded-[16px] border-[2px] border-black text-black bg-transparent cursor-pointer active:scale-90 overflow-hidden"
          >
            {/* Inner Arrow Container - Counter-rotating */}
            <motion.div
              animate={{ rotate: isHovered ? 12 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative h-6 w-full flex flex-col items-center pointer-events-none"
            >
              <motion.div
                animate={{
                  y: isHovered ? 45 : 0,
                  opacity: isHovered ? 0 : 1
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute text-black"
              >
                <HiArrowDown size={22} />
              </motion.div>

              <motion.div
                animate={{
                  y: isHovered ? 0 : -45,
                  opacity: isHovered ? 1 : 0
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute text-[#ff5e26]"
              >
                <HiArrowDown size={22} />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
