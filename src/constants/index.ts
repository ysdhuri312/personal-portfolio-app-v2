/** @format */

import { edemy, portfolio, yelpCamp, portfolioNext } from '@/public';

export const projects = [
  {
    name: 'Portfolio Website with React',
    description:
      'My personal website - built with React.js, tailwind-css and Deploy on Vercel.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/ysdhuri312/portfolio-app',
    live_app_link: 'https://ysdhuri312.github.io/dhuriyogesh.github.io/',
  },
  {
    name: 'Yelp Camp',
    description:
      'A full-stack CRUD application to find nearest campground and if you login then can add campground with images and description. It build with Bootstrap, EJS, Express.js, MongoDB and deploy on Render.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: yelpCamp,
    source_code_link: 'https://github.com/ysdhuri312/yelp-camp.git',
    live_app_link: 'https://yelp-camp-i3wi.onrender.com/',
  },
  {
    name: 'Learning Management System (Edemy)',
    description:
      'Developed a full-stack Learning Management System featuring secure authentication, course browsing, enrollment, and lecture access using React, Node.js, Express.js, and MongoDB. Integrated Clerk for authentication and user management, Stripe for secure payment processing, and Cloudinary for media storage and delivery.',
    tags: [
      {
        name: 'react-js',
        color: 'blue-text-gradient',
      },
      {
        name: 'node-js',
        color: 'green-text-gradient',
      },
      {
        name: 'REST-api',
        color: 'pink-text-gradient',
      },
    ],
    image: edemy,
    source_code_link:
      'https://github.com/ysdhuri312/learning-management-system-v1.git',
    live_app_link: 'https://lms-frontend-nine-psi.vercel.app/',
  },
  {
    name: 'Portfolio Website with Next.Js',
    description:
      'My personal website - built with next.js, shadcn and Deploy on vercel.',
    tags: [
      {
        name: 'next',
        color: 'blue-text-gradient',
      },
      {
        name: 'shadcn',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolioNext,
    source_code_link:
      'https://github.com/ysdhuri312/personal-portfolio-app-v2.git',
    live_app_link: 'https://www.dhuriyogesh.me/',
  },
];
