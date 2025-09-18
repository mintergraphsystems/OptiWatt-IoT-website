import React from 'react';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import About from '../components/About';
import Features from '../components/Features';
import Services from '../components/Services';
import BusinessModels from '../components/BusinessModels';
import TargetMarkets from '../components/TargetMarkets';
import AnimatedSection from '../components/AnimatedSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <AnimatedSection>
        <ProblemSolution />
      </AnimatedSection>
      <AnimatedSection>
        <About showMetrics={false} />
      </AnimatedSection>
      <AnimatedSection>
        <Features />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <BusinessModels />
      </AnimatedSection>
      <AnimatedSection>
        <TargetMarkets />
      </AnimatedSection>
    </>
  );
};

export default HomePage;