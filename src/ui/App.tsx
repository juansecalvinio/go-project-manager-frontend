import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Header con el toggle */}
      <header 
        className="sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b transition-all duration-300"
        style={{ 
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border-color)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 
              className="text-2xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              Project Manager
            </h1>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div 
          className="rounded-lg p-8 shadow-lg transition-all duration-300"
          style={{ 
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-color)'
          }}
        >
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Bienvenido a tu gestor de proyectos
          </h2>
          <p 
            className="text-lg mb-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            Usa el botón en la esquina superior derecha para cambiar entre tema claro y oscuro.
          </p>
          <div 
            className="mt-6 p-4 rounded-md"
            style={{ 
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-color)'
            }}
          >
            <p style={{ color: 'var(--text-primary)' }}>
              ✨ El tema se guarda automáticamente en tu navegador
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
