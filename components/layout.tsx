import Header from './header';
import Footer from './footer';
import Meta from './meta';
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
