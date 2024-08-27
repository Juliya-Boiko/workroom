import type { Metadata } from 'next';
import { nunitoSans } from '@/utils/fonts';
import '../styles/global.scss';
import { connectToMongoDB } from '@/utils/database';
import { ToastNotify } from '@/components/ToastNotify';

export const metadata: Metadata = {
  title: 'Workroom',
  description: 'Workroom community',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectToMongoDB();

  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <ToastNotify />
        {children}
      </body>
    </html>
  );
}
