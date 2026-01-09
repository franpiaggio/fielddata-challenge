import type { TaskType, AgricultureDetails, SanidadDetails, GenericDetails } from '../../types/task.types';
import { IMAGES } from '../../constants/images.constants';
import { COLORS } from '../../constants/colors.constants';
import { THEME } from '../../constants/theme.constants';
import { Checkbox } from '../form/Checkbox';
import { TaskTypeBadge } from '../badge/TaskTypeBadge';
import { TextCell } from '../common';
import { ExpandedRowDetails } from './ExpandedRowDetails';
import { ExpandedAgricultureRow } from './ExpandedAgricultureRow';
import { ExpandedSanidadRow } from './ExpandedSanidadRow';
import { ExpandedGenericRow } from './ExpandedGenericRow';

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

function StatusIndicator({ completed }: { completed: boolean }) {
  return (
    <div
      className={`w-3 h-3 rounded-full ${completed ? 'bg-green-500' : 'bg-amber-400'}`}
      title={completed ? 'Completada' : 'Pendiente'}
    />
  );
}

export function TableRow({
  checked = false,
  type = "Estructura",
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
        className={`flex items-center min-h-14 pl-4 sm:pl-5 pr-2.5 border-b border-gray-100 transition-colors relative ${
          isExpanded ? 'bg-[#f8f9fa]' : 'bg-white hover:bg-gray-50'
        }`}
        onClick={handleRowClick}
        style={{ cursor: taskId !== undefined ? 'pointer' : 'default' }}
      >
        {isExpanded && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0095FF]" />}

        <div className="w-8 flex-shrink-0 flex items-center" onClick={(e) => e.stopPropagation()}>
          <Checkbox checked={checked} onChange={onCheckChange} />
        </div>

        <div className="w-28 flex-shrink-0">
          <TaskTypeBadge type={type} />
        </div>

        <div className="flex-1 min-w-0 pl-8">
          <TextCell variant="primary" className="truncate">{task}</TextCell>
        </div>

        <div className="hidden sm:flex w-20 items-center justify-center">
          <StatusIndicator completed={checked} />
        </div>

        <div className="hidden sm:flex w-28 items-center gap-1.5">
          <img src={IMAGES.icons.calendar} alt="calendar" className="w-5 h-5" />
          <p className="font-normal text-sm leading-5" style={{ color: dateColor }}>
            {date}
          </p>
        </div>

        <div className="hidden sm:block w-32">
          <TextCell variant="secondary">{responsible}</TextCell>
        </div>

        <div className="w-6 flex-shrink-0 flex items-center justify-center">
          {taskId !== undefined && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            >
              <path
                d="M4 6L8 10L12 6"
                stroke={THEME.colors.text.secondary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      {isExpanded && (
        <>
          {type === 'Agricultura' && details ? (
            <ExpandedAgricultureRow details={details as AgricultureDetails} task={task} />
          ) : type === 'Sanidad' && details ? (
            <ExpandedSanidadRow details={details as SanidadDetails} task={task} />
          ) : (type === 'Estructura' || type === 'Ganadería' || type === 'Finanzas') && details ? (
            <ExpandedGenericRow details={details as GenericDetails} task={task} />
          ) : (
            <ExpandedRowDetails
              task={task}
              type={type}
              responsible={responsible}
              date={date}
              dateColor={dateColor}
              checked={checked}
            />
          )}
        </>
      )}
    </>
  );
}
