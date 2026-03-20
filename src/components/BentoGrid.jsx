import React from 'react';
import { motion } from 'framer-motion';

export const BentoItem = ({ children, className = '', spanCol = 1, spanRow = 1 }) => {
  const colClass = spanCol > 1 ? `bento-col-${spanCol}` : '';
  const rowClass = spanRow > 1 ? `bento-row-${spanRow}` : '';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bento-item ${colClass} ${rowClass} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const BentoGrid = ({ children, className = '' }) => {
  return (
    <div className={`bento-grid ${className}`}>
      {children}
    </div>
  );
};
