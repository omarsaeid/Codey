/**
 * Public contact settings.
 * Set VITE_WHATSAPP_NUMBER in Vercel to the real international number
 * (digits only, including the country code, without +, spaces or dashes).
 */
const configuredWhatsAppNumber = import.meta.env.VITE_WHATSAPP_NUMBER?.trim();

// Kept as a fallback because the original portfolio already displayed this
// sample number. Replace it before publishing the real portfolio.
export const whatsappNumber = (configuredWhatsAppNumber || '201000000000').replace(/\D/g, '');
export const whatsappDisplayNumber = /^20\d{10}$/.test(whatsappNumber)
  ? `+20 ${whatsappNumber.slice(2, 5)} ${whatsappNumber.slice(5, 8)} ${whatsappNumber.slice(8)}`
  : `+${whatsappNumber}`;
export const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'hello@codey.dev';

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * In-site promotion shown to visitors shortly after they open the site.
 * Set `enabled: false` to hide it, change `percent` for a different discount,
 * and set `endsAt` (YYYY-MM-DD) to stop showing it automatically after that date.
 */
export const promo = {
  enabled: true,
  percent: 30,
  endsAt: '' as string,
  /** Days before a visitor who dismissed the offer sees it again. */
  remindAfterDays: 3,
  /** Delay before it slides in, in milliseconds. */
  delayMs: 1500,
};

export function isPromoActive(now = new Date()) {
  if (!promo.enabled) return false;
  if (!promo.endsAt) return true;
  return now <= new Date(`${promo.endsAt}T23:59:59`);
}
