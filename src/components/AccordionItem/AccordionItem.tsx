import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  title: string;
  content: string;
}

export const AccordionItem = ({ title, content }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col rounded-[9px] overflow-hidden bg-plum transition-colors duration-300 py-4 px-6 md:py-6 md:px-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-6 py-5 text-left cursor-pointer hover:bg-white/5 transition-colors"
      >
        <span className="typo-accordion-item text-snow">{title}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-snow leading-none ml-4 w-4.5 h-4.5 origin-center"
        >
          <img src="/assets/icon_plus.svg" alt="" />
        </motion.span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Контент акордеону */}
            <div className="px-4 py-4 md:px-6 md:py-6 typo-p-regular text-snow/70">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};