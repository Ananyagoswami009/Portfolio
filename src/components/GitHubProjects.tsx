
import { useQuery } from '@tanstack/react-query';
import { ExternalLink, Github, Star, GitFork, Brain, Zap, Mic, Mail, Video, Battery, Cog, Bot, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
}

interface FeaturedProject {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  category: string;
  icon: any;
  highlights: string[];
  image: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 'skincare-system',
    name: 'Personalized Skincare Recommendations System',
    description: 'An intelligent skincare recommendation engine that analyzes user lifestyle, environmental factors, and skin routines to provide personalized product suggestions. Built using advanced machine learning algorithms including Random Forest, XGBoost, and Neural Networks for accurate skin concern prediction.',
    technologies: ['Python', 'Machine Learning', 'Flask', 'Random Forest', 'XGBoost', 'Neural Networks'],
    category: 'AI/ML',
    icon: Brain,
    highlights: ['Predictive modeling for skin concerns', 'Real-time product recommendations', 'Flask web application interface'],
    image: 'https://www.mydermastore.in/blog/wp-content/uploads/Best-Skin-care-products-in-India.png'
  },
  {
    id: 'aura-emotion-detection',
    name: 'Aura: Real-Time Emotion Detection and Empathy Engine',
    description: 'A revolutionary AI-powered emotional intelligence system that provides real-time emotion detection and personalized mental health support. Bridges the gap between artificial and human interaction through advanced empathy algorithms and compassionate AI responses.',
    technologies: ['AI', 'Emotion Detection', 'Machine Learning', 'Real-time Processing', 'Computer Vision'],
    category: 'AI/Healthcare',
    icon: Zap,
    highlights: ['Real-time facial emotion recognition', 'Personalized mental health insights', 'AI-powered empathy responses'],
    image: 'https://so-development.org/wp-content/uploads/2024/03/iStock-925574662.webp'
  },
  {
    id: 'pronunciation-detector',
    name: 'PronounceRight : Automatic Pronunciation Mistake Detector',
    description: 'An advanced speech analysis system that helps language learners improve pronunciation accuracy. Utilizes cutting-edge speech-to-text models (Wav2Vec2, Whisper, DeepSpeech) with phoneme-level analysis to provide precise feedback and adaptive learning recommendations.',
    technologies: ['Speech-to-Text', 'Wav2Vec2', 'Whisper', 'DeepSpeech', 'Phoneme Analysis', 'NLP'],
    category: 'AI/Speech',
    icon: Mic,
    highlights: ['Multi-model speech recognition', 'Phoneme-level pronunciation analysis', 'Adaptive learning algorithms'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ydgXU_uNxRQI3HKBtovEjCpfHMvWbxgthw&s'
  },
  {
    id: 'spam-classifier',
    name: 'Spam Email Classifier using AI',
    description: 'A sophisticated email classification system powered by state-of-the-art NLP models including BERT and DistilBERT. Features seamless integration with Gmail and Outlook APIs for real-time spam detection, enhanced with ensemble learning techniques and explainable AI for transparency.',
    technologies: ['NLP', 'BERT', 'DistilBERT', 'Gmail API', 'Outlook API', 'Ensemble Learning'],
    category: 'AI/NLP',
    icon: Mail,
    highlights: ['BERT/DistilBERT transformer models', 'Real-time email API integration', 'Explainable AI for decision transparency'],
    image: 'https://scx2.b-cdn.net/gfx/news/hires/2022/a-new-model-to-automat.jpg'
  },
  {
    id: 'course-generation-platform',
    name: 'AI-Powered Course Generation Platform',
    description: 'An innovative educational technology platform that automates comprehensive course creation using Google Gemini API and YouTube API. Generates structured chapters, detailed summaries, interactive quizzes, and video transcripts with secure Google Sign-In authentication.',
    technologies: ['Gemini API', 'YouTube API', 'Google Sign-In', 'VPS Deployment', 'Educational Technology'],
    category: 'AI/Education',
    icon: Video,
    highlights: ['Automated course content generation', 'Interactive quiz creation', 'Scalable cloud deployment'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=200&fit=crop'
  },
  {
    id: 'smart-battery-charging',
    name: 'Universal IoT-Enabled Smart Battery Charging Optimization System',
    description: 'A comprehensive IoT solution that optimizes battery charging cycles for connected devices using machine learning and real-time sensor data analysis. Predicts battery degradation patterns and automatically adjusts charging parameters to maximize battery lifespan and device performance.',
    technologies: ['IoT', 'Machine Learning', 'Battery Optimization', 'Sensor Data', 'Predictive Analytics'],
    category: 'IoT/AI',
    icon: Battery,
    highlights: ['IoT sensor integration', 'Battery degradation prediction', 'Automated charging optimization'],
    image: 'https://bloompakistan.com/wp-content/uploads/2025/05/Apple-AI-Battery-111.webp'
  },
  {
    id: 'ai-driven-manufacturing',
    name: 'AI-Driven Smart Manufacturing System',
    description: 'A next-generation manufacturing optimization platform utilizing Generative Design Optimization and Multi-Task Learning. Optimizes material distribution, enables predictive quality control, detects manufacturing defects in real-time, and ensures consistent production efficiency.',
    technologies: ['Generative Design', 'Multi-Task Learning', 'Manufacturing AI', 'Quality Control', 'Computer Vision'],
    category: 'AI/Manufacturing',
    icon: Cog,
    highlights: ['Generative design optimization', 'Predictive quality assurance', 'Real-time manufacturing decisions'],
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQFloPgQ-9oFxw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697569088989?e=2147483647&v=beta&t=v1iU6Fntwx-Flf1bWMMc3pWcVewKMAbMmuqjqPY6GW8'
  },
  {
    id: 'additive-manufacturing-optimization',
    name: 'AI-Driven Optimization System for Additive Manufacturing',
    description: 'A specialized 3D printing optimization system that integrates parameter optimization, real-time defect detection, and design enhancement. Uses Random Forest Regressor for parameter tuning and YOLOv8 for computer vision-based quality control to improve production efficiency.',
    technologies: ['3D Printing', 'YOLOv8', 'Random Forest', 'Computer Vision', 'Process Optimization'],
    category: 'AI/3D Printing',
    icon: Bot,
    highlights: ['3D printing parameter optimization', 'YOLOv8 defect detection', 'Real-time quality monitoring'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFU8Tt07iZuMox9eU6Ry_Qrz9cvNqiYkO81A&s'
  },
  {
    id: 'hybrid-cnn-snn-rl',
    name: 'Hybrid CNN-SNN-RL Model for Material Characterization and Robotic Control',
    description: 'An advanced integrated system combining Convolutional Neural Networks, Spiking Neural Networks, and Reinforcement Learning for material analysis and robotic automation. Processes high-resolution material images, simulates realistic sensor data, and executes complex robotic tasks.',
    technologies: ['CNN', 'SNN', 'Reinforcement Learning', 'Computer Vision', 'Robotics', 'Material Science'],
    category: 'AI/Robotics',
    icon: Cpu,
    highlights: ['Hybrid neural network architecture', 'Advanced material characterization', 'Autonomous robotic control systems'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop'
  }
];

const fetchGitHubRepos = async (): Promise<GitHubRepo[]> => {
  const response = await fetch('https://api.github.com/users/Ananyagoswami009/repos?sort=updated&per_page=50');
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories');
  }
  const repos = await response.json();
  
  // Filter out forks and sort by stars/activity
  return repos
    .filter((repo: GitHubRepo) => !repo.name.includes('fork'))
    .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count || 
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
};

const getLanguageColor = (language: string | null): string => {
  const colors: { [key: string]: string } = {
    'JavaScript': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'TypeScript': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'Python': 'bg-green-500/20 text-green-300 border-green-500/30',
    'HTML': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    'CSS': 'bg-blue-400/20 text-blue-300 border-blue-400/30',
    'Java': 'bg-red-500/20 text-red-300 border-red-500/30',
    'C++': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'C': 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    'Jupyter Notebook': 'bg-orange-600/20 text-orange-300 border-orange-600/30',
  };
  return colors[language || ''] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
};

const getCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    'AI/ML': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'AI/Healthcare': 'bg-green-500/20 text-green-300 border-green-500/30',
    'AI/Speech': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'AI/NLP': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'AI/Education': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    'IoT/AI': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    'AI/Manufacturing': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    'AI/3D Printing': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    'AI/Robotics': 'bg-red-500/20 text-red-300 border-red-500/30',
  };
  return colors[category] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
};

