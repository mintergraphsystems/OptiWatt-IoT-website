import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const ValueCard: React.FC<{ icon: JSX.Element; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="group bg-white p-6 rounded-lg text-center border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
        <div className="text-blue-600 w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-blue-100 rounded-full transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
    </div>
);

const DifferenceCard: React.FC<{ icon: JSX.Element; title: string; }> = ({ icon, title }) => (
    <div className="bg-white p-6 rounded-lg text-center shadow-md border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
         <div className="text-blue-600 w-12 h-12 flex items-center justify-center mx-auto mb-3">
            {icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
    </div>
);

const TechCard: React.FC<{ name: string }> = ({ name }) => (
    <div className="group bg-white p-4 rounded-lg text-center shadow-sm border border-slate-200 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:bg-blue-600">
        <p className="font-semibold text-slate-700 transition-colors duration-300 group-hover:text-white">{name}</p>
    </div>
);


const AboutPage: React.FC = () => {
    const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        window.location.hash = path;
    };

    return (
        <>
            <AnimatedSection>
                <section 
                    className="relative py-32 md:py-48 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format=fit=crop')" }}
                    aria-labelledby="about-page-title"
                >
                    <div className="absolute inset-0 bg-slate-900 bg-opacity-60"></div>
                    <div className="relative z-10 container mx-auto px-6 text-center text-white">
                        <h1 id="about-page-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                            About OptiWatt IoT
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                            We are innovators and problem-solvers dedicated to creating a smarter, more sustainable world through technology.
                        </p>
                    </div>
                </section>
            </AnimatedSection>

            {/* Our Story & Mission Section */}
            <AnimatedSection>
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Our Story: The Spark Behind <span className="text-blue-600">OptiWattIoT</span></h2>
                                <p className="text-slate-600 mb-6 text-lg">
                                    Founded in 2021 by technology enthusiasts, OptiWattIoT was born from a frustration with the lack of real-time insights in traditional energy systems. We envisioned a world where technology could be harnessed to create smarter, more sustainable energy solutions for everyone.
                                </p>
                                <blockquote className="border-l-4 border-blue-500 pl-6 py-2">
                                    <p className="text-slate-700 text-xl font-medium italic">
                                        "Our mission is to design and deliver innovative, user-friendly IoT solutions that optimize energy usage, reduce operational costs, and promote environmental sustainability."
                                    </p>
                                </blockquote>
                            </div>
                            <div className="order-1 lg:order-2">
                                <img
                                    src="https://images.yourstory.com/cs/2/f02aced0d86311e98e0865c1f0fe59a2/aiinhr-1586017567264-1603180969603.png?fm=auto&ar=2:1&mode=crop&crop=faces"
                                    alt="Team collaborating on innovative technology"
                                    className="rounded-lg shadow-2xl w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
            
            {/* Our Vision for the Future */}
            <AnimatedSection>
                <section className="py-20 bg-sky-50">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format=fit=crop"
                                    alt="Global network and future technology"
                                    className="rounded-lg shadow-2xl w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Our Vision for the <span className="text-blue-600">Future</span></h2>
                                <p className="text-slate-600 mb-6 text-lg">
                                    We aim to be a global leader in IoT-driven energy management. Our vision extends beyond simple monitoring; we are building an intelligent ecosystem that can predict energy needs, automate complex systems, and contribute to the development of smart cities.
                                </p>
                                <p className="text-slate-600 text-lg">
                                    By advancing the use of AI and machine learning, we strive to create a future where energy is consumed with maximum efficiency, paving the way for a truly sustainable planet.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* The OptiWatt Difference Section */}
            <AnimatedSection>
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">The OptiWattIoT <span className="text-blue-600">Difference</span></h2>
                        <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-12">
                            We don’t just sell hardware; we provide a complete ecosystem. By combining state-of-the-art devices with powerful analytics, we turn raw data into actionable, energy-saving strategies.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                           <DifferenceCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
                                title="State-of-the-Art Devices"
                           />
                           <DifferenceCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" /></svg>}
                                title="Powerful Data Analytics"
                           />
                           <DifferenceCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>}
                                title="Seamless Integration"
                           />
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* Technology Stack Section */}
            <AnimatedSection>
                <section className="py-20 bg-sky-50">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Our <span className="text-blue-600">Technology Stack</span></h2>
                        <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-12">
                           We leverage a robust, scalable, and secure technology stack to deliver our cutting-edge IoT solutions.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <TechCard name="IoT & Edge Computing" />
                            <TechCard name="Cloud Infrastructure" />
                            <TechCard name="AI & Machine Learning" />
                            <TechCard name="Big Data Analytics" />
                        </div>
                    </div>
                </section>
            </AnimatedSection>


            {/* Core Values Section */}
            <AnimatedSection>
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-extrabold text-slate-900">What <span className="text-blue-600">Drives Us</span></h2>
                            <p className="text-lg text-slate-600 mt-2">Our core values are the bedrock of our company culture and decision-making.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                            <ValueCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
                                title="Innovation"
                                description="We are constantly exploring new technologies to stay at the forefront of the IoT revolution."
                            />
                            <ValueCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3" /></svg>}
                                title="Sustainability"
                                description="A commitment to a greener future is at the core of everything we do, from our products to our practices."
                            />
                            <ValueCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                                title="Customer Empowerment"
                                description="We give our customers the tools and insights they need to take full control of their energy consumption."
                            />
                            <ValueCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                title="Integrity"
                                description="We operate with transparency and are committed to building lasting relationships based on trust and reliability."
                            />
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection>
                 <section className="bg-blue-600">
                    <div className="container mx-auto px-6 py-16 text-center">
                        <h2 className="text-3xl font-extrabold text-white">Ready to Join Our Mission?</h2>
                        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
                           Whether you're a potential customer or a future team member, we'd love to connect. Let's build a sustainable future together.
                        </p>
                        <a 
                            href="#/contact" 
                            onClick={(e) => handleNav(e, '#/contact')}
                            className="mt-8 inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Get In Touch
                        </a>
                    </div>
                </section>
            </AnimatedSection>
        </>
    );
};

export default AboutPage;