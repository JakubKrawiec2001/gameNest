export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-black min-h-screen flex items-center justify-center">
      {children}
    </main>
  );
}
