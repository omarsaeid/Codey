/** Interface text for every page. Keep the `ar` object in sync with `en`; TypeScript flags any missing key. */
const en = {
  meta: {
    title: 'Codey — Developer Portfolio',
    description: "Codey — Omar's developer portfolio. Explore selected work, services, experience and ways to get in touch.",
  },
  nav: {
    home: 'Home', services: 'Services', portfolio: 'Portfolio', about: 'About', contact: 'Contact',
    hire: 'Hire Me', resume: 'Resume', menu: 'Menu', main: 'Main navigation',
    toLight: 'Switch to light mode', toDark: 'Switch to dark mode',
    langLabel: 'العربية', langAria: 'Switch to Arabic',
  },
  hero: {
    l1: 'Code In The', l2: 'Cloud But In', l3: 'A', em: 'Good Way!',
    text: "Now you can ship products anywhere and anytime with a developer who cares, and of course it's built to last.",
    cta: 'Get Started',
    phoneTitle: 'Build Your Next Product.', phoneUser: '● Omar', featured: 'Featured Work', myProjects: 'My Projects',
    seeAll: 'See All ›', detail: 'Detail', p1: 'Fintech App', p2: 'FitTrack', p3: 'Orders API',
  },
  features: {
    title1: 'The Way', title2: 'I Work!', text: 'Try a variety of benefits when using my services.',
    f1: 'Lots Of Choices', f1t: 'Web, mobile and backend stacks that fit your product, built to work anytime and anywhere.',
    f2: 'Best Code Guide', f2t: 'Clean architecture and clear docs ready to guide your team at any stage of the project.',
    f3: 'Easy Booking', f3t: 'An easy, safe and fast process to book your project slot and get started.',
  },
  map: {
    title: 'Code, Coffee, Deadlines, What Else Do You Need?',
    text: "Pick the service you need, tell me when you want to start, and let's plan your project together.",
    service: 'Service', serviceHint: 'Web, Mobile or API', timeline: 'Timeline', timelineHint: 'When to start', go: 'Start a project',
  },
  community: {
    title: 'Your Idea Deserves A Great Build.',
    text: "Founders, startups and teams trust me to turn their ideas into fast, reliable products. Let's talk about yours.",
    cta: 'Start A Project', b1: "Let's Build!", b2: 'Hello!', b3: 'Ship It!',
  },
  work: {
    title1: 'Selected Work', title2: "I'm Proud Of.", allServices: 'All Services', allProjects: 'View All Projects →',
    caseStudy: 'View Case Study →', openCase: 'Open case study:',
  },
  modal: {
    close: 'Close', handled: 'I handled the discovery, UX, front-end and delivery end to end.',
    live: 'Live Preview ↗', noLive: 'Live preview coming soon.',
  },
  testimonials: { title1: 'Satisfied Clients Are', title2: 'My Best Ads.', prev: 'Previous', next: 'Next' },
  faq: {
    title1: 'Got A Question', title2: 'For Me?', text: "If there are questions you want to ask, I'll get back to you personally.",
    placeholder: 'Your email address', button: 'Ask by Email', answered: 'Maybe your question has been answered, check this out.',
    subject: 'Question from the Codey portfolio', body: 'Please contact me at',
  },
  footer: {
    tagline: 'Freelance developer building fast, reliable web and mobile products.',
    pages: 'Pages', work: 'Work', caseStudies: 'Case Studies', pricing: 'Services & Pricing', resume: 'Resume',
    touch: 'Get In Touch', start: 'Start A Project', call: 'Book A Call', contactMe: 'Contact Me',
    info: 'Contact Info', rights: 'Copyright © 2026 Codey. All rights reserved.',
  },
  whatsapp: { label: 'Chat on WhatsApp', aria: 'Chat with Omar on WhatsApp', greeting: "Hello Omar, I'd like to discuss a project." },
  services: {
    crumb: 'Services', t1: 'Services That Turn', t2: 'Ideas Into', em: 'Shipped', t3: 'Products.',
    text: 'From a first prototype to a production system, here is how I can help your team or business move faster.',
    from: 'Starting from', quote: 'Get a Quote', process: "How We'll Work Together",
    bandTitle: 'Have a project in mind?', bandText: 'Tell me about it and get a clear plan within 48 hours.', bandCta: 'Start a Project',
  },
  portfolio: {
    crumb: 'Portfolio', t1: 'Work That Speaks', t2: 'For', em: 'Itself.',
    text: 'A selection of products I designed, built and launched for startups and companies.',
  },
  about: {
    crumb: 'About', badge1: '⚡ 10+ yrs coding', badge2: '☕ Powered by coffee',
    t1: "Hi, I'm Omar —", t2: 'a Full-Stack Developer.',
    text: "I'm a developer based in Cairo, Egypt, helping startups and growing companies turn ideas into fast, reliable and beautiful products. I care about clean code, clear communication and shipping on time.",
    download: 'Download Resume', talk: "Let's Talk", experience: 'Experience', skills: 'Skills', tech: 'Technologies I Use',
  },
  contact: {
    crumb: 'Contact', t1: "Let's Build Something", em: 'Great', t2: 'Together.',
    text: "Share a few details about your project and I'll reply within one business day.",
    available: 'Available for new projects', name: 'Your Name', email: 'Email Address', interested: "I'm interested in",
    budget: 'Budget', message: 'Tell me about your project', submit: 'Continue to WhatsApp ➜',
    readyTitle: 'WhatsApp Message Ready',
    readyText: 'WhatsApp should open in a new tab with your message ready. Review it there and press Send to complete your request.',
    open: 'Open WhatsApp', again: 'Send another',
    msgHello: 'Hello Omar, I would like to discuss a project.', msgName: 'Name', msgEmail: 'Email', msgServices: 'Services',
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
    title: 'Codey — بورتفوليو مطوّر',
    description: 'Codey — بورتفوليو عمر للبرمجة. تصفّح أعمالي المختارة وخدماتي وخبراتي وطرق التواصل معي.',
  },
  nav: {
    home: 'الرئيسية', services: 'الخدمات', portfolio: 'أعمالي', about: 'عني', contact: 'تواصل',
    hire: 'اطلب خدمة', resume: 'السيرة الذاتية', menu: 'القائمة', main: 'القائمة الرئيسية',
    toLight: 'التحويل للوضع النهاري', toDark: 'التحويل للوضع الليلي',
    langLabel: 'EN', langAria: 'Switch to English',
  },
  hero: {
    l1: 'برمجة في', l2: 'السحابة، لكن', l3: '', em: 'بأفضل طريقة!',
    text: 'دلوقتي تقدر تطلق منتجك في أي وقت ومن أي مكان مع مطوّر بيهتم بالتفاصيل، وطبعًا معمول عشان يعيش.',
    cta: 'ابدأ الآن',
    phoneTitle: 'ابنِ منتجك الجاي.', phoneUser: '● عمر', featured: 'أعمال مميزة', myProjects: 'مشاريعي',
    seeAll: 'الكل ‹', detail: 'تفاصيل', p1: 'تطبيق مالي', p2: 'FitTrack', p3: 'Orders API',
  },
  features: {
    title1: 'طريقتي', title2: 'في الشغل!', text: 'استفيد من مميزات كتير لما تشتغل معايا.',
    f1: 'اختيارات كتير', f1t: 'تقنيات ويب وموبايل وباك إند تناسب منتجك، ومعمولة تشتغل في أي وقت ومن أي مكان.',
    f2: 'كود منظّم وموثّق', f2t: 'معمارية نظيفة وتوثيق واضح يساعد فريقك في أي مرحلة من المشروع.',
    f3: 'حجز سهل', f3t: 'خطوات سهلة وآمنة وسريعة لحجز موعد مشروعك والبدء فورًا.',
  },
  map: {
    title: 'كود، قهوة، ومواعيد تسليم.. محتاج إيه تاني؟',
    text: 'اختار الخدمة اللي محتاجها، وقولّي إمتى عايز تبدأ، ونخطط لمشروعك سوا.',
    service: 'الخدمة', serviceHint: 'ويب، موبايل أو API', timeline: 'الموعد', timelineHint: 'إمتى نبدأ', go: 'ابدأ مشروعك',
  },
  community: {
    title: 'فكرتك تستاهل تتنفّذ صح.',
    text: 'روّاد أعمال وشركات ناشئة وفرق عمل بيثقوا فيّا أحوّل أفكارهم لمنتجات سريعة وموثوقة. يلا نتكلم عن فكرتك.',
    cta: 'ابدأ مشروعك', b1: 'يلا نبني!', b2: 'أهلًا!', b3: 'نطلقه!',
  },
  work: {
    title1: 'أعمال مختارة', title2: 'أنا فخور بيها.', allServices: 'كل الخدمات', allProjects: 'كل المشاريع ←',
    caseStudy: 'شوف التفاصيل ←', openCase: 'افتح تفاصيل مشروع:',
  },
  modal: {
    close: 'إغلاق', handled: 'اشتغلت على المشروع من أوله لآخره: التحليل وتجربة المستخدم والواجهة والتسليم.',
    live: 'معاينة مباشرة ↗', noLive: 'المعاينة المباشرة قريبًا.',
  },
  testimonials: { title1: 'رضا العملاء', title2: 'هو أحسن إعلان.', prev: 'السابق', next: 'التالي' },
  faq: {
    title1: 'عندك سؤال', title2: 'ليّا؟', text: 'لو عندك أي سؤال، هرد عليك بنفسي.',
    placeholder: 'بريدك الإلكتروني', button: 'اسأل بالإيميل', answered: 'يمكن سؤالك متجاوب عليه هنا، بص كده.',
    subject: 'سؤال من موقع Codey', body: 'برجاء التواصل معي على',
  },
  footer: {
    tagline: 'مطوّر مستقل بيبني منتجات ويب وموبايل سريعة وموثوقة.',
    pages: 'الصفحات', work: 'الأعمال', caseStudies: 'دراسات حالة', pricing: 'الخدمات والأسعار', resume: 'السيرة الذاتية',
    touch: 'تواصل معايا', start: 'ابدأ مشروعك', call: 'احجز مكالمة', contactMe: 'راسلني',
    info: 'بيانات التواصل', rights: 'جميع الحقوق محفوظة © 2026 Codey.',
  },
  whatsapp: { label: 'كلّمني واتساب', aria: 'تواصل مع عمر على واتساب', greeting: 'أهلًا عمر، حابب أتكلم معاك عن مشروع.' },
  services: {
    crumb: 'الخدمات', t1: 'خدمات بتحوّل', t2: 'الأفكار لمنتجات', em: 'جاهزة', t3: 'للإطلاق.',
    text: 'من أول نموذج تجريبي لحد نظام شغّال فعليًا، ده إزاي أقدر أساعد فريقك أو شغلك يتحرك أسرع.',
    from: 'تبدأ من', quote: 'اطلب عرض سعر', process: 'إزاي هنشتغل سوا',
    bandTitle: 'عندك فكرة مشروع؟', bandText: 'احكيلي عنها وخد خطة واضحة خلال 48 ساعة.', bandCta: 'ابدأ مشروعك',
  },
  portfolio: {
    crumb: 'أعمالي', t1: 'شغل بيتكلم', t2: 'عن', em: 'نفسه.',
    text: 'مجموعة من المنتجات اللي صممتها وبنيتها وأطلقتها لشركات ناشئة وشركات كبيرة.',
  },
  about: {
    crumb: 'عني', badge1: '⚡ +10 سنين برمجة', badge2: '☕ شغّال بالقهوة',
    t1: 'أهلًا، أنا عمر —', t2: 'مطوّر Full-Stack.',
    text: 'مطوّر من القاهرة، بساعد الشركات الناشئة والشركات اللي بتكبر إنها تحوّل أفكارها لمنتجات سريعة وموثوقة وشكلها حلو. بهتم بالكود النظيف والتواصل الواضح والتسليم في الميعاد.',
    download: 'تحميل السيرة الذاتية', talk: 'يلا نتكلم', experience: 'الخبرات', skills: 'المهارات', tech: 'التقنيات اللي بستخدمها',
  },
  contact: {
    crumb: 'تواصل', t1: 'يلا نبني حاجة', em: 'عظيمة', t2: 'سوا.',
    text: 'شاركني شوية تفاصيل عن مشروعك وهرد عليك خلال يوم عمل واحد.',
    available: 'متاح لمشاريع جديدة', name: 'اسمك', email: 'البريد الإلكتروني', interested: 'مهتم بـ',
    budget: 'الميزانية', message: 'احكيلي عن مشروعك', submit: 'كمّل على واتساب ➜',
    readyTitle: 'رسالة الواتساب جاهزة',
    readyText: 'واتساب هيفتح في تاب جديد ورسالتك جاهزة. راجعها هناك ودوس إرسال عشان طلبك يوصل.',
    open: 'افتح واتساب', again: 'ابعت طلب تاني',
    msgHello: 'أهلًا عمر، حابب أتكلم معاك عن مشروع.', msgName: 'الاسم', msgEmail: 'الإيميل', msgServices: 'الخدمات',
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
