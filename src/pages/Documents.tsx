
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Book, Calculator, FileCheck, Calendar } from "lucide-react";

const Documents = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Strata Documents</h1>
      
      <Tabs defaultValue="bylaws" className="mb-12">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="bylaws">By-laws</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="minutes">Meeting Minutes</TabsTrigger>
          <TabsTrigger value="insurance">Insurance</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="bylaws" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="mr-2 h-5 w-5" />
                  Strata By-laws
                </CardTitle>
                <CardDescription>Current building by-laws</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  The by-laws are the rules that all owners, occupiers, and visitors must follow.
                  They cover issues such as noise, pets, parking, renovations, and more.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href="#download" className="flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download By-laws (PDF)
                  </a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileCheck className="mr-2 h-5 w-5" />
                  By-law Amendments
                </CardTitle>
                <CardDescription>Recent changes to by-laws</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  This document outlines recent amendments to the by-laws as approved
                  at the Annual General Meeting.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href="#download" className="flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Amendments (PDF)
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="financial" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="mr-2 h-5 w-5" />
                  Annual Budget
                </CardTitle>
                <CardDescription>Financial Year 2024-2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  The approved budget for the current financial year, including projected
                  income and expenses.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href="#download" className="flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Budget (PDF)
                  </a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Quarterly Financial Report
                </CardTitle>
                <CardDescription>January-March 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Detailed financial report for the most recent quarter, including income, 
                  expenses, and current fund balances.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href="#download" className="flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report (PDF)
                  </a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="mr-2 h-5 w-5" />
                  Levy Schedule
                </CardTitle>
                <CardDescription>2024-2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Details of quarterly levy amounts for each lot and payment due dates.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href="#download" className="flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Schedule (PDF)
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="minutes" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Annual General Meeting
                </CardTitle>
                <CardDescription>May 15, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Minutes from the last Annual General Meeting including election results,
                  financial approvals, and major decisions.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href="#download" className="flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Minutes (PDF)
                  </a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Committee Meetings
                </CardTitle>
                <CardDescription>Archive</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Archive of minutes from recent committee meetings.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex justify-between items-center">
                    <span>March 10, 2025</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#download">Download</a>
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>February 10, 2025</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#download">Download</a>
                    </Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>January 10, 2025</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#download">Download</a>
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="insurance" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Building Insurance
              </CardTitle>
              <CardDescription>Policy documents and information</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The Owners Corporation maintains comprehensive insurance coverage for the building,
                including building replacement, public liability, and office bearers' liability.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href="#download" className="flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4" />
                    Building Insurance Certificate
                  </a>
                </Button>
                
                <Button variant="outline" asChild>
                  <a href="#download" className="flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4" />
                    Public Liability Certificate
                  </a>
                </Button>
                
                <Button variant="outline" asChild>
                  <a href="#download" className="flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4" />
                    Insurance Valuation Report
                  </a>
                </Button>
                
                <Button variant="outline" asChild>
                  <a href="#download" className="flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4" />
                    Insurance Claim Form
                  </a>
                </Button>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Important Note</h3>
                <p>
                  The building insurance does NOT cover contents within individual lots.
                  Lot owners should maintain their own contents insurance policy.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="maintenance" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Capital Works Plan
                </CardTitle>
                <CardDescription>10-year maintenance schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  This plan outlines projected major maintenance and repairs for the building
                  over the next 10 years, including estimated costs and timing.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href="#download" className="flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Plan (PDF)
                  </a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Maintenance Schedule
                </CardTitle>
                <CardDescription>Current year</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Schedule of routine maintenance activities for the current year,
                  including gardening, cleaning, and scheduled inspections.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href="#download" className="flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Schedule (PDF)
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Documents;
