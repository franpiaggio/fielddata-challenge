import type { Task } from '../../types/task.types';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TablePagination } from './TablePagination';

interface TaskTableProps {
  tasks: Task[];
  totalCount: number;
  expandedRow: number | null;
  onExpandToggle: (taskId: number) => void;
  onTaskToggle: (taskId: number) => void;
  onLoadMore?: () => void;
  hasMore?: boolean;
}

export function TaskTable({
  tasks,
  totalCount,
  expandedRow,
  onExpandToggle,
  onTaskToggle,
  onLoadMore,
  hasMore = false
}: TaskTableProps) {
  return (
    <div className="flex justify-center w-full">
      <div className="bg-white rounded-lg shadow-md w-full max-w-[1159px] overflow-x-auto">
        <TableHeader count={totalCount} />
        {tasks.map((task) => (
          <TableRow
            key={task.id}
            taskId={task.id}
            checked={task.checked}
            type={task.type}
            task={task.task}
            date={task.date}
            responsible={task.responsible}
            dateColor={task.dateColor}
            isExpanded={expandedRow === task.id}
            onExpandToggle={onExpandToggle}
            onCheckChange={() => onTaskToggle(task.id)}
            details={task.details}
          />
        ))}
        {onLoadMore && (
          <TablePagination
            onLoadMore={onLoadMore}
            hasMore={hasMore}
          />
        )}
      </div>
    </div>
  );
}
