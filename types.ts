import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: 'personal' | 'commercial';
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  email: string;
  quote?: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  location: string;
  avatar?: string;
}

export interface TrustLogo {
  id: string;
  name: string;
  url: string; // Placeholder URL
}

export interface ClaimContact {
  id: string;
  name: string;
  logo: string;
  phone: string;
  onlineLink: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
  content: string;
}