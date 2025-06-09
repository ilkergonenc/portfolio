interface HeroSectionProps {
  data: {
    fullName: string
    nickName: string
    jobTitle: string
    leadText: string
  }
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <>
      <div className="prose dark:prose-invert">
        <h1 id="hero-heading" className="pt-6 md:pt-12">
          {data.fullName}{" "}
          <small className="text-sm font-light">{`@${data.nickName}`}</small>
        </h1>
        <h2
          dangerouslySetInnerHTML={{ __html: data.jobTitle }}
          aria-label="Job Title"
        />
        <p
          className="lead"
          dangerouslySetInnerHTML={{ __html: data.leadText }}
          aria-label="Lead Text"
        />
      </div>
    </>
  )
}
