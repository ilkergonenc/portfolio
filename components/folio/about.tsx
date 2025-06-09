"use client"

import { useState } from "react"
import { FileDownIcon, MinusIcon, PlusIcon } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function AboutSection({ data }: { data: string }) {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <>
      <div
        className={cn(
          "prose dark:prose-invert",
          "prose-p:text-slate-700 prose-strong:text-slate-700",
          "dark:prose-p:text-slate-300 dark:prose-strong:text-slate-300",
          "transition-[max-height] duration-500 overflow-hidden",
          "border-t border-dashed pt-4",
          {
            "max-h-100 md:max-h-60": collapsed,
            "max-h-220": !collapsed,
          }
        )}
        dangerouslySetInnerHTML={{ __html: data }}
        aria-label="About Section"
      />
      <hr className="mb-4 border-b border-dashed" />
      <div className="flex items-center justify-between space-x-2">
        <a
          href="./files/ilkergonenc-resume-2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants()}
        >
          Download Resume
          <FileDownIcon />
        </a>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
        >
          <span className="sr-only">
            {collapsed ? "Read More" : "Read Less"}
          </span>
          {collapsed ? <PlusIcon /> : <MinusIcon />}
        </Button>
      </div>
      <hr className="mb-4 border-b border-dashed" />
    </>
  )
}
