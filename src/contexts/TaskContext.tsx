import { createContext, useState, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { Task } from '../types/task.types';
import { INITIAL_PENDING_TASKS, INITIAL_COMPLETED_TASKS } from '../data/tasks.data';

interface TaskContextValue {
  allTasks: Task[];
  pendingTasks: Task[];
  completedTasks: Task[];
  toggleTaskStatus: (taskId: number) => void;
  addTask: (task: Omit<Task, 'id'>) => void;
  deleteTask: (taskId: number) => void;
  updateTask: (taskId: number, updates: Partial<Task>) => void;
}

export const TaskContext = createContext<TaskContextValue | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [allTasks, setAllTasks] = useState<Task[]>([
    ...INITIAL_PENDING_TASKS,
    ...INITIAL_COMPLETED_TASKS
  ]);

  const pendingTasks = useMemo(() => allTasks.filter(t => !t.checked), [allTasks]);
  const completedTasks = useMemo(() => allTasks.filter(t => t.checked), [allTasks]);

  const toggleTaskStatus = (taskId: number) => {
    setAllTasks(prev =>
      prev.map(task =>
        task.id === taskId
          ? { ...task, checked: !task.checked }
          : task
      )
    );
  };

  const addTask = (task: Omit<Task, 'id'>) => {
    const newTask: Task = {
      ...task,
      id: Math.max(...allTasks.map(t => t.id), 0) + 1,
    };
    setAllTasks(prev => [...prev, newTask]);
  };

  const deleteTask = (taskId: number) => {
    setAllTasks(prev => prev.filter(t => t.id !== taskId));
  };

  const updateTask = (taskId: number, updates: Partial<Task>) => {
    setAllTasks(prev =>
      prev.map(t => t.id === taskId ? { ...t, ...updates } : t)
    );
  };

  return (
    <TaskContext.Provider
      value={{
        allTasks,
        pendingTasks,
        completedTasks,
        toggleTaskStatus,
        addTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
