import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Cynthia</h3>
            <p className="text-background/80">
              Creative professional passionate about crafting exceptional 
              digital experiences that make a difference.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['About', 'Portfolio', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-background transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect</h4>
            <div className="flex space-x-4">
              <Button 
                variant="ghost"  
                className="text-background/80 hover:text-background hover:bg-background/10"
              >
                <Github className="https://github.com/CYNTHia-com"/>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-background/80 hover:text-background hover:bg-background/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2025 Cynthia. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-background/60 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;