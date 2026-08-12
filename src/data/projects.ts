import type { Project, ProjectCategory } from '../types';
import { uiuxProjects } from './uiuxProjects';

/**
 * Cards shown in the "Selected Work" section of the home page.
 *
 * The `uiux` category is derived from src/data/uiuxProjects.ts so a case study
 * only ever has to be described in one place — add an entry there and its card
 * appears here automatically, already linked to the right route.
 */

const websites: Project[] = [
  {
    title: 'VeriMart Nigeria',
    desc:
      'A premium, verification-first e-commerce marketplace built to tackle digital commerce trust deficits. ' +
      'Features interactive buyer/seller portals, mock escrow payment workflows, a real-time product comparison ' +
      'engine, and a simulated AI-assisted product authenticity scanner.',
    tags: ['React', 'TanStack', 'Tailwind CSS', 'Figma'],
    img: '/verimart.png',
    link: 'https://verimart-inky.vercel.app/',
    featured: true,
  },
  {
    title: 'Gamma Suites',
    desc:
      'A vibrant, modern hotel website built with React and Next.js, featuring an engaging dark theme, ' +
      'interactive sections, and responsive design.',
    tags: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'],
    img: '/GammaSuites.PNG',
    link: 'https://gammasuites.vercel.app/',
  },
  {
    title: 'Verve Digital',
    desc: 'Senior-focused music distribution platform combining luxury design with accessibility.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Express'],
    img: '/VD.PNG',
    link: 'https://verve-digital.vercel.app/',
  },
  {
    title: 'Soft Roots',
    desc: 'This is a dealer company focused on selling customizable trucks to their users.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Express'],
    img: '/softroots.PNG',
    link: 'https://soft-roots.vercel.app/',
  },
  {
    title: 'Aces Week Registration Site',
    desc:
      'This is a registration website used to get feedback from an already built in audience for possible ' +
      'expectations for an event.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'CSS'],
    img: '/vol.PNG',
    link: 'https://techfest-three.vercel.app/',
  },
  {
    title: 'TechFest Jam',
    desc: 'This is a live voting platform used to monitor the live votings for an event.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'CSS'],
    img: '/vote.PNG',
    link: 'https://acestech-jam.vercel.app/',
  },
  {
    title: 'TechAcademy',
    desc: 'A fully responsive teaching platform with nice designs and nice learning processes.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'CSS'],
    img: '/techa.PNG',
    link: 'https://tech-academy-nine.vercel.app/',
  },
];

const apps: Project[] = [
  // Add mobile / cross-platform builds here.
  //
  // Set `ready: false` on anything still in progress and it renders as a
  // Coming Soon card:
  //
  // {
  //   title: 'FitPulse',
  //   desc: 'Cross-platform fitness tracker with social features and AI workout plans.',
  //   tags: ['React Native', 'Expo', 'Node.js', 'Firebase'],
  //   img: '/fitpulse.png',
  //   ready: false,
  //   comingSoonNote: 'In development — launching soon.',
  // },
];

/** UI/UX cards, derived from the case study data so nothing is duplicated. */
const uiux: Project[] = uiuxProjects.map((project) => ({
  title: project.title,
  desc: project.desc,
  tags: project.tags,
  img: project.cover ?? project.screenshots[0]?.src ?? '',
  link: `/uiux/${project.slug}`,
  ready: project.ready ?? true,
  comingSoonNote: project.comingSoonNote,
}));

export const projects: Record<ProjectCategory, Project[]> = {
  websites,
  apps,
  uiux,
};

/** Tab order and labels for the projects section. */
export const projectCategories: { key: ProjectCategory; label: string }[] = [
  { key: 'websites', label: 'Websites' },
  { key: 'apps', label: 'Apps' },
  { key: 'uiux', label: 'UI/UX Design' },
];

export default projects;
