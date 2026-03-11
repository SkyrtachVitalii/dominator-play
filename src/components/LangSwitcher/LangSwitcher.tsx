// src/components/LangSwitcher/LangSwitcher.tsx
import { useState, useRef, useEffect } from "react";
import { cn } from "../../utils/cn";
import { ChevronIcon } from "../Icons/ChevronIcon";
import UK from "/assets/uk.svg";
import SPAIN from "/assets/spain.svg";

const languages = [
  { code: "en", icon: UK, label: "EN" },
  { code: "es", icon: SPAIN, label: "ES" },
];

export const LangSwitcher = ({
  isMobile,
  onClose,
}: {
  isMobile?: boolean;
  onClose?: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLang, setActiveLang] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={cn("relative group", isMobile && "flex flex-col items-end")}
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 text-snow hover:text-neon-pink transition-colors py-px"
      >
        <img
          src={activeLang.icon}
          alt={activeLang.code}
          className="w-4.5 h-4.5 object-cover rounded-full"
        />
        <ChevronIcon
          className={cn(
            "w-5 h-5 transition-transform",
            isOpen
              ? "rotate-180 opacity-100"
              : "group-hover:opacity-100 lg:group-hover:rotate-180",
          )}
        />
      </button>

      <div
        className={cn(
          !isMobile && [
            "absolute top-full left-0 pt-4 z-50",
            "transition-all duration-300 origin-top",
            "opacity-0 invisible scale-95",
            "lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:scale-100",
            isOpen && "opacity-100 visible scale-100",
          ],
          isMobile && [
            "grid transition-all duration-300 ease-in-out w-full",
            isOpen
              ? "grid-rows-[1fr] opacity-100 mt-2"
              : "grid-rows-[0fr] opacity-0 mt-0",
          ],
        )}
      >
        <div
          className={cn(
            "bg-dark-purple rounded-xl py-2 flex flex-col gap-1 min-w-12",
            !isMobile && "shadow-lg",
            isMobile && "overflow-hidden pr-2",
          )}
        >
          {languages
            .filter((lang) => lang.code !== activeLang.code)
            .map((lang) => (
              <button
              key={lang.code}
                className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-neon-pink/10 group/item w-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveLang(lang);
                  setIsOpen(false);
                  if (isMobile && onClose) onClose();
                }}
              >
                <img
                  src={lang.icon}
                  alt={lang.code}
                  className="w-4.5 h-4.5 object-cover rounded-full"
                />
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};
