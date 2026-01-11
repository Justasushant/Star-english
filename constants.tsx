
import { Course, Testimonial, SuccessStory, BlogPost } from './types';

export const COLORS = {
  primary: '#636B2F',
  lightSage: '#BAC095',
  lightLime: '#D4DE95',
  darkOlive: '#3D4127',
};

export const COURSES: Course[] = [
  {
    id: '1',
    slug: 'spoken-english-course',
    title: 'Spoken English Mastery',
    tagline: 'Become a Fluent Speaker in 90 Days',
    duration: '3 Months',
    level: 'Beginner to Advanced',
    description: 'A comprehensive journey from zero to fluent. Our proprietary method focuses on psychological comfort and natural sentence construction.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    price: '₹2,499',
    originalPrice: '₹4,999',
    learnPoints: ['Natural Sentence Formation', 'Everyday Vocabulary', 'Listening Comprehension', 'Pronunciation Drills'],
    targetAudience: ['Students', 'Homemakers', 'Beginner Professionals'],
    features: ['Live Sessions', 'Daily Exercises', 'Recorded Lectures', 'Certificate'],
  },
  {
    id: '2',
    slug: 'professional-english-course',
    title: 'Professional English Course',
    tagline: 'Elevate Your Corporate Communication',
    duration: '8 Weeks',
    level: 'Intermediate to Expert',
    description: 'Designed for corporate environments. Master emails, presentations, and boardroom negotiations with absolute precision.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    price: '₹4,999',
    originalPrice: '₹9,999',
    learnPoints: ['Corporate Email Etiquette', 'Boardroom Presentations', 'Negotiation Tactics', 'Business Jargon Mastery'],
    targetAudience: ['Working Professionals', 'Business Owners', 'Final Year Students'],
    features: ['1-on-1 Feedback', 'Resume Review', 'Mock Interviews', 'Lifetime Access'],
  },
  {
    id: '3',
    slug: 'ielts-course',
    title: 'IELTS Preparation Suite',
    tagline: 'Target Band 8.0+ With Proven Strategies',
    duration: '6 Weeks',
    level: 'Intermediate',
    description: 'The ultimate prep for global migration. We focus on the specific patterns examiners look for in Speaking and Writing.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800',
    price: '₹7,499',
    originalPrice: '₹14,999',
    learnPoints: ['Writing Task 1 & 2 Strategies', 'Live Speaking Mock Tests', 'Reading Speed Techniques', 'Listening Accuracy'],
    targetAudience: ['Study Abroad Aspirants', 'Immigrants', 'International Job Seekers'],
    features: ['10+ Full Mock Tests', 'Band Estimator', 'Live Q&A', 'Expert Evaluation'],
  },
  {
    id: '4',
    slug: 'combo-pack',
    title: 'Elite Combo Pack',
    tagline: 'The Complete Linguistic Transformation',
    duration: '6 Months',
    level: 'All Levels',
    description: 'Includes Spoken, Professional, and Personality Development. Our most popular choice for total personality overhaul.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    price: '₹9,999',
    originalPrice: '₹19,999',
    learnPoints: ['Comprehensive Grammar', 'Public Speaking', 'Social Etiquette', 'Mindset Coaching'],
    targetAudience: ['Career Switchers', 'Ambitious Students', 'Entrepreneurs'],
    features: ['All Courses Included', 'Priority Mentorship', 'Physical Materials', 'Exclusive Community'],
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Student 1',
    role: 'Verified Alumni',
    content: 'The transformation in my confidence was visible within weeks. The non-grammar approach is truly a game changer.',
    image: '',
  },
  {
    id: '2',
    name: 'Student 2',
    role: 'Verified Alumni',
    content: 'Finally a course that understands professionals. I can now lead international meetings without any hesitation.',
    image: '',
  },
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: '1',
    name: 'Alumni A',
    achievement: 'Promoted to Lead',
    content: 'Mastery over language gave me the edge I needed during the promotion cycle.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '2',
    name: 'Alumni B',
    achievement: 'Study Abroad Success',
    content: 'Scored a Band 8.5 in IELTS thanks to the strategic preparation here.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
  },
];

// Added BLOG_POSTS export for the Star Journal page
export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Articulation',
    excerpt: 'How mastering your voice can change your professional trajectory and open new doors globally.',
    image: 'https://images.unsplash.com/photo-1475721027187-402ad2989a3b?auto=format&fit=crop&q=80&w=800',
    date: 'Oct 15, 2024',
    category: 'Communication'
  },
  {
    id: '2',
    title: 'Breaking the Grammar Barrier',
    excerpt: 'Why natural flow and psychological comfort matter more than perfect rules in the beginning of your journey.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
    date: 'Nov 02, 2024',
    category: 'Learning'
  }
];