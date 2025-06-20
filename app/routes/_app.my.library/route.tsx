import React, { useEffect } from 'react'
import { useLoadingStore } from '~/store/useLoadingStore';
import { LogoIcon } from '~/Svgs';

const route = () => {
  const { isLoading, setIsLoading } = useLoadingStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white gap-4">
        <LogoIcon width="80" height="80" />
        <p className="text-2xl font-semibold tracking-wide">Tunexy-app</p>
      </div>
    )
  }

  return (
    <div>route</div>
  )
}

export default route