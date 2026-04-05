import { publicNavigationLinks } from "@/app/utils/constant/navigations/publicNavigationLinks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFirefoxBrowser } from "react-icons/fa";

const PublicNav = () => {
  const pathname = usePathname();
  return (
    <nav className="border-b bg-[#F8F8FD]">
      <div className="container mx-auto flex items-center justify-between  px-4">
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium  text-gray-600">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            <p className="gap-1 flex items-center">
              <FaFirefoxBrowser className="text-blue-600" />
              <span>Quick Hire</span>
            </p>
          </Link>
          {publicNavigationLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`text-[12px] font-bold py-4 uppercase ${
                pathname === link.href ? "border-b-2 border-black" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-5 items-center">
          <Link href="/quick-admin-portal/add-jobs">
            <Button
              variant="outline"
              size="sm"
              className="cursor-pointer text-blue-600 hidden md:block"
            >
              Login
            </Button>
          </Link>

          <Button
            variant="outline"
            size="sm"
            className="cursor-pointer text-blue-600 hidden md:block"
          >
            Registration
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default PublicNav;
