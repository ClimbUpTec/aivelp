import { useState, useEffect } from 'react';

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

const RotatingText = ({ words, interval = 2500, className = "" }: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 200);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span 
      className={`inline-block transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
      aria-live="polite"
    >
      {words[currentIndex]}
    </span>
  );
};

export default RotatingText;