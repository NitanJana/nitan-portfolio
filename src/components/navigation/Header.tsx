import Link from 'next/link';

// components
import { Button } from '@/components/ui/button';
import Nav from '@/components/navigation/Nav';
import MobileNav from '@/components/navigation/MobileNav';
import AudioBtn from '@/components/navigation/AudioBtn';

// navigation items
const navItems = [
  { name: 'home', href: '/' },
  { name: 'resume', href: '/resume' },
  { name: 'projects', href: '/projects' },
  { name: 'contact', href: '/contact' },
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
        <div className='flex space-x-8 xl:hidden'>
          <AudioBtn />
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
};

export default Header;
