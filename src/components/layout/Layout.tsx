import { FC, PropsWithChildren } from 'react';
import Header from './Header/Header';
import clsx from 'clsx';

interface LayoutProps extends PropsWithChildren {
  className?: string;
}

const Layout: FC<LayoutProps> = ({ className = '', children }) => {
  return (
    <>
      <Header />
      <main className={clsx('pt-10 px-8', className)}>{children}</main>
    </>
  );
};

export default Layout;
