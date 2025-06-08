import { Award, BookOpen, Code, Database, Users, MapPin, Cloud, ChartBar, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Data Analyst",
      description: "Google Cloud Data Analytics & Business Intelligence Professional"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Data Science Trainer",
      description: "Trained over 500+ data enthusiasts with proven track record"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "AI/ML Engineer",
      description: "Expert in developing models and AI-driven solutions"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Research Specialist",
      description: "Published researcher in AI and machine learning domains"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Computing Expert",
      description: "Experience with AWS, GCP, and Azure for scalable solutions"
    },
    {
      icon: <ChartBar className="w-6 h-6" />,
      title: "Data Visualization Expert",
      description: "Proficient in Power BI, Tableau, and Matplotlib for impactful data insights"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovative Problem Solver",
      description: "Skilled in applying machine learning to solve real-world challenges"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learner",
      description: "Passionate about staying updated with the latest AI and data science trends"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-default">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up hover:text-gray-700 transition-colors duration-300 cursor-default" style={{ animationDelay: '0.2s' }}>
            Certified Data Analyst and Data Science Trainer with expertise in AI, machine learning, 
            and cloud computing solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 hover:text-purple-600 transition-colors duration-300 cursor-default">My Journey</h3>
            <div className="space-y-4 text-gray-600">
              <p className="hover:text-gray-800 transition-colors duration-300 cursor-default">
                I am currently pursuing a Bachelor of Computer Applications (BCA) at Sandip University, Nashik, with a CGPA of 9.12, where I have gained extensive experience in machine learning, AI, and data analytics. Over the years, I have honed my skills as a machine learning engineer, working on a variety of AI-driven solutions to tackle complex problems and drive innovation.
              </p>
              <p className="hover:text-gray-800 transition-colors duration-300 cursor-default">
                My expertise spans across developing predictive models, leveraging cloud computing for scalable data solutions, and implementing advanced analytics to solve industry challenges. I have collaborated with several organizations, including Sharan Digitals, PwC Switzerland, and British Airways, where I have led data analysis projects, developed interactive dashboards, and provided actionable insights to optimize business operations
              </p>
              <p className="hover:text-gray-800 transition-colors duration-300 cursor-default">
                As a Data Science Trainer, I have successfully trained over 500 individuals in data analysis, machine learning, and AI, helping them transition into data-driven careers. This experience has also equipped me with a deep understanding of machine learning algorithms, NLP models, and cloud technologies, making me adept at delivering high-quality learning experiences.
              </p>
              <p>
                In addition to my work as a trainer, I am also an AI and Research Copyright Patent Expert, allowing me to bridge the gap between intellectual property and AI innovations. I have contributed to various research papers, such as those presented at IEEE and Springer Nature, focusing on AI-driven optimization in smart manufacturing and real-time decision-making systems.
              </p>
              <p>
                I am passionate about advancing the field of data science through continuous learning and knowledge sharing, aiming to contribute to the next generation of data scientists and researchers. My dedication to enhancing business processes through data-driven strategies and my passion for leveraging technology to solve real-world challenges define my career journey.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors duration-300 cursor-default">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Nashik, Maharashtra</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-purple-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">{highlight.title}</h4>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center animate-scale-in hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
          <h3 className="text-2xl font-bold mb-4">Professional Expertise</h3>
          <p className="text-lg opacity-90 mb-6">
            Specializing in machine learning, data analysis, and cloud platforms with 
            hands-on experience in training teams and developing AI solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-300 cursor-pointer">📍 Nashik, Maharashtra</span>
            <span className="bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-300 cursor-pointer">🎓 BCA Student</span>
            <span className="bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-300 cursor-pointer">📊 500+ Students Trained</span>
            <span className="bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-300 cursor-pointer">☁️ Cloud Specialist</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
