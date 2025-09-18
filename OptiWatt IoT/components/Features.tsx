import React from 'react';

// Style 1: Updated Feature Card (more modern, left-aligned)
const FeatureCard: React.FC<{ icon: JSX.Element; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 flex flex-col items-start text-left h-full group">
    <div className="relative flex items-center justify-center h-16 w-16 rounded-2xl bg-blue-100 text-blue-600 mb-5 flex-shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
      {icon}
      <div 
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-auto whitespace-nowrap px-3 py-1.5 text-sm font-semibold text-white bg-slate-800 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
        role="tooltip"
      >
        {title}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-800"></div>
      </div>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm flex-grow">{description}</p>
  </div>
);

// Style 2: New Advantage Card (horizontal layout)
const AdvantageCard: React.FC<{ icon: JSX.Element; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-start space-x-5 border border-slate-200">
    <div className="flex-shrink-0 bg-sky-100 text-blue-600 p-4 rounded-full mt-1">
        {icon}
    </div>
    <div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
    </div>
  </div>
);


const Features: React.FC = () => {
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
      title: "Real-time Monitoring",
      description: "Get instant, accurate data on energy consumption from our IoT devices and sensors to spot inefficiencies."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" /></svg>,
      title: "Data Analytics",
      description: "We use advanced analytics to process energy data and provide actionable insights for effective energy-saving strategies."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      title: "Automated Control",
      description: "Our systems can automatically adjust energy use based on your preset rules, optimizing consumption effortlessly."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>,
      title: "Integration & Scalability",
      description: "Our solutions easily connect with your existing infrastructure and can be scaled for any application, from a single smart home to large industrial complexes."
    }
  ];

  const advantages = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
        title: "Secure & Reliable",
        description: "With end-to-end encryption and a 99.9% uptime guarantee, your data and operations are always safe and available."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
        title: "User-Centric Design",
        description: "Our intuitive dashboards and mobile apps are designed for ease of use, putting powerful control at your fingertips."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        title: "Unparalleled Accuracy",
        description: "We leverage state-of-the-art sensors and algorithms to provide highly precise data for better decision-making."
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        title: "Dedicated Support",
        description: "Our expert team is available 24/7 to provide technical assistance and ensure your systems run smoothly."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section 1: Platform Features */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900">Platform <span className="text-blue-600">Features</span></h2>
          <p className="text-lg text-slate-600 mt-2">The core functionalities that power our solutions.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>

        {/* Section 2: Core Advantages */}
        <div className="mt-24">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-slate-900">Core <span className="text-blue-600">Advantages</span></h2>
                <p className="text-lg text-slate-600 mt-2">Why industry leaders choose OptiWatt IoT for their energy solutions.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {advantages.map((advantage, index) => (
                    <AdvantageCard key={index} {...advantage} />
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
