import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background pt-20">
      <Container className="text-center">
        <h1 className="font-heading text-8xl font-bold text-primary">404</h1>
        <h2 className="mt-4 font-heading text-3xl font-bold text-foreground">Page not found</h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Button
          asChild
          className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </Button>
      </Container>
    </section>
  );
}
