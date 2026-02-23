import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "I believe the best work happens when we work together, combining different perspectives and expertise."
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every project I take on has a clear purpose and measurable impact on users and business goals."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "I'm always exploring new technologies and methodologies to solve problems in creative ways."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate creative professional with a keen eye for detail and a love for crafting 
            experiences that make a difference. With years of experience in the industry, I bring both 
            technical expertise and creative vision to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground">
              My journey started with a curiosity about how things work and a desire to create 
              something meaningful. Over the years, I've had the privilege of working with diverse 
              teams and clients, each project teaching me something new.
            </p>
            <p className="text-muted-foreground">
              I'm driven by the challenge of turning complex problems into simple, elegant solutions 
              that users love. Whether it's through design, development, or strategy, I aim to create 
              work that not only looks great but performs exceptionally.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-section-gradient p-6 rounded-lg shadow-elegant">
              <h4 className="font-semibold mb-2">Experience</h4>
              <p className="text-muted-foreground">1+ years in creative industries</p>
            </div>
            <div className="bg-section-gradient p-6 rounded-lg shadow-elegant">
              <h4 className="font-semibold mb-2">Projects Completed</h4>
              <p className="text-muted-foreground">20+ successful deliveries</p>
            </div>
            <div className="bg-section-gradient p-6 rounded-lg shadow-elegant">
              <h4 className="font-semibold mb-2">Client Satisfaction</h4>
              <p className="text-muted-foreground">98% positive feedback</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-blue transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;