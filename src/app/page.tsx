import AllCountry from "@/components/home/AllCountry";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen  items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-4 mt-5">
            Welcome To Global News Portal
          </h1>
          <Button className="px-6 py-3">
            <Link href="/news" className=" text-gray-50 px-6 py-3 rounded">
              Go to News Page
            </Link>
          </Button>
        </div>
        <AllCountry />
      </main>
    </>
  );
}
