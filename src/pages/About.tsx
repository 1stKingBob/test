
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">About Strata Management</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is Strata?</h2>
        <p className="mb-4">
          In New South Wales, strata-titled apartment buildings are governed by the Strata Schemes
          Management Act (2015). Each building is subdivided into units, or lots, and collectively
          forms the Owners Corporation (also known as the body corporate).
        </p>
        <p className="mb-4">
          When you purchase a strata-titled property, you become a lot owner and automatically become
          a member of the Owners Corporation. This gives you shared ownership of common property and
          a say in how the building is managed.
        </p>
      </section>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Owners Corporation</h2>
        <p className="mb-4">
          The Owners Corporation is responsible for:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Maintaining and repairing common property</li>
          <li>Managing the building's finances, including collecting levies</li>
          <li>Taking out insurance for the building</li>
          <li>Enforcing by-laws (the rules of the building)</li>
          <li>Keeping records and handling administrative matters</li>
        </ul>
        <p>
          These responsibilities are carried out by the elected Strata Committee.
        </p>
      </section>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Strata Levies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Administration Fund</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The Administration Fund covers day-to-day expenses such as:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Insurance premiums</li>
                <li>Cleaning of common areas</li>
                <li>Gardening and lawn maintenance</li>
                <li>Electricity for common areas</li>
                <li>Administrative expenses</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Capital Works Fund</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The Capital Works Fund (previously called the Sinking Fund) is for long-term expenses such as:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Painting the building</li>
                <li>Major repairs to common property</li>
                <li>Replacing common property fixtures and fittings</li>
                <li>Roof repairs or replacement</li>
                <li>Upgrading common facilities</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Strata Schemes Management Act (2015)</h2>
        <p className="mb-4">
          The Strata Schemes Management Act 2015 is the primary legislation governing strata schemes in New South Wales.
          It came into effect on November 30, 2016, replacing the previous Strata Schemes Management Act 1996.
        </p>
        <p className="mb-4">
          The Act sets out:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>The rights and responsibilities of lot owners, the Owners Corporation, and the Strata Committee</li>
          <li>How meetings must be conducted and decisions made</li>
          <li>How by-laws can be created and enforced</li>
          <li>Financial management requirements</li>
          <li>Dispute resolution processes</li>
        </ul>
        <p>
          You can access the full Strata Schemes Management Act 2015 on the NSW legislation website.
        </p>
      </section>
    </div>
  );
};

export default About;
