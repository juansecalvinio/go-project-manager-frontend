import AppRouter from "@/ui/router/AppRouter";
import { Header } from "@/ui/components/Header";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
