import React, { createContext, useContext, useState, useEffect } from 'react';

interface TimerContextType {
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

const TimerContext = createContext<TimerContextType>({
  hours: 0,
  minutes: 0,
  seconds: 0,
  isExpired: false
});

export const useTimer = () => useContext(TimerContext);

interface TimerProviderProps {
  children: React.ReactNode;
  initialHours: number;
}

export const TimerProvider: React.FC<TimerProviderProps> = ({ children, initialHours }) => {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Try to load saved time from localStorage
    const savedEndTime = localStorage.getItem('offerEndTime');
    let endTime: number;
    
    if (savedEndTime) {
      endTime = parseInt(savedEndTime, 10);
    } else {
      // Set new end time
      endTime = Date.now() + (initialHours * 60 * 60 * 1000);
      localStorage.setItem('offerEndTime', endTime.toString());
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = endTime - now;

      if (diff <= 0) {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setIsExpired(true);
        clearInterval(interval);
      } else {
        const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
        const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
        
        setHours(hoursLeft);
        setMinutes(minutesLeft);
        setSeconds(secondsLeft);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [initialHours]);

  return (
    <TimerContext.Provider value={{ hours, minutes, seconds, isExpired }}>
      {children}
    </TimerContext.Provider>
  );
};