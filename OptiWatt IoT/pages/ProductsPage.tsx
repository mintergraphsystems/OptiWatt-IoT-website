import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

interface Product {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    icon: JSX.Element;
}

const products: Product[] = [
    {
        id: 'uts-prs',
        title: 'UTS & PRS Terminals',
        description: 'High-performance Unreserved Ticketing System (UTS) and Passenger Reservation System (PRS) terminals designed for speed and reliability.',
        imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/3/VP/TY/XV/10556472/arai-approved-gps-device.jpg',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 012-2h3a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" /></svg>,
    },
    {
        id: 'thin-client',
        title: 'Thin Client',
        description: 'Secure, compact, and energy-efficient thin clients for server-based networks, reducing maintenance and operational costs.',
        imageUrl: 'https://www.leadtek.com/p_images/zoom/51015_1Z.jpg',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
    },
    {
        id: 'atvm',
        title: 'Automatic Ticket Vending Machine',
        description: 'User-friendly, self-service ATVMs with intuitive touchscreens, supporting multiple payment methods for fast ticketing.',
        imageUrl: 'https://images.tribuneindia.com/cms/gall_content/2015/10/2015_10$largeimg14_Wednesday_2015_003235049.jpg',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    },
    {
        id: 'smc',
        title: 'Smart Cards (SMC)',
        description: 'Secure and durable contactless smart cards for seamless access control, ticketing, and payment solutions.',
        imageUrl: 'https://live.staticflickr.com/3381/3507240760_1a9cb3ba50_b.jpg',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
    },
    {
        id: 'pms',
        title: 'Power Management System',
        description: 'An intelligent system that monitors, controls, and optimizes power distribution, ensuring stability and significant energy savings.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1P5oP25ZK_7PLyHF-2ye5ZiyQW_4quHfjHg&s',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    },
    {
        id: 'thermal-printer',
        title: 'UTS Thermal Printer',
        description: 'High-speed, reliable thermal printers delivering crisp, clear, and durable tickets with minimal maintenance.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQAg0YBswqkiUX_IAMjqT_DGLnTou6nEwk1g&s',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>,
    },
    {
        id: 'handheld-terminal',
        title: 'Bluetooth Handheld Terminal',
        description: 'A rugged and portable Bluetooth terminal for on-the-go ticketing, verification, and data collection.',
        imageUrl: 'https://s.alicdn.com/@sc04/kf/H55e511e289734fc49148fdecf8f8c4426.jpg',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    },
    {
        id: 'tft-display',
        title: 'TFT Display',
        description: 'Vibrant and high-resolution TFT displays perfect for information kiosks, digital signage, and control panels.',
        imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/1/VL/EH/DU/122105810/rees52-1-8-inch-spi-tft-lcd-display-module-tft-display-module-500x500.jpg',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
    {
        id: 'monitor',
        title: 'Industrial Monitor',
        description: 'Robust industrial-grade monitors built to withstand harsh environments and provide reliable performance.',
        imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/VB/VG/DZ/18517077/15-6-inch-metal-case-industrial-touch-screen-monitor-500x500.png',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17.25v3m0 0l-3.75-3.75M9.75 20.25l3.75-3.75M17.25 17.25v3m0 0l-3.75-3.75M17.25 20.25l3.75-3.75M3.75 13.5h16.5M21 5.25H3.75" /></svg>,
    }
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-slate-200 flex flex-col">
        <div className="relative overflow-hidden h-56">
            <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            <div className="absolute top-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300">
                {product.icon}
            </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{product.title}</h3>
            <p className="text-slate-600 flex-grow">{product.description}</p>
        </div>
    </div>
);

const FeatureHighlightCard: React.FC<{ icon: JSX.Element; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 text-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex-shrink-0 text-white bg-blue-600 rounded-full p-4 mb-4 w-16 h-16 flex items-center justify-center mx-auto">
            {icon}
        </div>
        <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
    </div>
);

const TechPillarCard: React.FC<{ icon: JSX.Element; name: string }> = ({ icon, name }) => (
    <div className="group bg-white p-4 rounded-full shadow-sm border border-slate-200 transition-all duration-300 ease-in-out hover:shadow-xl hover:border-blue-500 flex items-center space-x-4">
        <div className="flex-shrink-0 bg-sky-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
            {icon}
        </div>
        <p className="font-semibold text-slate-700">{name}</p>
    </div>
);

const ApplicationCard: React.FC<{ icon: JSX.Element; name: string; }> = ({ icon, name }) => (
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border border-slate-200">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900">{name}</h3>
    </div>
);

const ProductsPage: React.FC = () => {
    return (
        <>
            <AnimatedSection>
                <section
                    className="relative py-32 md:py-48 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format=fit=crop')" }}
                    aria-labelledby="products-page-title"
                >
                    <div className="absolute inset-0 bg-slate-900 bg-opacity-60"></div>
                    <div className="relative z-10 container mx-auto px-6 text-center text-white">
                        <h1 id="products-page-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                            Our Innovative Products
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                            Explore our comprehensive range of hardware and software solutions engineered for performance and reliability.
                        </p>
                    </div>
                </section>
            </AnimatedSection>
            
            <AnimatedSection>
                <section className="py-20 bg-sky-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-extrabold text-slate-900">Explore Our <span className="text-blue-600">Solutions</span></h2>
                            <p className="text-lg text-slate-600 mt-2 max-w-3xl mx-auto">
                                From robust terminals to intelligent management systems, our products form the backbone of modern, efficient operations.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>
            
            <AnimatedSection>
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-extrabold text-slate-900">Engineered for <span className="text-blue-600">Excellence</span></h2>
                            <p className="text-lg text-slate-600 mt-2 max-w-3xl mx-auto">
                                Our products share a common DNA of quality, performance, and reliability, ensuring they meet the highest standards.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <FeatureHighlightCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                                title="Robust & Durable"
                                description="Built with industrial-grade components to thrive in demanding environments and ensure long operational life."
                            />
                             <FeatureHighlightCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                                title="High-Speed Performance"
                                description="Optimized for rapid processing and responsiveness, minimizing wait times and maximizing throughput."
                            />
                             <FeatureHighlightCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                title="Low Maintenance"
                                description="Designed for reliability and easy serviceability, reducing downtime and total cost of ownership."
                            />
                             <FeatureHighlightCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>}
                                title="Seamless Integration"
                                description="Flexible architecture allows for easy integration with existing third-party systems and networks."
                            />
                        </div>
                    </div>
                </section>
            </AnimatedSection>
            
            <AnimatedSection>
                <section className="py-20 bg-sky-50">
                    <div className="container mx-auto px-6">
                         <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Technology at the <span className="text-blue-600">Core</span></h2>
                                <p className="text-lg text-slate-600 mb-8">
                                    We build on a foundation of proven, cutting-edge technologies to deliver powerful and secure solutions.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <TechPillarCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>} name="Embedded Systems" />
                                    <TechPillarCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>} name="Secure Transactions" />
                                    <TechPillarCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>} name="Real-Time Processing" />
                                    <TechPillarCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 8.532a15 15 0 0121.212 0" /></svg>} name="Advanced Connectivity" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="https://www.lilliputuk.com/wp-content/themes/website/static/images/79a2f3e718.jpg" alt="Technology motherboard" className="rounded-lg shadow-xl" />
                            </div>
                         </div>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection>
                 <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-extrabold text-slate-900">Powering <span className="text-blue-600">Critical Sectors</span></h2>
                            <p className="text-lg text-slate-600 mt-2 max-w-3xl mx-auto">Our products are trusted by a diverse range of industries for their mission-critical operations.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            <ApplicationCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.494h18" /></svg>}
                                name="Public Transportation"
                            />
                            <ApplicationCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1" /></svg>}
                                name="Banking & Finance"
                            />
                            <ApplicationCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86l-.477-2.387a2 2 0 01.547-1.806z" /></svg>}
                                name="Industrial Automation"
                            />
                            <ApplicationCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                                name="Retail & Kiosks"
                            />
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </>
    );
};

export default ProductsPage;
