import React from 'react';
import { CountdownTimer } from './CountdownTimer';
import { useTimer } from '../contexts/TimerContext';
import { BadgePercent, CheckCircle2, Sparkles } from 'lucide-react';

export const SpecialOffer: React.FC = () => {
  const { isExpired } = useTimer();

  return (
    <section id="offer" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 to-purple-900 opacity-70"></div>
      
      {/* Floating stars effect */}
      <div className="absolute top-20 left-10 animate-float-slow">
        <Sparkles className="w-8 h-8 text-yellow-300/30" />
      </div>
      <div className="absolute bottom-40 right-20 animate-float">
        <Sparkles className="w-6 h-6 text-yellow-300/30" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float-slow-reverse">
        <Sparkles className="w-4 h-4 text-yellow-300/30" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-900/80 to-purple-900/80 backdrop-blur-md rounded-3xl border border-indigo-700/50 shadow-[0_0_30px_rgba(79,70,229,0.2)] overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/5 p-8 md:p-12">
              <div className="inline-flex items-center justify-center px-4 py-2 bg-indigo-800/70 rounded-full mb-6">
                <BadgePercent className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-yellow-300 font-medium">Limited Time Offer</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
                {isExpired 
                  ? "Our Premium Astrology Package" 
                  : "Unlock Your Cosmic Potential Today!"}
              </h2>
              
              <p className="text-lg mb-8 text-purple-100">
                {isExpired 
                  ? "Our comprehensive astrology package gives you everything you need to navigate life with cosmic wisdom."
                  : "For a limited time only, get our comprehensive astrology package at a special discounted price. Don't miss this rare celestial opportunity!"}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <p>Complete Birth Chart Analysis ($197 value)</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <p>12-Month Personalized Forecast ($149 value)</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <p>Relationship Compatibility Guide ($99 value)</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <p>Career & Financial Prosperity Reading ($129 value)</p>
                </div>
              </div>
              
              {!isExpired && (
                <div className="mb-8">
                  <div className="text-center mb-3">
                    <span className="inline-block text-lg font-medium">
                      This Offer Expires In:
                    </span>
                  </div>
                  <CountdownTimer />
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-lg"><span className="line-through opacity-70">$574</span></p>
                  <p className="text-3xl font-bold text-yellow-300">
                    {isExpired ? "$299" : "$197"}
                  </p>
                </div>
                <a 
                  href="#" 
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-indigo-950 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center text-lg"
                >
                  {isExpired ? "Get Started Now" : "Claim Your Discount Now"}
                </a>
              </div>
            </div>
            
            <div className="hidden md:block md:w-2/5 relative">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                  filter: "brightness(0.7)"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};