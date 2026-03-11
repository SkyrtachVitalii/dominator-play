// src/components/Logo/HeaderLogo.tsx
import { cn } from '../../utils/cn';
import styles from './HeaderLogo.module.scss';

export const HeaderLogo = ({ className }: { className?: string }) => {
  return (
    <a href="/" className={cn("flex items-center gap-2", className)}>
      <div className={styles.logoWrapper}>
        <img src="/logo-big-colored.svg" alt="Dominator Play" />
      </div>
    </a>
  );
};