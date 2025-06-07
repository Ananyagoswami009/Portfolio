
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Continuous floating particles */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-purple-300 rounded-full animate-bounce opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-40" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-green-300 rounded-full animate-pulse opacity-50" style={{ animationDelay: '5s' }}></div>
        <div className="absolute bottom-1/2 left-1/2 w-1 h-1 bg-yellow-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
              <span className="block">Ananya</span>
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Goswami
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in-up hover:text-purple-300 transition-colors duration-300 cursor-default" style={{ animationDelay: '0.2s' }}>
              Certified Data Analyst & Data Science Trainer
            </p>
            
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto lg:mx-0 animate-fade-in-up hover:text-gray-300 transition-colors duration-300 cursor-default" style={{ animationDelay: '0.4s' }}>
               Certified Data Analyst and Data Science Trainer with a proven track record of training over 500+ data enthusiasts.Skilled machine learning engineer, experienced in developing models and implementing AI-driven solutions. As an AI and Research Copyright Patent Expert, I understand the intersection of intellectual property and AI. Expertise in cloud computing, enabling efficient deployment of scalable data solutions. Passionate about leveraging advanced analytics to solve complex problems and drive innovation. Committed to continuous learning and sharing knowledge to empower the next generation of data scientists
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button 
                onClick={scrollToAbout}
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 cursor-pointer"
              >
                Explore My Work
              </Button>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/AnanyaGoswami" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg cursor-pointer hover:rotate-12"
                >
                  <Github size={24} className="text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ananyagoswami7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-blue-500/30 transition-all duration-300 transform hover:scale-110 shadow-lg cursor-pointer hover:rotate-12"
                >
                  <Linkedin size={24} className="text-white" />
                </a>
                <a 
                  href="mailto:goswamiannu75@gmail.com"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-purple-500/30 transition-all duration-300 transform hover:scale-110 shadow-lg cursor-pointer hover:rotate-12"
                >
                  <Mail size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer hover:border-purple-400/50">
                <img 
                  src="/lovable-uploads/f2869315-1cb3-45f8-bea1-700807a8b4a7.png" 
                  alt="Ananya Goswami" 
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Enhanced floating decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-blue-400 rounded-full animate-pulse opacity-70"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-400 rounded-full animate-ping opacity-50"></div>
              <div className="absolute -top-2 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute bottom-1/4 -left-6 w-5 h-5 bg-yellow-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2.5s' }}></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform duration-300 cursor-pointer">
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
