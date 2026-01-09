import type { SanidadDetails } from '../../types/task.types';
import { THEME } from '../../constants/theme.constants';

interface ExpandedSanidadRowProps {
  details: SanidadDetails;
}

export function ExpandedSanidadRow({ details }: ExpandedSanidadRowProps) {
  return (
    <div className="bg-[#f8f9fa] min-w-[768px]">
      {/* Content with proper left padding to align with row content */}
      <div className="pl-4 sm:pl-5 py-5 pr-4 sm:pr-5">
        {/* Inner container with left margin to account for checkbox + badge + gaps */}
        <div className="ml-[166px]">
          {/* Main Grid Section */}
          <div className="grid grid-cols-5 gap-x-6 gap-y-4 mb-6">
            {/* Column 1: FECHA */}
            <div>
              <div className="text-xs font-semibold mb-2 uppercase" style={{ color: THEME.colors.text.secondary }}>
                FECHA
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-400 rounded flex-shrink-0" />
                <span className="text-sm font-normal" style={{ color: THEME.colors.text.primary }}>
                  {details.date}
                </span>
              </div>
            </div>

            {/* Column 2: ANIMALES */}
            <div>
              <div className="text-xs font-semibold mb-2 uppercase" style={{ color: THEME.colors.text.secondary }}>
                ANIMALES
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-400 rounded flex-shrink-0" />
                <span className="text-sm font-normal" style={{ color: THEME.colors.text.primary }}>
                  {details.animals.quantity} {details.animals.type}
                </span>
              </div>
            </div>

            {/* Column 3: POTREROS */}
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

            {/* Column 4: PRODUCTOS */}
            <div>
              <div className="text-xs font-semibold mb-2 uppercase" style={{ color: THEME.colors.text.secondary }}>
                PRODUCTOS
              </div>
              <div className="flex flex-col gap-2">
                {details.products.map((product, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gray-400 rounded flex-shrink-0" />
                    <span className="text-sm font-normal" style={{ color: THEME.colors.text.primary }}>
                      {product.name} ({product.amount})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 5: CREADO POR */}
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

          {/* Notes Section */}
          {details.notes && (
            <div className="mb-6">
              <div className="flex gap-4">
                {/* Image placeholder */}
                <div className="w-16 h-16 bg-gray-400 rounded flex-shrink-0" />

                {/* Notes content */}
                <div className="flex-1">
                  <div className="text-xs font-semibold mb-2 uppercase" style={{ color: THEME.colors.text.secondary }}>
                    NOTAS
                  </div>
                  <p className="text-sm font-normal leading-5" style={{ color: THEME.colors.text.primary }}>
                    {details.notes}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
            <button
              className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
              style={{ color: THEME.colors.text.primary }}
            >
              <div className="w-5 h-5 bg-gray-400 rounded flex-shrink-0" />
              <span className="text-sm font-medium">Ver Orden</span>
            </button>

            <button
              className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
              style={{ color: THEME.colors.text.primary }}
            >
              <div className="w-5 h-5 bg-gray-400 rounded flex-shrink-0" />
              <span className="text-sm font-medium">Modificar</span>
            </button>

            <button
              className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
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
