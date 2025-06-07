
import { Briefcase, Calendar, MapPin, TrendingUp, Database, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const WorkExperienceSection = () => {
  const experiences = [
    {
      title: "Data Science Trainer",
      company: "Sharan Digitals, Nashik",
      type: "Internship & Fulltime",
      duration: "April 2024 - Present",
      description: "Data Science Trainer at Sharan Digitals, delivering industry-focused training programs in data analysis, machine learning, and AI. Responsible for mentoring learners, developing course content, and ensuring high-quality learning experiences.",
      achievements: [
        "Delivered industry-focused training programs",
        "Mentored learners in data analysis and machine learning",
        "Developed comprehensive course content",
        "Ensured high-quality learning experiences"
      ],
      icon: TrendingUp,
      color: "bg-purple-900/30 text-purple-300 border-purple-500/30"
    },
    {
      title: "Data Analyst",
      company: "Anishk Sustainable Development Foundation",
      type: "Internship & Fulltime",
      duration: "Jan 2023 - April 2024",
      description: "Transformed large datasets using SQL, Excel, and Python (Pandas, NumPy) to drive business decisions. Developed interactive Power BI dashboards for KPI tracking. Conducted EDA with micove. Automated reporting pipelines, cutting manual work by 30%. Delivered reports across teams and collaborated with Sales, Marketing, and Product on data-driven strategies.",
      achievements: [
        "Applied statistical analysis and predictive models (regression, clustering)",
        "Optimized customer segmentation and retention",
        "Ensured data quality through validation and QA checks",
        "Cut manual work by 30% through automation",
        "Delivered actionable insights through clear communication"
      ],
      icon: Database,
      color: "bg-blue-900/30 text-blue-300 border-blue-500/30"
    },
    {
      title: "Power BI Intern",
      company: "PwC Switzerland",
      type: "Internship",
      duration: "September 2024",
      description: "Developed dashboards for KPI visualization and conducted HR data analysis to address gender imbalance. Delivered actionable insights through clear communication.",
      achievements: [
        "Developed comprehensive KPI dashboards",
        "Conducted HR data analysis for gender imbalance",
        "Delivered actionable insights through visualization",
        "Enhanced data communication skills"
      ],
      icon: BarChart3,
      color: "bg-green-900/30 text-green-300 border-green-500/30"
    },
    {
      title: "Data Science Intern",
      company: "British Airways",
      type: "Internship",
      duration: "October 2024",
      description: "Scraped and analyzed customer review data, built predictive models to understand buying behavior, and improved customer experience through data-driven insights.",
      achievements: [
        "Scraped and analyzed customer review data",
        "Built predictive models for buying behavior",
        "Improved customer experience through insights",
        "Enhanced data scraping and analysis skills"
      ],
      icon: TrendingUp,
      color: "bg-orange-900/30 text-orange-300 border-orange-500/30"
    },
    {
      title: "Data Analyst Intern",
      company: "Accenture North America",
      type: "Internship",
      duration: "July 2024",
      description: "Analyzed 7 datasets for Social Buzz, identifying key trends and supporting their IPO readiness. Created visualizations and presentations to communicate insights effectively.",
      achievements: [
        "Analyzed 7 datasets for Social Buzz",
        "Identified key trends supporting IPO readiness",
        "Created comprehensive visualizations",
        "Communicated insights effectively to stakeholders"
      ],
      icon: BarChart3,
      color: "bg-pink-900/30 text-pink-300 border-pink-500/30"
    },
    {
      title: "Data Science Intern",
      company: "Cognifyz Technologies, Nagpur",
      type: "Internship",
      duration: "Nov 2023 - Dec 2023",
      description: "Built a Power BI dashboard to analyze traffic safety and developed machine learning models with high predictive accuracy for data-driven decision-making.",
      achievements: [
        "Built Power BI dashboard for traffic safety analysis",
        "Developed ML models with high predictive accuracy",
        "Enabled data-driven decision-making",
        "Enhanced dashboard development skills"
      ],
      icon: Database,
      color: "bg-indigo-900/30 text-indigo-300 border-indigo-500/30"
    },
    {
      title: "Machine Learning Intern",
      company: "Cognifyz Technologies, Nagpur",
      type: "Internship",
      duration: "Jan 2024 - Feb 2024",
      description: "Built models to predict restaurant ratings, implemented a recommendation system, and analyzed restaurant locations for insights.",
      achievements: [
        "Built predictive models for restaurant ratings",
        "Implemented recommendation system",
        "Analyzed restaurant locations for insights",
        "Enhanced machine learning skills"
      ],
      icon: TrendingUp,
      color: "bg-red-900/30 text-red-300 border-red-500/30"
    },
    {
      title: "Data Science Intern",
      company: "Codtech IT Solutions, Nashik",
      type: "Internship",
      duration: "Oct 2023 - Nov 2023",
      description: "Analyzed restaurant data using Python, developed predictive models to forecast performance, and provided recommendations to improve operational efficiency.",
      achievements: [
        "Analyzed restaurant data using Python",
        "Developed predictive models for performance forecasting",
        "Provided operational efficiency recommendations",
        "Enhanced Python programming skills"
      ],
      icon: Database,
      color: "bg-yellow-900/30 text-yellow-300 border-yellow-500/30"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Work Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Professional journey in data science, analytics, and machine learning across diverse industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const ExpIcon = exp.icon;
            return (
              <Card 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                          <ExpIcon className="w-5 h-5 text-purple-400" />
                        </div>
                        <Badge className={exp.color}>
                          {exp.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors mb-2">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-purple-300 font-medium mb-3 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-purple-400 mt-1.5">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600/80 to-blue-600/80 backdrop-blur-md rounded-2xl p-8 text-white text-center animate-scale-in border border-white/20">
          <h3 className="text-2xl font-bold mb-6">Professional Impact</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="group">
              <div className="text-3xl font-bold text-purple-300 mb-2 group-hover:scale-110 transition-transform">8+</div>
              <div className="text-sm opacity-90">Internships Completed</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-blue-300 mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-sm opacity-90">Students Trained</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-green-300 mb-2 group-hover:scale-110 transition-transform">30%</div>
              <div className="text-sm opacity-90">Process Automation</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-yellow-300 mb-2 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-sm opacity-90">Datasets Analyzed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
