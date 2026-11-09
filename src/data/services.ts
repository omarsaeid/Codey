import type { Bi } from '../i18n/LanguageContext';

export interface Service { id: string; icon: string; title: Bi; description: Bi; points: Bi[]; price: Bi }

export const services: Service[] = [
  {
    id: 'web', icon: '🌐', price: { en: '$1,500', ar: '1,500$' },
    title: { en: 'Web Applications', ar: 'تطبيقات الويب' },
    description: { en: 'Fast, accessible web apps and dashboards built with modern frameworks.', ar: 'تطبيقات ويب ولوحات تحكم سريعة وسهلة الاستخدام بأحدث التقنيات.' },
    points: [
      { en: 'Custom React / Next.js builds', ar: 'مشاريع React / Next.js مخصصة' },
      { en: 'Admin panels and SaaS dashboards', ar: 'لوحات إدارة ومنصات SaaS' },
      { en: 'SEO and performance tuned', ar: 'متوافقة مع محركات البحث وسريعة' },
    ],
  },
  {
    id: 'mobile', icon: '📱', price: { en: '$2,500', ar: '2,500$' },
    title: { en: 'Mobile Apps', ar: 'تطبيقات الموبايل' },
    description: { en: 'Polished iOS and Android apps from a single cross-platform codebase.', ar: 'تطبيقات iOS وأندرويد احترافية من كود واحد.' },
    points: [
      { en: 'React Native and Flutter', ar: 'React Native وFlutter' },
      { en: 'Offline-first and push-ready UI', ar: 'تشتغل أوفلاين وتدعم الإشعارات' },
      { en: 'Store launch guidance', ar: 'مساعدة في النشر على المتاجر' },
    ],
  },
  {
    id: 'backend', icon: '⚙️', price: { en: '$1,800', ar: '1,800$' },
    title: { en: 'Backend & APIs', ar: 'الباك إند والـ APIs' },
    description: { en: 'Secure, documented APIs and services that scale with your users.', ar: 'APIs وخدمات آمنة وموثّقة بتكبر مع عدد مستخدمينك.' },
    points: [
      { en: 'REST and GraphQL design', ar: 'تصميم REST وGraphQL' },
      { en: 'Auth, payments and integrations', ar: 'تسجيل دخول ودفع وربط بخدمات خارجية' },
      { en: 'Cloud deployment and CI/CD', ar: 'نشر على السحابة وCI/CD' },
    ],
  },
  {
    id: 'ui', icon: '🎨', price: { en: '$900', ar: '900$' },
    title: { en: 'UI Engineering', ar: 'برمجة الواجهات' },
    description: { en: 'Design-to-code that matches your Figma pixel for pixel, with motion.', ar: 'تحويل تصميمك من Figma لكود مطابق بالبكسل مع أنيميشن.' },
    points: [
      { en: 'Component libraries', ar: 'مكتبات مكونات' },
      { en: 'Animations and micro-interactions', ar: 'أنيميشن وتفاعلات دقيقة' },
      { en: 'Responsive and RTL ready', ar: 'متجاوبة وتدعم العربي' },
    ],
  },
  {
    id: 'audit', icon: '🚀', price: { en: '$600', ar: '600$' },
    title: { en: 'Audits & Performance', ar: 'مراجعة وتحسين الأداء' },
    description: { en: 'Find what slows your product down and get a clear plan to fix it.', ar: 'نكتشف إيه اللي مبطّأ منتجك وتاخد خطة واضحة لحله.' },
    points: [
      { en: 'Code and security review', ar: 'مراجعة الكود والأمان' },
      { en: 'Core Web Vitals optimization', ar: 'تحسين Core Web Vitals' },
      { en: 'Written report with priorities', ar: 'تقرير مكتوب بالأولويات' },
    ],
  },
  {
    id: 'support', icon: '🛟', price: { en: '$400/mo', ar: '400$ / شهريًا' },
    title: { en: 'Maintenance & Support', ar: 'صيانة ودعم فني' },
    description: { en: 'Monthly care so your product stays fast, updated and bug-free.', ar: 'متابعة شهرية عشان منتجك يفضل سريع ومحدّث ومن غير مشاكل.' },
    points: [
      { en: 'Bug fixes and updates', ar: 'إصلاح الأخطاء والتحديثات' },
      { en: 'Priority response time', ar: 'أولوية في الرد' },
      { en: 'Monthly progress report', ar: 'تقرير شهري' },
    ],
  },
];

export const processSteps: { title: Bi; text: Bi }[] = [
  { title: { en: 'Discover', ar: 'الفهم' }, text: { en: 'We talk goals, users and scope so we build the right thing.', ar: 'نتكلم عن الأهداف والمستخدمين ونطاق الشغل عشان نبني الحاجة الصح.' } },
  { title: { en: 'Design', ar: 'التصميم' }, text: { en: 'Wireframes and visual direction you can react to early.', ar: 'مخططات وتصور بصري تقدر تعلّق عليه من بدري.' } },
  { title: { en: 'Build', ar: 'التنفيذ' }, text: { en: 'Weekly demos, clean code and honest progress updates.', ar: 'عرض أسبوعي، كود نظيف، وتحديثات واضحة بالتقدم.' } },
  { title: { en: 'Launch', ar: 'الإطلاق' }, text: { en: 'Testing, deployment and support after go-live.', ar: 'اختبار ونشر ودعم بعد الإطلاق.' } },
];
