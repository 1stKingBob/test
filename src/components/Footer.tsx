
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 pl-0 md:pl-70">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Horizon Strata</h3>
            <p className="mb-4">
              Managing our community together under the Strata Schemes Management Act (2015).
            </p>
            <p>&copy; {new Date().getFullYear()} Horizon Strata Committee</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">About</Link>
              </li>
              <li>
                <Link to="/committee" className="hover:underline">Committee</Link>
              </li>
              <li>
                <Link to="/documents" className="hover:underline">Documents</Link>
              </li>
              <li>
                <Link to="/maintenance" className="hover:underline">Maintenance</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <address className="not-italic">
              <p className="mb-2">123 Strata Lane</p>
              <p className="mb-2">Sydney, NSW 2000</p>
              <p className="mb-2">Australia</p>
              <p className="mb-2">
                <a href="mailto:info@horizonstrata.com.au" className="hover:underline">
                  info@horizonstrata.com.au
                </a>
              </p>
              <p>
                <a href="tel:+61234567890" className="hover:underline">
                  +61 2 3456 7890
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
