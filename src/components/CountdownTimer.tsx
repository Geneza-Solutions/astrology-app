import React from 'react';
import { useTimer } from '../contexts/TimerContext';

export const CountdownTimer: React.FC = () => {
  const { hours, minutes, seconds } = useTimer();

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="flex justify-center">
      <div className="flex space-x-4">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-indigo-800/60 backdrop-blur-sm rounded-lg border border-indigo-500/50 shadow-[0_0_15px_rgba(79,70,229,0.3)] animate-pulse-slow">
            <span className="text-2xl md:text-4xl font-mono font-bold text-white">
              {formatTime(hours)}
            </span>
          </div>
          <span className="mt-2 text-xs md:text-sm text-indigo-200">HOURS</span>
        </div>
        
        <div className="flex items-center text-2xl md:text-4xl font-bold text-white">:</div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-indigo-800/60 backdrop-blur-sm rounded-lg border border-indigo-500/50 shadow-[0_0_15px_rgba(79,70,229,0.3)] animate-pulse-slow">
            <span className="text-2xl md:text-4xl font-mono font-bold text-white">
              {formatTime(minutes)}
            </span>
          </div>
          <span className="mt-2 text-xs md:text-sm text-indigo-200">MINUTES</span>
        </div>
        
        <div className="flex items-center text-2xl md:text-4xl font-bold text-white">:</div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-indigo-800/60 backdrop-blur-sm rounded-lg border border-indigo-500/50 shadow-[0_0_15px_rgba(79,70,229,0.3)] animate-pulse-slow">
            <span className="text-2xl md:text-4xl font-mono font-bold text-white">
              {formatTime(seconds)}
            </span>
          </div>
          <span className="mt-2 text-xs md:text-sm text-indigo-200">SECONDS</span>
        </div>
      </div>
    </div>
  );
};