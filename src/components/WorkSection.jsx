import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowUpRight, HiArrowRight } from 'react-icons/hi2';

import workVid1 from '../assets/work-1.mp4';
import workVid2 from '../assets/work-2.mp4';
import workVid3 from '../assets/work-3.mp4';

const WORK_DATA = [
  {
    id: 1,
    title: "Van nul naar vol,\nbinnen 3 weken",
    tag: "Bullit",
    color: "#FF5E26",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    video: workVid1,
    mobileRotate: -3,
  },
  {
    id: 2,
    title: "Zacht in smaak,\nsterk in beeld",
    tag: "Roasta",
    color: "#0c82fb",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop",
    video: workVid2,
    mobileRotate: 3,
  },
  {
    id: 3,
    title: "Content die écht\nsmaakt (en raakt)",
    tag: "Loco",
    color: "#27ce85",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    video: workVid3,
    mobileRotate: -2,
  }
];

const WorkCard = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <motion.div
      animate={{ rotate: isMobile ? data.mobileRotate : 0 }}
      whileHover={{
        y: -8,
        rotate: isMobile ? -(data.mobileRotate) : -1.5,
        scale: 1.03,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="w-full aspect-[4/5] lg:aspect-[3/4.2] relative rounded-[32px] lg:rounded-[48px] border-[5px] lg:border-[6px] flex flex-col justify-end overflow-hidden group cursor-pointer shadow-sm"
      style={{ borderColor: data.color, WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          src={data.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content wrapper explicitly inset from all sides to float well inside the image */}
      <div className="absolute bottom-4 left-4 right-4 lg:bottom-5 lg:left-5 lg:right-5 z-10">
        
        {/* Floating Arrow Button - Rocket Fly-Through Animation */}
        <div className="absolute right-4 lg:right-6 top-0 -translate-y-[45%] z-20 w-11 h-11 lg:w-13 lg:h-13 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 overflow-hidden">
          <div className="relative w-6 h-6 flex items-center justify-center pointer-events-none">
            {/* Original Icon - Flies out diagonally top-right */}
            <span
              className="absolute transition-all duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-0 text-black"
            >
              <HiArrowUpRight size={22} strokeWidth={1} />
            </span>

            {/* New Icon - Flies in diagonally from bottom-left */}
            <span
              className="absolute opacity-0 -translate-x-6 translate-y-6 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 text-black"
            >
              <HiArrowUpRight size={22} />
            </span>
          </div>
        </div>

        {/* The Hybrid Shape Wrapper - Built with compositing to ensure 100% true rounded corners on all sides */}
        <div className="relative w-full px-6 py-6 pb-6 lg:px-8 lg:py-8 lg:pb-8 pt-12 lg:pt-14">
          
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
             {/* Top slanted part providing top rounded corners without sharp clip-path cuts */}
             <div 
               className="absolute top-0 w-full h-[60%] rounded-[18px] lg:rounded-[24px]" 
               style={{ transform: 'skewY(-4deg)', transformOrigin: 'top right', backgroundColor: data.color }} 
             />
             {/* Bottom straight part providing straight bottom & bottom rounded corners */}
             <div 
               className="absolute bottom-0 w-full h-[60%] rounded-[18px] lg:rounded-[24px]" 
               style={{ backgroundColor: data.color }} 
             />
          </div>

          <h3 className="text-white text-[20px] sm:text-2xl lg:text-[26px] xl:text-[28px] font-bold leading-[1.05] tracking-tight mb-5 whitespace-pre-line relative z-10">
            {data.title}
          </h3>
          <span className="inline-block px-4 py-2 md:px-5 md:py-2.5 bg-white/20 text-white rounded-[8px] text-[11px] lg:text-xs font-bold uppercase tracking-widest backdrop-blur-md relative z-10 shadow-sm border border-white/10">
            {data.tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const WorkSection = () => {
  return (
    <section id="work" className="max-w-[1700px] mx-auto px-6 lg:px-12 py-24 lg:py-40 bg-[#F8F5F0]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-start">

        {/* Column 1: Text & Card 1 */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="mb-20 lg:mb-32">
            <h2 className="text-[4rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-black tracking-[-0.04em] leading-[0.85] text-[#111] mb-8 whitespace-nowrap">
              Content<br />dat scoort.
            </h2>
            <p className="text-xl md:text-[22px] lg:text-[26px] font-bold leading-snug text-black max-w-[30rem] mb-10">
              Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
            </p>

            <motion.button
              whileHover={{ y: -8, scale: 1.05, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="group inline-flex items-center gap-3 border-[2.5px] border-black rounded-[14px] px-3 py-2 pr-2 hover:shadow-lg transition-shadow active:scale-95 origin-bottom-left"
            >
              <span className="font-bold text-sm lg:text-[15px] ml-2 text-[#111]">
                Bekijk al ons werk
              </span>
              <div className="w-9 h-9 bg-[#111] text-white rounded-[10px] flex items-center justify-center shadow-sm">
                <HiArrowRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-rotate-[15deg]" />
              </div>
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
          >
            <WorkCard data={WORK_DATA[0]} />
          </motion.div>
        </div>

        {/* Column 2: Card 2 - Offset downwards manually on large screens to reduce huge steps */}
        <div className="lg:col-span-4 mt-8 lg:mt-[28rem] xl:mt-[32rem]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <WorkCard data={WORK_DATA[1]} />
          </motion.div>
        </div>

        {/* Column 3: Card 3 - Offset slightly downwards on large screens */}
        <div className="lg:col-span-4 mt-8 lg:mt-[22rem] xl:mt-[25rem]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <WorkCard data={WORK_DATA[2]} />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WorkSection;
