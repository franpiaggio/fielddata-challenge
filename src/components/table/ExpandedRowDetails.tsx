import type { TaskType } from '../../types/task.types';
import { THEME } from '../../constants/theme.constants';

interface ExpandedRowDetailsProps {
  task: string;
  type: TaskType;
  responsible: string;
  date: string;
  dateColor: string;
  checked: boolean;
}

export function ExpandedRowDetails({
  task,
  type,
  responsible,
  date,
  dateColor,
  checked
}: ExpandedRowDetailsProps) {
  return (
    <div className="bg-[#f8f9fa] border-t border-neutral-light pl-4 sm:pl-5 pr-2.5 py-4">
      <div className="max-w-[900px]">
        <div className="mb-3">
          <h4 className="font-semibold text-sm mb-2" style={{ color: THEME.colors.text.primary }}>
            Detalles de la tarea
          </h4>
          <p className="font-normal text-sm leading-5" style={{ color: THEME.colors.text.secondary }}>
            Información adicional sobre la tarea "{task}". Esta sección muestra detalles expandidos cuando la fila está desplegada.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-xs font-medium" style={{ color: THEME.colors.text.secondary }}>Tipo:</span>
            <p className="text-sm mt-1" style={{ color: THEME.colors.text.primary }}>{type}</p>
          </div>
          <div>
            <span className="text-xs font-medium" style={{ color: THEME.colors.text.secondary }}>Responsable:</span>
            <p className="text-sm mt-1" style={{ color: THEME.colors.text.primary }}>{responsible}</p>
          </div>
          <div>
            <span className="text-xs font-medium" style={{ color: THEME.colors.text.secondary }}>Fecha:</span>
            <p className="text-sm mt-1" style={{ color: dateColor }}>{date}</p>
          </div>
          <div>
            <span className="text-xs font-medium" style={{ color: THEME.colors.text.secondary }}>Estado:</span>
            <p className="text-sm mt-1" style={{ color: THEME.colors.text.primary }}>
              {checked ? 'Completada' : 'Pendiente'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
