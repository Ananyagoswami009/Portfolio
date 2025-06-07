
import { Users, Trophy, Code, Calendar, MapPin, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LeadershipSection = () => {
  const activities = [
    {
      title: "Hackathon Ambassador",
      organization: "Codtech IT Solution",
      description: "Leading and mentoring participants in hackathons, promoting innovation and collaborative problem-solving",
      icon: Code,
      category: "Leadership",
      color: "bg-purple-900/30 text-purple-300 border-purple-500/30"
    },
    {
      title: "Contributor & Campus Ambassador",
      organization: "Girlscript Summer of Code",
      description: "Contributed to open-source projects and promoted coding culture among students",
      icon: Users,
      category: "Ambassador",
      color: "bg-pink-900/30 text-pink-300 border-pink-500/30"
    },
    {
      title: "Member",
      organization: "Mood Indigo, IIT Bombay",
      description: "Active participant in India's largest college cultural festival",
      icon: Star,
      category: "Cultural",
      color: "bg-blue-900/30 text-blue-300 border-blue-500/30"
    },
    {
      title: "Student Ambassador",
      organization: "Let's Upgrade",
      description: "Promoting educational opportunities and skill development among students",
      icon: Users,
      category: "Education",
      color: "bg-green-900/30 text-green-300 border-green-500/30"
    },
    {
      title: "Head - Student Relationship Committee",
      organization: "Department Association",
      description: "Leading student engagement initiatives and fostering better student-faculty relationships",
      icon: Users,
      category: "Leadership",
      color: "bg-orange-900/30 text-orange-300 border-orange-500/30"
    },
    {
      title: "Organizer",
      organization: "TechTeck 2024 - SIH Internal Hackathon",
      description: "Organized and managed the Smart India Hackathon internal event",
      icon: Trophy,
      category: "Event Management",
      color: "bg-indigo-900/30 text-indigo-300 border-indigo-500/30"
    }
  ];

  const participations = [
    
    {
      title: "Best Paper Award",
      event: " International Conference on Engineering and Technology for a Sustainable Future (ICETSF-2025) Amravati, Maharashtra.",
      date: "2024",
      type: "Award"
    },
    {
      title: "Best Paper Award",
      event: " 1st International Conference on Augmented Reality, Intelligent Systems, and Industrial Automation(ARIIA), Dec 2024 Manipal, Karnataka.",
      date: "2024",
      type: "Award"
    },
    {
      title: "Best Paper Award",
      event: "International Conference on (RIDMSEF) NIT Rourkela",
      date: "March 2025",
      type: "Award"
    },
    {
      title: "Finalist at Sanrakshan 2024",
      event: "Techfest, IIT Bombay",
      date: "2024",
      type: "Competition"
    },
    {
      title: "National Conference on Recent Trends in Computer Engineering and Application",
      event: "May 2023",
      date: "May 2023",
      type: "Conference"
    },
    {
      title: "International Multidisciplinary PHD Symposium 2023",
      event: "November 2023",
      date: "November 2023",
      type: "Symposium"
    },
    {
      title: "Winjit Hackathon",
      event: "February 2024",
      date: "February 2024",
      type: "Hackathon"
    },
    {
      title: "36 Hours International Hackathon Sunhacks",
      event: "April 2024",
      date: "April 2024",
      type: "Hackathon"
    },
    {
      title: "Workshop on Web 3.0",
      event: "IIT Bombay, Mumbai, India",
      date: "December 2023",
      type: "Workshop"
    },
    {
      title: "NASA Space App Challenge",
      event: "October 2024",
      date: "October 2024",
      type: "Challenge"
    },
    {
      title: "Best Startup Award at SUCSSA Startup Pitching 2024",
      event: "SUCSSA",
      date: "2024",
      type: "Award"
    },
    {
      title: "IEEE ARIIA-2024 Workshop on 'AI Everywhere'",
      event: "Intel Unnati & MIT Manipal",
      date: "December 19, 2024",
      type: "Workshop"
    },
    {
      title: "Open Source Contribution Challenge",
      event: "Hacktoberfest",
      date: "October 18, 2024",
      type: "Challenge"
    },
    {
      title: "Google Solution Challenges 2025",
      event: "Google",
      date: "2025",
      type: "Challenge"
    },
    {
      title: "Hackfusion 2.0",
      event: "Nanded",
      date: "2025",
      type: "Hackathon"
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-purple-900 via-slate-800 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Leadership & Activities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Leading initiatives, contributing to communities, and participating in prestigious events
          </p>
        </div>

        {/* Leadership & Extracurricular Activities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Leadership & Extracurricular Activities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => {
              const ActivityIcon = activity.icon;
              return (
                <Card 
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                        <ActivityIcon className="w-5 h-5 text-purple-400" />
                      </div>
                      <Badge className={activity.color}>
                        {activity.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors">
                      {activity.title}
                    </CardTitle>
                    <CardDescription className="text-purple-300 font-medium">
                      {activity.organization}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-300 text-sm">{activity.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Participations */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Participations & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {participations.map((participation, index) => (
              <Card 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="bg-white/10 border-white/20 text-white">
                      {participation.type}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />
                      {participation.date}
                    </div>
                  </div>
                  <CardTitle className="text-sm text-white group-hover:text-purple-300 transition-colors">
                    {participation.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-purple-300">
                    {participation.event}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
