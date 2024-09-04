import type { Metadata } from 'next';
import { nunitoSans } from '@/libs/fonts';
import { ToastNotify } from '@/components/ToastNotify';
import QueryProvider from '@/components/providers/QueryProvider';
import ModalProvider from '@/components/providers/ModalProvider';
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
        <ModalProvider>
          <QueryProvider>
            <ToastNotify />
            {children}
            <ReactQueryDevtools />
          </QueryProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
