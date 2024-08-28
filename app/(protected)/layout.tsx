import { Header } from '@/components/header/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <Header />
        <main> {children}</main>
      </div>
    </div>
  );
}
