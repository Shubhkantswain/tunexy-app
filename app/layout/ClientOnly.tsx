// src/layout/ClientOnly.tsx
export function ClientOnly({ children }: { children: React.ReactNode }) {
  if (typeof window === "undefined") return <DefaultFallback/>;
  return <>{children}</>;
}


function DefaultFallback() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <img
        src="/logo.svg" // replace with your logo path
        alt="Loading..."
        className="w-16 h-16 animate-pulse"
      />
    </div>
  );
}
