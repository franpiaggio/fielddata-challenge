import { useTranslation } from 'react-i18next';
import { THEME } from '../../constants/theme.constants';

interface TableBadgeProps {
  count: number;
  variant: 'pending' | 'completed';
}

export function TableBadge({ count, variant }: TableBadgeProps) {
  const { t } = useTranslation();

  const variantStyles = {
    pending: {
      badgeBg: THEME.colors.status.pending.text,
      textColor: THEME.colors.status.pending.text,
      label: t('tasks.pending'),
    },
    completed: {
      badgeBg: THEME.colors.status.completed.text,
      textColor: THEME.colors.status.completed.text,
      label: t('tasks.completed'),
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className="flex items-center gap-2">
      <div
        className="text-white rounded-full w-6 h-6 flex items-center justify-center font-roboto font-medium text-xs leading-6"
        style={{ backgroundColor: styles.badgeBg }}
      >
        {count}
      </div>
      <span
        className="font-roboto font-medium text-xs leading-6 whitespace-nowrap"
        style={{ color: styles.textColor }}
      >
        {styles.label}
      </span>
    </div>
  );
}
