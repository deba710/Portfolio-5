export type SkillStatus = 'LEARNING' | 'BUILDING FOUNDATIONS' | 'PRACTICING' | 'EXPLORING';

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  status: SkillStatus;
  isCurrentFocus?: boolean;
  summary: string;
  focusTopics: string[];
}

export interface JourneyStage {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  tag: string;
  status: 'completed' | 'current' | 'future';
}

export interface LabItem {
  id: string;
  slotNumber: string;
  title: string;
  statusText: string;
  description: string;
  focusArea: string;
  tags: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    monogram: string;
    role: string;
    currentFocus: string;
    location: string;
    coordinates: string;
    technicalTagline: string;
    heroHeading: string;
    heroKeywords: string[];
    heroBio: string;
    aboutHeading: string;
    aboutBio: string;
    photoPlaceholderText: string;
    hasRealPhoto: boolean;
    photoUrl?: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  about: {
    sectionLabel: string;
    heading: string;
    bio: string;
    focusStatement: string;
  };
  journey: {
    sectionLabel: string;
    heading: string;
    stages: JourneyStage[];
  };
  skills: {
    sectionLabel: string;
    heading: string;
    description: string;
    items: SkillItem[];
  };
  learningLab: {
    sectionLabel: string;
    heading: string;
    description: string;
    items: LabItem[];
  };
  githubSection: {
    sectionLabel: string;
    heading: string;
    description: string;
    url: string;
    username: string;
  };
  mindset: {
    sectionLabel: string;
    statement: string;
    supportingText: string;
  };
  roadAhead: {
    sectionLabel: string;
    heading: string;
    text: string;
    milestones: {
      phase: string;
      title: string;
      description: string;
    }[];
  };
  contact: {
    sectionLabel: string;
    heading: string;
    description: string;
    email: string;
    github: string;
    githubHandle: string;
    linkedin: string;
    linkedinName: string;
    location: string;
  };
  footer: {
    monogram: string;
    roleTitle: string;
    tagline: string;
  };
}
