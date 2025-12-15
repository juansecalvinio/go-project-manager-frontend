import { Button } from "@/shadcn-ui/components/button";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-6xl font-bold mb-4">404</h2>
      <p className="text-2xl mb-8">Página no encontrada</p>
      <Button>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          Volver al inicio
        </Link>
      </Button>
    </div>
  );
}

export default NotFoundPage;
