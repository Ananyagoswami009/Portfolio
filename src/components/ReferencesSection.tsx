
import { User, Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ReferencesSection = () => {
  const references = [
    {
      name: "Mr. Mritunjay Kumar Ranjan",
      position: "Assistant Professor",
      organization: "Sandip University Nashik",
      phone: "+91 8083445858",
      email: "mritunjaykranjan@gmail.com"
    },
    {
      name: "Dr. Vaibhav Sonaje",
      position: "HODCS",
      organization: "Sandip University, Nashik",
      phone: "+91 98904 75587",
      email: "vaibhav.sonaje@sandipuniversity.edu.in"
    },
    {
      name: "Prof. Shilpi Saxsena",
      position: "Assistant Professor",
      organization: "Sandip University Nashik",
      phone: "+91 9860147083",
      email: "Shilpi.Saxsena@sandipuniversity.edu.in"
    }
  ];

  return (
    <footer className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
            References
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Professional references from academic mentors and industry colleagues
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {references.map((ref, index) => (
            <Card 
              key={index}
              className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                    <User className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
                <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors">
                  {ref.name}
                </CardTitle>
                <CardDescription className="text-purple-300 font-medium">
                  {ref.position}
                </CardDescription>
                <CardDescription className="text-blue-300 text-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {ref.organization}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Phone className="w-4 h-4 text-green-400" />
                    <a href={`tel:${ref.phone}`} className="hover:text-green-400 transition-colors">
                      {ref.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <a href={`mailto:${ref.email}`} className="hover:text-blue-400 transition-colors break-all">
                      {ref.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Ananya Goswami. All rights reserved. • Data Scientist & AI Researcher
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ReferencesSection;
