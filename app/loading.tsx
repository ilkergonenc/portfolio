import { Skeleton } from "@/components/ui/skeleton"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8">
      <main className="max-w-[65ch] mx-auto w-full space-y-6">
        <div className="min-w-2xl w-full">
          <Skeleton className="h-10 w-[250px] mt-12 mb-8" />
          <Skeleton className="h-8 w-[350px] mb-2" />
          <Skeleton className="h-8 w-[450px] mb-8" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-1/2 mb-8" />
        </div>
        <br />
        <div className="w-full">
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-[250px] mb-8" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-[450px] mb-8" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-[150px] mb-8" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-1/2 mb-8" />
        </div>
      </main>
    </div>
  )
}
