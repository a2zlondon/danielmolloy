import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background min-h-[70vh] flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center">
              <div className="mb-10 flex justify-center">
                <Image
                  src="/images/404-illustration.svg"
                  alt=""
                  width={240}
                  height={200}
                  className="w-48 h-auto text-muted-foreground"
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-light mb-3">
                Oops — wrong turn
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                This page seems to have wandered off. Maybe it’s in a meeting.
              </p>
              <p className="text-muted-foreground mb-10">
                No worries. Head back and we’ll get you where you need to go.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/">Back to home</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
