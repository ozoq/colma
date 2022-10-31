import { hydrateRoot } from "react-dom/client";
import { RemixBrowser } from "@remix-run/react";
import { useState } from "react";
import createEmotionCache from "./lib/chakra/createEmotionCache";
import { ClientStyleContext } from "./lib/chakra/context";
import { CacheProvider } from "@emotion/react";

interface ClientCacheProviderProps {
  children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

hydrateRoot(
  document,
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>
);
