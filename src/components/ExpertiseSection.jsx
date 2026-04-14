import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EXPERTISE_DATA = [
  {
    id: '01',
    title: 'Social strategy',
    subtitle: 'Slimme strategie. Sterke start.',
    desc: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.',
    cta: 'Meer over social strategie',
    bgColor: '#FDFBF7',
    textColor: '#111',
    numColor: 'rgba(0,0,0,0.05)',
    btnColor: '#FF5E26',
    borderColor: '#FF5E26',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'Content creation',
    subtitle: 'Content die opvalt en raakt.',
    desc: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
    cta: 'Meer over content creatie',
    bgColor: '#F7C1FF',
    textColor: '#111',
    numColor: 'rgba(255,255,255,0.4)',
    btnColor: '#111',
    borderColor: '#111',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Activation',
    subtitle: 'Zichtbaar waar en wanneer het telt.',
    desc: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroup is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.',
    cta: 'Meer over activatie',
    bgColor: '#27CE85',
    textColor: '#111',
    numColor: 'rgba(255,255,255,0.4)',
    btnColor: '#111',
    borderColor: '#FFF',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '04',
    title: 'Data',
    subtitle: 'Inzichten die impact maken.',
    desc: 'We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.',
    cta: 'Meer over data',
    bgColor: '#0C82FB',
    textColor: '#111',
    numColor: 'rgba(255,255,255,0.4)',
    btnColor: '#111',
    borderColor: '#FFF',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
  }
];

const ExpertiseSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const totalCards = cards.length;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${(totalCards - 1) * 100}%`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (totalCards - 1),
            duration: { min: 0.4, max: 0.8 },
            delay: 0.1,
            ease: "power2.inOut"
          }
        }
      });

      cards.forEach((card, index) => {
        if (index > 0) {
          gsap.set(card, { yPercent: 100 });
        }
      });

      cards.forEach((card, index) => {
        if (index === 0) return;
        
        const currentCard = card;
        const previousCardInner = cards[index - 1].querySelector('.inner-card');
        
        tl.to(currentCard, {
          yPercent: 0,
          ease: "none",
          duration: 1
        }, index === 1 ? ">" : ">-0.1")
        
        .to(previousCardInner, {
          scale: 0.94,
          ease: "none",
          duration: 1
        }, "<");
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full mt-6 md:mt-16 overflow-hidden">
      <div ref={triggerRef} className="relative h-screen w-full bg-[#F8F5F0]">
        {EXPERTISE_DATA.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => (cardsRef.current[i] = el)}
            className="absolute top-0 left-0 w-full h-screen flex items-center justify-center px-6 py-8 lg:px-10 origin-top will-change-transform"
            style={{ zIndex: i + 1 }}
          >
            <div 
              className="inner-card max-w-[1600px] w-full h-[85vh] md:h-[75vh] rounded-[30px] md:rounded-[50px] relative flex flex-col md:flex-row items-center md:items-stretch overflow-hidden px-6 py-10 sm:px-8 md:px-20 lg:px-28"
              style={{ backgroundColor: card.bgColor }}
            >
              {/* Desktop Header Badge */}
              <div className="hidden md:block absolute top-8 left-8 md:top-12 md:left-20 z-20">
                <span className="px-3 py-1.5 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-[#E8E2D9] rounded-sm md:rounded-md text-[11px] md:text-xs lg:text-sm font-bold uppercase tracking-widest text-[#444]">
                  Expertise
                </span>
              </div>

              {/* Mobile Header (Badge + Number in one row) */}
              <div className="flex md:hidden justify-between items-center w-full mb-3 shrink-0">
                <span className="px-2.5 py-1 bg-[#E8E2D9] rounded-sm text-[10px] font-bold uppercase tracking-widest text-[#444]">
                  Expertise
                </span>
                <span className="text-[3.5rem] font-medium leading-none text-[#111] opacity-20">
                  {card.id}
                </span>
              </div>

              {/* Flattened Grid for perfect mobile/desktop ordering */}
              <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-y-5 md:gap-y-0 md:gap-x-10 lg:gap-x-20 z-10">
                
                {/* 1. TITLE (Mobile: Order 1, Desktop: Col 1-7) */}
                <div className="col-span-1 md:col-span-7 order-1 md:order-1 flex justify-start items-center">
                  <h2 
                    className="text-[2.5rem] sm:text-[3rem] md:text-6xl lg:text-[6.5rem] xl:text-[7.5rem] font-black tracking-[-0.04em] whitespace-nowrap leading-[1] md:leading-[0.85] md:mb-16 lg:mb-32" 
                    style={{ wordSpacing: '-0.15rem' }}
                  >
                    {card.title}
                  </h2>
                </div>

                {/* 2. IMAGE BLOCK (Mobile: Order 2 Left-aligned, Desktop: Col 8-12 Right-aligned & Number) */}
                <div className="col-span-1 md:col-span-5 order-2 md:order-2 flex flex-col justify-start items-start md:items-end w-full md:row-span-2">
                  
                  {/* Desktop Number physically above the image */}
                  <div className="hidden md:flex w-[280px] lg:w-[350px] justify-end mb-4">
                     <span 
                      className="text-[5.5rem] lg:text-[7rem] font-semibold leading-none opacity-25"
                      style={{ color: card.textColor || '#111' }}
                     >
                      {card.id}
                    </span>
                  </div>

                  {/* Image Container */}
                  <div 
                    className="relative w-[150px] h-[180px] sm:w-[180px] sm:h-[220px] md:w-[280px] md:h-[350px] lg:w-[350px] lg:h-[480px] rounded-[18px] md:rounded-[40px] overflow-hidden border-[4px] md:border-[6px] shrink-0 transition-transform duration-700 hover:scale-105"
                    style={{ borderColor: card.borderColor }}
                  >
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover rounded-[14px] md:rounded-[34px]" 
                    />
                  </div>
                </div>

                {/* 3. DETAILS & CTA (Mobile: Order 3, Desktop: Col 1-7 bottom) */}
                <div className="col-span-1 md:col-span-7 order-3 md:order-3 max-w-xl flex flex-col justify-end mt-2 md:mt-0">
                  <h3 className="text-lg md:text-3xl font-bold mb-2 md:mb-4">
                    {card.subtitle}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium opacity-80 leading-snug mb-5 md:mb-10">
                    {card.desc}
                  </p>

                  <button
                    className="group flex items-center justify-between gap-3 md:gap-4 rounded-[16px] md:rounded-full px-3 py-2 md:px-5 md:py-2.5 transition-all hover:scale-[1.03] active:scale-[0.97] shadow-sm w-fit"
                    style={{ backgroundColor: card.btnColor, color: '#FFF' }}
                  >
                    <span className="font-bold text-[13px] md:text-[15px] lg:text-base ml-1">{card.cta}</span>
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-white text-black shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </div>
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;