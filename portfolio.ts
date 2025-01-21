import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Wei Zhang",
  title: "Hi all, I'm Wei",
  description:
    `I am an experienced full-stack developer specializing in web and desktop applications for businesses of all sizes. Whether enhancing existing systems or building innovative solutions from scratch, I deliver tailored, impactful results.`,
  desc:`Currently pursuing an MSc in Computational Science at Laurentian University with a focus on AI, I am eager to apply and expand my expertise in software development and cutting-edge technologies.`,
  desc1 :`Feel free to reach out for any project or task where my skills can add value.`,
  resumeLink: "https://zw3413.github.io/",
};

export const openSource = {
  githubUserName: "zw3413",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:zhangweicalm@gmail.com",
  linkedin: "https://www.linkedin.com/in/wei-zhang-b5b966328/",
  github: "https://github.com/zw3413",
  //instagram: "https://www.instagram.com/zw3413",
  // facebook: 'https://www.facebook.com/zw3413',
  twitter: 'https://x.com/zhangweicalm',
  
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: '"FULL STACK" and "FULL CYCLE" development in many years.',
  data: [
    {
      title: "Tech stacks for delivering value",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building Web Application with JavaEE, Nextjs"),
        emoji("⚡ Building Desktop Application with C#, Electron"),
        emoji("⚡ Building ComputerVision/WebCrawling with Python"),
      ],
      softwareSkills: [
        {
          skillName: "Spring",
          iconifyTag: "logos:spring",
        },
        {
          skillName: "Vue",
          iconifyTag: "vscode-icons:file-type-vue",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
    
        {
          skillName: "Redis",
          iconifyTag: "logos:redis",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Chrome Extension",
          iconifyTag: "logos:chrome",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
   
        {
          skillName: "OpenCV",
          iconifyTag: "logos:opencv",
        },
        {
          skillName: "FastAPI",
          iconifyTag: "logos:fastapi-icon",
        },
        {
          skillName: "Pytorch",
          iconifyTag: "logos:pytorch",
        },
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "C-Sharp",
          iconifyTag: "logos:c-sharp",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
    
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Go",
          iconifyTag: "logos:go",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Laurentian University",
    subHeader: "Master of Science in Computational Science",
    duration: "September 2024 - December 2025",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "China Jiliang University",
    subHeader: "Bachelor of Eng. in Measurement and Control",
    duration: "September 2007 - July 2011",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },

];

export const experience: ExperienceType[] = [
  {
    "role": "MES Software Developer",
    "company": "Foxconn Industrial Internet",
    "companyLogo": "/img/icons/common/fii.png",
    "date": "Jan 2021 - March 2024",
    "desc": "Developed and maintained a comprehensive Shopfloor system.",
    "descBullets": [
      "Built a full-stack Java-based web UI for MES management and configuration.",
      "Developed a high-volume, high-concurrency API service using Go.",
      "Created a C#.Net-based user interface for production line operators.",
      "Implemented high-availability data storage solutions utilizing PostgreSQL and Datanews." 
    ]
  },
  {
    "role": "Java Full Stack Developer",
    "company": "21 Century Aerospace Technology",
    "companyLogo": "/img/icons/common/21at.png",
    "date": "Oct 2017 - Dec 2020",
    "desc": "Developed Java-based systems with GIS integration for government agencies.",
    "descBullets": [
      "Developed and implemented systems with GIS features using tools like OpenLayers and GeoServer.",
      "Proficient in a full-stack environment including Java, PostgreSQL, Redis, OpenLayers, Electron, and more."
    ]
  },
  {
    "role": "Senior Automation Engineer & Project Manager",
    "company": "DWFritz Automation",
    "companyLogo": "/img/icons/common/dwf.jpg",
    "date": "Jan 2014 - Oct 2017",
    "desc": "Served as a key member of the field team.",
    "descBullets": [
      "Developed and implemented custom Machine Vision programming tailored to customer product requirements.",
      "Successfully oversaw hardware installation, calibration, and final delivery of projects.",
      "Effectively managed and mentored project teams."
    ]
  }
]

export const projects: ProjectType[] = [
  {
    name: "Blast-Vision",
    desc: "A system for balsting evaluation with computer vision, this is a project that we use to attend the Google DevFes.",
    github: "https://github.com/zw3413/blast",
    link: "https://aoi.bakers.top",
  },
  {
    name: "WeSudbury",
    desc: "A carpool system that inspired by enomous messages on requesting or provding rides in fackbook and other social media.",
    github:"https://github.com/zw3413/wesudbury.com",
    link: "https://wesudbury.com",
  },
  {
    name: "Subtitlex",
    desc: "A group of application including webUI, python tools, chrome extension ...  to provide a comprehensive online subtitle experience",
    github: "https://github.com/zw3413/subtitles",
    link: "https://subtitlex.xyz",
  },
  {
    name: "Grid World - Reinforcement Learning",
    desc: "A utilization of reinforcement learning in the game of grid word, to trin the agent automately find path to target.",
    github :"https://github.com/zw3413/q_learning", 
    link: "https://www.youtube.com/watch?v=vOgjJQa6MWA",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Wei Zhang",
  description: greetings.description,
  author: "Wei Zhang",
  image: "https://avatars.githubusercontent.com/u/32606248?v=4",
  url: "",
  keywords: [
    "WeiZhang",
    "Wei Zhang",
    "@zhangweicalm",
    "zw3413",
    "Portfolio",
    "Wei Portfolio ",
    "Wei Zhang Portfolio",
  ],
};
