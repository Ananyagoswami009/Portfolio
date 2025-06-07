import { Badge } from '@/components/ui/badge';
import { 
  Database, 
  Brain, 
  Cloud, 
  Code, 
  Workflow, 
  BarChart3,
  ChevronRight,
  Cpu,
  GitBranch,
  Server,
  LineChart,
  TrendingUp,
  Settings,
  Zap,
  Globe,
  Monitor,
  Shield
} from 'lucide-react';
import { title } from 'process';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Data Analysis & Visualization",
      icon: BarChart3,
      skills: [
        { name: "Python", icon: Code },
        { name: "R", icon: TrendingUp },
        { name: "SQL", icon: Database },
        { name: "Power BI", icon: Monitor },
        { name: "Tableau", icon: LineChart },
        { name: "Matplotlib", icon: BarChart3 },
        { name: "Seaborn", icon: LineChart }
      ],
      color: "bg-blue-900/30 text-blue-300 border-blue-500/30"
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: [
        { name: "Scikit-Learn", icon: Brain },
        { name: "TensorFlow", icon: Cpu },
        { name: "Keras", icon: Brain },
        { name: "PyTorch", icon: Zap },
        { name: "Pandas", icon: Database },
        { name: "NumPy", icon: Code },
        { name: "Spark SQL", icon: Database },
        { name: "MLOps", icon: Workflow }
      ],
      color: "bg-purple-900/30 text-purple-300 border-purple-500/30"
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: [
        { name: "AWS", icon: Cloud },
        { name: "GCP", icon: Globe },
        { name: "Azure", icon: Cloud },
        { name: "Docker", icon: Server },
        { name: "Kubernetes", icon: Settings },
        { name: "Git/GitHub", icon: GitBranch }
      ],
      color: "bg-green-900/30 text-green-300 border-green-500/30"
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", icon: Code },
        { name: "R", icon: TrendingUp },
        { name: "Java", icon: Code },
        { name: "SQL", icon: Database },
        { name: "HTML", icon: Globe },
        { name: "CSS", icon: Monitor },
        { name: "JavaScript", icon: Code }
      ],
      color: "bg-orange-900/30 text-orange-300 border-orange-500/30"
    },
    {
      title: "Data Engineering & ETL",
      icon: Workflow,
      skills: [
        { name: "Kafka", icon: Workflow },
        { name: "Elasticsearch", icon: Database },
        { name: "AWS Redshift", icon: Cloud },
        { name: "Azure Data Factory", icon: Settings },
        { name: "ETL Tools", icon: Workflow }
      ],
      color: "bg-pink-900/30 text-pink-300 border-pink-500/30"
    },
    {
      title: "Business Intelligence",
      icon: TrendingUp,
      skills: [
        { name: "Agile/Scrum", icon: Workflow },
        { name: "Statistical Modeling", icon: BarChart3 },
        { name: "Predictive Analytics", icon: TrendingUp },
        { name: "Data Mining", icon: Database }
      ],
      color: "bg-indigo-900/30 text-indigo-300 border-indigo-500/30"
    },
    {
      title: "DevOps & Infrastructure",
      icon: Server,
      skills: [
        { name: "CI/CD", icon: Settings },
        { name: "Infrastructure as Code", icon: Code },
        { name: "Monitoring & Logging", icon: Monitor },
        { name: "Network Security", icon: Shield }
      ],
      color: "bg-gray-900/30 text-gray-300 border-gray-500/30"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "HTML", icon: Globe },
        { name: "CSS", icon: Monitor },
        { name: "JavaScript", icon: Code },
        { name: "React", icon: Code },
        { name: "Node.js", icon: Server }
      ],
      color: "bg-teal-900/30 text-teal-300 border-teal-500/30"
    },
    {
      title: "Data Governance & Ethics",
      icon: Settings,
      skills: [
        { name: "Data Privacy", icon: Shield },
        { name: "Data Quality", icon: BarChart3 },
        { name: "Compliance", icon: Settings },
        { name: "Ethical AI", icon: Brain }
      ],
      color: "bg-yellow-900/30 text-yellow-300 border-yellow-500/30"
    },
    {
      title: "Big Data Technologies",
      icon: Database,
      skills: [
        { name: "Hadoop", icon: Database },
        { name: "Spark", icon: Code },
        { name: "Kafka", icon: Workflow },
        { name: "Flink", icon: Code }
      ],
      color: "bg-red-900/30 text-red-300 border-red-500/30"
    },
    {
      title: "Emerging Technologies",
      icon: Code,
      skills: [
        { name: "Blockchain", icon: Code },
        { name: "Quantum Computing", icon: Code },
        { name: "Augmented Reality", icon: Code },
        { name: "Virtual Reality", icon: Code }
      ],
      color: "bg-red-900/30 text-red-300 border-red-500/30"
    },
    {
      title: "Statistical Analysis & Modeling",
      icon: BarChart3,
      skills: [
        { name: "Hypothesis Testing", icon: BarChart3 },
        { name: "Regression Analysis", icon: BarChart3 },
        { name: "Time Series Analysis", icon: BarChart3 },
        { name: "A/B Testing", icon: BarChart3 }
      ],
      color: "bg-red-900/30 text-red-300 border-red-500/30"
    },
    {
      title: "Version Control & Collaboration",
      icon: GitBranch,
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "GitHub", icon: GitBranch },
        { name: "GitLab", icon: GitBranch },
        { name: "Bitbucket", icon: GitBranch }
      ],
      color: "bg-gray-900/30 text-gray-300 border-gray-500/30"
    },
    {
      title: "API Development & Integration",
      icon: Code,
      skills: [
        { name: "RESTful APIs", icon: Code },
        { name: "GraphQL", icon: Code },
        { name: "API Design", icon: Code },
        { name: "API Documentation", icon: Code }
      ],
      color: "bg-purple-900/30 text-purple-300 border-purple-500/30"
    },
    {
      title: "Data Warehousing & Storage",
      icon: Database,
      skills: [
        { name: "AWS S3", icon: Cloud },
        { name: "Google BigQuery", icon: Database },
        { name: "Snowflake", icon: Database },
        { name: "Azure Blob Storage", icon: Cloud }
      ],
      color: "bg-blue-900/30 text-blue-300 border-blue-500/30"
    },
    {
      title: "Cloud Infrastructure & DevOps",
      icon: Cloud,
      skills: [
        { name: "Terraform", icon: Settings },
        { name: "Ansible", icon: Settings },
        { name: "Jenkins", icon: Settings },
        { name: "Docker Swarm", icon: Server }
      ],
      color: "bg-green-900/30 text-green-300 border-green-500/30"
    },
    {
      title: "Natural Language Processing (NLP)",
      icon: Brain,
      skills: [
        { name: "Text Mining", icon: Brain },
        { name: "Sentiment Analysis", icon: Brain },
        { name: "Chatbot Development", icon: Brain },
        { name: "Speech Recognition", icon: Brain }
      ],
      color: "bg-indigo-900/30 text-indigo-300 border-indigo-500/30"
    },
    {
      title: "Machine Learning Operations (MLOps)",
      icon: Brain,
      skills: [
        { name: "Model Deployment", icon: Brain },
        { name: "Continuous Integration", icon: Brain },
        { name: "Monitoring & Logging", icon: Brain },
        { name: "Data Versioning", icon: Brain }
      ],
      color: "bg-indigo-900/30 text-indigo-300 border-indigo-500/30"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900 relative overflow-hidden">
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-default">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up hover:text-gray-200 transition-colors duration-300 cursor-default" style={{ animationDelay: '0.2s' }}>
            Comprehensive expertise in data science, machine learning, and cloud technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div 
                key={categoryIndex}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up group shadow-xl cursor-pointer"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <CategoryIcon className="h-6 w-6 text-white group-hover:text-purple-300 transition-colors duration-300" />
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <Badge 
                        key={skillIndex}
                        className={`${category.color} hover:scale-110 hover:brightness-125 transition-all duration-300 cursor-pointer border backdrop-blur-sm hover:rotate-1 hover:shadow-lg flex items-center gap-1.5`}
                      >
                        <SkillIcon className="h-3 w-3" />
                        {skill.name}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="animate-scale-in bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
            <p className="text-gray-300">Students Trained</p>
          </div>
          <div className="animate-scale-in bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div className="animate-scale-in bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105" style={{ animationDelay: '0.8s' }}>
            <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
            <p className="text-gray-300">Certifications</p>
          </div>
          <div className="animate-scale-in bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold text-orange-400 mb-2">3+</div>
            <p className="text-gray-300">Cloud Platforms</p>
          </div>
          <div className="animate-scale-in bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105" style={{ animationDelay: '1.2s' }}>
            <div className="text-3xl font-bold text-red-400 mb-2">5+</div>
            <p className="text-gray-300">Databases</p>
          </div>
          <div className="animate-scale-in bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105" style={{ animationDelay: '1.4s' }}>
            <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
            <p className="text-gray-300">Programming Languages</p>
          </div>
          <div className="animate-scale-in bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105" style={{ animationDelay: '1.6s' }}>
            <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
            <p className="text-gray-300">Tools & Frameworks</p>
          </div>
          <div className="animate-scale-in bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold text-orange-400 mb-2">5+</div>
            <p className="text-gray-300">Research Papers</p>
          </div>
          <div className="animate-scale-in bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105" style={{ animationDelay: '1.4s' }}>
    <div className="text-3xl font-bold text-orange-400 mb-2">10+</div>
    <p className="text-gray-300">Data Visualization Projects</p>
  </div>
  <div className="animate-scale-in bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105" style={{ animationDelay: '1.6s' }}>
    <div className="text-3xl font-bold text-indigo-400 mb-2">12+</div>
    <p className="text-gray-300">Technologies Mastered</p>
  </div>
  <div className="animate-scale-in bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105" style={{ animationDelay: '1.8s' }}>
    <div className="text-3xl font-bold text-teal-400 mb-2">3+</div>
    <p className="text-gray-300">AI-Based Solutions Developed</p>
  </div>
  <div className="animate-scale-in bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105" style={{ animationDelay: '1s' }}>
    <div className="text-3xl font-bold text-green-400 mb-2">7+</div>
    <p className="text-gray-300">Machine Learning Models Developed</p>
  </div>
  <div className="animate-scale-in bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105" style={{ animationDelay: '0.4s' }}>
    <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
    <p className="text-gray-300">Hackathons Participated</p>
  </div>
  <div className="animate-scale-in bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105" style={{ animationDelay: '1.8s' }}>
    <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
    <p className="text-gray-300">International Conferences Attended</p>
  </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
