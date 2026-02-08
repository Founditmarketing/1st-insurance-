import { Home, Car, Building2, User, Umbrella, HeartHandshake, Briefcase, Truck } from 'lucide-react';
import { Service, TeamMember, Testimonial, TrustLogo, ClaimContact, Article } from './types';

export const PHONE_NUMBER = "318-253-9202";
export const ADDRESS = "121 S Main St, Marksville, LA";
export const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.883776472658!2d-92.0658422!3d31.1278835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8625391697200001%3A0x123456789abcdef!2s121%20S%20Main%20St%2C%20Marksville%2C%20LA%2071351!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"; // Updated to center on 121 S Main St

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Claims', href: '/claims' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'home',
    title: 'Home Insurance',
    description: 'Protect your biggest investment with comprehensive coverage tailored to Louisiana homes.',
    icon: Home,
    category: 'personal'
  },
  {
    id: 'auto',
    title: 'Auto Insurance',
    description: 'Drive with confidence knowing you have the right liability and collision protection.',
    icon: Car,
    category: 'personal'
  },
  {
    id: 'general-liability',
    title: 'General Liability',
    description: 'Essential protection for businesses against claims of bodily injury or property damage.',
    icon: Building2,
    category: 'commercial'
  },
  {
    id: 'commercial-auto',
    title: 'Commercial Auto',
    description: 'Coverage for your work trucks, delivery vans, and fleet vehicles.',
    icon: Truck,
    category: 'commercial'
  },
  {
    id: 'workers-comp',
    title: 'Workers Comp',
    description: 'Mandatory coverage that protects your employees and your business from workplace accidents.',
    icon: Briefcase,
    category: 'commercial'
  },
  {
    id: 'life',
    title: 'Life Insurance',
    description: 'Secure your family’s financial future tailored to your specific life stage.',
    icon: User,
    category: 'personal'
  },
  {
    id: 'umbrella',
    title: 'Umbrella Policy',
    description: 'Extra liability coverage that goes beyond the limits of your homeowners or auto insurance.',
    icon: Umbrella,
    category: 'personal'
  },
  {
    id: 'specialty',
    title: 'Specialty',
    description: 'Coverage for boats, ATVs, RVs, and other toys common in the Sportsman’s Paradise.',
    icon: HeartHandshake,
    category: 'personal'
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 'blake',
    name: 'Blake Knoll',
    role: 'Agency Owner',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Placeholder
    quote: "We aren't just selling policies; we're protecting our neighbors."
  },
  {
    id: 'judy',
    name: 'Mrs. Judy',
    role: 'Senior Agent',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Placeholder
    quote: "I've watched families in this parish grow for 30 years."
  },
  {
    id: 'kayla',
    name: 'Kayla',
    role: 'Customer Success',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Placeholder
  },
  {
    id: 'heather',
    name: 'Heather',
    role: 'Licensed Agent',
    image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee5329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Placeholder
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: "Mrs. Judy saved me over $400 a year and got me better coverage. It feels good to talk to someone right here in town.",
    author: "Sarah J.",
    location: "Marksville, LA",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: '2',
    text: "I had a claim after the storm and Blake was there immediately. You don't get that service from an 800 number.",
    author: "Michael T.",
    location: "Mansura, LA",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: '3',
    text: "Professional, kind, and fast. The whole team treats you like family.",
    author: "Emily R.",
    location: "Hessmer, LA",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];

export const CARRIERS: TrustLogo[] = [
  { id: '1', name: 'Progressive', url: 'https://logo.clearbit.com/progressive.com' },
  { id: '2', name: 'Travelers', url: 'https://logo.clearbit.com/travelers.com' },
  { id: '3', name: 'Liberty Mutual', url: 'https://logo.clearbit.com/libertymutual.com' },
  { id: '4', name: 'Safeco', url: 'https://logo.clearbit.com/safeco.com' },
  { id: '5', name: 'Allstate', url: 'https://logo.clearbit.com/allstate.com' },
  { id: '6', name: 'Foremost', url: 'https://logo.clearbit.com/foremost.com' },
];

export const STATS = [
  { label: "Years Serving Marksville", value: 39, suffix: "+" },
  { label: "Families Protected", value: 4500, suffix: "+" },
  { label: "Carriers Available", value: 100, suffix: "+" },
  { label: "Client Satisfaction", value: 99, suffix: "%" },
];

export const FAQS = [
  {
    question: "Do I need flood insurance if I'm not in a flood zone?",
    answer: "Yes, more than 20% of flood claims come from properties outside high-risk zones. Standard homeowners policies do not cover flood damage, which is crucial in Louisiana."
  },
  {
    question: "How can I lower my auto insurance premiums?",
    answer: "Bundling your home and auto is the easiest way. We can also look at raising deductibles, telematics safe-driving programs, or applying good student discounts."
  },
  {
    question: "What does 'Independent Agency' actually mean?",
    answer: "It means we don't work for one specific insurance company (like State Farm or Geico). We work for you, shopping across 100+ carriers to find the best fit for your specific needs."
  },
  {
    question: "How long does it take to get a quote?",
    answer: "For most auto and home policies, we can get you a preliminary quote within the same business day. Commercial quotes may take slightly longer depending on complexity."
  }
];

// --- NEW DATA ---

export const CLAIM_CONTACTS: ClaimContact[] = [
  { 
    id: 'progressive', 
    name: 'Progressive', 
    logo: 'https://logo.clearbit.com/progressive.com', 
    phone: '1-800-776-4737', 
    onlineLink: 'https://www.progressive.com/claims/' 
  },
  { 
    id: 'travelers', 
    name: 'Travelers', 
    logo: 'https://logo.clearbit.com/travelers.com', 
    phone: '1-800-252-4633', 
    onlineLink: 'https://www.travelers.com/claims' 
  },
  { 
    id: 'safeco', 
    name: 'Safeco', 
    logo: 'https://logo.clearbit.com/safeco.com', 
    phone: '1-800-332-3226', 
    onlineLink: 'https://www.safeco.com/claims' 
  },
  { 
    id: 'liberty', 
    name: 'Liberty Mutual', 
    logo: 'https://logo.clearbit.com/libertymutual.com', 
    phone: '1-800-225-2467', 
    onlineLink: 'https://www.libertymutual.com/claims' 
  },
  { 
    id: 'foremost', 
    name: 'Foremost', 
    logo: 'https://logo.clearbit.com/foremost.com', 
    phone: '1-800-527-3907', 
    onlineLink: 'https://www.foremost.com/claims/' 
  },
  { 
    id: 'national-general', 
    name: 'National General', 
    logo: 'https://logo.clearbit.com/nationalgeneral.com', 
    phone: '1-800-468-3466', 
    onlineLink: 'https://www.nationalgeneral.com/claims/' 
  },
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Hurricane Preparedness Guide: Avoyelles Parish Edition',
    excerpt: 'Key steps to secure your home and review your policy before the season peaks in September.',
    category: 'Home Safety',
    date: 'June 12, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Why Louisiana Auto Insurance Rates Are Rising',
    excerpt: 'Understanding the factors behind the state-wide increase and 3 strategies to keep your premiums low.',
    category: 'Auto Insurance',
    date: 'May 28, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Flood Zones Explained: Do You Really Need Coverage?',
    excerpt: 'Many Marksville residents are surprised to learn they aren\'t covered for flood damage. Here is what you need to know.',
    category: 'Flood Insurance',
    date: 'April 15, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Commercial Insurance for Small Business Owners',
    excerpt: 'From general liability to workers comp, a breakdown of essential coverage for local enterprises.',
    category: 'Business',
    date: 'March 10, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];