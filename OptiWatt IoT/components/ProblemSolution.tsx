import React from 'react';

const ProblemSolution: React.FC = () => {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>
      ),
      title: "Cost Savings",
      description: "Our system identifies energy waste and implements efficient strategies to save money for both individuals and businesses."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      ),
      title: "Sustainability",
      description: "We help reduce your carbon footprint and contribute to a greener planet by optimizing energy use."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
      title: "Enhanced Comfort",
      description: "We optimize energy usage while maintaining a comfortable and productive environment for you."
    }
  ];

  return (
    <section id="solution" className="py-20 bg-sky-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center">
                <div className="inline-block bg-red-100 p-4 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4">The Challenge</h3>
            </div>
            <p className="text-slate-600 mb-6 text-center">
                Global energy consumption is a critical issue, leading to rising costs, environmental damage, and a lack of real-time control.
            </p>
            <ul className="space-y-4 text-slate-700">
                <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1 flex-shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span><strong className="font-semibold text-slate-800">Rising Costs:</strong> Inefficient systems lead to higher utility bills for everyone.</span>
                </li>
                <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1 flex-shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span><strong className="font-semibold text-slate-800">Environmental Impact:</strong> Wasted energy contributes directly to carbon emissions and climate change.</span>
                </li>
                <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1 flex-shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span><strong className="font-semibold text-slate-800">Lack of Control:</strong> Traditional systems offer no real-time data, making optimization impossible.</span>
                </li>
            </ul>
          </div>

          {/* Solution Section */}
          <div className="p-8">
            <h3 className="text-3xl font-extrabold text-blue-600 mb-4">Our Solution</h3>
            <p className="text-slate-600 mb-8">OptiWattIoT provides a smart solution to monitor, control, and optimize energy usage efficiently, bridging the gap left by traditional systems.</p>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">{benefit.icon}</div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900">{benefit.title}</h4>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;