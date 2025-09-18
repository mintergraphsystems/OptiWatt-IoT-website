import React, { useState, useEffect } from 'react';

const FloatingActionButtons: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.location.hash = path;
  };

  const getShareUrl = (platform: 'whatsapp' | 'telegram') => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out this amazing IoT solutions provider: OptiWatt IoT!');
    if (platform === 'whatsapp') {
      return `https://api.whatsapp.com/send?text=${text}%20${url}`;
    }
    if (platform === 'telegram') {
      return `https://t.me/share/url?url=${url}&text=${text}`;
    }
    return '#';
  };

  const ActionButton: React.FC<{ href: string, onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void, target?: string, bgColor: string, tooltip: string, children: React.ReactNode }> = ({ href, onClick, target, bgColor, tooltip, children }) => (
    <div className="relative group">
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ${bgColor} hover:-translate-y-1 hover:shadow-xl`}
        aria-label={tooltip}
      >
        {children}
      </a>
      <div 
        className="absolute bottom-1/2 translate-y-1/2 right-full mr-3 w-auto whitespace-nowrap px-3 py-1.5 text-sm font-semibold text-white bg-slate-800 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
        role="tooltip"
      >
        {tooltip}
        <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-slate-800"></div>
      </div>
    </div>
  );

  const buttons = [
    {
      id: 'whatsapp',
      href: getShareUrl('whatsapp'),
      target: '_blank',
      bgColor: 'bg-green-500',
      tooltip: 'Share on WhatsApp',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.287.468-1.173 4.254 4.375-1.142.435.278z" /></svg>,
    },
    {
      id: 'contact',
      href: '#/contact',
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleNav(e, '#/contact'),
      bgColor: 'bg-blue-600',
      tooltip: 'Contact Us',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    },
    {
      id: 'telegram',
      href: getShareUrl('telegram'),
      target: '_blank',
      bgColor: 'bg-blue-400',
      tooltip: 'Share on Telegram',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.51.7l-4.24-3.11l-2.04 1.97c-.24.24-.44.44-.9.44z"/></svg>,
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex flex-col items-end space-y-4">
      {buttons.map((btn, index) => (
         <div
          key={btn.id}
          className={`transform transition-all duration-500 ease-in-out ${
            isVisible
              ? 'translate-x-0 opacity-100'
              : 'translate-x-16 opacity-0 pointer-events-none'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <ActionButton
            href={btn.href}
            onClick={btn.onClick}
            target={btn.target}
            bgColor={btn.bgColor}
            tooltip={btn.tooltip}
          >
            {btn.icon}
          </ActionButton>
        </div>
      ))}
    </div>
  );
};

export default FloatingActionButtons;