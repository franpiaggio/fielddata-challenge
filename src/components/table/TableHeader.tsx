import { useTranslation } from 'react-i18next';
import { THEME, TABLE_COLUMN_WIDTHS } from '../../constants/theme.constants';
import { TableBadge } from './TableBadge';

interface TableHeaderProps {
  variant: 'pending' | 'completed';
  count: number;
}

export function TableHeader({ variant, count }: TableHeaderProps) {
  const { t } = useTranslation();

  const bgColor = variant === 'pending' ? 'bg-[#fef6e7]' : 'bg-[#e8f5e9]';

  return (
    <div className={`${bgColor} h-10 flex items-center gap-2.5 pl-4 sm:pl-5 pr-2.5 rounded-t-lg min-w-[768px]`}>
      <div className="w-48">
        <TableBadge count={count} variant={variant} />
      </div>
      <span
        className="font-sans font-semibold text-xs leading-5 uppercase flex-1"
        style={{ color: THEME.colors.text.secondary }}
      >
        {t('tasks.task')}
      </span>
      <span
        className="font-sans font-semibold text-xs leading-5 uppercase w-32"
        style={{ color: THEME.colors.text.secondary }}
      >
        {t('tasks.date')}
      </span>
      <span
        className="font-sans font-semibold text-xs leading-5 uppercase w-32"
        style={{ color: THEME.colors.text.secondary }}
      >
        {t('tasks.responsible')}
      </span>
      <div className="w-6"></div>
    </div>
  );
}
