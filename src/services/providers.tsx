"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useContext, useRef, useState } from "react";
import { type StoreApi, useStore } from "zustand";
import { Store, store } from "./stores";

export const StoreContext = createContext<StoreApi<Store> | null>(null);

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<StoreApi<Store>>();

  if (!storeRef.current) {
    storeRef.current = store();
  }

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );
  return (
    <StoreContext.Provider value={storeRef.current}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </StoreContext.Provider>
  );
};

export const useAppStore = <T,>(selector: (store: Store) => T): T => {
  const storeContext = useContext(StoreContext);

  if (!storeContext) {
    throw new Error(`useCounterStore must be use within CounterStoreProvider`);
  }

  return useStore(storeContext, selector);
};
