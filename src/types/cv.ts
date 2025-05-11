export interface CvData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  avatarUrl: string;
  about: string;
  summary: string;
  personalWebsiteUrl: string;

  contact: {
    email: string;
    social: {
      name: string;
      url: string;
      icon: string;
    }[];
  };

  education: {
    school: string;
    degree: string;
    link: string;
    start: string;
    end?: string;
  }[];

  work: {
    company: string;
    title: string;
    link: string;
    start: string;
    end?: string;
    badges: string[];
    description: string;
    responsibilities: string[];
  }[];

  skills: string[];

  projects: {
    title: string;
    description: string;
    techStack: string[];
    link: {
      label: string;
      href: string;
    };
  }[];

  certificates: {
    name: string;
    date: string;
    issuer: string;
    url: string;
  }[];

  awards: {
    title: string;
    date: string;
    awarder: string;
    summary: string;
    issuer: string;
    url: string;
  }[];
}
