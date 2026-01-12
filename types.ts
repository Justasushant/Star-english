
export interface Course {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  level: string;
  description: string;
  image: string;
  price: string;
  originalPrice: string;
  learnPoints: string[];
  targetAudience: string[];
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  achievement: string;
  content: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  type: 'article' | 'blog' | 'podcast' | 'tip';
}
