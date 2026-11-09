import { contactEmail, whatsappDisplayNumber, whatsappNumber } from '../config/site';
import type { Bi } from '../i18n/LanguageContext';

export interface Testimonial { quote: Bi; name: Bi; role: Bi; stars: number; face: [string, string, string] }

export const testimonials: Testimonial[] = [
  {
    quote: { en: 'Thanks to Codey I can now realize my product vision around the world', ar: 'بفضل Codey قدرت أحقق رؤيتي لمنتجي وأوصله لناس في كل مكان' },
    name: { en: 'Wade Warren', ar: 'Wade Warren' }, role: { en: 'Startup Founder', ar: 'مؤسس شركة ناشئة' }, stars: 5, face: ['#e0a074', '#1a2026', '#2a7cf0'],
  },
  {
    quote: { en: 'I think this is the best dev service I have ever tried and I recommend it to you', ar: 'أحسن خدمة برمجة جربتها لحد دلوقتي، وأنصح بيها جدًا' },
    name: { en: 'Theresa Jordan', ar: 'Theresa Jordan' }, role: { en: 'Product Manager', ar: 'مديرة منتج' }, stars: 4, face: ['#e8a98a', '#2a1a1a', '#e0443f'],
  },
  {
    quote: { en: 'Codey helps me a lot in building interesting digital products', ar: 'Codey ساعدني كتير في بناء منتجات رقمية مميزة' },
    name: { en: 'James Wilson', ar: 'James Wilson' }, role: { en: 'E-commerce Owner', ar: 'صاحب متجر إلكتروني' }, stars: 4, face: ['#e0a074', '#1a2026', '#2a7cf0'],
  },
  {
    quote: { en: 'Fun, from the first call to launch. Beautiful code, pretty and cool', ar: 'تجربة ممتعة من أول مكالمة لحد الإطلاق. كود نضيف وشغل جميل' },
    name: { en: 'Jhon Tosan', ar: 'Jhon Tosan' }, role: { en: 'Agency Lead', ar: 'مدير وكالة' }, stars: 3, face: ['#f0b98d', '#1a2026', '#e0b02a'],
  },
];

export const faqs: { q: Bi; a: Bi }[] = [
  { q: { en: 'What is Codey?', ar: 'إيه هو Codey؟' }, a: { en: 'A freelance developer studio building web and mobile products.', ar: 'استوديو تطوير مستقل بيبني منتجات ويب وموبايل.' } },
  { q: { en: 'How to book a project?', ar: 'أحجز مشروع إزاي؟' }, a: { en: 'Pick a service and your budget, then send a message — no payment needed to start.', ar: 'اختار الخدمة والميزانية وابعت رسالة — مش محتاج تدفع حاجة عشان نبدأ.' } },
  { q: { en: 'What kind of service will I get?', ar: 'هاخد خدمة شكلها إيه؟' }, a: { en: 'Design-to-code builds, audits, and ongoing support.', ar: 'تحويل التصميم لكود، ومراجعة المشاريع، ودعم مستمر.' } },
];

export const contactInfo: { icon: string; label: Bi; value: Bi; href?: string }[] = [
  { icon: '✉️', label: { en: 'Email', ar: 'البريد الإلكتروني' }, value: { en: contactEmail, ar: contactEmail }, href: `mailto:${contactEmail}` },
  { icon: '📞', label: { en: 'Phone / WhatsApp', ar: 'تليفون / واتساب' }, value: { en: whatsappDisplayNumber, ar: whatsappDisplayNumber }, href: `https://wa.me/${whatsappNumber}` },
  { icon: '📍', label: { en: 'Location', ar: 'المكان' }, value: { en: 'Cairo, Egypt (GMT+2)', ar: 'القاهرة، مصر (GMT+2)' } },
  { icon: '⏱', label: { en: 'Response time', ar: 'وقت الرد' }, value: { en: 'Within 24 hours', ar: 'خلال 24 ساعة' } },
];

export const contactServices: { id: string; label: Bi }[] = [
  { id: 'web', label: { en: 'Web App', ar: 'تطبيق ويب' } },
  { id: 'mobile', label: { en: 'Mobile App', ar: 'تطبيق موبايل' } },
  { id: 'api', label: { en: 'API / Backend', ar: 'API / باك إند' } },
  { id: 'ui', label: { en: 'UI Engineering', ar: 'برمجة واجهات' } },
  { id: 'other', label: { en: 'Other', ar: 'حاجة تانية' } },
];
export const contactBudgets = ['< $1K', '$1K–5K', '$5K–10K', '$10K+'];

export const navLinks = [
  { to: '/', key: 'home' },
  { to: '/services', key: 'services' },
  { to: '/portfolio', key: 'portfolio' },
  { to: '/about', key: 'about' },
  { to: '/contact', key: 'contact' },
] as const;
