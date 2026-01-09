import { useState, useMemo, useEffect } from 'react';

interface UsePaginationOptions {
  resetDeps?: unknown[];
}

interface UsePaginationReturn<T> {
  paginatedItems: T[];
  currentPage: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
  handlePrevious: () => void;
  handleNext: () => void;
}

export function usePagination<T>(
  items: T[],
  itemsPerPage: number,
  options?: UsePaginationOptions
): UsePaginationReturn<T> {
  const [currentPage, setCurrentPage] = useState(0);

  // Reset pagination when dependencies change
  useEffect(() => {
    setCurrentPage(0);
  }, options?.resetDeps ?? []);

  const { paginatedItems, totalPages, hasPrevious, hasNext } = useMemo(() => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pages = Math.ceil(items.length / itemsPerPage);

    return {
      paginatedItems: items.slice(startIndex, endIndex),
      totalPages: pages,
      hasPrevious: currentPage > 0,
      hasNext: endIndex < items.length,
    };
  }, [items, currentPage, itemsPerPage]);

  const handlePrevious = () => {
    if (hasPrevious) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return {
    paginatedItems,
    currentPage,
    totalPages,
    hasPrevious,
    hasNext,
    handlePrevious,
    handleNext,
  };
}
