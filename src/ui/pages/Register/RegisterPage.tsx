import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "@/ui/hooks/users/useLoginUser";
import { useUserContext } from "@/ui/context/user.context";
import { Dropdown } from "@/ui/components/Dropdown";
import { ROLES } from "@/core/modules/users/domain/models/User";

const roleOptions = [
  { label: "Developer", value: ROLES.DEVELOPER },
  { label: "Project Manager", value: ROLES.PROJECT_MANAGER },
];

export default function RegisterPage() {
  const [role, setRole] = useState<string>(ROLES.DEVELOPER);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  const { postLogin, isLoading, isRequested, error, clearError } =
    useLoginUser();
  const isAuthenticated = useUserContext((state) => state.isAuthenticated);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      return;
    }

    await postLogin({ email, password });
  };

  useEffect(() => {
    if (error && (email || password)) {
      clearError();
    }
  }, [email, password, error, clearError]);

  useEffect(() => {
    if (isRequested && isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, isRequested, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        {/* Card principal */}
        <div className="bg-card rounded-lg shadow-lg border border-border p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Bienvenido
            </h1>
            <p className="text-muted-foreground">
              Ingresa tus datos para registrarte
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
              <p className="text-sm text-destructive">
                {error.message ||
                  "Credenciales inválidas. Por favor, intenta de nuevo."}
              </p>
            </div>
          )}

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Dropdown de roles */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-foreground mb-2"
              >
                ¿Qué tipo de usuario sos?
              </label>
              <Dropdown
                options={roleOptions}
                value={role}
                onSelect={setRole}
                className="w-full"
              />
            </div>

            {/* Campo de nombre */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                placeholder="Ingresa tu nombre"
                disabled={isLoading}
                required
              />
            </div>

            {/* Campo de usuario */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                placeholder="Ingresa tu correo electrónico"
                disabled={isLoading}
                required
              />
            </div>

            {/* Campo de contraseña */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                placeholder="Ingresa tu contraseña"
                disabled={isLoading}
                minLength={6}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Repetir contraseña
              </label>
              <input
                id="password"
                type="password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                placeholder="Repite tu contraseña"
                disabled={isLoading}
                minLength={6}
                required
              />
            </div>

            {/* Botón de submit */}
            <button
              type="submit"
              disabled={isLoading || !email.trim() || !password.trim()}
              className="w-full bg-primary text-primary-foreground font-medium py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Registrando cuenta...
                </span>
              ) : (
                "Registrarme"
              )}
            </button>
          </form>
        </div>

        {/* Decoración adicional */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-xs">
            Project Manager App © 2025
          </p>
        </div>
      </div>
    </div>
  );
}
