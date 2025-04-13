
import { Link, useLocation } from "react-router-dom";
import { Building } from "lucide-react";

const pageNames: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/committee": "Committee",
  "/documents": "Documents",
  "/maintenance": "Maintenance",
  "/contact": "Contact",
};

const Navbar = () => {
  const location = useLocation();
  const currentPage = pageNames[location.pathname] || "Page Not Found";

  return (
    <header className="bg-primary text-primary-foreground shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold flex items-center mr-6">
            <Building className="mr-2 h-6 w-6" />
            Horizon Strata
          </Link>
          <div className="text-xl font-medium ml-4">
            {currentPage}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
