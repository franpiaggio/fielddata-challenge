import type { TaskType, AgricultureDetails, SanidadDetails, GenericDetails } from '../../types/task.types';
import { IMAGES } from '../../constants/images.constants';
import { COLORS } from '../../constants/colors.constants';
import { Checkbox } from '../form/Checkbox';
import { TaskTypeBadge } from '../badge/TaskTypeBadge';
import { TextCell } from '../common';
import { ChevronIcon } from '../icons';
import { ExpandedRowContent } from './ExpandedRowContent';

interface TableRowProps {
  checked?: boolean;
  type?: TaskType;
  task: string;
  date: string;
  responsible: string;
  dateColor?: string;
  onCheckChange?: (checked: boolean) => void;
  taskId?: number;
  isExpanded?: boolean;
  onExpandToggle?: (taskId: number) => void;
  details?: AgricultureDetails | SanidadDetails | GenericDetails;
}

export function TableRow({
  checked = false,
  type = "estructura",
  task,
  date,
  responsible,
  dateColor = COLORS.date.default,
  onCheckChange,
  taskId,
  isExpanded = false,
  onExpandToggle,
  details
}: TableRowProps) {
  const handleRowClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.closest('input[type="checkbox"]') ||
      target.closest('img[alt="actions"]') ||
      target.closest('[class*="badge"]')
    ) {
      return;
    }

    if (taskId !== undefined && onExpandToggle) {
      onExpandToggle(taskId);
    }
  };

  return (
    <>
      <div
        className={`flex items-center min-h-16 pl-4 sm:pl-5 pr-2.5 border-b border-gray-100 transition-colors relative ${
          isExpanded ? 'bg-[#f8f9fa]' : 'bg-white'
        }`}
        onClick={handleRowClick}
        style={{ cursor: taskId !== undefined ? 'pointer' : 'default' }}
      >
        {isExpanded && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0095FF]" />}
        <div className="w-auto sm:w-[200px] flex-shrink-0 flex items-center gap-3">
          <div onClick={(e) => e.stopPropagation()}>
            <Checkbox checked={checked} onChange={onCheckChange} />
          </div>
          <TaskTypeBadge type={type} />
        </div>

        <div className="flex-1 min-w-0 pl-4">
          <TextCell variant="primary" className="truncate">{task}</TextCell>
        </div>

        <div className="hidden sm:flex w-32 items-center gap-1.5">
          <img src={IMAGES.icons.calendar} alt="calendar" className="w-6 h-6" />
          <p className="font-normal text-sm leading-5" style={{ color: dateColor }}>
            {date}
          </p>
        </div>

        <div className="hidden sm:block w-32">
          <TextCell variant="secondary">{responsible}</TextCell>
        </div>

        <div className="w-6 flex items-center gap-2">
          {taskId !== undefined && (
            <ChevronIcon
              direction={isExpanded ? 'up' : 'down'}
              className="transition-transform"
            />
          )}
        </div>
      </div>

      {isExpanded && (
        <ExpandedRowContent
          type={type}
          task={task}
          details={details}
          responsible={responsible}
          date={date}
          dateColor={dateColor}
          checked={checked}
        />
      )}
    </>
  );
}
