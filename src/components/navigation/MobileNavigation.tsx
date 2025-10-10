import { HamburgerIcon, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import ROUTES from "@/constants/routes";
import NavLinks from "./NavLink";

const MobileNavigation = async () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <GiHamburgerMenu
          className="invert-colors sm:hidden cursor-pointer dark:text-primary-500"
          size={36}
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
            Port<span className="text-primary-500">folio</span>
          </p>
        </Link>

        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16">
              <NavLinks isMobileNav />
            </section>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
