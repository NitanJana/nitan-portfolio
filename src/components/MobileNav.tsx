'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet';
import { CiMenuFries } from 'react-icons/ci';

const MobileNav = ({ items }: { items: { name: string; href: string }[] }) => {
  const currentPath = usePathname();

  return (
    <Sheet>
      <SheetTrigger className='flex items-center justify-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>

      <SheetContent className='flex flex-col'>
        <div className='my-20 text-center text-2xl'>
          <Link href='/'>
            <div className='flex items-center justify-center gap-6 font-semibold'>
              <div className='flex gap-2 text-3xl font-semibold'>
                <span className='text-accent'>~/</span>Nitan
              </div>
            </div>
          </Link>
        </div>

        <nav className='flex flex-col items-center justify-center gap-8'>
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              <SheetClose
                className={clsx(
                  currentPath === item.href &&
                    'border-b-2 border-accent text-accent',
                  'p-1 text-lg font-medium capitalize transition-all hover:text-accent'
                )}
              >
                {item.name}
              </SheetClose>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
