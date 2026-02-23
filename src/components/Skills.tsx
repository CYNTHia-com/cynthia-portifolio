import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Palette, BarChart3, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Development",
      skills: [
        { name: "React/TypeScript"},
        { name: "Node.js"},
        { name: "Python"},
        { name: "SQL/NoSQL"}
      ]
    },
    {
      icon: Palette,
      title: "Design",
      skills: [
        { name: "UI/UX Design"},
        { name: "Figma"},
      ]
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: [
        { name: "Project Management"},
        { name: "Team Leadership"},
        { name: "Client Communication" },
        { name: "Problem Solving"}
      ]
    }
  ];

  const tools = [
    "Figma", "VS Code", "Git", "Postman", "MongoDB", "PostgreSQL","mysql"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set built through years of hands-on experience and 
            continuous learning in the ever-evolving tech landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-blue transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <span 
                key={index}
                className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;