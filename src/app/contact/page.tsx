'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCalApi } from '@calcom/embed-react';

import { CiCalendar, CiMail } from 'react-icons/ci';
import { FaLinkedin } from 'react-icons/fa';

// components
import { Button } from '@/components/ui/button';
import Blob from '@/components/blob';

const blobs = [
  {
    name: 'blob1',
    transform: 'translate(189.95341969071092 182.07543134180162)',
    fill: '#0FBDA980',
    animate: 'animate-spin-15',
    path: 'M99 -130.7C127.8 -115.3 150.5 -85.8 154.5 -54.6C158.5 -23.5 143.9 9.3 130.8 40.2C117.6 71.2 105.8 100.3 84.3 126.6C62.7 153 31.3 176.5 -3.1 180.8C-37.6 185.1 -75.2 170.2 -99.3 144.7C-123.4 119.2 -134 83.1 -135 50.8C-136 18.4 -127.4 -10.1 -118.3 -38.6C-109.2 -67 -99.6 -95.4 -79.8 -113.8C-60 -132.2 -30 -140.6 2.5 -144.1C35.1 -147.6 70.1 -146.2 99 -130.7',
  },

  {
    name: 'blob2',
    transform: 'translate(188.4192894317438 214.51181603511864)',
    fill: '#4DFFCC80',
    animate: 'animate-spin-18-reverse',
    path: 'M103.8 -138.8C130.7 -123.2 146.2 -87.9 158.7 -51.1C171.2 -14.4 180.7 23.7 166.9 50.5C153.1 77.3 115.9 92.9 84.2 103.4C52.5 113.9 26.3 119.5 -0.8 120.6C-27.8 121.6 -55.6 118.3 -83.7 106.5C-111.8 94.8 -140 74.8 -148 48.5C-156 22.2 -143.6 -10.2 -131.3 -41C-119 -71.8 -106.8 -101 -85 -118.3C-63.1 -135.5 -31.5 -140.8 3.4 -145.5C38.4 -150.2 76.8 -154.4 103.8 -138.8',
  },

  {
    name: 'blob3',
    transform: 'translate(213.15997718147776 187.99142051573205)',
    fill: '#7C4DFF80',
    animate: 'animate-spin-18',
    path: 'M82.9 -119.1C102.7 -99.7 110.8 -69.2 118.7 -39.8C126.5 -10.4 134.1 17.8 127.7 42.7C121.3 67.6 100.9 89.2 77.3 112.4C53.7 135.6 26.8 160.3 -6.2 168.8C-39.2 177.3 -78.4 169.5 -106.4 147.8C-134.5 126.1 -151.4 90.4 -155.4 55.8C-159.5 21.1 -150.6 -12.5 -139.2 -44.5C-127.8 -76.5 -113.9 -107 -90.2 -125.2C-66.6 -143.4 -33.3 -149.2 -0.9 -148C31.5 -146.8 63.1 -138.5 82.9 -119.1',
  },

  {
    name: 'blob4',
    transform: 'translate(212.82348658467268 200.0861766362887)',
    fill: '#8F52FF80',
    animate: 'animate-spin-15-reverse',
    path: 'M74.8 -125.9C99.7 -115.3 124.3 -100.6 139 -79C153.6 -57.3 158.3 -28.7 155.3 -1.8C152.3 25.2 141.5 50.3 126.8 72C112.2 93.6 93.6 111.8 71.8 128.4C50 144.9 25 160 -0.2 160.4C-25.5 160.8 -51 146.7 -75.2 131.5C-99.5 116.3 -122.5 100.2 -141.9 78.1C-161.3 56 -177.2 28 -180.9 -2.2C-184.7 -32.3 -176.3 -64.7 -160.8 -93.5C-145.3 -122.4 -122.7 -147.8 -94.7 -156.6C-66.7 -165.5 -33.3 -157.7 -4.2 -150.5C25 -143.3 50 -136.6 74.8 -125.9',
  },
];

export default function ContactPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: 'easeIn' }}
      className='py-6'
    >
      <div className='container grid grid-cols-1 gap-8 lg:h-[600px] lg:grid-cols-2 lg:py-4'>
        <div className='grid content-center gap-y-8 md:gap-y-16'>
          <div className='space-y-6 text-center md:space-y-8 lg:text-left'>
            <h1 className='text-4xl font-bold tracking-tighter md:text-5xl'>
              Get in Touch
            </h1>
            <p className='space-y-1 text-white/80 md:text-xl'>
              Have a question or want to work together? Please feel free to
              reach out.
            </p>
          </div>
          <div className='is flex flex-wrap justify-center gap-6 lg:flex-col'>
            <Link
              href='mailto:nitanjanaofficial@gmail.com?&subject=Hello there,Nitan&body=Cool portfolio you have got there!'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button variant='outline' className='flex items-center gap-3'>
                <CiMail className='h-5 w-5 stroke-1' />
                Email
              </Button>
            </Link>

            <Link
              href='https://www.linkedin.com/in/nitan-jana/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button variant='outline' className='flex items-center gap-3'>
                <FaLinkedin className='h-5 w-5 stroke-1' />
                Linkedin
              </Button>
            </Link>

            <Button
              data-cal-namespace=''
              data-cal-link='nitan-jana/15min'
              data-cal-config='{"layout":"month_view"}'
              variant='outline'
              className='flex w-fit items-center gap-3'
            >
              <CiCalendar className='h-5 w-5 stroke-1' />
              Schedule Meeting
            </Button>
          </div>
        </div>

        <Blob blobs={blobs} size={400} />
      </div>
    </motion.div>
  );
}
