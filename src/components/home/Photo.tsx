'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Photo = () => {
  return (
    <div className='pointer-events-none relative h-full w-full select-none'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
          }}
          className='absolute h-[296px] w-[296px] xl:h-[394px] xl:w-[394px]'
        >
          <Image
            src='/images/home/photo.png'
            alt='profile photo'
            fill
            sizes='100%,100%'
            priority
            quality={100}
            className='object-contain brightness-[1.3]'
          />
        </motion.div>

        <motion.svg
          className='relative z-10 h-[300px] w-[300px] xl:h-[400px] xl:w-[400px]'
          fill='transparent'
          viewBox='0 0 400 400'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle
            cx='200'
            cy='200'
            r='198'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='stroke-accent stroke-[4]'
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
