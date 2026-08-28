export type SkillStatus = 'LEARNING' | 'PRACTICING' | 'EXPLORING';

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

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  whatIBuilt: string;
  technologies: string[];
  status: 'Completed' | 'Ongoing' | 'In Planning';
  githubUrl?: string;
  liveDemoUrl?: string;
  previewVariant: 'terminal' | 'logic' | 'blueprint';
  keyHighlights: string[];
}

export interface MilestoneItem {
  id: string;
  number: string;
  title: string;
  description: string;
  stageBadge: string;
}

export interface InterestItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
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
  projects: {
    sectionLabel: string;
    heading: string;
    description: string;
    items: ProjectItem[];
  };
  milestones: {
    sectionLabel: string;
    heading: string;
    description: string;
    items: MilestoneItem[];
  };
  identity: {
    sectionLabel: string;
    heading: string;
    quote: string;
    pillars: {
      name: string;
      meaning: string;
    }[];
    reflection: string;
  };
  interests: {
    sectionLabel: string;
    heading: string;
    items: InterestItem[];
  };
  northStar: {
    sectionLabel: string;
    heading: string;
    supportingText: string;
    corePrinciples: string[];
  };
  resume: {
    sectionLabel: string;
    heading: string;
    description: string;
    viewUrl: string;
    downloadUrl: string;
    lastUpdated: string;
  };
  contact: {
    sectionLabel: string;
    heading: string;
    description: string;
    email: string;
    github: string;
    linkedin: string;
    location: string;
  };
  footer: {
    monogram: string;
    roleTitle: string;
    tagline: string;
  };
}
