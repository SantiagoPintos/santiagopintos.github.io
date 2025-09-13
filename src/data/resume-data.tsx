import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Santiago Pintos",
  initials: "SP",
  location: "Montevideo, Uruguay",
  locationLink: "https://www.google.com/maps/place/Montevideo,+Uruguay",
  avatarUrl: "https://avatars.githubusercontent.com/u/26977363?v=4",
  about:
    "Software Engineer | Backend & AI/ML Development.",
  summary: (
    <>
      Software Engineer specializing in Artificial Intelligence and Machine Learning, with focus on backend development.
    </>
  ),
  personalWebsiteUrl: "https://spintos.dev/",
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
      start: "2021",
      end: "2022",
    },
  ],
  work: [
    {
      company: "UKG",
      link: "https://www.ukg.com/",
      positions: [
        {
          badges: ["Python", "AI"],
            title: "Associate Software Engineer",
            start: "2025",
            end: null,
            description: (
              <>
              Member of the AI team at Great Place To Work
                <ul className="list-inside list-disc">
                  <li>Design and development of AI agents.</li>
                  <li>Exploration of new technologies and frameworks.</li>
                </ul>
              </>
            )
        },
        {
          badges: ["Kotlin", "Angular"],
          title: "Software Engineer Intern",
          start: "2025",
          end: "2025",
          description: (
            <>
              Design, development and testing of applications and internal tools for the company.
              <ul className="list-inside list-disc">
                <li>Development of a project to improve the visibility of developers&apos; skills.</li>
              </ul>     
            </>
          )
        }
      ]
    },
    {
      company: "Universidad de Trabajo del Uruguay",
      link: "https://utu.edu.uy",
      positions: [
        {
          badges: ["Linux", "Windows"],
          title: "Lab assistant",
          start: "2020",
          end: "2025",
          description: (
            <>
              Development of management systems, maintenance of network infrastructure and servers, technical support to teachers and students.
              <ul className="list-inside list-disc">
                <li>Maintained network infrastructure and servers.</li>
                <li>Developed management systems for the school.</li>
                <li>Provided technical support to teachers and students.</li>
              </ul>
            </>
          ),
        }
      ]
    },
  ],
  skills: [
    "JavaScript/TypeScript",
    "Angular",
    "React/Next.js",
    "Node.js",
    "Python",
    "Java",
    "Kotlin",
    ".Net",
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
