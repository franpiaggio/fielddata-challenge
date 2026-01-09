import { useState, useMemo, useEffect } from 'react';
import { useTaskContext } from '../hooks/useTaskContext';
import { useUIContext } from '../hooks/useUIContext';
import { AppHeader } from './layout/AppHeader';
import { TabBar } from './navigation/TabBar';
import { TaskTable } from './table';

// Simulated logged-in user
const CURRENT_USER = 'Martin Perez';

function FieldData() {
  const { pendingTasks, completedTasks, toggleTaskStatus } = useTaskContext();
  const { activeTab } = useUIContext();
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const itemsPerPage = 6;

  // Reset pagination when tab changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeTab]);

  // Filter tasks based on active tab
  const filteredPendingTasks = useMemo(() => {
    if (activeTab === 'mis') {
      return pendingTasks.filter(task => task.responsible === CURRENT_USER);
    }
    return pendingTasks;
  }, [pendingTasks, activeTab]);

  const filteredCompletedTasks = useMemo(() => {
    if (activeTab === 'mis') {
      return completedTasks.filter(task => task.responsible === CURRENT_USER);
    }
    return completedTasks;
  }, [completedTasks, activeTab]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCompletedTasks = filteredCompletedTasks.slice(startIndex, endIndex);

  const hasPrevious = currentPage > 0;
  const hasNext = endIndex < filteredCompletedTasks.length;

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

  const handleExpandToggle = (taskId: number) => {
    setExpandedRow(prev => prev === taskId ? null : taskId);
  };

  return (
    <div className="bg-white min-h-screen w-full">
      <AppHeader />

      <div className="p-4 sm:p-5">
        <div className="bg-[#eef2f6] rounded-lg p-4 sm:p-5 flex flex-col gap-5">
          <div className="flex justify-center w-full">
            <div className="w-full max-w-[1159px]">
              <TabBar />
            </div>
          </div>

          <TaskTable
            variant="pending"
            tasks={filteredPendingTasks}
            expandedRow={expandedRow}
            onExpandToggle={handleExpandToggle}
            onTaskToggle={toggleTaskStatus}
          />

          <TaskTable
            variant="completed"
            tasks={paginatedCompletedTasks}
            expandedRow={expandedRow}
            onExpandToggle={handleExpandToggle}
            onTaskToggle={toggleTaskStatus}
            pagination={{
              onPrevious: handlePrevious,
              onNext: handleNext,
              hasPrevious,
              hasNext,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FieldData;
