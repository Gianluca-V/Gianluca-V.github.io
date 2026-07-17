/**
 * Single source of truth for site identity, social links, and profile data.
 * Update personal info here — components only render what this module exports.
 */

export const site = {
  owner: 'Gianluca Vespe',
  tagline: 'The <software developer/>',
  title: 'Gianluca Vespe — Software Developer',
  description:
    'Portfolio of Gianluca Vespe, software developer. Distributed microservices, real-time 3D simulations, games, and experiments — systems built end to end.',
  positioning:
    'I build systems end to end — from distributed microservices to real-time 3D simulations.',
  cvHref: '/CV%20Gianluca%20Vespe%20English.pdf',
  github: {
    label: 'github.com/Gianluca-V',
    url: 'https://github.com/Gianluca-V',
  },
  linkedin: {
    label: 'linkedin.com/in/gianluca-vespe',
    url: 'https://www.linkedin.com/in/gianluca-vespe/',
  },
  contactFormEndpoint: 'https://formspree.io/f/moqgzkwj',
} as const;

export interface EducationEntry {
  degree: string;
  school: string;
  years: string;
}

export const profile: { education: EducationEntry[]; coreSkills: string[] } = {
  education: [
    {
      degree: 'Information Technology Engineering',
      school: 'Universidad Nacional Arturo Jauretche',
      years: '2024 - present',
    },
    {
      degree: 'Technical Degree in Programming',
      school: 'EEST N°7',
      years: '2020 - 2023',
    },
    {
      degree: '.NET Framework for Web Development',
      school: 'EducacionIT',
      years: '2022',
    },
  ],
  coreSkills: [
    'Go',
    'C# / .NET',
    'TypeScript',
    'Python / Django'
    'SQL / PostgreSQL',
    'Docker & Kubernetes',
    'Kafka', 'Redis',
  ],
};
