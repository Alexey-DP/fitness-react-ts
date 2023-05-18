import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SideAnimation } from '@/shared/enums';

interface IProps {
  className?: string;
  children: ReactNode;
  side: SideAnimation;
}

const SideAnimationDiv = ({
  children,
  className = '',
  side
}: IProps) => {
  const sideX = side === SideAnimation.Left ? -50 : 50;

  return <motion.div
    className={className}
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, x: sideX },
      visible: { opacity: 1, x: 0 }
      }}>
      {children}
  </motion.div>
}

export default SideAnimationDiv