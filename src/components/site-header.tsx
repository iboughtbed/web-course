import { ExitIcon } from "@radix-ui/react-icons";
import type { User } from "next-auth";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

interface SiteHeaderProps {
  user?: User;
}

export function SiteHeader({ user }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/">
            <span className="font-bold">Next.js</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          {user ? (
            <>
              <Link href="/new" className={buttonVariants({ size: "sm" })}>
                New Post
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    className="relative h-8 w-8 rounded-full p-0"
                  >
                    <Avatar className="size-8">
                      {user.image && (
                        <AvatarImage src={user.image} alt={user.name ?? ""} />
                      )}
                      <AvatarFallback>{user.name}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.name}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/signout">
                      <ExitIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                      Log out
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link
              href="/signin"
              className={buttonVariants({
                size: "sm",
              })}
            >
              Sign In
              <span className="sr-only">Sign In</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
