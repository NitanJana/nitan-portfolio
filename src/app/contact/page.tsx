'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCalApi } from '@calcom/embed-react';

// components
import { Button } from '@/components/ui/button';
import { CiCalendar, CiMail } from 'react-icons/ci';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import Blob from '@/components/contact/blob';

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
      <div className='container grid grid-cols-1 gap-8 lg:grid-cols-2 lg:py-4 lg:h-[600px]'>
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

        <Blob />
      </div>
    </motion.div>
  );
}