const getRepoImage = (repoName: string, language: string | null): string => {
  // Map specific repos or languages to appropriate images
  const imageMap: { [key: string]: string } = {
    'ai': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop',
    'machine-learning': 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop',
    'web': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop',
    'mobile': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop',
    'data': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
    'javascript': 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=200&fit=crop',
    'python': 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=200&fit=crop',
    'java': 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=200&fit=crop',
    'html': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=200&fit=crop',
    'css': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop'
  };
  
  // Check if repo name contains keywords
  const name = repoName.toLowerCase();
  if (name.includes('ai') || name.includes('ml') || name.includes('neural') || name.includes('deep')) {
    return imageMap['ai'];
  }
  if (name.includes('web') || name.includes('site') || name.includes('portfolio')) {
    return imageMap['web'];
  }
  if (name.includes('mobile') || name.includes('app')) {
    return imageMap['mobile'];
  }
  if (name.includes('data') || name.includes('analysis') || name.includes('visualization')) {
    return imageMap['data'];
  }
  
  // Fallback to language-based images
  if (language) {
    return imageMap[language.toLowerCase()] || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop';
  }
  
  return 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop';
};

const generateRepoDescription = (repo: GitHubRepo): string => {
  if (repo.description) return repo.description;
  
  // Generate description based on repo name and language
  const name = repo.name.toLowerCase();
  const language = repo.language || 'Code';
  
  if (name.includes('ai') || name.includes('ml') || name.includes('neural')) {
    return `An AI/Machine Learning project built with ${language}, focusing on intelligent algorithms and data processing.`;
  }
  if (name.includes('web') || name.includes('site') || name.includes('portfolio')) {
    return `A web development project showcasing modern ${language} technologies and responsive design principles.`;
  }
  if (name.includes('api') || name.includes('backend') || name.includes('server')) {
    return `A robust backend API service developed using ${language} with focus on scalability and performance.`;
  }
  if (name.includes('mobile') || name.includes('app')) {
    return `A mobile application project leveraging ${language} for cross-platform development and user experience.`;
  }
  if (name.includes('data') || name.includes('analysis')) {
    return `A data analysis and visualization project using ${language} for insights and analytics.`;
  }
  if (name.includes('game') || name.includes('engine')) {
    return `An interactive game or engine project developed in ${language} with focus on performance and user engagement.`;
  }
  
  return `A ${language} project showcasing programming skills and software development best practices.`;
};

