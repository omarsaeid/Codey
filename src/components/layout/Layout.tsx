import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import PromoToast from './PromoToast';
import WhatsAppButton from './WhatsAppButton';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <div className="shell">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppButton />
      <PromoToast />
    </div>
  );
}
