import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle }) => {
  return (
    <section className="relative bg-sky-50 py-20 md:py-28 overflow-hidden border-b border-slate-200">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;