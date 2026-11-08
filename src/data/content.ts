import { contactEmail, whatsappDisplayNumber, whatsappNumber } from '../config/site';

export interface Testimonial { quote: string; name: string; role: string; stars: number; face: [string, string, string] }

export const testimonials: Testimonial[] = [
  { quote: 'Thanks to Codey I can now realize my product vision around the world', name: 'Wade Warren', role: 'Photographer', stars: 5, face: ['#e0a074', '#1a2026', '#2a7cf0'] },
  { quote: 'I think this is the best dev service I have ever tried and I recommend it to you', name: 'Theresa Jordan', role: 'Traveler', stars: 4, face: ['#e8a98a', '#2a1a1a', '#e0443f'] },
  { quote: 'Codey helps me a lot in building interesting digital products', name: 'James Wilson', role: 'Climber', stars: 4, face: ['#e0a074', '#1a2026', '#2a7cf0'] },
  { quote: 'Fun, from the first call to launch. Beautiful code, pretty and cool', name: 'Jhon Tosan', role: 'Adventurer', stars: 3, face: ['#f0b98d', '#1a2026', '#e0b02a'] },
];

export const faqs = [
  { q: 'What is Codey?', a: 'A freelance developer studio building web and mobile products.' },
  { q: 'How to book a project?', a: 'Pick a service and a date, then send a message — no payment needed to start.' },
  { q: 'What kind of service will I get?', a: 'Design-to-code builds, audits, and ongoing support.' },
];

export const contactInfo = [
  { icon: '✉️', label: 'Email', value: contactEmail, href: `mailto:${contactEmail}` },
  { icon: '📞', label: 'Phone / WhatsApp', value: whatsappDisplayNumber, href: `https://wa.me/${whatsappNumber}` },
  { icon: '📍', label: 'Location', value: 'Cairo, Egypt (GMT+2)' },
  { icon: '⏱', label: 'Response time', value: 'Within 24 hours' },
];

export const contactServices = ['Web App', 'Mobile App', 'API / Backend', 'UI Engineering', 'Other'];
export const contactBudgets = ['< $1K', '$1K–5K', '$5K–10K', '$10K+'];

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];
