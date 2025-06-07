
import { GraduationCap, Calendar, Trophy, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Sandip University",
      duration: "Current Status: Pursuing",
      cgpa: "Current CGPA: 9.12",
      icon: GraduationCap,
      color: "bg-purple-900/30 text-purple-300 border-purple-500/30"
    },
    {
      degree: "Higher Secondary Certificate (HSC) - 12th Grade",
      institution: "B.Y.K College of Commerce",
      duration: "2021-2022",
      cgpa: "Percentage: 69.39%",
      icon: GraduationCap,
      color: "bg-blue-900/30 text-blue-300 border-blue-500/30"
    },
    {
      degree: "10th Grade Vijay English Medium School",
      institution: "Vijay English Medium School",
      duration: "2019-2020",
      cgpa: "Percentage: 85.80%",
      icon: GraduationCap,
      color: "bg-green-900/30 text-green-300 border-green-500/30"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Educational Background
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Academic journey in computer science and technology
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => {
            const EduIcon = edu.icon;
            return (
              <Card 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                      <EduIcon className="w-5 h-5 text-purple-400" />
                    </div>
                    <Badge className={edu.color}>
                      Education
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors">
                    {edu.degree}
                  </CardTitle>
                  <CardDescription className="text-purple-300 font-medium">
                    {edu.institution}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-green-300">
                      <Trophy className="w-4 h-4" />
                      {edu.cgpa}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
