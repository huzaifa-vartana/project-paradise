
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <section className="py-20 flex items-center justify-center min-h-[80vh]">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h1 className="text-9xl font-display font-bold text-primary/20">404</h1>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mt-4 mb-6">Page Not Found</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg" className="group">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
