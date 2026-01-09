import { useTaskContext } from '../hooks/useTaskContext';
import { useUIContext } from '../hooks/useUIContext';
import { useTaskFilters } from '../hooks/useTaskFilters';
import { useFilteredTasks } from '../hooks/useFilteredTasks';
import { useLoadMore } from '../hooks/useLoadMore';
import { useExpandableRow } from '../hooks/useExpandableRow';
import { AppHeader } from './layout/AppHeader';
import { TabBar } from './navigation/TabBar';
import { TaskTable } from './table';
import { FilterBar } from './filters';
import { TabType } from '../types/ui.types';

const CURRENT_USER = 'Martin Perez';
const ITEMS_PER_PAGE = 6;

function FieldData() {
  const { allTasks, toggleTaskStatus } = useTaskContext();
  const { activeTab } = useUIContext();

  const {
    filters,
    setStatus,
    setResponsible,
    setType,
    setSearchQuery,
    responsibleOptions,
    typeOptions,
  } = useTaskFilters(allTasks);

  const filteredTasks = useFilteredTasks(allTasks, filters, {
    activeTab,
    currentUser: CURRENT_USER,
  });

  const { visibleItems, hasMore, loadMore, totalCount } = useLoadMore(
    filteredTasks,
    ITEMS_PER_PAGE,
    { resetDeps: [activeTab, filters] }
  );

  const { expandedRow, handleExpandToggle } = useExpandableRow();

  return (
    <div className="bg-[#eef2f6] min-h-screen w-full">
      <AppHeader />

      <div className="p-4 sm:p-5">
        <div className="flex flex-col gap-5">
          <div className="flex justify-center w-full">
            <div className="w-full max-w-[1159px]">
              <TabBar />
            </div>
          </div>

          <div className="flex justify-center w-full">
            <div className="w-full max-w-[1159px]">
              <FilterBar
                selectedStatus={filters.status}
                selectedResponsible={filters.responsible}
                selectedType={filters.type}
                responsibleOptions={responsibleOptions}
                typeOptions={typeOptions}
                searchQuery={filters.searchQuery}
                disableResponsibleFilter={activeTab === TabType.USER}
                onStatusChange={setStatus}
                onResponsibleChange={setResponsible}
                onTypeChange={setType}
                onSearchChange={setSearchQuery}
              />
            </div>
          </div>

          <TaskTable
            tasks={visibleItems}
            totalCount={totalCount}
            expandedRow={expandedRow}
            onExpandToggle={handleExpandToggle}
            onTaskToggle={toggleTaskStatus}
            onLoadMore={loadMore}
            hasMore={hasMore}
          />
        </div>
      </div>
    </div>
  );
}

export default FieldData;
