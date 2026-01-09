import type { TaskType, AgricultureDetails, SanidadDetails, GenericDetails } from '../../types/task.types';
import { ExpandedRowDetails } from './ExpandedRowDetails';
import { ExpandedAgricultureRow } from './ExpandedAgricultureRow';
import { ExpandedSanidadRow } from './ExpandedSanidadRow';
import { ExpandedGenericRow } from './ExpandedGenericRow';

interface ExpandedRowContentProps {
  type: TaskType;
  task: string;
  details?: AgricultureDetails | SanidadDetails | GenericDetails;
  responsible: string;
  date: string;
  dateColor: string;
  checked: boolean;
}

const GENERIC_TYPES: TaskType[] = ['estructura', 'ganaderia', 'finanzas'];

export function ExpandedRowContent({
  type,
  task,
  details,
  responsible,
  date,
  dateColor,
  checked,
}: ExpandedRowContentProps) {
  if (!details) {
    return (
      <ExpandedRowDetails
        task={task}
        type={type}
        responsible={responsible}
        date={date}
        dateColor={dateColor}
        checked={checked}
      />
    );
  }

  switch (type) {
    case 'agricultura':
      return <ExpandedAgricultureRow details={details as AgricultureDetails} task={task} />;

    case 'sanidad':
      return <ExpandedSanidadRow details={details as SanidadDetails} task={task} />;

    default:
      if (GENERIC_TYPES.includes(type)) {
        return <ExpandedGenericRow details={details as GenericDetails} task={task} />;
      }

      return (
        <ExpandedRowDetails
          task={task}
          type={type}
          responsible={responsible}
          date={date}
          dateColor={dateColor}
          checked={checked}
        />
      );
  }
}
