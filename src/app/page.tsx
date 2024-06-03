import Link from 'next/link';
import { FiDownload } from 'react-icons/fi';

// components
import { Button } from '@/components/ui/button';
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <section className='h-full'>
      <div className='container h-full'>
        <div className='flex flex-col items-center justify-between gap-8 xl:flex-row xl:pb-20 xl:pt-8'>
          {/* description */}
          <div className='order-2 text-center xl:order-none xl:text-left'>
            <span className='text-lg'>Software Developer</span>
            <h1 className='h1 mb-6 mt-2'>
              Hello I&apos;m <br />
              <span className='text-accent'>Nitan Jana</span>
            </h1>
            <p className='mb-9 max-w-[520px] text-white/80'>
              I excel in creating user-friendly, fast and scalable web
              applications, with proficiency in a wide range of programming
              languages and technologies.
            </p>

            <div className='flex flex-col items-center gap-8 xl:flex-row'>
              {/* cv button */}
              <Link
                href='/resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                tabIndex={-1}
              >
                <Button
                  variant='outline'
                  size='lg'
                  className='flex items-center gap-4 uppercase transition duration-500 ease-in-out'
                >
                  <span>Download CV</span>
                  <FiDownload className='text-xl' />
                </Button>
              </Link>

              {/* social links */}
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-6'
                  iconStyles='h-9 w-9 text-accent border border-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:text-primary transition duration-500 ease-in-out'
                />
              </div>
            </div>
          </div>
          {/* profile image */}
          <div className='order-1 mb-8 xl:order-none xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      {/* stats */}
      <Stats />
    </section>
  );
}
