import type { Metadata } from "next"
import Image from "next/image"

import { ThemeToggle } from "@/components/theme-toggle"
import { heroData, aboutData } from "@/app/data"

const metadataTitle =
  heroData.fullName + " - " + heroData.jobTitle.replace(/<br\s*\/?>/i, " | ")

const metadataDescription = heroData.leadText

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
  },
  twitter: {
    title: metadataTitle,
    description: metadataDescription,
  },
}

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return (
    <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8">
      <main
        className="max-w-[65ch] mx-auto w-full space-y-6"
        role="main"
        aria-label="Homepage"
        aria-labelledby="hero-heading"
      >
        <div className="prose dark:prose-invert">
          <h1 id="hero-heading" className="pt-12">
            {heroData.fullName}
          </h1>
          <h2
            dangerouslySetInnerHTML={{ __html: heroData.jobTitle }}
            aria-label="Job Title"
          />
          <p
            className="lead"
            dangerouslySetInnerHTML={{ __html: heroData.leadText }}
            aria-label="Lead Text"
          />
        </div>
        <br />
        <div
          className="prose dark:prose-invert prose-p:text-slate-300 prose-strong:text-slate-300"
          dangerouslySetInnerHTML={{ __html: aboutData }}
          aria-label="About Section"
        />
      </main>
      <footer
        className="mt-12 text-center flex align-center justify-center gap-4"
        role="contentinfo"
        aria-label="Footer Section"
      >
        <Image
          className="dark:invert"
          src="./icons/github.svg"
          alt="GitHub logomark"
          width={20}
          height={20}
        />
        <Image
          className="dark:invert"
          src="./icons/linkedin.svg"
          alt="LinkedIn logomark"
          width={20}
          height={20}
        />
        <Image
          className="dark:invert"
          src="./icons/twitter-x.svg"
          alt="X (Formerly Twitter) logomark"
          width={20}
          height={20}
        />
        <ThemeToggle />
      </footer>
    </div>
  )
}
