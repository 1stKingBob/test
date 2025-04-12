
import { Link } from "react-router-dom";
import { Building } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <Building className="mr-2 h-6 w-6" />
            Horizon Strata
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
