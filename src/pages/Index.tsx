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
        "Introduce yourself",
        "Resource Orientation",
        "Payments: Adding Stripe payment pages to your app",
        "Login: Using Supabase for advanced login integrations",
        "Q&A"
      ]
    },
    {
      number: 2,
      title: "Monitoring & Analytics Setup",
      description: "Implement comprehensive monitoring, analytics, and communication tools to track user engagement and system health.",
      duration: "1 hour",
      objectives: [
        { text: "Crisp for in-app chat", url: "https://crisp.chat/en/" },
        { text: "Better Stack for Uptime and logs", url: "https://betterstack.com/" },
        "Analytics for who is on the site"
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
          <div className="text-center">
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
    </div>
  );
};

export default Index;
