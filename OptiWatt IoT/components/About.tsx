import React from 'react';

const MetricItem: React.FC<{ icon: JSX.Element; value: string; label: string }> = ({ icon, value, label }) => (
  <div className="bg-sky-50 p-6 rounded-lg text-center flex flex-col items-center border border-slate-200">
    <div className="text-blue-600 mb-2">
      {icon}
    </div>
    <p className="text-4xl font-extrabold text-slate-900">{value}</p>
    <p className="text-sm font-medium text-slate-500 tracking-wide uppercase">{label}</p>
  </div>
);

interface AboutProps {
  showMetrics?: boolean;
}

const About: React.FC<AboutProps> = ({ showMetrics = true }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Main About Content */}
        <div className={`grid lg:grid-cols-5 gap-16 items-center ${showMetrics ? 'mb-20' : ''}`}>
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Pioneering the Future of <span className="text-blue-600">Energy Management</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              OptiWatt IoT was founded on a simple yet powerful idea: to leverage technology to create a more sustainable and energy-efficient world. We are a passionate team of engineers, data scientists, and visionaries committed to transforming how individuals and industries interact with energy.
            </p>
            <p className="text-lg text-slate-600">
              Our mission is to deliver intelligent, intuitive, and impactful IoT solutions that not only reduce costs but also empower our customers to make a positive environmental impact.
            </p>
          </div>
          <div className="lg:col-span-2">
            <img 
              src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2071&auto=format&fit=crop" 
              alt="Advanced technology and engineering" 
              className="rounded-lg shadow-xl w-full h-full object-cover" 
            />
          </div>
        </div>
        
        {/* Key Metrics Section */}
        {showMetrics && (
          <>
            <div className="text-center mb-16">
                <h3 className="text-3xl font-extrabold text-slate-900">Our Impact in <span className="text-blue-600">Numbers</span></h3>
                <p className="text-lg text-slate-600 mt-2">Quantifying our commitment to efficiency and sustainability.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <MetricItem 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                    value="50M+" 
                    label="kWh Saved" />
                <MetricItem 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                    value="10k+" 
                    label="Devices Deployed" />
                <MetricItem 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    value="99.9%" 
                    label="System Uptime" />
                <MetricItem 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86l-.477-2.387a2 2 0 01.547-1.806z" /></svg>}
                    value="25k" 
                    label="Tons of CO2 Reduced" />
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default About;