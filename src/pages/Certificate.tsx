import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import certificateImage from "@/assets/certificate.jpg";

const Certificate = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = certificateImage;
    link.download = "certificate.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header with navigation */}
        <div className="flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          
          <Button onClick={handleDownload} variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download
          </Button>
        </div>

        {/* Certificate display */}
        <div className="bg-card rounded-lg shadow-lg overflow-hidden border">
          <img
            src={certificateImage}
            alt="Course Certificate"
            className="w-full h-auto"
          />
        </div>

        {/* Certificate info */}
        <div className="text-center text-muted-foreground text-sm">
          NPTEL Course Certificate
        </div>
      </div>
    </div>
  );
};

export default Certificate;
