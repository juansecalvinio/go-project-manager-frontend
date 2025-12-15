import { Button } from "@/shadcn-ui/components/button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-balance">
        Project Manager App
      </h2>
      <p className="text-lg mb-4 text-muted-foreground">
        Gestiona tus proyectos de manera eficiente y cómoda.
      </p>

      <Button>
        <Link
          to="/projects"
          className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          Ver Proyectos
        </Link>
      </Button>
    </div>
  );
}

export default HomePage;
