import React from 'react';

const services = [
  {
    title: "Smart Device Management",
    description: "Full control over your IoT devices, from deployment to maintenance, all from a single, intuitive platform.",
    imageUrl: "https://images.ctfassets.net/16nm6vz43ids/5UW3NsAEovnOyoH0MTGVsE/01afc1a1fbd77e9078245a08ed8c264e/Most_common_smart_home_issues_and_solves.png?fm=webp&q=65",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    )
  },
  {
    title: "IoT Consulting & Strategy",
    description: "Expert guidance to help you navigate the complexities of IoT and develop a strategy that aligns with your business goals.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    )
  },
  {
    title: "Advanced Data Analytics",
    description: "Turn your raw IoT data into actionable insights with our powerful analytics engine. Predict trends and optimize performance.",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D12AQFXn5PNX-_3rg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1692017604684?e=2147483647&v=beta&t=HtgapGWU9jE3QA8NNMwercY0T7fsMe3EkK0TthOMihE",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
    )
  },
  {
    title: "Smart Home Solutions",
    description: "Transform your living space into an intelligent, responsive environment that enhances comfort and saves energy.",
    imageUrl: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2127&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    )
  },
  {
    title: "Predictive Maintenance",
    description: "Monitor equipment health in real-time and predict failures before they happen, minimizing downtime and saving costs.",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    )
  },
  {
    title: "Custom Integration Services",
    description: "Seamlessly integrate our IoT solutions with your existing systems and workflows for a unified operational view.",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
    )
  }
];

const ServiceCard: React.FC<{ title: string; description: string; imageUrl: string; icon: JSX.Element; }> = ({ title, description, imageUrl, icon }) => (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-200">
        <div className="relative overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-6">
            <div className="flex items-center mb-4">
                <div className="relative group/tooltip flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    {icon}
                    <div 
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-auto whitespace-nowrap px-3 py-1.5 text-sm font-semibold text-white bg-slate-800 rounded-md shadow-sm opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                        role="tooltip"
                    >
                        {title}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-800"></div>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            </div>
            <p className="text-slate-600">{description}</p>
        </div>
    </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-sky-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900">What We <span className="text-blue-600">Offer</span></h2>
          <p className="text-lg text-slate-600 mt-2 max-w-2xl mx-auto">A comprehensive suite of IoT services designed to drive efficiency, innovation, and growth.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
