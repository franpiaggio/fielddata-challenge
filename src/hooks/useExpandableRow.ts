import { useState, useCallback } from 'react';

interface UseExpandableRowReturn {
  expandedRow: number | null;
  handleExpandToggle: (rowId: number) => void;
  collapseAll: () => void;
  isExpanded: (rowId: number) => boolean;
}

export function useExpandableRow(): UseExpandableRowReturn {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const handleExpandToggle = useCallback((rowId: number) => {
    setExpandedRow(prev => (prev === rowId ? null : rowId));
  }, []);

  const collapseAll = useCallback(() => {
    setExpandedRow(null);
  }, []);

  const isExpanded = useCallback((rowId: number) => {
    return expandedRow === rowId;
  }, [expandedRow]);

  return {
    expandedRow,
    handleExpandToggle,
    collapseAll,
    isExpanded,
  };
}
