import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Link to="/certificate">
        <Button size="lg" className="px-8 py-6 text-lg shadow-md hover:shadow-lg transition-shadow">
          Course Certificate
        </Button>
      </Link>
    </div>
  );
};

export default Index;
