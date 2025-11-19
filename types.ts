export interface LocalizedString {
  en: string;
  es: string;
}

export interface Project {
  id: string;
  title: string; // Titles usually don't change, but description does
  description: LocalizedString;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Publication {
  id: string;
  title: string;
  spanishTitle: string;
  event: LocalizedString;
  year: string;
  downloadUrl?: string;
  type: 'Conference' | 'Workshop' | 'Article' | 'Book';
  // New fields for Books
  imageUrl?: string;
  publisherUrl?: string;
  amazonUrl?: string;
  description?: LocalizedString;
}

export interface SkillCategory {
  name: LocalizedString;
  skills: string[];
}

export interface Experience {
  id: string;
  role: LocalizedString;
  company: LocalizedString;
  period: string;
  description: LocalizedString;
  location?: LocalizedString;
  type: 'education' | 'work';
  isProminent: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}
