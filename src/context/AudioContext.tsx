'use client';
import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type AudioContextType = {
  audioRef: { current: HTMLAudioElement | null };
  isPlaying: boolean;
  toggleAudio: () => void;
};

const AudioContext = createContext<AudioContextType>({
  audioRef: { current: null },
  isPlaying: false,
  toggleAudio: () => {},
});

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      audioElement.addEventListener('play', handlePlay);
      audioElement.addEventListener('pause', handlePause);

      return () => {
        audioElement.removeEventListener('play', handlePlay);
        audioElement.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  return (
    <AudioContext.Provider value={{ audioRef, isPlaying, toggleAudio }}>
      {children}
      <audio ref={audioRef} src='/bg.mp3' loop/>
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
