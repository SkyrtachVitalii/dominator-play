// src/layout/Header/Header.tsx
import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import { Button } from "../../components/Buttons/Button";
import { HeaderLogo } from "../../components/Logo/HeaderLogo";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import { LangSwitcher } from "../../components/LangSwitcher/LangSwitcher";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.headerWrapper}>
      <div className="main-container relative">
        {" "}
        <div className="flex items-center justify-between h-14 relative z-50">
          {" "}
          <HeaderLogo />
          <div className="flex items-center gap-4 md:gap-8 lg:gap-8">
            <div className="hidden lg:block">
              <MainMenu />
            </div>

            <div className="flex items-center gap-4 md:gap-8 lg:gap-8">
              <div className="hidden lg:block">
                <LangSwitcher />
              </div>

              <Button
                variant="outline"
                className={cn(
                  "shrink-0 whitespace-nowrap transition-all",
                  "w-31 h-9.5 px-4 text-[12px]",
                  "md:w-35 md:h-10 md:px-5 md:text-[14px]",
                  "lg:w-44 lg:h-12 lg:text-[18px]",
                  "border-neon-pink! text-snow hover:border-snow! hover:text-white capitalize",
                )}
              >
                Client Area
              </Button>
            </div>

            <button
              className="lg:hidden flex shrink-0 flex-col justify-center items-center w-8 h-8 gap-1.5 text-snow ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span
                className={cn(
                  "w-6 h-0.5 bg-current transition-all",
                  isMobileMenuOpen && "rotate-45 translate-y-2",
                )}
              ></span>
              <span
                className={cn(
                  "w-6 h-0.5 bg-current transition-all",
                  isMobileMenuOpen && "opacity-0",
                )}
              ></span>
              <span
                className={cn(
                  "w-6 h-0.5 bg-current transition-all",
                  isMobileMenuOpen && "-rotate-45 -translate-y-2",
                )}
              ></span>
            </button>
          </div>
        </div>
        <div
          className={cn(
            "fixed inset-0 z-40 transition-opacity duration-300 lg:hidden",
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
        >
          <div
            className={cn(
              "absolute inset-0 bg-neutral-900/70 backdrop-blur-sm transition-opacity duration-300",
              isMobileMenuOpen ? "opacity-100" : "opacity-0",
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div
            className={cn(
              "absolute top-0 right-0 h-full w-full sm:max-w-100 bg-dark-purple border-l border-plum shadow-2xl flex flex-col pt-20",
              "transition-transform duration-300 ease-out",
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
            )}
          >
            <MainMenu
              isMobile
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
