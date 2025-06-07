
import { BookOpen, Calendar, Users, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PublicationsSection = () => {
  const publications = [
    {
      title: "Accident Severity Unveiled: How Weather, Roads, and Time Conspire in Machine Learning Predictions",
      conference: "1st International Conference on Augmented Reality, Intelligent Systems, and Industrial Automation",
      venue: "Manipal University, Udupi",
      publisher: "IEEE",
      description: "Presented comprehensive research on accident severity prediction using machine learning algorithms that analyze weather conditions, road infrastructure, and temporal factors. The study reveals critical insights into how environmental and temporal variables contribute to traffic accident severity.",
      type: "Conference Paper",
      year: "2024",
      authors: ["Ananya Goswami", "Research Team"],
      keywords: ["Machine Learning", "Accident Prediction", "Weather Analysis", "Road Safety", "IEEE"],
      status: "Published"
    },
    {
      title: "AI-Driven Design and Smart Manufacturing: Harnessing Machine Learning for Advanced Optimisation, Precision Engineering, and Enhanced Quality Assurance",
      conference: "International Conference AMLURAIM-SERIES: 1",
      venue: "NIT Rourkela",
      publisher: "Springer Nature",
      description: "Explored the integration of artificial intelligence in manufacturing processes, focusing on machine learning applications for optimization, precision engineering, and quality assurance. The research demonstrates significant improvements in manufacturing efficiency and product quality through AI-driven approaches.",
      type: "Conference Paper",
      year: "2024",
      authors: ["Ananya Goswami", "Co-authors"],
      keywords: ["AI-Driven Design", "Smart Manufacturing", "Machine Learning", "Optimization", "Quality Assurance"],
      status: "Published"
    },
    {
      title: "Revolutionising Additive Manufacturing: AI-Driven Optimisation, Intelligent Design, and Real-Time Defect Detection through Advanced Machine Learning Techniques",
      conference: "International Conference AMLURAIM, SERIES: 1",
      venue: "NIT Rourkela",
      publisher: "Springer Nature",
      description: "Presented innovative approaches to additive manufacturing using AI-driven optimization techniques. The research focuses on intelligent design methodologies and real-time defect detection systems that significantly enhance the reliability and efficiency of 3D printing processes.",
      type: "Conference Paper",
      year: "2024",
      authors: ["Ananya Goswami", "Research Team"],
      keywords: ["Additive Manufacturing", "AI Optimization", "Defect Detection", "3D Printing", "Real-time Analysis"],
      status: "Published"
    },
    {
      title: "AI-Driven Neuromorphic Hardware for Edge-AI in Robotic Systems: Revolutionising Intelligent Material Characterisation and Real-Time Control",
      conference: "International Conference on (RIDMSEF)",
      venue: "NIT Rourkela",
      publisher: "Springer Nature",
      description: "Investigated the application of neuromorphic hardware in robotic systems for edge computing. The research demonstrates how AI-driven neuromorphic processors can revolutionize material characterization and enable real-time control in robotic applications, opening new possibilities for intelligent automation.",
      type: "Conference Paper",
      year: "2024",
      authors: ["Ananya Goswami", "Co-authors"],
      keywords: ["Neuromorphic Hardware", "Edge-AI", "Robotics", "Material Characterisation", "Real-time Control"],
      status: "Published"
    },
    {
      title: "Universal IoT-Enabled Smart Battery Charging Optimisation: Leveraging AI, Automata Theory, and Real-Time Data for Enhanced Lifespan and Efficiency",
      conference: "First International Conference on Engineering and Technology for a Sustainable Future",
      publisher: "Scopus",
      description: "Developed a comprehensive IoT-enabled smart battery charging system that leverages artificial intelligence and automata theory. The research presents novel optimization algorithms that significantly enhance battery lifespan and charging efficiency through real-time data analysis and intelligent decision-making.",
      type: "Conference Paper",
      year: "2024",
      authors: ["Ananya Goswami", "Research Team"],
      keywords: ["IoT", "Smart Battery", "AI Optimization", "Automata Theory", "Energy Efficiency"],
      status: "Published"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Publications & Research
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Contributing to the advancement of AI, machine learning, and smart systems through cutting-edge research and publications
          </p>
          <div className="mt-8 flex justify-center space-x-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">5+</div>
              <div className="text-sm text-gray-400">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">4</div>
              <div className="text-sm text-gray-400">Conferences</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">3</div>
              <div className="text-sm text-gray-400">Publishers</div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {publications.map((publication, index) => (
            <Card 
              key={index}
              className="hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] animate-fade-in-up bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                        <BookOpen className="w-5 h-5 text-purple-400" />
                      </div>
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-400/30">
                        {publication.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {publication.year}
                      </div>
                      <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                        {publication.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {publication.title}
                    </CardTitle>
                    <CardDescription className="text-purple-300 font-medium mb-2">
                      {publication.conference}
                    </CardDescription>
                    {publication.venue && (
                      <div className="text-sm text-gray-400 mb-2">
                        📍 {publication.venue}
                      </div>
                    )}
                    <div className="text-sm text-blue-300 mb-3 flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Published by {publication.publisher}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {publication.description}
                </p>
                
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">
                    {publication.authors.join(", ")}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {publication.keywords.map((keyword, keywordIndex) => (
                    <Badge 
                      key={keywordIndex}
                      variant="outline"
                      className="text-xs bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-400/30 text-purple-300 hover:bg-purple-500/20 transition-colors"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600/80 to-blue-600/80 backdrop-blur-md rounded-2xl p-8 text-white text-center animate-scale-in border border-white/20">
          <h3 className="text-2xl font-bold mb-6">Research Impact & Interests</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🤖</div>
              <h4 className="font-semibold mb-2 text-purple-200">Artificial Intelligence</h4>
              <p className="text-sm opacity-90">Machine Learning, Deep Learning, AI Ethics, Neuromorphic Computing</p>
            </div>
            <div className="group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🏭</div>
              <h4 className="font-semibold mb-2 text-blue-200">Smart Manufacturing</h4>
              <p className="text-sm opacity-90">Additive Manufacturing, Quality Assurance, Process Optimization</p>
            </div>
            <div className="group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🚗</div>
              <h4 className="font-semibold mb-2 text-green-200">Safety Systems</h4>
              <p className="text-sm opacity-90">Accident Prediction, Road Safety, Weather Analysis</p>
            </div>
            <div className="group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🔋</div>
              <h4 className="font-semibold mb-2 text-yellow-200">IoT & Energy</h4>
              <p className="text-sm opacity-90">Smart Systems, Battery Optimization, Edge Computing</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-sm opacity-80">
              Published across prestigious venues including IEEE, Springer Nature, and Scopus-indexed conferences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
