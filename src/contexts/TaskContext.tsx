import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Task } from '../types/task.types';
import { INITIAL_PENDING_TASKS, INITIAL_COMPLETED_TASKS } from '../data/tasks.data';

interface TaskContextValue {
  pendingTasks: Task[];
  completedTasks: Task[];
  toggleTaskStatus: (taskId: number) => void;
  addTask: (task: Omit<Task, 'id'>) => void;
  deleteTask: (taskId: number) => void;
  updateTask: (taskId: number, updates: Partial<Task>) => void;
}

export const TaskContext = createContext<TaskContextValue | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [pendingTasks, setPendingTasks] = useState<Task[]>(INITIAL_PENDING_TASKS);
  const [completedTasks, setCompletedTasks] = useState<Task[]>(INITIAL_COMPLETED_TASKS);

  const toggleTaskStatus = (taskId: number) => {
    const pendingTask = pendingTasks.find(t => t.id === taskId);
    if (pendingTask) {
      setPendingTasks(prev => prev.filter(t => t.id !== taskId));
      setCompletedTasks(prev => [...prev, { ...pendingTask, checked: true }]);
      return;
    }

    const completedTask = completedTasks.find(t => t.id === taskId);
    if (completedTask) {
      setCompletedTasks(prev => prev.filter(t => t.id !== taskId));
      setPendingTasks(prev => [...prev, { ...completedTask, checked: false }]);
    }
  };

  const addTask = (task: Omit<Task, 'id'>) => {
    const newTask: Task = {
      ...task,
      id: Math.max(
        ...pendingTasks.map(t => t.id),
        ...completedTasks.map(t => t.id),
        0
      ) + 1,
    };

    if (task.checked) {
      setCompletedTasks(prev => [...prev, newTask]);
    } else {
      setPendingTasks(prev => [...prev, newTask]);
    }
  };

  const deleteTask = (taskId: number) => {
    setPendingTasks(prev => prev.filter(t => t.id !== taskId));
    setCompletedTasks(prev => prev.filter(t => t.id !== taskId));
  };

  const updateTask = (taskId: number, updates: Partial<Task>) => {
    const updateTaskInList = (tasks: Task[]) =>
      tasks.map(t => t.id === taskId ? { ...t, ...updates } : t);

    setPendingTasks(prev => updateTaskInList(prev));
    setCompletedTasks(prev => updateTaskInList(prev));
  };

  return (
    <TaskContext.Provider
      value={{
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
