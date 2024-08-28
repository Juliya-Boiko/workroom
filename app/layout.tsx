import type { Metadata } from 'next';
import { nunitoSans } from '@/utils/fonts';
import { ToastNotify } from '@/components/ToastNotify';
import '../styles/global.scss';

export const metadata: Metadata = {
  title: 'Workroom',
  description: 'Workroom community',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <ToastNotify />
        {children}
      </body>
    </html>
  );
}
