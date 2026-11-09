/** Interface text for every page. Keep the `ar` object in sync with `en`; TypeScript flags any missing key. */
const en = {
  meta: {
    title: 'Codey — Web & Mobile Development Company',
    description: 'Codey is a software development company building websites, mobile apps, APIs and cloud systems for startups and businesses.',
  },
  nav: {
    home: 'Home', services: 'Services', portfolio: 'Portfolio', about: 'About Us', contact: 'Contact',
    hire: 'Start A Project', resume: 'Get A Quote', menu: 'Menu', main: 'Main navigation',
    toLight: 'Switch to light mode', toDark: 'Switch to dark mode',
    langLabel: 'العربية', langAria: 'Switch to Arabic',
  },
  hero: {
    badge: 'Your tech partner · Web, Mobile & Backend',
    l1: 'Your Software Isn’t', l2: 'A One-Off Project.', l3: '', em: 'It’s How You Grow.',
    services: ['Websites', 'Mobile Apps', 'APIs & Backend', 'Servers & Deployment'],
    text: 'One team for your website, app and backend. We own the build, the launch and everything after, so you never have to chase five vendors again.',
    cta: 'Discuss Your Project', cta2: 'See How We Work',
    phoneTitle: 'Build Your Next Product.', phoneUser: '● Codey', featured: 'Featured Work', myProjects: 'Our Projects',
    seeAll: 'See All ›', detail: 'Detail', p1: 'Fintech App', p2: 'FitTrack', p3: 'Orders API',
  },
  features: {
    title1: 'One Team…', title2: 'Instead Of Five Vendors.', text: 'Every new need usually means a new freelancer, a new contract and a new way of working. With us it’s one partner who sees the whole picture.',
    f1: 'One Point Of Contact', f1t: 'One person who knows your project end to end, with a full team of web, mobile and backend engineers behind them.',
    f2: 'Code That Lasts', f2t: 'Clean architecture, reviews and documentation, so the next feature doesn’t mean starting over.',
    f3: 'With You After Launch', f3t: 'Launch day isn’t the finish line. We monitor, fix and keep improving as your business grows.',
  },
  map: {
    title: 'You Don’t Need To Know The Solution Before You Talk To Us.',
    text: 'Bring us the problem: a manual process, a slow site, an idea stuck on paper. We’ll pick the right technology together.',
    service: 'Service', serviceHint: 'Web, Mobile or API', timeline: 'Timeline', timelineHint: 'When to start', go: 'Start a project',
  },
  community: {
    title: 'Come With The Problem. Leave With A Plan.',
    text: 'A short call is enough for us to understand your business and tell you honestly what you need, and what you don’t.',
    cta: 'Start A Project', b1: "Let's Build!", b2: 'Hello!', b3: 'Ship It!',
  },
  work: {
    title1: 'Real Problems…', title2: 'And How We Solved Them.', allServices: 'All Services', allProjects: 'View All Projects →',
    caseStudy: 'View Case Study →', openCase: 'Open case study:',
  },
  modal: {
    close: 'Close', handled: 'Our team handled discovery, UX, front-end and delivery end to end.',
    live: 'Live Preview ↗', noLive: 'Live preview coming soon.',
  },
  testimonials: { title1: 'Don’t Take Our Word…', title2: 'Hear It From Them.', prev: 'Previous', next: 'Next' },
  faq: {
    title1: 'Still Have', title2: 'A Question?', text: 'Send us your question and our team will get back to you quickly.',
    placeholder: 'Your email address', button: 'Ask by Email', answered: 'Maybe your question has been answered, check this out.',
    subject: 'Question from the Codey website', body: 'Please contact me at',
  },
  footer: {
    tagline: 'Your tech partner for websites, apps and systems, from the first idea to long after launch.',
    pages: 'Pages', work: 'Work', caseStudies: 'Case Studies', pricing: 'Services & Pricing', resume: 'About Us',
    touch: 'Get In Touch', start: 'Start A Project', call: 'Book A Call', contactMe: 'Contact Us',
    info: 'Contact Info', rights: 'Copyright © 2026 Codey. All rights reserved.',
  },
  whatsapp: { label: 'Chat on WhatsApp', aria: 'Chat with Codey on WhatsApp', greeting: "Hello Codey, I'd like to discuss a project." },
  services: {
    crumb: 'Services', t1: 'Services That Turn', t2: 'Ideas Into', em: 'Shipped', t3: 'Products.',
    text: 'From a first prototype to a production system, here is how our team helps your business move faster.',
    from: 'Starting from', quote: 'Get a Quote', process: "How We'll Work Together",
    bandTitle: 'Not sure where to start?', bandText: 'Tell us the problem and get a clear plan, timeline and cost within 48 hours.', bandCta: 'Start a Project',
  },
  portfolio: {
    crumb: 'Portfolio', t1: 'Work That Speaks', t2: 'For', em: 'Itself.',
    text: 'A selection of products our team designed, built and launched for startups and companies.',
  },
  about: {
    crumb: 'About Us', badge1: '🚀 Web · Mobile · Cloud', badge2: '🤝 Long-term partner',
    t1: 'Not A Vendor.', t2: 'A Tech Partner.',
    text: 'Codey is a software development company based in Cairo, Egypt. We help startups and growing businesses turn ideas into fast, reliable and beautiful products, with clean code, clear communication and on-time delivery.',
    download: 'Our Services', talk: "Let's Talk", experience: 'Our Values', skills: 'Our Expertise', tech: 'Technologies We Use',
  },
  contact: {
    crumb: 'Contact', t1: "Let's Build Something", em: 'Great', t2: 'Together.',
    text: "Share a few details about your project and our team will reply within one business day.",
    available: 'Taking on new projects', name: 'Your Name', email: 'Email Address', interested: "I'm interested in",
    budget: 'Budget', message: 'Tell us about your project', submit: 'Continue to WhatsApp ➜',
    readyTitle: 'WhatsApp Message Ready',
    readyText: 'WhatsApp should open in a new tab with your message ready. Review it there and press Send to complete your request.',
    open: 'Open WhatsApp', again: 'Send another',
    msgHello: 'Hello Codey, I would like to discuss a project.', msgName: 'Name', msgEmail: 'Email', msgServices: 'Services',
    msgBudget: 'Budget', msgDetails: 'Project details', msgNone: 'Not specified',
    promoApplied: 'Discount applied', msgPromo: "I'd like to use the {percent}% discount offer.",
  },
  notFound: { title: 'Page Not', em: 'Found.', text: 'The page you are looking for does not exist or has moved.', back: 'Back to Home' },
  promo: {
    badge: 'Limited offer', title: '{percent}% off your first project',
    text: 'Book this month and get {percent}% off any service.', cta: 'Claim the offer', close: 'Dismiss offer',
  },
};

