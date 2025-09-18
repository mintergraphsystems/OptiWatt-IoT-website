import React from 'react';
import BusinessModels from '../components/BusinessModels';
import AnimatedSection from '../components/AnimatedSection';

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
    <details className="p-6 border-l-4 border-blue-600 bg-white rounded-lg group shadow-md border border-slate-200">
        <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-semibold text-slate-900">{question}</h5>
            <span className="ml-4 flex-shrink-0 text-slate-500">
                <svg className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </span>
        </summary>
        <p className="mt-4 text-slate-600">
            {answer}
        </p>
    </details>
);

const BenefitCard: React.FC<{ icon: JSX.Element; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
        <div className="flex-shrink-0 text-blue-600 bg-blue-100 rounded-full p-3 mb-4 w-12 h-12 flex items-center justify-center">
            {icon}
        </div>
        <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
    </div>
);


const ModelsPage: React.FC = () => {
  return (
    <>
      <AnimatedSection>
          <section 
              className="relative py-32 md:py-48 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format&fit=crop')" }}
              aria-labelledby="models-page-title"
          >
              <div className="absolute inset-0 bg-slate-900 bg-opacity-60"></div>
              <div className="relative z-10 container mx-auto px-6 text-center text-white">
                  <h1 id="models-page-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                      Business Models
                  </h1>
                  <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                      We offer a variety of flexible and scalable business models designed to foster partnership and drive mutual success.
                  </p>
              </div>
          </section>
      </AnimatedSection>
      <AnimatedSection>
        <BusinessModels />
      </AnimatedSection>
       <AnimatedSection>
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-slate-900">Why Partner <span className="text-blue-600">With Us?</span></h2>
                    <p className="text-lg text-slate-600 mt-2 max-w-3xl mx-auto">Join us in the IoT revolution and unlock new opportunities for growth and innovation.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <BenefitCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
                        title="Market Leadership"
                        description="Align with a leader in the fast-growing IoT and energy management market."
                    />
                    <BenefitCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>}
                        title="Scalable Technology"
                        description="Leverage our robust and scalable platform to build and expand your own offerings."
                    />
                    <BenefitCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1" /></svg>}
                        title="Shared Revenue Growth"
                        description="Participate in business models designed for mutual financial success and long-term value."
                    />
                    <BenefitCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        title="Dedicated Partner Support"
                        description="Access our team of experts for technical, marketing, and sales support."
                    />
                </div>
            </div>
        </section>
      </AnimatedSection>
      <AnimatedSection>
        <section className="py-20 bg-sky-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-slate-900">Partnership <span className="text-blue-600">FAQs</span></h2>
                    <p className="text-lg text-slate-600 mt-2">Answers to common questions about partnering with OptiWatt.</p>
                </div>
                <div className="max-w-4xl mx-auto space-y-4">
                    <FaqItem 
                        question="What kind of support do you offer for hardware sales?"
                        answer="We provide comprehensive documentation, firmware updates, and a dedicated support channel for all our hardware partners to ensure smooth integration and operation."
                    />
                    <FaqItem 
                        question="How is data privacy handled in your Data Monetization model?"
                        answer="Data privacy is our top priority. All data is completely anonymized and aggregated, removing any personally identifiable information. We adhere to strict privacy regulations like GDPR to ensure data is handled responsibly."
                    />
                     <FaqItem 
                        question="Can the professional services be customized for our specific industry?"
                        answer="Absolutely. Our professional services are fully customizable. We work closely with you to understand your industry's unique requirements and tailor our large-scale IoT solutions accordingly."
                    />
                </div>
            </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default ModelsPage;