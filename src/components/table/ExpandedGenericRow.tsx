import type { GenericDetails } from '../../types/task.types';
import { THEME } from '../../constants/theme.constants';

interface ExpandedGenericRowProps {
  details: GenericDetails;
  task?: string;
}

export function ExpandedGenericRow({ details, task }: ExpandedGenericRowProps) {
  return (
    <div className="bg-[#f8f9fa]">
      <div className="pl-4 sm:pl-5 py-5 pr-4 sm:pr-5">
        <div className="ml-0 sm:ml-[166px]">
        {task && (
          <div className="sm:hidden mb-4">
            <div className="text-xs font-semibold mb-2 uppercase" style={{ color: THEME.colors.text.secondary }}>
              TAREA
            </div>
            <p className="text-sm font-normal leading-5" style={{ color: THEME.colors.text.primary }}>
              {task}
            </p>
          </div>
        )}
          <div className="flex flex-col lg:flex-row gap-8 mb-6">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="w-16 h-16 bg-gray-400 rounded flex-shrink-0" />

              <div className="flex-1">
                <div className="text-xs font-semibold mb-2 uppercase" style={{ color: THEME.colors.text.secondary }}>
                  NOTAS
                </div>
                <p className="text-sm font-normal leading-5" style={{ color: THEME.colors.text.primary }}>
                  {details.notes}
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div>
                <div className="text-xs font-semibold mb-2 uppercase" style={{ color: THEME.colors.text.secondary }}>
                  POTREROS
                </div>
                <div className="flex flex-col gap-2">
                  {details.fields.map((field, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-gray-400 rounded flex-shrink-0" />
                      <span className="text-sm font-normal" style={{ color: THEME.colors.text.primary }}>
                        {field.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold mb-2 uppercase" style={{ color: THEME.colors.text.secondary }}>
                  CREADO POR
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gray-400 rounded-full flex-shrink-0" />
                  <span className="text-sm font-normal" style={{ color: THEME.colors.text.primary }}>
                    {details.createdBy}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-end gap-2 sm:gap-4 pt-4 border-t border-gray-200">
            <button
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded hover:bg-gray-100 transition-colors"
              style={{ color: THEME.colors.text.primary }}
            >
              <div className="w-5 h-5 bg-gray-400 rounded flex-shrink-0" />
              <span className="text-sm font-medium">Ver Orden</span>
            </button>

            <button
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded hover:bg-gray-100 transition-colors"
              style={{ color: THEME.colors.text.primary }}
            >
              <div className="w-5 h-5 bg-gray-400 rounded flex-shrink-0" />
              <span className="text-sm font-medium">Modificar</span>
            </button>

            <button
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded hover:bg-gray-100 transition-colors"
              style={{ color: THEME.colors.text.primary }}
            >
              <div className="w-5 h-5 bg-gray-400 rounded flex-shrink-0" />
              <span className="text-sm font-medium">Borrar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
