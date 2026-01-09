import { useTaskContext } from '../hooks/useTaskContext';
import { useUIContext } from '../hooks/useUIContext';
import { useFilteredTasks } from '../hooks/useFilteredTasks';
import { usePagination } from '../hooks/usePagination';
import { useExpandableRow } from '../hooks/useExpandableRow';
import { AppHeader } from './layout/AppHeader';
import { TabBar } from './navigation/TabBar';
import { TaskTable } from './table';

const ITEMS_PER_PAGE = 6;

function FieldData() {
  const { toggleTaskStatus } = useTaskContext();
  const { activeTab } = useUIContext();
  const { filteredPendingTasks, filteredCompletedTasks } = useFilteredTasks();
  const { expandedRow, handleExpandToggle } = useExpandableRow();

  const pendingPagination = usePagination(filteredPendingTasks, ITEMS_PER_PAGE, {
    resetDeps: [activeTab],
  });

  const completedPagination = usePagination(filteredCompletedTasks, ITEMS_PER_PAGE, {
    resetDeps: [activeTab],
  });

  const getPaginationProps = (pagination: typeof pendingPagination) => {
    if (pagination.totalPages <= 1) return undefined;

    return {
      onPrevious: pagination.handlePrevious,
      onNext: pagination.handleNext,
      hasPrevious: pagination.hasPrevious,
      hasNext: pagination.hasNext,
    };
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
            tasks={pendingPagination.paginatedItems}
            expandedRow={expandedRow}
            onExpandToggle={handleExpandToggle}
            onTaskToggle={toggleTaskStatus}
            pagination={getPaginationProps(pendingPagination)}
          />

          <TaskTable
            variant="completed"
            tasks={completedPagination.paginatedItems}
            expandedRow={expandedRow}
            onExpandToggle={handleExpandToggle}
            onTaskToggle={toggleTaskStatus}
            pagination={getPaginationProps(completedPagination)}
          />
        </div>
      </div>
    </div>
  );
}

export default FieldData;
