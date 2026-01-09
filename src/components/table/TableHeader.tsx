import { useTranslation } from 'react-i18next';
import { THEME } from '../../constants/theme.constants';

interface TableHeaderProps {
  count: number;
}

export function TableHeader({ count }: TableHeaderProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-[#f8f9fa] h-12 flex items-center pl-4 sm:pl-5 pr-2.5 rounded-t-lg border-b border-gray-200">
      <div className="w-8 flex-shrink-0"></div>
      <div className="w-28 flex-shrink-0">
        <span
          className="font-sans font-semibold text-xs leading-5 uppercase"
          style={{ color: THEME.colors.text.secondary }}
        >
          Tipo
        </span>
      </div>
      <span
        className="font-sans font-semibold text-xs leading-5 uppercase flex-1 pl-8"
        style={{ color: THEME.colors.text.secondary }}
      >
        {t('tasks.task')}
      </span>
      <span
        className="hidden sm:block font-sans font-semibold text-xs leading-5 uppercase w-20 text-center"
        style={{ color: THEME.colors.text.secondary }}
      >
        Estado
      </span>
      <span
        className="hidden sm:block font-sans font-semibold text-xs leading-5 uppercase w-28"
        style={{ color: THEME.colors.text.secondary }}
      >
        {t('tasks.date')}
      </span>
      <span
        className="hidden sm:block font-sans font-semibold text-xs leading-5 uppercase w-32"
        style={{ color: THEME.colors.text.secondary }}
      >
        {t('tasks.responsible')}
      </span>
      <div className="w-6 flex-shrink-0"></div>
    </div>
  );
}