export type UiStrings = typeof en;

const ar: UiStrings = {
  meta: {
    title: 'Codey — شركة برمجة مواقع وتطبيقات',
    description: 'Codey شركة برمجيات بتبني مواقع وتطبيقات موبايل وأنظمة باك إند وسحابة للشركات الناشئة والبيزنس.',
  },
  nav: {
    home: 'الرئيسية', services: 'خدماتنا', portfolio: 'أعمالنا', about: 'من نحن', contact: 'تواصل معنا',
    hire: 'ابدأ مشروعك', resume: 'اطلب عرض سعر', menu: 'القائمة', main: 'القائمة الرئيسية',
    toLight: 'التحويل للوضع النهاري', toDark: 'التحويل للوضع الليلي',
    langLabel: 'EN', langAria: 'Switch to English',
  },
  hero: {
    badge: 'شريكك التقني · ويب وموبايل وباك إند',
    l1: 'البرمجة في شغلك', l2: 'مش مشروع وخلاص.', l3: '', em: 'دي طريقة نموّك.',
    services: ['مواقع ويب', 'تطبيقات موبايل', 'APIs وباك إند', 'سيرفرات ونشر'],
    text: 'فريق واحد للموقع والتطبيق والسيستم. بنشيل التنفيذ والإطلاق واللي بعده، وإنت مش هتلف تاني على خمس جهات.',
    cta: 'ناقش مشروعك معانا', cta2: 'شوف بنشتغل إزاي',
    phoneTitle: 'ابنِ منتجك الجاي.', phoneUser: '● Codey', featured: 'أعمال مميزة', myProjects: 'مشاريعنا',
    seeAll: 'الكل ‹', detail: 'تفاصيل', p1: 'تطبيق مالي', p2: 'FitTrack', p3: 'Orders API',
  },
  features: {
    title1: 'فريق واحد…', title2: 'بدل خمس جهات.', text: 'كل احتياج جديد عادةً معناه فريلانسر جديد وعقد جديد وطريقة شغل مختلفة. معانا إنت بتتعامل مع شريك واحد شايف الصورة كاملة.',
    f1: 'شخص واحد تكلّمه', f1t: 'مسؤول واحد فاهم مشروعك من أوله لآخره، ووراه فريق كامل ويب وموبايل وباك إند.',
    f2: 'كود معمول يعيش', f2t: 'معمارية نضيفة ومراجعة وتوثيق، عشان أي ميزة جديدة ماتبقاش معناها نبدأ من الصفر.',
    f3: 'معاك بعد الإطلاق', f3t: 'يوم الإطلاق مش خط النهاية. بنتابع ونصلّح ونطوّر مع كل خطوة بيكبر فيها شغلك.',
  },
  map: {
    title: 'مش لازم تعرف الحل التقني قبل ما تكلّمنا.',
    text: 'تعالى بالمشكلة: شغل يدوي، موقع بطيء، أو فكرة لسه على الورق. والتكنولوجيا المناسبة نختارها سوا.',
    service: 'الخدمة', serviceHint: 'ويب، موبايل أو API', timeline: 'الموعد', timelineHint: 'إمتى نبدأ', go: 'ابدأ مشروعك',
  },
  community: {
    title: 'تعالى بالمشكلة… وامشي بخطة.',
    text: 'مكالمة قصيرة كفاية نفهم فيها شغلك، ونقولك بصراحة إنت محتاج إيه… وإيه اللي مش محتاجه.',
    cta: 'ابدأ مشروعك', b1: 'يلا نبني!', b2: 'أهلًا!', b3: 'نطلقه!',
  },
  work: {
    title1: 'مشاكل حقيقية…', title2: 'وإزاي حلّيناها.', allServices: 'كل الخدمات', allProjects: 'كل المشاريع ←',
    caseStudy: 'شوف التفاصيل ←', openCase: 'افتح تفاصيل مشروع:',
  },
  modal: {
    close: 'إغلاق', handled: 'فريقنا اشتغل على المشروع من أوله لآخره: التحليل وتجربة المستخدم والواجهة والتسليم.',
    live: 'معاينة مباشرة ↗', noLive: 'المعاينة المباشرة قريبًا.',
  },
  testimonials: { title1: 'ماتصدّقناش إحنا…', title2: 'اسمع منهم.', prev: 'السابق', next: 'التالي' },
  faq: {
    title1: 'لسه عندك', title2: 'سؤال؟', text: 'ابعتلنا سؤالك وفريقنا هيرد عليك بسرعة.',
    placeholder: 'بريدك الإلكتروني', button: 'اسأل بالإيميل', answered: 'يمكن سؤالك متجاوب عليه هنا، بص كده.',
    subject: 'سؤال من موقع Codey', body: 'برجاء التواصل معي على',
  },
  footer: {
    tagline: 'شريكك التقني في المواقع والتطبيقات والأنظمة، من أول فكرة لحد بعد الإطلاق بكتير.',
    pages: 'الصفحات', work: 'الأعمال', caseStudies: 'دراسات حالة', pricing: 'الخدمات والأسعار', resume: 'من نحن',
    touch: 'تواصل معانا', start: 'ابدأ مشروعك', call: 'احجز مكالمة', contactMe: 'راسلنا',
    info: 'بيانات التواصل', rights: 'جميع الحقوق محفوظة © 2026 Codey.',
  },
  whatsapp: { label: 'كلّمنا واتساب', aria: 'تواصل مع Codey على واتساب', greeting: 'أهلًا Codey، حابب أتكلم معاكم عن مشروع.' },
  services: {
    crumb: 'خدماتنا', t1: 'خدمات بتحوّل', t2: 'الأفكار لمنتجات', em: 'جاهزة', t3: 'للإطلاق.',
    text: 'من أول نموذج تجريبي لحد نظام شغّال فعليًا، ده إزاي فريقنا يقدر يساعد شغلك يتحرك أسرع.',
    from: 'تبدأ من', quote: 'اطلب عرض سعر', process: 'إزاي هنشتغل سوا',
    bandTitle: 'مش عارف تبدأ منين؟', bandText: 'احكيلنا المشكلة وخد خطة ومدة وتكلفة واضحة خلال 48 ساعة.', bandCta: 'ابدأ مشروعك',
  },
  portfolio: {
    crumb: 'أعمالنا', t1: 'شغل بيتكلم', t2: 'عن', em: 'نفسه.',
    text: 'مجموعة من المنتجات اللي فريقنا صممها وبناها وأطلقها لشركات ناشئة وشركات كبيرة.',
  },
  about: {
    crumb: 'من نحن', badge1: '🚀 ويب · موبايل · سحابة', badge2: '🤝 شريك على المدى الطويل',
    t1: 'مش مجرد مبرمجين.', t2: 'شريك تقني.',
    text: 'Codey شركة برمجيات من القاهرة، بنساعد الشركات الناشئة والبيزنس اللي بيكبر إنه يحوّل أفكاره لمنتجات سريعة وموثوقة وشكلها حلو، بكود نضيف وتواصل واضح وتسليم في الميعاد.',
    download: 'خدماتنا', talk: 'يلا نتكلم', experience: 'قيمنا', skills: 'خبراتنا', tech: 'التقنيات اللي بنستخدمها',
  },
  contact: {
    crumb: 'تواصل معنا', t1: 'يلا نبني حاجة', em: 'عظيمة', t2: 'سوا.',
    text: 'شاركنا شوية تفاصيل عن مشروعك وفريقنا هيرد عليك خلال يوم عمل واحد.',
    available: 'بنستقبل مشاريع جديدة', name: 'اسمك', email: 'البريد الإلكتروني', interested: 'مهتم بـ',
    budget: 'الميزانية', message: 'احكيلنا عن مشروعك', submit: 'كمّل على واتساب ➜',
    readyTitle: 'رسالة الواتساب جاهزة',
    readyText: 'واتساب هيفتح في تاب جديد ورسالتك جاهزة. راجعها هناك ودوس إرسال عشان طلبك يوصل.',
    open: 'افتح واتساب', again: 'ابعت طلب تاني',
    msgHello: 'أهلًا Codey، حابب أتكلم معاكم عن مشروع.', msgName: 'الاسم', msgEmail: 'الإيميل', msgServices: 'الخدمات',
    msgBudget: 'الميزانية', msgDetails: 'تفاصيل المشروع', msgNone: 'غير محدد',
    promoApplied: 'تم تطبيق الخصم', msgPromo: 'حابب أستفيد من عرض خصم {percent}%.',
  },
  notFound: { title: 'الصفحة', em: 'مش موجودة.', text: 'الصفحة اللي بتدور عليها مش موجودة أو اتنقلت.', back: 'ارجع للرئيسية' },
  promo: {
    badge: 'عرض لفترة محدودة', title: 'خصم {percent}% على أول مشروع',
    text: 'احجز الشهر ده وخد خصم {percent}% على أي خدمة.', cta: 'احجز العرض', close: 'إغلاق العرض',
  },
};

export const ui = { en, ar };

/** Replace `{name}` placeholders in a UI string. */
export function fill(text: string, values: Record<string, string | number>) {
  return text.replace(/\{(\w+)\}/g, (_, k: string) => String(values[k] ?? ''));
}
