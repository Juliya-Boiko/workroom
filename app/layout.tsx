import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import '../styles/global.scss';

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workroom",
  description: "Workroom community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        {children}
      </body>
    </html>
  );
}
