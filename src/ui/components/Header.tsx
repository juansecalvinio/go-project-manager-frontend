import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "@/ui/components/ThemeToggle";
import { useUserContext } from "../context/user.context";

export const Header = () => {
  const { user, isAuthenticated, logout } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // No mostrar el header en la página de login
  if (!isAuthenticated) {
    return null;
  }

  return (
    <header className="sticky h-12 top-0 z-50 backdrop-blur-md bg-background/80 border-b transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full content-center">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/">
              <h2 className="text-xl font-extrabold text-foreground">
                Project Manager
              </h2>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Usuario autenticado */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">
                Hola,{" "}
                <span className="font-medium text-foreground">
                  {user?.name}
                </span>
              </span>
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1 rounded-md hover:bg-accent"
              >
                Cerrar sesión
              </button>
            </div>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
