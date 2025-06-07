
import { MessageCircle, Users, Clock, Target, Eye, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const SoftSkillsSection = () => {
  const softSkills = [
    {
      name: "Communication",
      icon: MessageCircle,
      description: "Effective verbal and written communication with technical and non-technical audiences"
    },
    {
      name: "Problem-Solving",
      icon: Target,
      description: "Analytical thinking and creative problem-solving approaches"
    },
    {
      name: "Teamwork",
      icon: Users,
      description: "Collaborative work environment and cross-functional team coordination"
    },
    {
      name: "Adaptability",
      icon: Shield,
      description: "Quick adaptation to new technologies and changing project requirements"
    },
    {
      name: "Leadership",
      icon: Users,
      description: "Leading teams, mentoring students, and driving project initiatives"
    },
    {
      name: "Time Management",
      icon: Clock,
      description: "Efficient project management and deadline-driven delivery"
    },
    {
      name: "Critical Thinking",
      icon: Target,
      description: "Analytical evaluation and strategic decision-making"
    },
    {
      name: "Attention to Detail",
      icon: Eye,
      description: "Meticulous approach to data analysis and quality assurance"
    },
    {
      name: "Conflict Resolution",
      icon: Shield,
      description: "Effective resolution of team conflicts and stakeholder management"
    }
  ];

  return (
    <section id="soft-skills" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-100 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Soft Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Essential interpersonal and professional skills that drive collaboration and success
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {softSkills.map((skill, index) => {
            const SkillIcon = skill.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-300">
                    <SkillIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className="border-purple-200 text-purple-600 group-hover:bg-purple-50 transition-colors duration-300"
                  >
                    {skill.name}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;
