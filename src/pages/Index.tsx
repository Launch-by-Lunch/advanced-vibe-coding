import { Header } from "@/components/Header";
import { ClassCard } from "@/components/ClassCard";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const classes = [
    {
      number: 1,
      title: "Advanced Integration Patterns",
      description: "Master complex integration patterns and build sophisticated applications with multiple data sources and APIs.",
      duration: "1 hour",
      objectives: [
        "Complex API integration strategies",
        "Managing multiple data sources",
        "Advanced authentication patterns",
        "Real-time data synchronization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Advanced Class
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Your Learning Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master complex integration patterns and build sophisticated applications with multiple data sources and APIs.
          </p>
        </div>
        
        <div className="flex justify-center max-w-4xl mx-auto">
          {classes.map((classData) => (
            <ClassCard
              key={classData.number}
              number={classData.number}
              title={classData.title}
              description={classData.description}
              duration={classData.duration}
              objectives={classData.objectives}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
