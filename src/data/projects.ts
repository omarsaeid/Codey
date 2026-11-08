export type ProjectCategory = 'web' | 'mobile' | 'backend' | 'ui';

export interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  gradient: string;
  accent: string;
  year: string;
  metrics: { value: string; label: string }[];
  url: string;
}

export const projectFilters: { id: 'all' | ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'backend', label: 'Backend' },
  { id: 'ui', label: 'UI Systems' },
];

export const projects: Project[] = [
  {
    title: 'Fintech Dashboard', category: 'web', year: '2025', url: 'https://example.com',
    description: 'Real-time analytics dashboard for a payments startup, processing thousands of transactions a minute.',
    tags: ['React', 'Node.js', 'PostgreSQL'], gradient: 'linear-gradient(135deg,#0b57d0,#6aa6ff)', accent: '#0b57d0',
    metrics: [{ value: '+38%', label: 'Conversion' }, { value: '1.2s', label: 'Load time' }, { value: '40K', label: 'Users' }],
  },
  {
    title: 'FitTrack Mobile App', category: 'mobile', year: '2025', url: 'https://example.com',
    description: 'Cross-platform workout tracker with offline mode, streaks and social challenges.',
    tags: ['React Native', 'Firebase'], gradient: 'linear-gradient(135deg,#f2692b,#ffb37a)', accent: '#f2692b',
    metrics: [{ value: '4.8★', label: 'Store rating' }, { value: '120K', label: 'Downloads' }, { value: '62%', label: 'Retention' }],
  },
  {
    title: 'Orders API Platform', category: 'backend', year: '2024', url: 'https://example.com',
    description: 'Scalable REST and GraphQL backend for a multi-vendor e-commerce marketplace.',
    tags: ['Node.js', 'Docker', 'Redis'], gradient: 'linear-gradient(135deg,#1a2026,#4a5a78)', accent: '#4d8dff',
    metrics: [{ value: '99.98%', label: 'Uptime' }, { value: '180ms', label: 'Avg response' }, { value: '3x', label: 'Throughput' }],
  },
  {
    title: 'Bayt Real-Estate Portal', category: 'web', year: '2024', url: 'https://example.com',
    description: 'Property search platform with map filters, saved searches and agent dashboards.',
    tags: ['Next.js', 'Tailwind', 'Mapbox'], gradient: 'linear-gradient(135deg,#2c8a68,#8fe0b8)', accent: '#2c8a68',
    metrics: [{ value: '+54%', label: 'Leads' }, { value: '15K', label: 'Listings' }, { value: '2x', label: 'SEO traffic' }],
  },
  {
    title: 'Nile Design System', category: 'ui', year: '2024', url: 'https://example.com',
    description: 'A reusable component library and design tokens shared across five product teams.',
    tags: ['Figma', 'Storybook', 'TypeScript'], gradient: 'linear-gradient(135deg,#7a5be0,#c5b3ff)', accent: '#7a5be0',
    metrics: [{ value: '80+', label: 'Components' }, { value: '-45%', label: 'Dev time' }, { value: '5', label: 'Teams' }],
  },
  {
    title: 'Careem-style Booking App', category: 'mobile', year: '2023', url: 'https://example.com',
    description: 'Ride and delivery booking prototype with live tracking and in-app payments UI.',
    tags: ['Flutter', 'Maps'], gradient: 'linear-gradient(135deg,#e0443f,#ffa39f)', accent: '#e0443f',
    metrics: [{ value: '30%', label: 'Faster booking' }, { value: '4.7★', label: 'Rating' }, { value: '9K', label: 'Active users' }],
  },
];
