import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode, label: string }> = ({ href, children, label }) => (
  <a href={href} aria-label={label} className="text-slate-500 hover:text-blue-600 transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.location.hash = path;
  };

  return (
    <footer id="contact" className="bg-sky-100 text-slate-600">
      <div className="container mx-auto px-6 pt-8 pb-4">
        {/* Top section: Logo/About on left, Links on right */}
        <div className="md:flex md:justify-between mb-8 text-center md:text-left">
          {/* Left: Logo, About & Socials */}
          <div className="mb-10 md:mb-0 md:w-1/3 lg:w-1/2">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-slate-900 text-xl font-bold">OptiWatt IoT</span>
            </div>
            <p className="text-base text-slate-600 max-w-sm mx-auto md:mx-0">
              Revolutionizing energy efficiency through smart IoT solutions for a sustainable future.
            </p>
            
{/*             <div className="flex space-x-5 justify-center md:justify-start mt-6">
              <SocialIcon href="#" label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085c.645 1.956 2.52 3.375 4.743 3.41A9.87 9.87 0 010 17.53a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.487 14.307-14.307 0-.218-.005-.436-.013-.652a10.21 10.21 0 002.493-2.583z"></path></svg>
              </SocialIcon>
              <SocialIcon href="#" label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"></path></svg>
              </SocialIcon>
              <SocialIcon href="#" label="LinkedIn">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.06 20.45H3.53V9h3.53v11.45zM5.3 7.5c-1.11 0-2.01-.9-2.01-2.01s.9-2.01 2.01-2.01 2.01.9 2.01 2.01-.9 2.01-2.01 2.01zm15.15 12.95h-3.53V14.8c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.75h-3.53V9h3.39v1.56h.05c.47-.89 1.62-1.82 3.33-1.82 3.56 0 4.22 2.34 4.22 5.38v6.33z"></path></svg>
              </SocialIcon>
            </div>  */}
          </div> 
            

          {/* Right: Links grid */}
          <div className="md:w-2/3 lg:w-1/2 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-slate-900 font-semibold mb-4 tracking-wider uppercase">Quick Links</h3>
              <ul className="space-y-3 text-base">
                <li><a href="#/about" onClick={(e) => handleNav(e, '#/about')} className="text-slate-600 hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="#/features" onClick={(e) => handleNav(e, '#/features')} className="text-slate-600 hover:text-blue-600 transition-colors">Features</a></li>
                <li><a href="#/services" onClick={(e) => handleNav(e, '#/services')} className="text-slate-600 hover:text-blue-600 transition-colors">Services</a></li>
                <li><a href="#/models" onClick={(e) => handleNav(e, '#/models')} className="text-slate-600 hover:text-blue-600 transition-colors">Models</a></li>
                <li><a href="#/products" onClick={(e) => handleNav(e, '#/products')} className="text-slate-600 hover:text-blue-600 transition-colors">Products</a></li>
                <li><a href="#/contact" onClick={(e) => handleNav(e, '#/contact')} className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-slate-900 font-semibold mb-4 tracking-wider uppercase">Contact</h3>
              <ul className="space-y-3 text-base">
                  <li><p>746 GF Sec-14, Gurgaon, HR, 122001, IN</p></li>
                  <li><a href="mailto:contact@optiwattiot.com" className="hover:text-blue-600 transition-colors">contact@optiwattiot.com</a></li>
                  <li><p>+91 (123) 456-7890</p></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="border-t border-slate-200 pt-6 mt-6 text-center">
          <p className="text-slate-500 text-sm">&copy; 2025 OptiWatt IoT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



