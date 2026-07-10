/** @format */

import { AspectRatio } from '@/src/components/ui/aspect-ratio';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className='container'>
      <section className='min-h-screen'>
        <h1 className='text-6xl font-extrabold mt-20 mb-8'>About</h1>
        <hr />
        <div className='my-10 flex gap-15'>
          <aside className='w-1/4'>
            <div>
              <div>
                <AspectRatio
                  ratio={1 / 1}
                  className='w-full max-w-50 mx-auto rounded-full bg-muted'
                >
                  <Image
                    src='https://avatar.vercel.sh/vercel.svg?text=YD'
                    alt='Photo'
                    fill
                    className='rounded-full object-cover grayscale dark:brightness-20'
                  />
                </AspectRatio>
              </div>
              <h3 className='text-3xl font-bold mt-5 mb-2 text-center'>
                Yogesh Dhuri
              </h3>
              <p className='px-6 text-[16px] text-foreground/60 text-center'>
                Full stack web developer <br /> Fresher
              </p>
            </div>
            <div className='mt-10'>
              <h4 className='text-2xl font-heading mb-3 tracking-wide'>
                Skills
              </h4>
              <div className='mb-5 flex flex-wrap'>
                <span className='mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white bg-[#00add8]'>
                  Next
                </span>
                <span className='mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white bg-[#234a84]'>
                  TypeScript
                </span>
                <span className='mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white bg-[#4b8bbe]'>
                  Python
                </span>
                <span className='mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white bg-[#61daf6]'>
                  React
                </span>
                <span className='mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white bg-[#ff9900]'>
                  AWS
                </span>
                <span className='mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white bg-[#4285f4]'>
                  Google Cloud
                </span>
                <span className='mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white bg-[#326ce5]'>
                  Tailwindcss
                </span>
                <span className='mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white bg-[#0db7ed]'>
                  Docker
                </span>
                <span className='mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white bg-[#7b42bc]'>
                  Terraform
                </span>
                <span className='mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white bg-[#199bfc]'>
                  NodeJS
                </span>
                <span className='mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white bg-[#d1610a]'>
                  Kafka
                </span>
                <span className='mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white bg-[#e535ab]'>
                  GraphQL
                </span>
                <span className='mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white bg-[#336791]'>
                  Postgres
                </span>
                <span className='mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white bg-[#d82c20]'>
                  Redis
                </span>
                <span className='mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-medium text-white bg-[#68a063]'>
                  MongoDB
                </span>
              </div>
              <Link
                href={'/pdf/Yogesh_Sitaram_dhuri.pdf'}
                target='_blank'
                className='font-normal
                  relative inline-block border-b-3 border-primary px-1 py-0.5
                  before:absolute before:inset-0 before:origin-bottom
                  before:scale-y-0 before:bg-primary before:transition-transform
                  before:duration-300 before:content-[""]
                  hover:before:scale-y-100'
              >
                <span className='text-xl relative z-10 hover:text-white tracking-wide'>
                  Resume
                </span>
              </Link>
            </div>
          </aside>
          <p className='text-lg w-3/4'>
            I'm Yogesh Sitaram Dhuri, an aspiring Full Stack Software Developer
            with a strong foundation in modern JavaScript technologies and a
            passion for building scalable, reliable, and user-centric web
            applications.
            <br />
            <br />
            My technical expertise includes JavaScript, TypeScript, C++,
            React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and
            Prisma. I also have hands-on experience with Docker, Redis, Linux,
            NGINX, Git, GitHub, computer networking, and software testing.
            <br />
            <br />
            To strengthen my practical skills, I have developed multiple
            full-stack projects that reflect real-world application development.{' '}
            <span className='text-primary border-b-2 border-primary hover:text-sidebar-primary hover:border-sidebar-primary'>
              <Link
                href='https://lms-frontend-nine-psi.vercel.app/'
                target='_blank'
              >
                My Learning Management System (LMS)
              </Link>
            </span>{' '}
            is a production-ready application featuring secure authentication
            with Clerk, payment integration using Stripe, media management
            through Cloudinary, RESTful APIs, JWT-based authorization,
            role-based access control, and responsive user interfaces built with
            React. I also developed{' '}
            <span className='text-primary border-b-2 border-primary hover:text-sidebar-primary hover:border-sidebar-primary'>
              <Link href='https://yelp-camp-i3wi.onrender.com/' target='_blank'>
                Yelp Camp
              </Link>
            </span>
            , a full-stack CRUD application that demonstrates experience with
            authentication, authorization, MongoDB, Express.js, server-side
            rendering, image uploads, and secure session management.
            Additionally, I built this{' '}
            <span className='text-primary border-b-2 border-primary hover:text-sidebar-primary hover:border-sidebar-primary'>
              <Link href='https://dhuriyogesh.vercel.app/' target='_blank'>
                portfolio website
              </Link>
            </span>{' '}
            using React.js to showcase my projects, technical skills, and
            development journey while focusing on responsive design, reusable
            components, and performance optimization.
            <br />
            <br />
            Before transitioning into software development, I gained
            professional experience in procurement and application support.
            These roles strengthened my analytical thinking, attention to
            detail, communication, documentation, and problem-solving abilities
            while working with cross-functional teams and clients. As an
            Application Support Executive, I installed enterprise software,
            provided remote technical support, resolved application issues,
            trained users. This experience gave me valuable insight into how
            software is used in production environments and reinforced my
            interest in building reliable, user-focused applications.
            <br />
            <br />I am currently seeking opportunities as a Software Engineer or
            Full Stack Developer where I can contribute to meaningful products,
            collaborate with experienced engineering teams, and continue growing
            as a developer. My goal is to build scalable, high-quality software,
            embrace new challenges, and deliver solutions that create measurable
            value for users and businesses.
          </p>
        </div>
      </section>
    </div>
  );
}
