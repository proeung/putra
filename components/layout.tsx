import Header from './header';
import Footer from './footer';
import Meta from './meta';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
      </main>
      <Footer />
    </>
  );
}

export default Layout;
