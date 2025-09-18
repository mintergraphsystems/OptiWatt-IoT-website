import React from 'react';
import Services from '../components/Services';
import AnimatedSection from '../components/AnimatedSection';

const ProcessStep: React.FC<{ icon: JSX.Element; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 mb-4 mx-auto">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const IndustryCard: React.FC<{ icon: JSX.Element; name: string; }> = ({ icon, name }) => (
    <div className="bg-white p-6 rounded-lg text-center shadow-md border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="text-blue-600 w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-sky-100 rounded-full">
            {icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-800">{name}</h3>
    </div>
);


const ServicesPage: React.FC = () => {
  return (
    <>
      <AnimatedSection>
          <section 
              className="relative py-32 md:py-48 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop')" }}
              aria-labelledby="services-page-title"
          >
              <div className="absolute inset-0 bg-slate-900 bg-opacity-60"></div>
              <div className="relative z-10 container mx-auto px-6 text-center text-white">
                  <h1 id="services-page-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                      Our Services
                  </h1>
                  <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                      A complete ecosystem of IoT services designed to help you achieve your energy efficiency and sustainability goals.
                  </p>
              </div>
          </section>
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
         <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-slate-900">Our Client-Centric <span className="text-blue-600">Process</span></h2>
                    <p className="text-lg text-slate-600 mt-2">We work with you every step of the way to ensure success.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ProcessStep 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                        title="1. Discovery"
                        description="We start by understanding your unique challenges and goals."
                    />
                     <ProcessStep 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 13v- hükümet" /></svg>}
                        title="2. Strategy"
                        description="We design a tailored IoT strategy and solution architecture."
                    />
                     <ProcessStep 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0 3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                        title="3. Implementation"
                        description="Our experts deploy and integrate the solution seamlessly."
                    />
                     <ProcessStep 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        title="4. Support"
                        description="We provide ongoing support and optimization to ensure long-term value."
                    />
                </div>
            </div>
        </section>
      </AnimatedSection>
      <AnimatedSection>
        <section className="py-20 bg-sky-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-slate-900">Industries We <span className="text-blue-600">Power</span></h2>
                    <p className="text-lg text-slate-600 mt-2 max-w-3xl mx-auto">Our versatile solutions are tailored to meet the unique energy demands of various sectors.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    <IndustryCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-8h1m-1 4h1m-1 4h1M9 21v-3.07a2 2 0 01.15-.79L10 16v0a2 2 0 012 0v1.14a2 2 0 01.15.79V21m-4 0h4" /></svg>}
                        name="Commercial Buildings"
                    />
                    <IndustryCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12zm0 0l4-4m5 4l4-4" /><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12z" /></svg>}
                        name="Industrial & Manufacturing"
                    />
                    <IndustryCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                        name="Retail & Hospitality"
                    />
                     <IndustryCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
                        name="Smart Homes & Residential"
                    />
                </div>
            </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default ServicesPage;