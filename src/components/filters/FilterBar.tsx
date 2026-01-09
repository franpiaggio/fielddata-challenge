import { THEME } from '../../constants/theme.constants';

export type FilterStatus = 'all' | 'pending' | 'completed';

interface FilterBarProps {
  selectedStatus: FilterStatus;
  selectedResponsible: string;
  selectedType: string;
  responsibleOptions: string[];
  typeOptions: string[];
  searchQuery: string;
  disableResponsibleFilter?: boolean;
  onStatusChange: (status: FilterStatus) => void;
  onResponsibleChange: (responsible: string) => void;
  onTypeChange: (type: string) => void;
  onSearchChange: (query: string) => void;
}

export function FilterBar({
  selectedStatus,
  selectedResponsible,
  selectedType,
  responsibleOptions,
  typeOptions,
  searchQuery,
  disableResponsibleFilter = false,
  onStatusChange,
  onResponsibleChange,
  onTypeChange,
  onSearchChange
}: FilterBarProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 sm:flex-[2]">
          <label
            className="block text-xs font-semibold mb-2 uppercase"
            style={{ color: THEME.colors.text.secondary }}
          >
            Buscar
          </label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar tarea..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{ color: THEME.colors.text.primary }}
          />
        </div>

        <div className="flex-1">
          <label
            className="block text-xs font-semibold mb-2 uppercase"
            style={{ color: THEME.colors.text.secondary }}
          >
            Tipo
          </label>
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{ color: THEME.colors.text.primary }}
          >
            <option value="all">Todos</option>
            {typeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label
            className="block text-xs font-semibold mb-2 uppercase"
            style={{ color: THEME.colors.text.secondary }}
          >
            Estado
          </label>
          <select
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value as FilterStatus)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{ color: THEME.colors.text.primary }}
          >
            <option value="all">Todas</option>
            <option value="pending">Pendientes</option>
            <option value="completed">Completadas</option>
          </select>
        </div>

        <div className="flex-1">
          <label
            className="block text-xs font-semibold mb-2 uppercase"
            style={{ color: THEME.colors.text.secondary }}
          >
            Responsable
          </label>
          <select
            value={selectedResponsible}
            onChange={(e) => onResponsibleChange(e.target.value)}
            disabled={disableResponsibleFilter}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${disableResponsibleFilter ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''}`}
            style={{ color: THEME.colors.text.primary }}
          >
            <option value="all">Todos</option>
            {responsibleOptions.map((responsible) => (
              <option key={responsible} value={responsible}>
                {responsible}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
