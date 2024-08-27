export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <header>protected header</header>
        <main> {children}</main>
      </div>
    </div>
  );
}
