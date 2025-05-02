import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
  image: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      location: "New York, NY",
      quote: "The birth chart reading was incredibly accurate! It helped me understand myself on a deeper level and make better decisions in my career path.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Michael Rodriguez",
      location: "Los Angeles, CA",
      quote: "The compatibility report saved my relationship. Understanding our astrological dynamics helped us communicate better and appreciate our differences.",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Emma Thompson",
      location: "Chicago, IL",
      quote: "I've been following the monthly horoscopes for a year now, and they're always spot on! The transit forecasts have helped me plan important life events.",
      rating: 4,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-indigo-950/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <Quote className="h-6 w-6 text-yellow-400 mr-2" />
            <span className="text-yellow-300 font-medium">Client Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-purple-100 text-lg">
            Discover how our astrology readings have helped transform lives and provide guidance to people around the world.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-800/50 rounded-xl p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-yellow-400">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} 
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg mb-6 italic text-purple-100">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-purple-200/70">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 w-12 h-12 bg-indigo-800/70 hover:bg-indigo-700 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-6 w-12 h-12 bg-indigo-800/70 hover:bg-indigo-700 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};