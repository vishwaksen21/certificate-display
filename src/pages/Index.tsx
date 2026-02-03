import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <Award className="w-16 h-16 mx-auto text-primary" />
          <h1 className="text-3xl font-semibold text-foreground">
            My Certificates
          </h1>
          <p className="text-muted-foreground">
            Click below to view my certificate
          </p>
        </div>
        
        <Link to="/certificate">
          <Button size="lg" className="px-8 py-6 text-lg shadow-md hover:shadow-lg transition-shadow">
            Course Certificate
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
