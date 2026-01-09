import { useState, useMemo, useEffect } from 'react';

interface UseLoadMoreOptions {
  resetDeps?: unknown[];
}

interface UseLoadMoreReturn<T> {
  visibleItems: T[];
  hasMore: boolean;
  loadMore: () => void;
  reset: () => void;
  visibleCount: number;
  totalCount: number;
}

export function useLoadMore<T>(
  items: T[],
  itemsPerPage: number,
  options?: UseLoadMoreOptions
): UseLoadMoreReturn<T> {
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  // Reset when dependencies change
  useEffect(() => {
    setVisibleCount(itemsPerPage);
  }, options?.resetDeps ?? []);

  const { visibleItems, hasMore } = useMemo(() => ({
    visibleItems: items.slice(0, visibleCount),
    hasMore: visibleCount < items.length,
  }), [items, visibleCount]);

  const loadMore = () => {
    setVisibleCount(prev => prev + itemsPerPage);
  };

  const reset = () => {
    setVisibleCount(itemsPerPage);
  };

  return {
    visibleItems,
    hasMore,
    loadMore,
    reset,
    visibleCount,
    totalCount: items.length,
  };
}
