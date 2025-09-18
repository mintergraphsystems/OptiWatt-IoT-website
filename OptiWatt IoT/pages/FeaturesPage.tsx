import React from 'react';
import Features from '../components/Features';
import AnimatedSection from '../components/AnimatedSection';

const HowItWorksStep: React.FC<{ number: number; title: string; description: string; }> = ({ number, title, description }) => (
    <div className="relative text-center md:text-left">
        <div className="flex justify-center md:justify-start items-center mb-4">
            <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 text-white font-bold text-xl rounded-full">
                {number}
            </div>
            <h3 className="ml-4 text-2xl font-bold text-slate-900">{title}</h3>
        </div>
        <p className="text-slate-600">{description}</p>
    </div>
);

const DashboardFeature: React.FC<{ icon: JSX.Element; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 text-blue-600 bg-blue-100 rounded-full p-3 mt-1">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-lg text-slate-900">{title}</h4>
            <p className="text-slate-600">{description}</p>
        </div>
    </div>
);


const FeaturesPage: React.FC = () => {
  return (
    <>
      <AnimatedSection>
          <section 
              className="relative py-32 md:py-48 bg-cover bg-center"
              style={{ backgroundImage: "url('https://elinex.nl/images/products/adobestock-877303558.jpeg?resolution=1920x0&quality=95')" }}
              aria-labelledby="features-page-title"
          >
              <div className="absolute inset-0 bg-slate-900 bg-opacity-60"></div>
              <div className="relative z-10 container mx-auto px-6 text-center text-white">
                  <h1 id="features-page-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                      Platform Features
                  </h1>
                  <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                      Explore the powerful, built-in functionalities that make OptiWatt the leading choice for smart energy management.
                  </p>
              </div>
          </section>
      </AnimatedSection>
      <AnimatedSection>
        <Features />
      </AnimatedSection>
      <AnimatedSection>
        <section className="py-20 bg-sky-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-slate-900">How It <span className="text-blue-600">Works</span></h2>
                    <p className="text-lg text-slate-600 mt-2">Our simple, three-step process to achieve optimal energy efficiency.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    <HowItWorksStep number={1} title="Install & Connect" description="Easily install our smart IoT devices which seamlessly connect to your existing infrastructure and our cloud platform." />
                    <HowItWorksStep number={2} title="Monitor & Analyze" description="Our platform begins collecting data in real-time. Powerful analytics process this data to identify patterns and waste." />
                    <HowItWorksStep number={3} title="Optimize & Save" description="Receive actionable insights and automated control suggestions to reduce consumption, lower costs, and improve sustainability." />
                </div>
            </div>
        </section>
      </AnimatedSection>
       <AnimatedSection>
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900">Intuitive <span className="text-blue-600">Dashboard Preview</span></h2>
                    <p className="text-lg text-slate-600 mt-2 max-w-3xl mx-auto">
                        Visualize your data, control your devices, and gain actionable insights from a single, user-friendly interface.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img 
                            src="https://www.rishabhsoft.com/wp-content/uploads/2022/01/Banner-Image-Data-Visualization-Benefits.jpg"
                            alt="Dashboard interface showing charts and graphs"
                            className="rounded-lg shadow-2xl"
                        />
                    </div>
                    <div className="space-y-8">
                        <DashboardFeature
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
                            title="Customizable Widgets"
                            description="Tailor your dashboard view to focus on the metrics that matter most to you and your business."
                        />
                        <DashboardFeature
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
                            title="Historical Data Analysis"
                            description="Dive deep into past performance with comprehensive charts and reporting tools to identify long-term trends."
                        />
                         <DashboardFeature
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>}
                            title="Alerts & Notifications"
                            description="Set up custom alerts for unusual activity or system malfunctions, enabling proactive maintenance and control."
                        />
                    </div>
                </div>
            </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default FeaturesPage;