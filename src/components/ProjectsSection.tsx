
import { Button } from '@/components/ui/button';
import GitHubProjects from './GitHubProjects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 right-1/2 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-default">
            GitHub Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up hover:text-gray-200 transition-colors duration-300 cursor-default" style={{ animationDelay: '0.2s' }}>
            Live projects and repositories from my GitHub profile
          </p>
          <div className="mt-8 flex justify-center space-x-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">50+</div>
              <div className="text-sm text-gray-400">Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">AI/ML</div>
              <div className="text-sm text-gray-400">Focus Areas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">Open Source</div>
              <div className="text-sm text-gray-400">Contributions</div>
            </div>
          </div>
        </div>

        <GitHubProjects />

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/5 border-white/20 text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-transparent transition-all duration-300 backdrop-blur-sm hover:scale-105 cursor-pointer"
            onClick={() => window.open('https://github.com/Ananyagoswami009', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
