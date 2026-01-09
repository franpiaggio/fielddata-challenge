import { useMemo } from 'react';
import type { Task } from '../types/task.types';
import type { TaskFilters } from './useTaskFilters';
import { TabType } from '../types/ui.types';

interface UseFilteredTasksOptions {
  activeTab: TabType;
  currentUser: string;
}

export function useFilteredTasks(
  tasks: Task[],
  filters: TaskFilters,
  options: UseFilteredTasksOptions
): Task[] {
  const { activeTab, currentUser } = options;

  return useMemo(() => {
    let result = tasks;

    // Filter by active tab (user's tasks only)
    if (activeTab === TabType.USER) {
      result = result.filter(task => task.responsible === currentUser);
    }

    // Filter by status
    if (filters.status === 'pending') {
      result = result.filter(task => !task.checked);
    } else if (filters.status === 'completed') {
      result = result.filter(task => task.checked);
    }

    // Filter by type
    if (filters.type !== 'all') {
      result = result.filter(task => task.type === filters.type);
    }

    // Filter by responsible
    if (filters.responsible !== 'all') {
      result = result.filter(task => task.responsible === filters.responsible);
    }

    // Filter by search query
    if (filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(task => task.task.toLowerCase().includes(query));
    }

    return result;
  }, [tasks, filters, activeTab, currentUser]);
}
