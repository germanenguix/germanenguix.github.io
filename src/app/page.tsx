export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="text-center space-y-8 px-4">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
            En Construcción
          </h1>
          <div className="flex items-center justify-center gap-2">
            <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce"></div>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
          Estoy trabajando en algo increíble. Vuelve pronto para verlo.
        </p>
        
        <div className="pt-8">
          <div className="inline-block px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700">
            <p className="text-slate-300 font-mono text-sm">
              Próximamente...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
