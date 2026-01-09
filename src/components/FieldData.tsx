import { useState, useMemo, useEffect } from 'react';
import { useTaskContext } from '../hooks/useTaskContext';
import { useUIContext } from '../hooks/useUIContext';
import { AppHeader } from './layout/AppHeader';
import { TabBar } from './navigation/TabBar';
import { TaskTable } from './table';
import { FilterBar, type FilterStatus } from './filters';
import { TabType } from '../types/ui.types';

// Simulated logged-in user
const CURRENT_USER = 'Martin Perez';
const ITEMS_PER_PAGE = 6;

function FieldData() {
  const { allTasks, toggleTaskStatus } = useTaskContext();
  const { activeTab } = useUIContext();
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [filterResponsible, setFilterResponsible] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique responsible persons
  const responsibleOptions = useMemo(() => {
    const allResponsibles = allTasks.map(task => task.responsible);
    return Array.from(new Set(allResponsibles)).sort();
  }, [allTasks]);

  // Get unique task types
  const typeOptions = useMemo(() => {
    const allTypes = allTasks.map(task => task.type);
    return Array.from(new Set(allTypes)).sort();
  }, [allTasks]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeTab, filterStatus, filterResponsible, filterType, searchQuery]);

  // Filter tasks based on all filters
  const filteredTasks = useMemo(() => {
    let tasks = allTasks;

    // Filter by active tab
    if (activeTab === TabType.USER) {
      tasks = tasks.filter(task => task.responsible === CURRENT_USER);
    }

    // Filter by status
    if (filterStatus === 'pending') {
      tasks = tasks.filter(task => !task.checked);
    } else if (filterStatus === 'completed') {
      tasks = tasks.filter(task => task.checked);
    }

    // Filter by type
    if (filterType !== 'all') {
      tasks = tasks.filter(task => task.type === filterType);
    }

    // Filter by responsible
    if (filterResponsible !== 'all') {
      tasks = tasks.filter(task => task.responsible === filterResponsible);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      tasks = tasks.filter(task => task.task.toLowerCase().includes(query));
    }

    return tasks;
  }, [allTasks, activeTab, filterStatus, filterType, filterResponsible, searchQuery]);

  const visibleTasks = filteredTasks.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTasks.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };

  const handleExpandToggle = (taskId: number) => {
    setExpandedRow(prev => prev === taskId ? null : taskId);
  };

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
                selectedStatus={filterStatus}
                selectedResponsible={filterResponsible}
                selectedType={filterType}
                responsibleOptions={responsibleOptions}
                typeOptions={typeOptions}
                searchQuery={searchQuery}
                disableResponsibleFilter={activeTab === TabType.USER}
                onStatusChange={setFilterStatus}
                onResponsibleChange={setFilterResponsible}
                onTypeChange={setFilterType}
                onSearchChange={setSearchQuery}
              />
            </div>
          </div>

          <TaskTable
            tasks={visibleTasks}
            totalCount={filteredTasks.length}
            expandedRow={expandedRow}
            onExpandToggle={handleExpandToggle}
            onTaskToggle={toggleTaskStatus}
            onLoadMore={handleLoadMore}
            hasMore={hasMore}
          />
        </div>
      </div>
    </div>
  );
}

export default FieldData;
