import Link from 'next/link';

// components
import Nav from './Nav';
import MobileNav from './MobileNav';
import { Button } from './ui/button';
import AudioBtn from '@/components/audioBtn';

// navigation items
const navItems = [
  { name: 'home', href: '/' },
  { name: 'resume', href: '/resume' },
  { name: 'projects', href: '/projects' },
  { name: 'contact', href: '/contact' },
];

export const blobs = [
  {
    name: 'blob1',
    transform: 'translate(25.271305216978725 22.135853907797518)',
    fill: '#8F52FF80',
    animate: 'animate-spin-15-reverse',
    path: 'M17.8 -13.1C22 -8.9 23.7 -1.5 21.8 4.3C19.9 10.2 14.5 14.5 8 18.3C1.6 22 -6 25.1 -12.1 23C-18.1 20.8 -22.7 13.5 -23.1 6.8C-23.4 0 -19.5 -6.2 -15 -10.5C-10.4 -14.8 -5.2 -17.2 0.8 -17.8C6.8 -18.4 13.6 -17.3 17.8 -13.1',
  },

  {
    name: 'blob2',
    transform: 'translate(27.776364051862423 25.793686551841517)',
    fill: '#1b1e2880',
    animate: 'animate-spin-18',
    path: 'M13.6 -12.8C16.8 -6.9 17.9 -1.3 17.3 4.9C16.6 11 14.2 17.7 9 21C3.9 24.3 -3.9 24.3 -10.4 21.3C-16.9 18.3 -22.1 12.3 -22.9 6C-23.7 -0.2 -20 -6.7 -15.5 -12.9C-10.9 -19.1 -5.5 -25.2 -0.1 -25.1C5.2 -25 10.4 -18.7 13.6 -12.8',
  },

  {
    name: 'blob3',
    transform: 'translate(27.61472902418836 23.869808629493118)',
    fill: '#10b98180',
    animate: 'animate-spin-15-reverse',
    path: 'M18.3 -14.5C21.5 -10.6 20.3 -3.1 18.1 3.2C15.9 9.5 12.7 14.7 7.7 17.7C2.7 20.7 -4 21.6 -10.7 19.5C-17.4 17.3 -23.9 12.1 -25.2 5.9C-26.6 -0.4 -22.7 -7.7 -17.6 -12C-12.5 -16.3 -6.3 -17.7 0.7 -18.2C7.6 -18.7 15.1 -18.4 18.3 -14.5',
  },
];

const Header = () => {
  return (
    <header className='py-6 text-white'>
      <div className='container flex items-center justify-between gap-8'>
        {/* Logo */}
        <Link href='/'>
          <div className='flex gap-2 text-4xl font-semibold'>
            <span className='text-accent'>~/</span>Nitan
          </div>
        </Link>

        {/* desktop nav */}
        <div className='hidden items-center gap-8 xl:flex'>
          <Nav items={navItems} />
          <Link href='/contact' tabIndex={-1}>
            <div className='group relative'>
              <div className='absolute inset-0.5 rounded-full bg-accent opacity-75 blur transition duration-500 ease-in-out group-hover:bg-accent-hover group-hover:blur-md'></div>

              {/* hire me button */}
              <Button className='relative transition duration-500 ease-in-out'>
                Hire me
              </Button>
            </div>
          </Link>

          <AudioBtn />
        </div>

        {/* mobile nav */}
        <div className='xl:hidden'>
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
};

export default Header;
