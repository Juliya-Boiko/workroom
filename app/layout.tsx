import type { Metadata } from 'next';
import { nunitoSans } from '@/utils/fonts';
import { ToastNotify } from '@/components/ToastNotify';
import QueryProvider from '@/components/QueryProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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
        <QueryProvider>
          <ToastNotify />
          {children}
          <ReactQueryDevtools />
        </QueryProvider>
      </body>
    </html>
  );
}
