import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"

interface SocialsNavItem {
  title: string
  handle: string
  url: string
}

export default function SocialsNav({ data }: { data: SocialsNavItem[] }) {
  return (
    <nav className="flex align-center">
      {data &&
        data.length > 0 &&
        data.map((item, key) => (
          <a
            key={key}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "link" })}
          >
            <span className="sr-only">{item.title}</span>
            <Image
              className="dark:invert"
              src={`./icons/${item.handle}.svg`}
              alt={`${item.title} logomark`}
              width={20}
              height={20}
            />
          </a>
        ))}
    </nav>
  )
}
