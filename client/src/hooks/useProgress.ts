import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc";

/**
 * Custom hook for syncing progress between localStorage and database
 * @param toolId - Unique identifier for the tool (e.g., 'hoja_ruta', 'plantillas')
 * @param initialData - Initial data structure
 * @returns [data, setData, isLoading] - State, setter that auto-syncs, and loading state
 */
export function useProgress<T>(toolId: string, initialData: T) {
  const { data: user } = trpc.auth.me.useQuery();
  const STORAGE_KEY = `${toolId}_progress`;
  
  // Load progress from DB (only if authenticated)
  const { data: dbProgress, isLoading } = trpc.progress.get.useQuery(
    { toolId },
    { enabled: !!user, retry: false }
  );
  
  // Save progress mutation
  const saveMutation = trpc.progress.save.useMutation();
  
  // Local state with localStorage fallback
  const [data, setDataInternal] = useState<T>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Validate that parsed data matches expected type
        if (parsed === null || parsed === undefined) {
          return initialData;
        }
        // For arrays, ensure it's actually an array
        if (Array.isArray(initialData) && !Array.isArray(parsed)) {
          return initialData;
        }
        return parsed;
      } catch (e) {
        return initialData;
      }
    }
    return initialData;
  });
  
  // Load from DB when available (only once on mount)
  useEffect(() => {
    if (!isLoading && user) {
      // Only update if dbProgress is a valid value (not null/undefined)
      if (dbProgress !== null && dbProgress !== undefined) {
        // Additional validation for arrays
        if (Array.isArray(initialData)) {
          const validData = Array.isArray(dbProgress) ? dbProgress : initialData;
          setDataInternal(validData as T);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(validData));
        } else {
          setDataInternal(dbProgress);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(dbProgress));
        }
      }
    }
  }, [isLoading, dbProgress, user, STORAGE_KEY, initialData]);
  
  // Wrapper setter that syncs to both localStorage and DB
  const setData = (newData: T | ((prev: T) => T)) => {
    setDataInternal(prev => {
      // Ensure prev is never null/undefined by using initialData as fallback
      const safePrev = prev ?? initialData;
      const updated = typeof newData === 'function' ? (newData as (prev: T) => T)(safePrev) : newData;
      
      // Save to localStorage immediately
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      
      // Save to DB if authenticated (debounced by tRPC)
      if (user) {
        saveMutation.mutate({ toolId, progressData: updated });
      }
      
      return updated;
    });
  };
  
  return [data, setData, isLoading] as const;
}
