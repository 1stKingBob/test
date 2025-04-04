
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const Committee = () => {
  const committeeMembers = [
    {
      name: "Sarah Johnson",
      role: "Chairperson",
      bio: "Property manager with 10 years experience in strata management.",
      email: "sarah.johnson@horizonstrata.com.au",
      avatar: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      role: "Secretary",
      bio: "Retired lawyer specializing in property law and dispute resolution.",
      email: "michael.chen@horizonstrata.com.au",
      avatar: "/placeholder.svg"
    },
    {
      name: "Amelia Patel",
      role: "Treasurer",
      bio: "Certified accountant with experience in financial management.",
      email: "amelia.patel@horizonstrata.com.au",
      avatar: "/placeholder.svg"
    },
    {
      name: "David Wilson",
      role: "Committee Member",
      bio: "Civil engineer with expertise in building maintenance.",
      email: "david.wilson@horizonstrata.com.au",
      avatar: "/placeholder.svg"
    },
    {
      name: "Jessica Lee",
      role: "Committee Member",
      bio: "Communications specialist responsible for resident engagement.",
      email: "jessica.lee@horizonstrata.com.au",
      avatar: "/placeholder.svg"
    }
  ];

  const upcomingMeetings = [
    {
      title: "Monthly Committee Meeting",
      date: "April 10, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Building Common Room"
    },
    {
      title: "Quarterly Financial Review",
      date: "April 25, 2025",
      time: "6:30 PM - 8:00 PM",
      location: "Building Common Room"
    },
    {
      title: "Annual General Meeting",
      date: "May 15, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Building Common Room"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Strata Committee</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Committee Responsibilities</h2>
        <p className="mb-6">
          Under the Strata Schemes Management Act (2015), the Strata Committee is responsible for the day-to-day running
          of the strata scheme. The committee is elected by the owners at the Annual General Meeting and can have up to
          9 members, including the Chairperson, Secretary, and Treasurer.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Chairperson</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Presides over meetings, ensures proper procedures are followed, and generally oversees the functioning
                of the committee.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Secretary</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Handles correspondence, maintains records, prepares meeting notices and minutes, and manages the strata roll.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Treasurer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Manages financial records, levy collection, bill payments, and preparation of financial statements.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Meet Your Committee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-2">{member.bio}</p>
                <p className="text-sm">
                  <a href={`mailto:${member.email}`} className="text-primary hover:underline">
                    {member.email}
                  </a>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Upcoming Meetings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingMeetings.map((meeting, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{meeting.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{meeting.date}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{meeting.time}</span>
                </div>
                <div>
                  <strong>Location:</strong> {meeting.location}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Committee;
