import { Header } from '@/components/header/Header';
import { Sidebar } from '@/components/sidebar/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="appLayout">
      <Sidebar />
      <div className="appMain">
        <Header />
        <main className="appContent">{children}</main>
      </div>
    </div>
  );
}
