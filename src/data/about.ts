import type { Bi } from '../i18n/LanguageContext';

export const timeline: { period: Bi; role: Bi; place: Bi; text: Bi }[] = [
  {
    period: { en: '2023 — Now', ar: '2023 — الآن' }, role: { en: 'Senior Full-Stack Developer', ar: 'مطوّر Full-Stack أول' },
    place: { en: 'Freelance · Remote', ar: 'عمل حر · عن بُعد' },
    text: { en: 'Building products for startups in fintech, e-commerce and real estate.', ar: 'ببني منتجات لشركات ناشئة في التكنولوجيا المالية والتجارة الإلكترونية والعقارات.' },
  },
  {
    period: { en: '2020 — 2023', ar: '2020 — 2023' }, role: { en: 'Lead Front-End Engineer', ar: 'قائد فريق الواجهات الأمامية' },
    place: { en: 'Nile Tech · Cairo', ar: 'Nile Tech · القاهرة' },
    text: { en: 'Led a team of 6 and launched a shared design system.', ar: 'قدت فريق من 6 مطورين وأطلقنا نظام تصميم موحد.' },
  },
  {
    period: { en: '2017 — 2020', ar: '2017 — 2020' }, role: { en: 'Web Developer', ar: 'مطوّر ويب' },
    place: { en: 'Pixel Studio · Alexandria', ar: 'Pixel Studio · الإسكندرية' },
    text: { en: 'Delivered 40+ client websites and web apps.', ar: 'سلّمت أكتر من 40 موقع وتطبيق ويب للعملاء.' },
  },
  {
    period: { en: '2012 — 2016', ar: '2012 — 2016' }, role: { en: 'B.Sc. Computer Science', ar: 'بكالوريوس علوم الحاسب' },
    place: { en: 'Alexandria University', ar: 'جامعة الإسكندرية' },
    text: { en: 'Graduated with honors, focus on software engineering.', ar: 'تخرجت بمرتبة الشرف، وتخصصت في هندسة البرمجيات.' },
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
  { id: 'years', n: 10, suffix: '', text: { en: 'Years of Experience', ar: 'سنين خبرة' } },
  { id: 'projects', n: 120, suffix: '+', text: { en: 'Projects Delivered', ar: 'مشروع تم تسليمه' } },
  { id: 'clients', n: 80, suffix: '', text: { en: 'Happy Clients', ar: 'عميل سعيد' } },
  { id: 'rating', label: '4.9', text: { en: 'Overall Rating', ar: 'التقييم العام' } },
];
