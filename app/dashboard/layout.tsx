import SideNav from '@/app/ui/dashboard/sidenav';
import localFont from 'next/font/local';

const Chillax = localFont({
  src: '../ui/fonts/Chillax-Variable.ttf',
  display: 'swap',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div
        className={`flex-grow p-6 md:overflow-y-auto md:p-12 ${Chillax.className}`}
      >
        {children}
      </div>
    </div>
  );
}
