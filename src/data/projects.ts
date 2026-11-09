import type { Bi } from '../i18n/LanguageContext';

export type ProjectCategory = 'web' | 'mobile' | 'backend' | 'ui';

export interface Project {
  id: string;
  title: Bi;
  category: ProjectCategory;
  description: Bi;
  tags: string[];
  gradient: string;
  accent: string;
  year: string;
  metrics: { value: string; label: Bi }[];
  /** Replace example.com with the real project URL to enable the Live Preview button. */
  url: string;
}

export const projectFilters: { id: 'all' | ProjectCategory; label: Bi }[] = [
  { id: 'all', label: { en: 'All', ar: 'الكل' } },
  { id: 'web', label: { en: 'Web', ar: 'ويب' } },
  { id: 'mobile', label: { en: 'Mobile', ar: 'موبايل' } },
  { id: 'backend', label: { en: 'Backend', ar: 'باك إند' } },
  { id: 'ui', label: { en: 'UI Systems', ar: 'أنظمة واجهات' } },
];

export const projects: Project[] = [
  {
    id: 'fintech', category: 'web', year: '2025', url: 'https://example.com',
    title: { en: 'Fintech Dashboard', ar: 'لوحة تحكم مالية' },
    description: {
      en: 'Real-time analytics dashboard for a payments startup, processing thousands of transactions a minute.',
      ar: 'لوحة تحليلات لحظية لشركة مدفوعات ناشئة، بتعالج آلاف المعاملات في الدقيقة.',
    },
    tags: ['React', 'Node.js', 'PostgreSQL'], gradient: 'linear-gradient(135deg,#0b57d0,#6aa6ff)', accent: '#0b57d0',
    metrics: [
      { value: '+38%', label: { en: 'Conversion', ar: 'معدل التحويل' } },
      { value: '1.2s', label: { en: 'Load time', ar: 'وقت التحميل' } },
      { value: '40K', label: { en: 'Users', ar: 'مستخدم' } },
    ],
  },
  {
    id: 'fittrack', category: 'mobile', year: '2025', url: 'https://example.com',
    title: { en: 'FitTrack Mobile App', ar: 'تطبيق FitTrack' },
    description: {
      en: 'Cross-platform workout tracker with offline mode, streaks and social challenges.',
      ar: 'تطبيق لمتابعة التمارين على أندرويد وiOS، بيشتغل من غير إنترنت وفيه تحديات مع الأصحاب.',
    },
    tags: ['React Native', 'Firebase'], gradient: 'linear-gradient(135deg,#f2692b,#ffb37a)', accent: '#f2692b',
    metrics: [
      { value: '4.8★', label: { en: 'Store rating', ar: 'تقييم المتجر' } },
      { value: '120K', label: { en: 'Downloads', ar: 'تحميل' } },
      { value: '62%', label: { en: 'Retention', ar: 'نسبة الاحتفاظ' } },
    ],
  },
  {
    id: 'orders-api', category: 'backend', year: '2024', url: 'https://example.com',
    title: { en: 'Orders API Platform', ar: 'منصة Orders API' },
    description: {
      en: 'Scalable REST and GraphQL backend for a multi-vendor e-commerce marketplace.',
      ar: 'باك إند REST وGraphQL قابل للتوسع لمتجر إلكتروني متعدد البائعين.',
    },
    tags: ['Node.js', 'Docker', 'Redis'], gradient: 'linear-gradient(135deg,#1a2026,#4a5a78)', accent: '#4d8dff',
    metrics: [
      { value: '99.98%', label: { en: 'Uptime', ar: 'وقت التشغيل' } },
      { value: '180ms', label: { en: 'Avg response', ar: 'متوسط الاستجابة' } },
      { value: '3x', label: { en: 'Throughput', ar: 'سعة المعالجة' } },
    ],
  },
  {
    id: 'bayt', category: 'web', year: '2024', url: 'https://example.com',
    title: { en: 'Bayt Real-Estate Portal', ar: 'بوابة بيت العقارية' },
    description: {
      en: 'Property search platform with map filters, saved searches and agent dashboards.',
      ar: 'منصة بحث عن العقارات بفلاتر على الخريطة وحفظ لعمليات البحث ولوحات تحكم للوسطاء.',
    },
    tags: ['Next.js', 'Tailwind', 'Mapbox'], gradient: 'linear-gradient(135deg,#2c8a68,#8fe0b8)', accent: '#2c8a68',
    metrics: [
      { value: '+54%', label: { en: 'Leads', ar: 'عملاء محتملين' } },
      { value: '15K', label: { en: 'Listings', ar: 'إعلان' } },
      { value: '2x', label: { en: 'SEO traffic', ar: 'زيارات البحث' } },
    ],
  },
  {
    id: 'nile-ds', category: 'ui', year: '2024', url: 'https://example.com',
    title: { en: 'Nile Design System', ar: 'نظام تصميم Nile' },
    description: {
      en: 'A reusable component library and design tokens shared across five product teams.',
      ar: 'مكتبة مكونات قابلة لإعادة الاستخدام ومتغيرات تصميم مشتركة بين خمس فرق منتجات.',
    },
    tags: ['Figma', 'Storybook', 'TypeScript'], gradient: 'linear-gradient(135deg,#7a5be0,#c5b3ff)', accent: '#7a5be0',
    metrics: [
      { value: '80+', label: { en: 'Components', ar: 'مكوّن' } },
      { value: '-45%', label: { en: 'Dev time', ar: 'وقت التطوير' } },
      { value: '5', label: { en: 'Teams', ar: 'فرق' } },
    ],
  },
  {
    id: 'booking', category: 'mobile', year: '2023', url: 'https://example.com',
    title: { en: 'Ride Booking App', ar: 'تطبيق حجز رحلات' },
    description: {
      en: 'Ride and delivery booking prototype with live tracking and in-app payments UI.',
      ar: 'نموذج تطبيق لحجز الرحلات والتوصيل مع تتبع مباشر وواجهة دفع داخل التطبيق.',
    },
    tags: ['Flutter', 'Maps'], gradient: 'linear-gradient(135deg,#e0443f,#ffa39f)', accent: '#e0443f',
    metrics: [
      { value: '30%', label: { en: 'Faster booking', ar: 'حجز أسرع' } },
      { value: '4.7★', label: { en: 'Rating', ar: 'التقييم' } },
      { value: '9K', label: { en: 'Active users', ar: 'مستخدم نشط' } },
    ],
  },
];
