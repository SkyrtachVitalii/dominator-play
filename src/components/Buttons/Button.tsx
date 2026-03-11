import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
}

export const Button = ({ children, variant = 'solid', className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2.5 typo-btn',
        'font-sans font-medium leading-none transition-all duration-300 cursor-pointer',
        
        'px-6 py-3 rounded-[9px]',
        
        variant === 'outline' && 'border! border-solid! bg-transparent',
        variant === 'solid' && 'hover:opacity-80',

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};