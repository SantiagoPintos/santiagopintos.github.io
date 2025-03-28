import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Santiago Pintos",
  initials: "SP",
  location: "Montevideo, Uruguay",
  locationLink: "https://www.google.com/maps/place/Montevideo,+Uruguay",
  avatarUrl: "https://avatars.githubusercontent.com/u/26977363?v=4",
  about:
    "Developer dedicated to creating seamless, high-quality digital experiences.",
  summary: (
    <>
      Full Stack Software Engineer proficient in .NET, React, and Node.js, specializing in developing innovative web applications with integrated AI capabilities.
      <br />
      Experienced in cross-functional team environments.
    </>
  ),
  personalWebsiteUrl: "https://santiagopintos.github.io/",
  contact: {
    email: "spintos@outlook.es",
    tel : null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/SantiagoPintos",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/santiago-pintos/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad ORT Uruguay",
      degree: "Computer Science",
      link: "https://www.ort.edu.uy/",
      start: "2023",
      end: null,
    },
    {
      school: "Platzi",
      degree: "Full Stack Developer with JavaScript",
      link: "https://platzi.com/",
      start: "2022",
      end: "2022",
    },
    {
      school: "Platzi",
      degree: "Web Development School",
      link: "https://platzi.com/",
      start: "2021",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Ultimate Kronos Group (UKG)",
      link: "https://www.ukg.com/",
      badges: ["Kotlin", "Angular", "AWS", "AI"],
      title: "Software Engineer Intern",
      start: "2025",
      end: null,
      description: (
        <>
          Development of web applications for analyzing user reviews using AI models.
          <ul className="list-inside list-disc">
            <li>Implementation of AI-based sentiment analysis models to process user feedback and extract key sentiments.</li>
            <li>Testing, deployment, and maintenance of web applications.</li>
          </ul>
        </>
      )
    },
    {
      company: "Universidad de Trabajo del Uruguay",
      link: "https://utu.edu.uy",
      badges: ["Linux", "Windows"],
      title: "Lab assistant",
      start: "2020",
      end: "2025",
      description: (
        <>
          Development of management systems, maintenance of network infrastructure and servers, technical support to teachers and students.
          <ul className="list-inside list-disc">
            <li>Maintenance of network infrastructure and servers.</li>
            <li>Development of management systems for the school.</li>
            <li>Technical support to teachers and students.</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Angular",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "SQL Server",
    "Java",
    "Python",
    "Kotlin",
    ".Net",
    "Azure",
    "AWS",
  ],
  projects: [
    {
      title: "AiTools",
      techStack: [
        "TypeScript",
        "Next.js",
        "Tailwind",
        "Transformers"
      ],
      description:
        "Web platform with AI models running entirely on the browser (client side)",
      link: {
        label: "github.com",
        href: "https://santiagopintos.github.io/aitools/",
      },
    },
    {
      title: "Inasistencias",
      techStack: [
        "TypeScript",
        "React",
        "Node.js",
        "Electron",
        "Sqlite",
      ],
      description:
        "Desktop application to manage absences of teachers in a school",
      link: {
        label: "github.com",
        href: "https://github.com/santiagopintos/Inasistencias",
      },
    },
    {
      title: "BabyTracker",
      techStack: [
        "Javascript",
        "React",
        "Material UI",
      ],
      description:
        "Mobile application manage baby's daily activities",
      link: {
        label: "BabyTracker",
        href: "https://github.com/santiagopintos/BabyTracker",
      },
    },
    {
      title: "Email",
      techStack: [
        ".Net",
        "C#",
        "Azure",
      ],
      description:
        "Desktop application to manage emails",
      link: {
        label: "Email",
        href: "https://github.com/santiagopintos/Email",
      },
    },
    {
      title: "Social Backend",
      techStack: [
        "Side Project",
        "TypeScript",
        "Express",
        "Node.js",
        "Sqlite",
      ],
      description: "Backend for a social network application",  
      link: {
        label: "Social Backend",
        href: "https://github.com/santiagopintos/social-backend",
      },
    },
    {
      title: "Calcount",
      techStack: [
        "JavaScript", 
        "Android", 
        "Capacitor",
        "Ionic"
      ],
      description:
        "Android application to manage daily calorie intake",
      link: {
        label: "Calcount",
        href: "https://github.com/santiagopintos/TDDM-ORT/",
      },
    },
  ],
  certificates: [
    {
      name: "Checkout Pro",
      date: "2024",
      issuer: "Mercado Libre",
      url: "https://www.mercadopago.com.uy/developers/panel/developer-program/certification/cert_46a59bd63f1111efbb7b8e3c267079e3"
    },
    {
      name: "Fundational C# with Microsoft",
      date: "2024",
      issuer: "Microsoft - freeCodeCamp",
      url: "https://www.freecodecamp.org/certification/fcc5feb4082-0a79-4944-a977-1b0608b421ef/foundational-c-sharp-with-microsoft"
    }
  ],
  awards: [
      {
        title: "Champion",
        date: "2018",
        awarder: "Sumo.uy - Facultad de Ingeniería, Universidad de la República",
        summary: "Robotics competition hosted by Facultad de Ingeniería, UDELAR. Qualifying for the RoboCup world robotics championship held in Sydney the following year.",
        issuer: "Sumo.uy",
        url: "https://2019.robocup.org/"
      },
  ]
} as const;
