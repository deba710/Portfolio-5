import { PortfolioData } from '../types/portfolio';

// REPLACE WITH DEBANGAN'S REAL PHOTO WHEN READY
export const profilePhoto = "/images/debangan.jpg";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Debangan Bera",
    monogram: "D / DEBANGAN",
    role: "STUDENT • BEGINNER PROGRAMMER",
    currentFocus: "Java",
    location: "West Bengal, India",
    coordinates: "22°59'N 88°27'E",
    technicalTagline: "STUDENT / BEGINNER PROGRAMMER / JAVA LEARNER",
    heroHeading: "DEBANGAN",
    heroKeywords: ["LEARNING.", "BUILDING.", "BECOMING.", "DEVELOPER."],
    heroBio: "I'm a student learning programming and building my skills one step at a time.",
    aboutHeading: "LEARNING WITH\nINTENTION.",
    aboutBio: "I am a student who is currently learning programming and exploring software development. I enjoy practicing what I learn by creating small programs and experimenting with code. I am still at the beginning of my journey, and this portfolio represents my progress as I continue learning and building.",
    photoPlaceholderText: "D / PROFILE VISUAL IDENTITY",
    hasRealPhoto: true,
    photoUrl: profilePhoto,
  },

  navigation: [
    { label: "HOME", href: "#hero" },
    { label: "01 / WHO I AM", href: "#about" },
    { label: "02 / JOURNEY", href: "#journey" },
    { label: "03 / LEARNING", href: "#skills" },
    { label: "04 / LAB", href: "#lab" },
    { label: "05 / MINDSET", href: "#mindset" },
    { label: "06 / ROAD AHEAD", href: "#road-ahead" },
    { label: "07 / CONNECT", href: "#contact" },
  ],

  about: {
    sectionLabel: "01 / WHO I AM",
    heading: "LEARNING WITH INTENTION.",
    bio: "I am a student who is currently learning programming and exploring software development. I enjoy practicing what I learn by creating small programs and experimenting with code. I am still at the beginning of my journey, and this portfolio represents my progress as I continue learning and building.",
    focusStatement: "Focusing on building genuine understanding from first principles, writing clean Java logic, and developing daily coding consistency.",
  },

  journey: {
    sectionLabel: "02 / THE JOURNEY",
    heading: "FROM CURIOSITY TO CAPABILITY.",
    stages: [
      {
        id: "stage-1",
        stepNumber: "01",
        title: "START",
        description: "Beginning my programming journey and exploring computer science fundamentals.",
        tag: "INITIAL STEP",
        status: "completed",
      },
      {
        id: "stage-2",
        stepNumber: "02",
        title: "JAVA",
        description: "Learning Java and programming fundamentals step by step.",
        tag: "CORE FOCUS",
        status: "completed",
      },
      {
        id: "stage-3",
        stepNumber: "03",
        title: "PRACTICE",
        description: "Turning concepts into working programs and solving structured problems.",
        tag: "ACTIVE PRACTICE",
        status: "current",
      },
      {
        id: "stage-4",
        stepNumber: "04",
        title: "BUILD",
        description: "Beginning to create practical projects and exploring real-world applications.",
        tag: "APPLICATION",
        status: "current",
      },
      {
        id: "stage-5",
        stepNumber: "05",
        title: "GROW",
        description: "Continuing to improve and explore software development.",
        tag: "FUTURE HORIZON",
        status: "future",
      },
    ],
  },

  skills: {
    sectionLabel: "03 / CURRENTLY LEARNING",
    heading: "CURRENT FOCUS & FOUNDATIONS.",
    description: "Focusing on genuine depth in fundamentals rather than superficial breadth. Tracked by active study and hands-on coding.",
    items: [
      {
        id: "skill-java",
        name: "JAVA",
        category: "Primary Programming Language",
        status: "LEARNING",
        isCurrentFocus: true,
        summary: "Object-oriented programming, class design, control flow, loops, methods, and basic data structures.",
        focusTopics: ["OOP Fundamentals", "Control Structures", "Data Types & Variables", "Method Encapsulation", "Terminal I/O"],
      },
      {
        id: "skill-fundamentals",
        name: "PROGRAMMING FUNDAMENTALS",
        category: "Core Computer Science",
        status: "BUILDING FOUNDATIONS",
        isCurrentFocus: false,
        summary: "Variables, conditions, iterations, logical operations, memory concepts, and algorithmic structuring.",
        focusTopics: ["Logical Sequencing", "Conditional Branching", "Iteration Loops", "Basic Modularity", "Execution Flow"],
      },
      {
        id: "skill-problem-solving",
        name: "PROBLEM SOLVING",
        category: "Analytical Skills",
        status: "PRACTICING",
        isCurrentFocus: false,
        summary: "Deconstructing problem statements into clear algorithmic steps, testing edge cases, and systematic debugging.",
        focusTopics: ["Step-by-Step Tracing", "Edge Case Testing", "Syntax & Logic Debugging", "Pattern Recognition", "Dry Runs"],
      },
      {
        id: "skill-learning-practice",
        name: "LEARNING & PRACTICE",
        category: "Disciplined Growth",
        status: "EXPLORING",
        isCurrentFocus: false,
        summary: "Daily deliberate coding habits, console application experiments, and continuous revision of core concepts.",
        focusTopics: ["Daily Coding Habit", "Code Readability", "Refactoring Small Routines", "Learning from Errors"],
      },
    ],
  },

  learningLab: {
    sectionLabel: "04 / MY LEARNING LAB",
    heading: "BUILDING WHILE LEARNING.",
    description: "This space will document the programs, experiments and projects I build as I continue learning.",
    items: [
      {
        id: "lab-01",
        slotNumber: "LAB 01",
        title: "CONSOLE APPLICATION & OOP SYSTEM",
        statusText: "COMING SOON",
        description: "An interactive menu-driven console program applying modular Java classes, encapsulation, and user input validation.",
        focusArea: "Java OOP Architecture",
        tags: ["Java", "OOP", "Console UI", "Input Validation"],
      },
      {
        id: "lab-02",
        slotNumber: "LAB 02",
        title: "ALGORITHMIC LOGIC & MATH SUITE",
        statusText: "COMING SOON",
        description: "A structured repository of mathematical routines, pattern matrices, and algorithmic logic challenges.",
        focusArea: "Problem Solving & Algorithms",
        tags: ["Java", "Algorithms", "Number Theory", "Logic"],
      },
      {
        id: "lab-03",
        slotNumber: "LAB 03",
        title: "DATA MANAGEMENT & FILE I/O",
        statusText: "COMING SOON",
        description: "A persistent record management experiment exploring Java stream buffers and structured file storage.",
        focusArea: "Data Storage & Streams",
        tags: ["Java", "File I/O", "Data Records", "Persistence"],
      },
    ],
  },

  githubSection: {
    sectionLabel: "SOURCE CONTROL & PROGRESS",
    heading: "FOLLOW THE PROGRESS.",
    description: "My GitHub will document my learning journey, daily coding experiments, and future software projects as I build them.",
    url: "https://github.com/deba710",
    username: "deba710",
  },

  mindset: {
    sectionLabel: "05 / THE MINDSET",
    statement: "I DON'T NEED TO KNOW EVERYTHING YET. I JUST NEED TO KEEP LEARNING.",
    supportingText: "Every program I write, every mistake I fix and every concept I understand is another step forward.",
  },

  roadAhead: {
    sectionLabel: "06 / THE ROAD AHEAD",
    heading: "FROM LEARNING TO BUILDING.",
    text: "My goal is to build strong programming fundamentals, create meaningful projects and gradually grow into a skilled software developer.",
    milestones: [
      {
        phase: "PHASE 01",
        title: "SOLIDIFY CORE JAVA",
        description: "Master object-oriented concepts, exception handling, collections framework, and clean code hygiene.",
      },
      {
        phase: "PHASE 02",
        title: "BUILD PRACTICAL SOFTWARE",
        description: "Develop end-to-end applications solving tangible utility problems with modular design.",
      },
      {
        phase: "PHASE 03",
        title: "EXPAND CS HORIZONS",
        description: "Explore data structures, algorithmic complexity, modern developer tooling, and collaborative software engineering.",
      },
    ],
  },

  contact: {
    sectionLabel: "07 / CONNECT",
    heading: "LET'S KEEP IN TOUCH.",
    description: "I'm always open to learning, connecting with fellow developers, and sharing the journey in technology.",
    email: "debangan2007@gmail.com",
    github: "https://github.com/deba710",
    githubHandle: "github.com/deba710",
    linkedin: "https://www.linkedin.com/in/debangan-bera-964648331/",
    linkedinName: "Debangan Bera",
    location: "West Bengal, India",
  },

  footer: {
    monogram: "D / DEBANGAN",
    roleTitle: "STUDENT • JAVA LEARNER",
    tagline: "LEARNING TODAY. BUILDING TOMORROW.",
  },
};
