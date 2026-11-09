import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isPromoActive, promo } from '../../config/site';
import { useLang } from '../../i18n/LanguageContext';
import { fill } from '../../i18n/ui';

const DISMISS_KEY = 'codey-promo-dismissed-at';

function wasRecentlyDismissed() {
  try {
    const at = Number(window.localStorage.getItem(DISMISS_KEY));
    return Number.isFinite(at) && at > 0 && Date.now() - at < promo.remindAfterDays * 86_400_000;
  } catch {
    return false;
  }
}

/** In-site notification announcing the current discount. Shown once per visit until dismissed. */
export default function PromoToast() {
  const { t } = useLang();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isPromoActive() || wasRecentlyDismissed()) return;
    const id = window.setTimeout(() => setOpen(true), promo.delayMs);
    return () => window.clearTimeout(id);
  }, []);

  // No need to advertise the offer on the page where it is being claimed.
  useEffect(() => {
    if (pathname === '/contact') setOpen(false);
  }, [pathname]);

  const dismiss = () => {
    setOpen(false);
    try {
      window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      // Without storage the offer simply shows again on the next visit.
    }
  };

  const values = { percent: promo.percent };

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className="promo"
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        >
          <button type="button" className="promo-x" aria-label={t.promo.close} onClick={dismiss}>✕</button>
          <div className="promo-badge">
            <span aria-hidden="true">🎁</span>
            <b>-{promo.percent}%</b>
          </div>
          <div className="promo-body">
            <small>{t.promo.badge}</small>
            <strong>{fill(t.promo.title, values)}</strong>
            <p>{fill(t.promo.text, values)}</p>
            <Link className="btn s" to="/contact?promo=1" onClick={dismiss}>{t.promo.cta}</Link>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
