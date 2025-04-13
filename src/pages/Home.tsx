
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Calendar, FileText, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Horizon Strata</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your central hub for strata management and community information.
        </p>
        <img
          src="/Strata.jpg"
          alt="Strata Community"
          className="mx-auto rounded-lg shadow-lg w-full max-w-md"
        />
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Announcements
              </CardTitle>
              <CardDescription>Latest updates from the committee</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="border-b pb-2">Annual General Meeting scheduled for May 15th, 2025</li>
                <li className="border-b pb-2">Quarterly levies due by April 30th, 2025</li>
                <li className="border-b pb-2">Garden maintenance scheduled for next weekend</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link to="/about">View All</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Upcoming Events
              </CardTitle>
              <CardDescription>Mark your calendar</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="border-b pb-2">Committee Meeting - April 10, 2025</li>
                <li className="border-b pb-2">Building Inspection - April 22, 2025</li>
                <li className="border-b pb-2">Community BBQ - May 5, 2025</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link to="/committee">View Calendar</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Documents
              </CardTitle>
              <CardDescription>Important strata documents</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="border-b pb-2">Strata By-laws</li>
                <li className="border-b pb-2">Financial Statements</li>
                <li className="border-b pb-2">Meeting Minutes</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link to="/documents">Access Documents</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wrench className="mr-2 h-5 w-5" />
                Maintenance
              </CardTitle>
              <CardDescription>Building upkeep and repairs</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="border-b pb-2">Report an issue</li>
                <li className="border-b pb-2">View maintenance schedule</li>
                <li className="border-b pb-2">Contractors information</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link to="/maintenance">Maintenance Portal</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="mb-12 bg-secondary p-8 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">About Our Strata Scheme</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Horizon Strata is governed by the Strata Schemes Management Act (2015) and managed by an elected Strata Committee of owners.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Administration Fund</h3>
            <p>Covers day-to-day expenses like cleaning, gardening, and insurance.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Capital Works Fund</h3>
            <p>Finances long-term repairs and improvements to the building.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Strata Committee</h3>
            <p>Elected representatives managing the building on behalf of all owners.</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <Button asChild>
            <Link to="/about">Learn More About Strata</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
