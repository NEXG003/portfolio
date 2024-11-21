import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimateWrapperProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  duration?: number;
}

export const AnimateWrapper = ({
  children,
  variants,
  className = '',
  delay = 0,
  duration = 0.6,
}: AnimateWrapperProps) => {
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
