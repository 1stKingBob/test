
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
      <div className="container mx-auto px-4 py-4 pl-0 md:pl-64">
        <div className="flex items-center">
          <div className="text-xl font-medium">
            {currentPage}
          </div>
          <Link to="/" className="text-2xl font-bold flex items-center ml-auto">
            <img src="/Icon.png" alt="Horizon Strata Logo" className="mr-2 h-6 w-6" />
            Horizon Strata
          </Link>
        </div>      
      </div>
    </header>
  );
};

export default Navbar;
