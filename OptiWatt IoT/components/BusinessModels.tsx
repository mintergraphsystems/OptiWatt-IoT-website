import React from 'react';

const ModelCard: React.FC<{ icon: JSX.Element; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-white rounded-full p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 w-72 h-72 mx-auto">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4 flex-shrink-0">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
    </div>
);

const BusinessModels: React.FC = () => {
  const models = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M8 8l1.414-1.414M14.586 14.586L16 16m.001-8l-1.415 1.414M8 16l1.414 1.414M12 12a2 2 0 110-4 2 2 0 010 4z" /></svg>,
      title: "Hardware Sales",
      description: "We sell IoT devices like smart plugs, sensors, and energy meters directly to customers."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6m-6 0H9m0 0h.01M17 19v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v10m6 0h-6" /></svg>,
      title: "Data Analytics Service",
      description: "Premium analytics to provide deep insights and personalized energy-saving recommendations."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      title: "Professional Services",
      description: "Expert services for large-scale projects like commercial buildings and multi-unit properties."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 18v-2m0 0h.01M12 6v-2m0 0h.01M12 12h.01M12 12h.01M12 18h.01M12 6h.01M7 12h.01M17 12h.01M7 12h.01M17 12h.01" /></svg>,
      title: "Data Monetization",
      description: "Anonymized energy data for third parties like utility companies, researchers, and smart city projects."
    }
  ];

  return (
    <section id="business-models" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900">Our Business <span className="text-blue-600">Models</span></h2>
          <p className="text-lg text-slate-600 mt-2">Flexible approaches to meet diverse market needs.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, index) => (
            <ModelCard key={index} icon={model.icon} title={model.title} description={model.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModels;