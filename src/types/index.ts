export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    imageHint?: string;
}
  
export interface Testimonial {
    name: string;
    title: string;
    quote: string;
    avatar: string;
}

export interface Specialist {
    id: string;
    name: string;
    title: string;
    bio: string;
    avatar: string;
    avatarHint?: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    author: string;
    authorAvatar: string;
    date: string;
    excerpt: string;
    category: string;
    content: string;
    image: string;
    imageHint?: string;
}
