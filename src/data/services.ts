export interface Service { icon: string; title: string; description: string; points: string[]; price: string }

export const services: Service[] = [
  { icon: '🌐', title: 'Web Applications', description: 'Fast, accessible web apps and dashboards built with modern frameworks.', points: ['Custom React / Next.js builds', 'Admin panels and SaaS dashboards', 'SEO and performance tuned'], price: '$1,500' },
  { icon: '📱', title: 'Mobile Apps', description: 'Polished iOS and Android apps from a single cross-platform codebase.', points: ['React Native and Flutter', 'Offline-first and push-ready UI', 'Store launch guidance'], price: '$2,500' },
  { icon: '⚙️', title: 'Backend & APIs', description: 'Secure, documented APIs and services that scale with your users.', points: ['REST and GraphQL design', 'Auth, payments and integrations', 'Cloud deployment and CI/CD'], price: '$1,800' },
  { icon: '🎨', title: 'UI Engineering', description: 'Design-to-code that matches your Figma pixel for pixel, with motion.', points: ['Component libraries', 'Animations and micro-interactions', 'Responsive and RTL ready'], price: '$900' },
  { icon: '🚀', title: 'Audits & Performance', description: 'Find what slows your product down and get a clear plan to fix it.', points: ['Code and security review', 'Core Web Vitals optimization', 'Written report with priorities'], price: '$600' },
  { icon: '🛟', title: 'Maintenance & Support', description: 'Monthly care so your product stays fast, updated and bug-free.', points: ['Bug fixes and updates', 'Priority response time', 'Monthly progress report'], price: '$400/mo' },
];

export const processSteps = [
  { title: 'Discover', text: 'We talk goals, users and scope so we build the right thing.' },
  { title: 'Design', text: 'Wireframes and visual direction you can react to early.' },
  { title: 'Build', text: 'Weekly demos, clean code and honest progress updates.' },
  { title: 'Launch', text: 'Testing, deployment and support after go-live.' },
];
