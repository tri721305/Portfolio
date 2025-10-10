import Image from "next/image";
import Link from "next/link";

// import GlobalSearch from "@/components/search/GlobalSearch";

import Theme from "./Theme";
import ROUTES from "@/constants/routes";
import MobileNavigation from "./MobileNavigation";
import NavLinks from "./NavLink";

const Navbar = async () => {
  return (
    <nav className="flex-between bg-transparent fixed z-50 w-full gap-5  p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href={ROUTES.HOME} className="flex items-center gap-1">
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Port<span className="text-primary-500">folio</span>
        </p>
        <div className="flex-center">{/* <NavLinks /> */}</div>
      </Link>
      {/* <GlobalSearch /> */}
      <div className="flex-between gap-5">
        <Theme />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