const GitHubProjects = () => {
  const { data: repos, isLoading, error } = useQuery({
    queryKey: ['github-repos'],
    queryFn: fetchGitHubRepos,
  });

  if (isLoading) {
    return (
      <div className="space-y-12">
        {/* Featured Projects Loading */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Featured AI/ML Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 animate-pulse">
                <CardHeader>
                  <div className="h-6 bg-white/10 rounded mb-2"></div>
                  <div className="h-4 bg-white/5 rounded"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-20 bg-white/5 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* GitHub Projects Loading */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">GitHub Repositories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 animate-pulse">
                <CardHeader>
                  <div className="h-6 bg-white/10 rounded mb-2"></div>
                  <div className="h-4 bg-white/5 rounded"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-20 bg-white/5 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-12">
        {/* Featured Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center animate-fade-in-up">
            Featured AI/ML Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={project.id}
                  className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge 
                        variant="outline" 
                        className={getCategoryColor(project.category)}
                      >
                        <IconComponent size={14} className="mr-1" />
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-sm line-clamp-4 group-hover:text-gray-200 transition-colors duration-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="text-xs bg-blue-900/30 text-blue-300 border-blue-500/30 hover:bg-blue-800/40 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge 
                            variant="outline"
                            className="text-xs bg-gray-900/30 text-gray-300 border-gray-500/30"
                          >
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="space-y-1">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center gap-2 text-xs text-gray-400">
                            <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* GitHub Error State */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">GitHub Repositories</h3>
          <div className="text-center py-12">
            <p className="text-red-400 mb-4">Failed to load GitHub repositories</p>
            <Button 
              variant="outline" 
              onClick={() => window.open('https://github.com/Ananyagoswami009', '_blank')}
              className="bg-white/5 border-white/20 text-white hover:bg-white/10"
            >
              Visit GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Featured Projects Section */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6 text-center animate-fade-in-up">
          Featured AI/ML Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.id}
                className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant="outline" 
                      className={getCategoryColor(project.category)}
                    >
                      <IconComponent size={14} className="mr-1" />
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm line-clamp-4 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="text-xs bg-blue-900/30 text-blue-300 border-blue-500/30 hover:bg-blue-800/40 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge 
                          variant="outline"
                          className="text-xs bg-gray-900/30 text-gray-300 border-gray-500/30"
                        >
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center gap-2 text-xs text-gray-400">
                          <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* GitHub Repositories Section */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6 text-center animate-fade-in-up">
          GitHub Repositories
        </h3>
        {!repos || repos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">No repositories found</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <Card 
                key={repo.id}
                className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up overflow-hidden cursor-pointer"
                style={{ animationDelay: `${(featuredProjects.length + index) * 0.1}s` }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={getRepoImage(repo.name, repo.language)} 
                    alt={repo.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant="outline" 
                      className={repo.language ? getLanguageColor(repo.language) : 'bg-gray-500/20 text-gray-300 border-gray-500/30'}
                    >
                      {repo.language || 'Text'}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      {repo.stargazers_count > 0 && (
                        <div className="flex items-center gap-1">
                          <Star size={14} />
                          {repo.stargazers_count}
                        </div>
                      )}
                      {repo.forks_count > 0 && (
                        <div className="flex items-center gap-1">
                          <GitFork size={14} />
                          {repo.forks_count}
                        </div>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                    {repo.name.replace(/-/g, ' ').replace(/_/g, ' ').split(' ').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                    {generateRepoDescription(repo)}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {repo.topics.slice(0, 4).map((topic, topicIndex) => (
                        <Badge 
                          key={topicIndex}
                          variant="outline"
                          className="text-xs bg-purple-900/30 text-purple-300 border-purple-500/30 hover:bg-purple-800/40 transition-colors duration-300 hover:scale-105"
                        >
                          {topic}
                        </Badge>
                      ))}
                      {repo.topics.length > 4 && (
                        <Badge 
                          variant="outline"
                          className="text-xs bg-gray-900/30 text-gray-300 border-gray-500/30"
                        >
                          +{repo.topics.length - 4}
                        </Badge>
                      )}
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open(repo.html_url, '_blank')}
                  >
                    <Github size={16} />
                    Code
                  </Button>
                  {repo.homepage && (
                    <Button 
                      size="sm" 
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                      onClick={() => window.open(repo.homepage, '_blank')}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubProjects;
