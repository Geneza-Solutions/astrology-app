import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-800/50 rounded-xl p-6 transition-transform duration-300 hover:transform hover:-translate-y-2 group">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-800/50 mb-6 group-hover:bg-indigo-700/70 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-purple-100/80">{description}</p>
    </div>
  );
};