import type { Metadata } from "next"

import Link from "next/link"
import ReactMarkdown from "react-markdown"

import { heroData } from "@/app/data"

const markdown = `
# Privacy Policy

**Last updated: July 23, 2025**

This website (https://nomadig.dev) is operated by İlker Gönenç as a personal portfolio and testing platform for experimental tools and automations.

## Data Collection

- We do not collect or store any personal data from visitors.
- If you authorize an integration (e.g. with Google), your credentials and access tokens are only used during the current session and not stored permanently.

## OAuth & APIs

This site may use Google APIs (such as Calendar) for personal automation testing. Access is granted through Google's secure OAuth process. We do not access or store your data unless explicitly required — and only for the intended automation purpose.

## Cookies

No tracking or analytics cookies are used at this time.

## Third-Party Links

This site may link to other services (e.g. GitHub, Google, Notion). We are not responsible for their privacy practices.

## Contact

If you have any questions about this privacy policy, contact:
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
