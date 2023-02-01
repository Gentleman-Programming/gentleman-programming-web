export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <header>Header</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
