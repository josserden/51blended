import { FC, ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen h-full bg-slate-50'>
      <Header />

      <main className='flex-grow'>{children}</main>

      <Footer />
    </div>
  );
};
