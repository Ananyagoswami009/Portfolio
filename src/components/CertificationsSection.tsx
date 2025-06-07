import { Award, Shield, Cloud, Brain, Code, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { title } from 'process';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Google Cloud Data Analytics Certificate",
      issuer: "Google Cloud",
      icon: Cloud,
      category: "Data Analytics",
      color: "bg-blue-900/30 text-blue-300 border-blue-500/30"
    },
    {
      title: "Google Business Intelligence Professional Certificate",
      issuer: "Google",
      icon: Database,
      category: "Business Intelligence",
      color: "bg-green-900/30 text-green-300 border-green-500/30"
    },
    {
      title: "Google AI Essentials",
      issuer: "Google",
      icon: Brain,
      category: "Artificial Intelligence",
      color: "bg-purple-900/30 text-purple-300 border-purple-500/30"
    },
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      icon: Shield,
      category: "Cybersecurity",
      color: "bg-red-900/30 text-red-300 border-red-500/30"
    },
    {
      title: "Google IT Automation with Python Professional Certificate",
      issuer: "Google",
      icon: Code,
      category: "IT Automation",
      color: "bg-orange-900/30 text-orange-300 border-orange-500/30"
    },
    {
      title: "Google Cloud Computing Foundation Certificate",
      issuer: "Google",
      icon: Cloud,
      category: "Cloud Computing",
      color: "bg-indigo-900/30 text-indigo-300 border-indigo-500/30"
    },
    {
      title: "Gemini for Data Scientists and Analysts Professional Certificate",
      issuer: "Google",
      icon: Brain,
      category: "Data Science",
      color: "bg-purple-900/30 text-purple-300 border-purple-500/30"
    },
    {
      title: "Google Data Analytics Capstone: Complete A Case Study",
      issuer: "Google",
      icon: Brain,
      category: "Data Science",
      color: "bg-purple-900/30 text-purple-300 border-purple-500/30"
    },
    {
      title: "Data Analysis With R Programming",
      issuer: "Google",
      icon: Code,
      category: "Data Analysis",
      color: "bg-blue-900/30 text-blue-300 border-blue-500/30"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-100 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Professional certifications from leading technology companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const CertIcon = cert.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in-up border border-gray-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
                      <CertIcon className="w-5 h-5 text-purple-600" />
                    </div>
                    <Badge variant="outline" className="border-purple-200 text-purple-600">
                      {cert.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-gray-900 group-hover:text-purple-600 transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-purple-600 font-medium">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">Professional Certificate</span>
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

export default CertificationsSection;
