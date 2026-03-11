import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import { ChevronIcon } from "../Icons/ChevronIcon";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";

const menuItems = [
  { label: "Games", href: "#games", active: true },
  { label: "About Us", href: "#about" },
  {
    label: "News",
    href: "#news",
    hasDropdown: true,
    subItems: [
      { label: "Blog", href: "#blog" },
      { label: "Events", href: "#events" },
    ],
  },
];

export const MainMenu = ({
  isMobile,
  isOpen,
  onClose,
}: {
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}) => {
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setOpenDropdowns([]), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleDropdown = (label: string, e: React.MouseEvent) => {
    if (!isMobile) return;
    e.preventDefault();
    setOpenDropdowns((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  const handleLinkClick = (e: React.MouseEvent, hasDropdown?: boolean) => {
    e.stopPropagation();
    if (isMobile) {
      if (hasDropdown) {
        return; 
      }
      
      if (onClose) {
        onClose();
      }
    }
  };

  return (
    <nav
      className={cn(
        "hidden lg:flex items-center gap-8",
        isMobile &&
          "flex flex-col lg:hidden w-full h-full p-6 gap-6 overflow-y-auto",
      )}
    >
      {menuItems.map((link) => {
        const isDropdownOpen = openDropdowns.includes(link.label);

        return (
          <div
            key={link.label}
            className={cn("relative group", isMobile && "w-full flex flex-col")}
          >
            <a
              href={link.href}
              onClick={(e) => {
                if (link.hasDropdown) {
                  toggleDropdown(link.label, e);
                } else {
                  handleLinkClick(e);
                }
              }}
              className={cn(
                "typo-nav flex items-center justify-between transition-colors hover:text-neon-pink! h-5",
                link.active ? "text-neon-pink" : "text-snow",
                isMobile && "w-full text-left",
              )}
            >
              <span>{link.label}</span>
              {link.hasDropdown && (
                <ChevronIcon
                  className={cn(
                    "w-5 h-5 ml-2 transition-transform",
                    isMobile && isDropdownOpen
                      ? "rotate-180 opacity-100"
                      : "group-hover:opacity-100 lg:group-hover:rotate-180",
                  )}
                />
              )}
            </a>

            {link.hasDropdown && (
              <div
                className={cn(
                  !isMobile && [
                    "absolute top-[80%] left-0 z-50",
                    "opacity-0 invisible translate-y-2 transition-all duration-300",
                    "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0",
                  ],
                  isMobile && [
                    "grid transition-all duration-300 ease-in-out",
                    isDropdownOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0 mt-0",
                  ],
                )}
              >
                <div
                  className={cn(
                    !isMobile &&
                      "border border-none rounded-xl pt-5 flex flex-col gap-4 min-w-16 shadow-lg",
                    isMobile &&
                      "overflow-hidden flex flex-col gap-4 pl-4 border-l-2 border-plum/50 w-full",
                  )}
                >
                  {link.subItems?.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      onClick={(e) => handleLinkClick(e)}
                      className="typo-nav text-snow hover:text-neon-pink! transition-colors h-5 block"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {isMobile && (
        <>
          <div className="w-full h-px bg-plum/30 my-2" />{" "}
          <div className="w-full flex justify-end">
            <LangSwitcher isMobile onClose={onClose} />
          </div>
        </>
      )}
    </nav>
  );
};