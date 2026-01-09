import type { Task } from '../../types/task.types';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TablePagination } from './TablePagination';

interface TaskTableProps {
  variant: 'pending' | 'completed';
  tasks: Task[];
  expandedRow: number | null;
  onExpandToggle: (taskId: number) => void;
  onTaskToggle: (taskId: number) => void;
  pagination?: {
    onPrevious: () => void;
    onNext: () => void;
    hasPrevious: boolean;
    hasNext: boolean;
  };
}

export function TaskTable({
  variant,
  tasks,
  expandedRow,
  onExpandToggle,
  onTaskToggle,
  pagination
}: TaskTableProps) {
  return (
    <div className="flex justify-center w-full">
      <div className="bg-white rounded-lg shadow-md w-full max-w-[1159px] overflow-x-auto">
        <TableHeader variant={variant} count={tasks.length} />
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
        {pagination && (
          <TablePagination
            onPrevious={pagination.onPrevious}
            onNext={pagination.onNext}
            hasPrevious={pagination.hasPrevious}
            hasNext={pagination.hasNext}
          />
        )}
      </div>
    </div>
  );
}
