import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const projects = [
  {
    name: 'CSS Grid Payment Card Readers',
    description:
      'A static, responsive showcase of payment card readers (Dojo, iZettle, SumUp) built with pure HTML and Tailwind CSS, leveraging CSS Grid for layout. No images or external design assets—each card reader is crafted with CSS for inspiration and rapid prototyping.',
    link: {
      href: 'https://github.com/JoshWilliams92/CSS_Grid_Payment_Card_Readers',
      label: 'View on GitHub',
    },
    logo: logoCosmos,
  },
  {
    name: 'Car Auction Platform',
    description:
      'A modern Next.js application for buying and selling vehicles through an online auction system. Features real-time bidding, auction management, watchlist tracking, and an interactive analytics dashboard.',
    link: {
      href: 'https://github.com/JoshWilliams92/Next-Postgres-Car_Auction',
      label: 'View on GitHub',
    },
    logo: logoOpenShuttle,
  },
  {
    name: 'MongoDB E-Commerce Dashboard',
    description:
      'A Next.js analytics dashboard for MongoDB data visualization and reporting. Includes interactive charts, KPI cards, and seed scripts for demo data.',
    link: {
      href: 'https://github.com/JoshWilliams92/Next_MongoDB_E-Commerce_Analytics',
      label: 'View on GitHub',
    },
    logo: logoAnimaginary,
  },
  {
    name: 'HAR SAML Decoder',
    description:
      'A privacy-first web tool for decoding and inspecting SAML 2.0 responses from HAR files or raw Base64 input. All processing happens entirely in the browser — no data ever leaves your machine.',
    link: {
      href: 'https://github.com/JoshWilliams92/Next_SAML_HAR_Decoder',
      label: 'View on GitHub',
    },
    logo: logoPlanetaria,
  },
  {
    name: 'Public Amenity Locator',
    description:
      'A community-driven web app for identifying and mapping public amenities using AI image recognition. Upload a photo of an amenity, and AI verifies what it is — helping build a crowdsourced map of useful public infrastructure.',
    link: {
      href: 'https://github.com/JoshWilliams92/Amenity_Locator',
      label: 'View on GitHub',
    },
    logo: logoHelioStream,
  },
  {
    name: 'Nest_Angular_cryptocurrency_API',
    description:
      'Displaying Crypto Currency prices from external API in near real-time on a 2 second interval server poll.',
    link: {
      href: 'https://github.com/JoshWilliams92/Nest_Angular_cryptocurrency_API',
      label: 'View on GitHub',
    },
    logo: logoCosmos,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected projects across support engineering, analytics, and cloud platform development.',
}

export default function Projects() {
  const videos = [
    {
      title: 'CSS Grid Payment Card Readers',
      filename: '/images/photos/card-readers.png',
      type: 'image',
    },
    {
      title: 'Postgres Car Auction',
      filename: 'Postgres Car Auction.mp4',
      type: 'video',
    },
    {
      title: 'MongoDB E-Commerce Analytics',
      filename: 'MongoDB E-Commerce Analytics.mp4',
      type: 'video',
    },
    {
      title: 'SAML Decoder with HAR file',
      filename: 'SAML Decoder with HAR file.mp4',
      type: 'video',
    },
    {
      title: 'Amenity Locator',
      filename: 'Amenity Locator.mp4',
      type: 'video',
    },
    {
      title: 'Live Coin Watch',
      filename: 'Live Coin Watch.mp4',
      type: 'video',
    },
  ];
  return (
    <SimpleLayout
      title="A mixture of personal and professional projects."
      intro="This page showcases a selection of projects I've worked on, spanning both personal interests and professional experience. The examples reflect a range of skills, technologies, and problem-solving approaches."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-8">Project Videos</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {videos.map((item) => (
            <div key={item.filename}>
              <h3 className="mb-2 text-lg font-semibold text-zinc-700 dark:text-zinc-200">{item.title}</h3>
              {item.type === 'video' ? (
                <video
                  controls
                  className="w-full rounded-lg shadow-md border border-zinc-200 dark:border-zinc-700"
                  src={`/videos/${item.filename}`}
                >
                  Sorry, your browser does not support embedded videos.
                </video>
              ) : (
                <img
                  src={item.filename}
                  alt={item.title}
                  className="w-full rounded-lg shadow-md border border-zinc-200 dark:border-zinc-700"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
