import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface ClassCardProps {
  number: number;
  title: string;
  description: string;
  duration: string;
  objectives: string[];
}

export const ClassCard = ({ number, title, description, duration, objectives }: ClassCardProps) => {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
            style={{ background: 'var(--gradient-primary)' }}
          >
            {number}
          </div>
          <Badge variant="outline" className="text-sm">
            Class {number}
          </Badge>
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-primary flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            Key Objectives
          </h4>
          <ul className="space-y-1 text-sm">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};