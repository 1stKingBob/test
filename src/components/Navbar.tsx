
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Info, Users, FileText, Wrench, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <Home className="mr-2 h-6 w-6" />
              Horizon Strata
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center gap-2">
            <Button variant="ghost" asChild>
              <Link to="/" className="flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/about" className="flex items-center">
                <Info className="mr-2 h-4 w-4" />
                About
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/committee" className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Committee
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/documents" className="flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                Documents
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/maintenance" className="flex items-center">
                <Wrench className="mr-2 h-4 w-4" />
                Maintenance
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/contact" className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
