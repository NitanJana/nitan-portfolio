import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold ring-offset-white',
  {
    variants: {
      variant: {
        default: 'bg-accent text-primary hover:bg-accent-hover',
        primary: 'bg-primary text-white',
        outline:
          'bg-transparent text-accent border border-accent hover:bg-accent hover:text-primary',
      },
      size: {
        default: 'h-10 px-6',
        md: 'h-12 px-6',
        lg: 'h-14 px-8 text-sm uppercase tracking-[2px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
