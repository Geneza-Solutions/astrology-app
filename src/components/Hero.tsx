import React, { useEffect, useState } from 'react';
import { CountdownTimer } from './CountdownTimer';
import { Star, Sparkles } from 'lucide-react';
import { useTimer } from '../contexts/TimerContext';

export const Hero: React.FC = () => {
  const [showStars, setShowStars] = useState<number[]>([]);
  const { hours, minutes, seconds } = useTimer();

  useEffect(() => {
    // Create random stars effect
    const starCount = 20;
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(Math.random() * 100);
    }
    setShowStars(stars);
  }, []);

  return (
    <div className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Animated stars background */}
      {showStars.map((position, index) => (
        <div 
          key={index}
          className="absolute opacity-60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${position}%`,
            animation: `twinkle ${2 + Math.random() * 3}s infinite ease-in-out ${Math.random() * 2}s`
          }}
        >
          <Star 
            size={8 + Math.random() * 12} 
            className="text-yellow-300" 
            fill="rgba(253, 224, 71, 0.5)" 
          />
        </div>
      ))}

      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <Sparkles className="h-12 w-12 md:h-16 md:w-16 text-yellow-400 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200">
            Discover Your Cosmic Destiny
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Unlock the secrets written in the stars with our premium astrology readings, personalized just for you.
          </p>
          
          <div className="mb-8 md:mb-12">
            <div className="text-center mb-4">
              <span className="inline-block bg-purple-800/50 text-yellow-300 text-lg md:text-xl px-4 py-2 rounded-full">
                Special Offer Ends In:
              </span>
            </div>
            <CountdownTimer />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#offer" 
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-indigo-950 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Claim Special Offer Now
            </a>
            <a 
              href="#features" 
              className="px-8 py-4 bg-indigo-700/30 hover:bg-indigo-700/50 border border-indigo-500 rounded-lg transition-all duration-300 text-lg"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};