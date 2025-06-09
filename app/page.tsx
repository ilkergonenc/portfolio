import type { Metadata } from "next"
import Image from "next/image"

import { heroData, aboutData, socialsData } from "@/app/data"
import { ThemeToggle } from "@/components/theme-toggle"
import AboutSection from "@/components/folio/about"
import HeroSection from "@/components/folio/hero"
import SocialsNav from "@/components/core/socials"

const metadataTitle =
  heroData.fullName + " - " + heroData.jobTitle.replace(/<br\s*\/?>/i, " | ")

const metadataDescription = heroData.leadText

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  keywords: "web developer, full-stack developer, automation engineer",
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
  },
  twitter: {
    title: metadataTitle,
    description: metadataDescription,
  },
}

const stack = ["nextdotjs", "tailwindcss", "shadcnui", "n8n", "notion"]

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return (
    <>
      <header className="border-b border-dashed">
        <div className="px-4">
          <div className="max-w-3xl mx-auto w-full space-y-4 px-4 md:px-16 h-16 border-x border-dashed" />
        </div>
      </header>
      <div className="px-4">
        <div className="min-h-[calc(100vh-70px)] flex flex-col justify-between max-w-3xl mx-auto w-full space-y-4 border-x border-dashed">
          <main
            className="space-y-4 px-4 md:px-16"
            role="main"
            aria-label="Homepage"
            aria-labelledby="hero-heading"
          >
            <HeroSection data={heroData} />
            <br />
            <AboutSection data={aboutData} />
            {/* <br /> */}
            <div className="flex align-center justify-between space-x-2">
              <h5 className="text-sm font-medium">
                My current development stack
                <span className="ms-2.5">{"-->"}</span>
              </h5>
              <ul
                className="flex flex-wrap gap-1"
                aria-label="Technologies used"
              >
                {stack &&
                  stack.map((tech, index) => (
                    <li key={index}>
                      <div className="flex items-center rounded-sm px-2 py-1 text-xs font-medium leading-5 text-violet-500/50">
                        <span className="sr-only">{"# " + tech}</span>
                        <Image
                          className="dark:invert"
                          src={`./icons/stack/${tech}.svg`}
                          alt={`${tech} logomark`}
                          width={18}
                          height={18}
                        />
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </main>
          <footer
            className="space-y-4 border-t border-dashed py-4 px-4 md:px-16"
            role="contentinfo"
            aria-label="Footer Section"
          >
            <div className="flex align-center justify-center space-x-4">
              <SocialsNav data={socialsData} />
              <ThemeToggle />
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
