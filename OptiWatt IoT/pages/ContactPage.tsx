import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

// Redesigned for a dark background
const ContactInfoItem: React.FC<{ icon: JSX.Element; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-white text-blue-600 p-3 rounded-full">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <div className="text-blue-100">{children}</div>
        </div>
    </div>
);

const ContactPage: React.FC = () => {
    return (
        <div className="bg-sky-50">
            <AnimatedSection>
                <section className="py-20 md:py-28">
                    <div className="container mx-auto px-6">
                        {/* Page Header */}
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                                Get In Touch
                            </h1>
                            <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                                Have a question, a project proposal, or just want to say hello? We'd love to hear from you.
                            </p>
                        </div>

                        {/* Main Contact Card */}
                        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden lg:grid lg:grid-cols-10">
                            
                            {/* Contact Information (Left side) */}
                            <div className="lg:col-span-4 bg-blue-600 text-white p-8 md:p-12 flex flex-col justify-center">
                                <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
                                <p className="mb-8 text-blue-200">
                                    Our team is ready to assist you.
                                </p>
                                <div className="space-y-6">
                                    <ContactInfoItem
                                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                                        title="Call Us"
                                    >
                                        <p>+91 9667391144</p>
                                    </ContactInfoItem>
                                     <ContactInfoItem
                                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                                        title="Email Us"
                                    >
                                        <a href="mailto:contact@optiwattiot.com" className="hover:text-white transition-colors">sales@optiwattiot.com</a>
                                    </ContactInfoItem>
                                    <ContactInfoItem
                                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                                        title="Our Address"
                                    >
                                        <p>746 GF Sec-14, Gurgaon, HR, 122001, IN</p>
                                    </ContactInfoItem>
                                </div>
                            </div>

                            {/* Contact Form (Right side) */}
                            <div className="lg:col-span-6 p-8 md:p-12">
                                <h3 className="text-3xl font-bold text-slate-900 mb-6">Send a Message</h3>
                                <form action="#" method="POST" className="space-y-6">
                                    <div>
                                        <label htmlFor="full-name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                        <input type="text" name="full-name" id="full-name" autoComplete="name" className="w-full px-4 py-3 bg-sky-100 border-slate-200 border rounded-md focus:ring-blue-500 focus:border-blue-500 text-slate-900" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                        <input type="email" name="email" id="email" autoComplete="email" className="w-full px-4 py-3 bg-sky-100 border-slate-200 border rounded-md focus:ring-blue-500 focus:border-blue-500 text-slate-900" required />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                                        <input type="text" name="subject" id="subject" className="w-full px-4 py-3 bg-sky-100 border-slate-200 border rounded-md focus:ring-blue-500 focus:border-blue-500 text-slate-900" required />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                        <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 bg-sky-100 border-slate-200 border rounded-md focus:ring-blue-500 focus:border-blue-500 text-slate-900" required></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="max-w-6xl mx-auto mt-16 h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.694391515234!2d77.03352751507801!3d28.42859498249825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d227b5fffffff%3A0x2989e7284b8f3a3a!2sSector%2014%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1678886456789!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default ContactPage;
