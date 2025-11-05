"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 3 seconds
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-muted-foreground">404</h1>
        <h2 className="text-3xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <p className="text-sm text-muted-foreground">
          Redirecting to home page in 3 seconds...
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go Home Now
          </Link>
        </div>
      </div>
    </div>
  );
}