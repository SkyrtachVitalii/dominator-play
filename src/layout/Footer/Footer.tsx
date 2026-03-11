import { cn } from "../../utils/cn";
import styles from "./Footer.module.scss";

// Перевикористовуваний компонент розділювача
export const Divider = ({ className }: { className?: string }) => (
  <div className={cn("w-full h-[1px] bg-snow/20", className)} aria-hidden="true" />
);

export const Footer = () => {
  return (
    <footer className={cn("w-full bg-plum text-snow", styles.wrapper)}>
      <div className="main-container mx-auto px-4 sm:px-6">
        
        {/* Сітка для адаптивного вирівнювання */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Ліва колонка (Інформація про бренд) */}
          <div className="lg:col-span-5 col-span-4 flex flex-col items-start">
            <img src="/logo-small-white.svg" alt="Dominator Play" className="mb-7 h-8 w-auto" />
            <img src="/age.svg" alt="18+" className="mb-6 h-6 w-auto" />
            
            <p className="typo-footer-link text-snow/80 mb-6! max-w-[280px]">
              Our website is intended for<br /> users aged 18 and over.
            </p>
            
            <a href="mailto:partners@dominatorplay.com" className="text-[18px] text-snow font-medium mb-6 hover:opacity-80 transition-opacity">
              partners@dominatorplay.com
            </a>
            
            <div className="flex items-center gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <img src="/public/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <img src="/public/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Центральна колонка (Explore) */}
          <div className="lg:col-span-4 col-span-1 flex flex-col">
            <h4 className="typo-footer-title text-snow mb-6!">Explore</h4>
            <nav className="flex flex-col gap-6">
              {['Home', 'Our games', 'About us', 'Events', 'Blog', 'Careers', 'Contact us'].map((item) => (
                <a key={item} href="#" className="typo-footer-link text-snow/70! hover:text-snow! transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Права колонка (Legal) */}
          <div className="lg:col-span-3 col-span-1 flex flex-col">
            <h4 className="typo-footer-title text-snow mb-6!">Legal</h4>
            <nav className="flex flex-col gap-6">
              {/* Я трохи підкоригував помилки з макета (Privaci -> Privacy, Cooke -> Cookie) */}
              {['Privacy policy', 'Terms of service', 'Compliance', 'Cookie Policy'].map((item) => (
                <a key={item} href="#" className="typo-footer-link text-snow/70! hover:text-snow! transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Лінія розмежування */}
        <Divider className="mt-12 md:mt-20 mb-8" />

        {/* Копірайт */}
        <div className="flex justify-center items-center pb-8">
          <p className="typo-footer-legal text-snow/70">
            2026 © Brand All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};