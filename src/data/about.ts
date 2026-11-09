import type { Bi } from '../i18n/LanguageContext';

/** Company values shown on the About page. */
export const timeline: { period: Bi; role: Bi; place: Bi; text: Bi }[] = [
  {
    period: { en: '01', ar: '01' }, role: { en: 'Clarity First', ar: 'الوضوح الأول' }, place: { en: '', ar: '' },
    text: { en: 'A clear plan, scope and price before any work starts. No surprises.', ar: 'خطة ونطاق شغل وسعر واضحين قبل ما نبدأ. من غير مفاجآت.' },
  },
  {
    period: { en: '02', ar: '02' }, role: { en: 'Quality Code', ar: 'جودة الكود' }, place: { en: '', ar: '' },
    text: { en: 'Clean, tested and documented code that is easy to grow and maintain.', ar: 'كود نضيف ومتجرّب وموثّق، سهل يكبر ويتطوّر.' },
  },
  {
    period: { en: '03', ar: '03' }, role: { en: 'On-Time Delivery', ar: 'التسليم في الميعاد' }, place: { en: '', ar: '' },
    text: { en: 'Agreed milestones and regular progress updates throughout the project.', ar: 'مراحل متفق عليها وتحديثات مستمرة طول فترة المشروع.' },
  },
  {
    period: { en: '04', ar: '04' }, role: { en: 'Support After Launch', ar: 'دعم بعد الإطلاق' }, place: { en: '', ar: '' },
    text: { en: 'We stay with you after launch to fix, improve and scale.', ar: 'بنفضل معاك بعد الإطلاق نصلّح ونطوّر ونكبّر.' },
  },
];

export const skills: { name: Bi; level: number }[] = [
  { name: { en: 'JavaScript / TypeScript', ar: 'JavaScript / TypeScript' }, level: 95 },
  { name: { en: 'React & Next.js', ar: 'React وNext.js' }, level: 92 },
  { name: { en: 'Node.js & APIs', ar: 'Node.js والـ APIs' }, level: 88 },
  { name: { en: 'UI / Motion Design', ar: 'تصميم الواجهات والحركة' }, level: 84 },
  { name: { en: 'Databases & Cloud', ar: 'قواعد البيانات والسحابة' }, level: 78 },
];

export const technologies = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'Flutter', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Figma', 'Git'];

export const stats: ({ id: string; text: Bi } & ({ n: number; suffix: string } | { label: string }))[] = [
  { id: 'projects', n: 3, suffix: '', text: { en: 'Projects Delivered', ar: 'مشاريع تم تسليمها' } },
  { id: 'clients', n: 3, suffix: '', text: { en: 'Happy Clients', ar: 'عملاء سعداء' } },
  { id: 'services', n: 4, suffix: '', text: { en: 'Core Services', ar: 'خدمات أساسية' } },
  { id: 'response', label: '24h', text: { en: 'Response Time', ar: 'سرعة الرد' } },
];
