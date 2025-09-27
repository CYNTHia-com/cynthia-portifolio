import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import heroImage from '@/assets/cynthia-hero.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-section-gradient px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-text-gradient bg-clip-text text-transparent">
                Cynthia
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                Creative Professional
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                Passionate about creating beautiful, functional designs that solve real problems 
                and deliver exceptional user experiences.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-hero-gradient hover:shadow-blue transition-all duration-300"
                onClick={() => scrollToSection('portfolio')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex space-x-6">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elegant">
                <img 
                  src={heroImage} 
                  alt="Cynthia - Creative Professional" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-hero-gradient rounded-full opacity-20 blur-xl -z-10"></div>
            </div>  
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;