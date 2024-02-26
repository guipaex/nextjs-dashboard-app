import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import localFont from 'next/font/local';

const Chillax = localFont({
  src: './ui/fonts/Chillax-Variable.ttf',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
