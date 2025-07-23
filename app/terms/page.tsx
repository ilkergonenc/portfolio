import type { Metadata } from "next"

import Link from "next/link"
import ReactMarkdown from "react-markdown"

import { heroData } from "@/app/data"

const markdown = `
# Terms of Service

**Last updated: July 23, 2025**

Welcome to nomadig.dev — a personal website and experimental platform for prototyping automation tools and interfaces.

By accessing this site, you agree to the following terms:

## 1. No Warranty

This site is provided "as is" for informational and testing purposes only. No guarantees are made regarding uptime, data security, or accuracy.

## 2. Experimental Tools

If you use or test tools hosted on this domain (such as n8n workflows or prototypes), you do so at your own risk. These tools are in development and not intended for production use.

## 3. Limited Use

You agree not to misuse the services for illegal purposes or abuse any public endpoints.

## 4. Changes

These terms may be updated without notice. Continued use of the site implies acceptance of the current version.

## 5. Contact

For questions, contact:
📧 nomadig.dev@gmail.com
`

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

export default function Page() {
  return (
    <>
      <nav className="max-w-2xl mx-auto mt-16">
        <Link href="/">{`< Homepage`}</Link>
      </nav>
      <main className="prose dark:prose-invert mx-auto mt-12 mb-24">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </main>
    </>
  )
}
