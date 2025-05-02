import React from 'react';
import { Sparkles, Star, MoonStar, Sun, GalleryHorizontalEnd, HeartHandshake, PencilRuler } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Star className="h-8 w-8 text-yellow-400" />,
      title: "Birth Chart Analysis",
      description: "Discover your cosmic blueprint with our detailed natal chart reading revealing your strengths, challenges, and life path."
    },
    {
      icon: <MoonStar className="h-8 w-8 text-yellow-400" />,
      title: "Personalized Horoscopes",
      description: "Get daily, weekly, and monthly predictions tailored specifically to your unique astrological profile."
    },
    {
      icon: <GalleryHorizontalEnd className="h-8 w-8 text-yellow-400" />,
      title: "Compatibility Reports",
      description: "Uncover the celestial dynamics between you and your partner with our in-depth relationship analysis."
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-400" />,
      title: "Solar Return Reading",
      description: "Plan your year ahead with insights from your solar return chart, marking your personal new year."
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-yellow-400" />,
      title: "Career Guidance",
      description: "Align your professional path with the stars to discover your ideal career and timing for success."
    },
    {
      icon: <PencilRuler className="h-8 w-8 text-yellow-400" />,
      title: "Transit Forecasts",
      description: "Navigate upcoming cosmic events and their specific impact on your life with our detailed transit reports."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-yellow-400 mr-2" />
            <span className="text-yellow-300 font-medium">Our Cosmic Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Unlock The Secrets Of The Universe
          </h2>
          <p className="max-w-2xl mx-auto text-purple-100 text-lg">
            Our expert astrologers combine ancient wisdom with modern insights to provide you with accurate and meaningful readings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};