import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with seamless user experience and robust backend functionality.",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo, color palette, and brand guidelines.",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      tags: ["Branding", "Logo Design", "Guidelines"]
    },
    {
      title: "Mobile App UI/UX",
      description: "Intuitive mobile application design focused on user engagement and accessibility.",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["UI/UX", "Mobile", "Prototyping"]
    },
    {
      title: "Data Dashboard",
      description: "Interactive dashboard for data visualization and business intelligence.",
      category: "Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Dashboard", "Analytics", "D3.js"]
    },
    {
      title: "Marketing Campaign",
      description: "Multi-channel marketing campaign that increased brand awareness by 150%.",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Campaign", "Strategy", "Analytics"]
    },
    {
      title: "Website Redesign",
      description: "Complete website overhaul focusing on modern design and improved performance.",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tags: ["Redesign", "Performance", "SEO"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating 
            exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-elegant hover:shadow-blue transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="secondary">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;