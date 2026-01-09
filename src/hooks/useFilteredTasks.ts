import { useMemo } from 'react';
import { useTaskContext } from './useTaskContext';
import { useUIContext } from './useUIContext';
import { TabType } from '../types/ui.types';
import type { Task } from '../types/task.types';

const CURRENT_USER = 'Martin Perez';

interface UseFilteredTasksReturn {
  filteredPendingTasks: Task[];
  filteredCompletedTasks: Task[];
}

export function useFilteredTasks(): UseFilteredTasksReturn {
  const { pendingTasks, completedTasks } = useTaskContext();
  const { activeTab } = useUIContext();

  const filteredPendingTasks = useMemo(() => {
    if (activeTab === TabType.USER) {
      return pendingTasks.filter(task => task.responsible === CURRENT_USER);
    }
    return pendingTasks;
  }, [pendingTasks, activeTab]);

  const filteredCompletedTasks = useMemo(() => {
    if (activeTab === TabType.USER) {
      return completedTasks.filter(task => task.responsible === CURRENT_USER);
    }
    return completedTasks;
  }, [completedTasks, activeTab]);

  return {
    filteredPendingTasks,
    filteredCompletedTasks,
  };
}
