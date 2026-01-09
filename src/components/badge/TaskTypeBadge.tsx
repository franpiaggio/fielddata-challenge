import { useTranslation } from 'react-i18next';
import type { TaskType } from '../../types/task.types';
import { TASK_TYPE_CONFIG } from '../../constants/taskTypes.constants';

interface TaskTypeBadgeProps {
  type: TaskType;
  className?: string;
}

export function TaskTypeBadge({ type, className = '' }: TaskTypeBadgeProps) {
  const { t } = useTranslation();
  const config = TASK_TYPE_CONFIG[type];

  return (
    <div
      className={`flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-md border-[1.5px] whitespace-nowrap ${className}`}
      style={{
        backgroundColor: config.colors.bg,
        borderColor: config.colors.border,
      }}
    >
      <img src={config.icon} alt={t(config.translationKey)} className="w-4 h-4 flex-shrink-0" />
      <span
        className="font-roboto text-xs font-semibold leading-5 hidden sm:inline"
        style={{ color: config.colors.textColor }}
      >
        {t(config.translationKey)}
      </span>
    </div>
  );
}
