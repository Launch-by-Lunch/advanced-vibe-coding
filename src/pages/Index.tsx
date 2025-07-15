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
    },
    {
      number: 2,
      title: "Scalable Architecture Design",
      description: "Learn to design and implement scalable architectures that can handle high traffic and complex business logic.",
      duration: "1 hour",
      objectives: [
        "Microservices architecture principles",
        "Database optimization strategies",
        "Caching and performance optimization",
        "Load balancing and scaling techniques"
      ]
    },
    {
      number: 3,
      title: "Advanced AI Integration",
      description: "Integrate cutting-edge AI capabilities including machine learning models, natural language processing, and computer vision.",
      duration: "1 hour",
      objectives: [
        "AI model integration and deployment",
        "Natural language processing workflows",
        "Computer vision applications",
        "AI-powered automation systems"
      ]
    },
    {
      number: 4,
      title: "Enterprise Deployment & Security",
      description: "Deploy production-ready applications with enterprise-grade security, monitoring, and compliance features.",
      duration: "1 hour",
      objectives: [
        "Enterprise security implementations",
        "Monitoring and observability",
        "Compliance and governance",
        "Production deployment strategies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            4-Class Accelerator
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Your Learning Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each class builds on the previous one, creating a comprehensive learning experience that transforms how you approach advanced coding challenges and enterprise-level solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
