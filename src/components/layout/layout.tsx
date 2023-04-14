import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className='bg-primary-50 dark:bg-midnight dark:text-white'>{children}</div>;
};

export default Layout;
