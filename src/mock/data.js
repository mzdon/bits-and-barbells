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
    info: "Well, I put this site together. It wasn't a huge lift.. just a quick React app built with using Gatsby and a hacked up starter template!",
    info2: '',
    url: 'https://bitsandbarbells.com',
    repo: 'https://github.com/mzdon/bits-and-barbells',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Incentive: Financial Wellness',
    info: "Incentive is the app I build at eMoney Advisor. It's a React Native app available on iOS and Android. I'm proud of what our team has put together.",
    info2: '',
    url: 'https://getincentive.com',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'WodWatch',
    info: "WodWatch is a fitness timer app designed for CrossFit. I never found a free timer app I liked so I've decided to build one myself. It's also built using React Native",
    info2: 'Website and code repo links coming soon!',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'MyMacros',
    info: "MyMacros is a macronutrient tracking utility that is intended to be as simple as possible with a minimalistic design and feature set. I've used other apps to help track my macronutrient consumption but I found my experience frustrating or overcrowded with unnecessary features. I used React Native for this one as well.",
    info2: 'Website and code repo links coming soon!',
    url: '',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Get in touch.',
  btn: 'Email Me',
  email: 'marczdon@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mzdon',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mzdon-ema',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
