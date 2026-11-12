export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  featured?: boolean;
  isLarge?: boolean;
}

export interface ClientLogo {
  id: string;
  name: string;
  subtitle?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  specialty: string;
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#about' },
  { label: 'Products', href: '#services' },
  { label: 'Pricing', href: '#clients' },
  { label: 'Company', href: '#team' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'development',
    title: 'Development',
    tag: 'Full-Stack & AI',
    description:
      'We offer a curated selection of tour packages and bespoke engineering architectures—combining scalable cloud systems, intelligent automation, and lightning-fast web platforms.',
    isLarge: true,
  },
  {
    id: 'graphics-design',
    title: 'Graphics Design',
    tag: 'Visual Identity',
    description:
      'We offer a curated selection of tour packages in visual storytelling, high-craft brand systems, and luxury editorial assets built for recognition.',
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    tag: 'Motion & Post',
    description:
      'We offer a curated selection of tour packages covering cinematic post-production, 3D motion graphics, and high-converting brand reels.',
    featured: true,
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    tag: 'Growth Engine',
    description:
      'We offer a curated selection of tour packages tailored for audience expansion, campaign orchestration, and measurable community engagement.',
  },
  {
    id: 'seo-geo',
    title: 'SEO / GEO',
    tag: 'Search & AI Discovery',
    description:
      'We offer a curated selection of tour packages designed to capture traditional search rankings and generative AI engine visibility worldwide.',
  },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: 'owl', name: 'OWL', subtitle: 'AI Systems' },
  { id: 'morheme', name: 'Morheme Tech', subtitle: 'Enterprise Cloud' },
  { id: 'zainab', name: 'Zainab Bees', subtitle: 'Organic Collective' },
  { id: 'lumina', name: 'Lumina Labs', subtitle: 'Neural Ops' },
  { id: 'veritas', name: 'Veritas Capital', subtitle: 'FinTech' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'ashley',
    name: 'Ashley Cole',
    role: 'Teacher at Stanford',
    avatar: '/images/client-1.jpg',
    rating: 5,
    quote:
      "Super easy to use and actually works! I've already recommended it to a few friends.",
  },
  {
    id: 'marcus',
    name: 'Marcus Vance',
    role: 'Founder at Morheme Tech',
    avatar: '/images/client-2.jpg',
    rating: 5,
    quote:
      'Their AI workflow automation cut our manual reporting time by 70% within the very first month.',
  },
  {
    id: 'elena',
    name: 'Elena Rostova',
    role: 'Product Lead at OWL',
    avatar: '/images/client-3.jpg',
    rating: 5,
    quote:
      'Rare blend of dark-luxury visual craft and rock-solid engineering. Every milestone shipped ahead of schedule.',
  },
  {
    id: 'david',
    name: 'David Chen',
    role: 'Director of Ops, Lumina',
    avatar: '/images/client-4.svg',
    rating: 5,
    quote:
      'From brand identity to full-stack delivery, CODEXX PLUS transformed how our enterprise clients perceive us.',
  },
  {
    id: 'nadia',
    name: 'Nadia Karim',
    role: 'CEO at Zainab Bees',
    avatar: '/images/client-5.svg',
    rating: 5,
    quote:
      'Thoughtful communication, sharp strategy, and measurable ROI across both web conversion and SEO.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Aiden Mercer',
    role: 'Creative Director',
    specialty: 'Brand Architecture & Luxury UI',
    image: '/images/team-1.jpg',
  },
  {
    id: 'team-2',
    name: 'Sophia Lindqvist',
    role: 'Lead AI Architect',
    specialty: 'Enterprise LLM & Automation',
    image: '/images/team-2.jpg',
  },
  {
    id: 'team-3',
    name: 'Julian Thorne',
    role: 'Principal Product Designer',
    specialty: 'Design Systems & Motion',
    image: '/images/team-3.jpg',
  },
  {
    id: 'team-4',
    name: 'Aria Rahman',
    role: 'Head of Growth & GEO',
    specialty: 'Search Strategy & Brand Scaling',
    image: '/images/team-4.svg',
  },
  {
    id: 'team-5',
    name: 'Marcus Sterling',
    role: 'VP of Engineering',
    specialty: 'Distributed Cloud & WebGL',
    image: '/images/team-5.svg',
  },
  {
    id: 'team-6',
    name: 'Zara Al-Mansoor',
    role: 'Motion & 3D Lead',
    specialty: 'Interactive Shaders & Film',
    image: '/images/team-6.svg',
  },
];
