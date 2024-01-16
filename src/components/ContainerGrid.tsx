import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerGridProps {
  children: ReactNode
  className?: string
}

function ContainerGrid({ children, className = "" }: ContainerGridProps): ReactNode {

  const defaultClass = 'max-w-grid mx-auto px-page-padding-mb @laptop:px-page-padding-lp'
  const combinedClass = twMerge(defaultClass, className);

  return (
    <div className={combinedClass}>
      {children}
    </div>
  );
}

export default ContainerGrid;
