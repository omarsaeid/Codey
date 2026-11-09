import { createWhatsAppUrl } from '../../config/site';
import { useLang } from '../../i18n/LanguageContext';

export default function WhatsAppButton() {
  const { t } = useLang();
  return (
    <a
      className="whatsapp-float"
      href={createWhatsAppUrl(t.whatsapp.greeting)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.aria}
      title={t.whatsapp.label}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M16.02 3.2A12.65 12.65 0 0 0 5.1 22.23L3.3 28.8l6.73-1.76A12.66 12.66 0 1 0 16.02 3.2Zm0 23.1c-1.9 0-3.77-.5-5.4-1.45l-.39-.23-3.99 1.04 1.07-3.89-.25-.4a10.4 10.4 0 1 1 8.96 4.93Zm5.72-7.8c-.31-.16-1.84-.91-2.12-1.02-.29-.1-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.2-.36.23-.67.08-.31-.16-1.31-.49-2.5-1.55-.92-.82-1.55-1.83-1.73-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.32-.52.1-.2.05-.39-.03-.54-.08-.16-.71-1.7-.97-2.32-.25-.6-.51-.52-.71-.53h-.6c-.2 0-.54.08-.82.39-.29.31-1.08 1.05-1.08 2.57s1.1 2.98 1.26 3.19c.15.2 2.17 3.32 5.25 4.65.73.32 1.3.5 1.75.64.74.23 1.41.2 1.94.12.59-.09 1.84-.75 2.1-1.48.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36Z" fill="currentColor" />
      </svg>
      <span>{t.whatsapp.label}</span>
    </a>
  );
}
