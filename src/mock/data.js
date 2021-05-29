import { nanoid } from 'nanoid';
import resume from '../files/mzdon_resume.pdf';

// HEAD DATA
export const headData = {
  title: 'Bits & Barbells',
  lang: 'en',
  description: 'My ramblings about bits and barbells',
};

// HERO DATA
export const heroData = {
  title: 'Hey, my name is',
  name: 'Marc Zdon',
  subtitle: 'I like to exercise my mind and body',
  cta: "Let's Go!",
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "That's me and my oldest daughter. My wife is there in the background too!",
  paragraphTwo:
    "By trade, I'm a software developer. I love writing code. I'm also really into CrossFit and power lifting. I've got my CrossFit Level 1 coaches certificate... but what CrossFitter doesn't? Honestly. Lift heavy, run fast.",
  paragraphThree:
    "I decided it's about time I started recording my thoughts and experiences in both the software and fitness world. Maybe someone will read it? Better yet, maybe someone will benefit from it. That's the hope, at least.",
  resume,
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Bits & Barbells',
    info: "Well, I put this site together. It wasn't a huge lift.. just a quick React app put together using Gatsby and a hacked up starter template!",
    url: 'https://bitsandbarbells.com',
    repo: 'https://github.com/mzdon/bits-and-barbells',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
