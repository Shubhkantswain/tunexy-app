// app/components/ClientOnly.tsx
import { useEffect, useState } from "react";

export function ClientOnly({
  children,
  fallback = <DefaultFallback />,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) return fallback;

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
