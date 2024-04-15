import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import { Button, buttonVariants } from "~/components/ui/button";

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/">
            <span className="font-bold">Next.js</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <SignedIn>
            <Link href="/new" className={buttonVariants({ size: "sm" })}>
              New Post
            </Link>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button size="sm">Sign in</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
