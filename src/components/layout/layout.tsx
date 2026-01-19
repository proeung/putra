import Header from '@/components/header';
import Footer from '@/components/footer';
import Meta from '@/components/meta';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <main className="min-h-screen overflow-hidden">
        {children}
        <SpeedInsights />
        <Analytics />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
