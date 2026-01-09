import { useState, useMemo } from 'react';
import type { Task, TaskType } from '../types/task.types';

export type FilterStatus = 'all' | 'pending' | 'completed';

export interface TaskFilters {
  status: FilterStatus;
  responsible: string;
  type: string;
  searchQuery: string;
}

export interface UseTaskFiltersReturn {
  filters: TaskFilters;
  setStatus: (status: FilterStatus) => void;
  setResponsible: (responsible: string) => void;
  setType: (type: string) => void;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
  responsibleOptions: string[];
  typeOptions: TaskType[];
}

const DEFAULT_FILTERS: TaskFilters = {
  status: 'all',
  responsible: 'all',
  type: 'all',
  searchQuery: '',
};

export function useTaskFilters(tasks: Task[]): UseTaskFiltersReturn {
  const [filters, setFilters] = useState<TaskFilters>(DEFAULT_FILTERS);

  const responsibleOptions = useMemo(() => {
    const allResponsibles = tasks.map(task => task.responsible);
    return Array.from(new Set(allResponsibles)).sort();
  }, [tasks]);

  const typeOptions = useMemo(() => {
    const allTypes = tasks.map(task => task.type);
    return Array.from(new Set(allTypes)).sort() as TaskType[];
  }, [tasks]);

  const setStatus = (status: FilterStatus) => {
    setFilters(prev => ({ ...prev, status }));
  };

  const setResponsible = (responsible: string) => {
    setFilters(prev => ({ ...prev, responsible }));
  };

  const setType = (type: string) => {
    setFilters(prev => ({ ...prev, type }));
  };

  const setSearchQuery = (searchQuery: string) => {
    setFilters(prev => ({ ...prev, searchQuery }));
  };

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  return {
    filters,
    setStatus,
    setResponsible,
    setType,
    setSearchQuery,
    resetFilters,
    responsibleOptions,
    typeOptions,
  };
}
