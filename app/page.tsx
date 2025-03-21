import { heroData, aboutData } from "@/app/data"

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
    </div>
  )
}
