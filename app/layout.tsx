import '../styles/global.scss';
import QueryProvider from '@/components/providers/QueryProvider';
import ModalProvider from '@/components/providers/ModalProvider';
import { nunitoSans } from '@/libs/fonts';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { ToastNotify } from '@/components/ToastNotify';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workroom',
  description: 'Workroom community',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={nunitoSans.className}>
          <ModalProvider>
            <QueryProvider>
              <ToastNotify />
              {children}
              <ReactQueryDevtools />
            </QueryProvider>
          </ModalProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
