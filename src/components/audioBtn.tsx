'use client';

import { useAudio } from '@/context/AudioContext';
import { FaPause, FaPlay } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const AudioBtn = () => {
  const { isPlaying, toggleAudio } = useAudio();

  return (
    <button
      className='relative aspect-square rounded-full bg-primary text-white'
      onClick={toggleAudio}
    >
      <motion.svg
        className='aspect-square h-[50px]'
        fill='transparent'
        viewBox='0 0 50 50'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.circle
          cx='25'
          cy='25'
          r='22'
          className='stroke-accent stroke-[3]'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeDasharray={'20,20,5,10'}
          animate={{
            rotate: isPlaying ? [0, 360] : 0, // reset animation when paused
          }}
          transition={{
            duration: isPlaying ? 20 : 1, // slow animation when playing,fast when pausing
            ease: 'linear',
            repeat: isPlaying ? Infinity : 0, // no infinite loop animation when paused
          }}
        />
      </motion.svg>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </div>
    </button>
  );
};

export default AudioBtn;
