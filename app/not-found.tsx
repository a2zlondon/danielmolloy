import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Page not found
            </p>
            <Button asChild>
              <Link href="/">Go home</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
