import { THEME } from '../../constants/theme.constants';

interface PaginationButtonProps {
  onClick: () => void;
  disabled: boolean;
  icon: string;
  iconAlt: string;
  label: string;
  direction: 'previous' | 'next';
}

export function PaginationButton({
  onClick,
  disabled,
  icon,
  iconAlt,
  label,
  direction
}: PaginationButtonProps) {
  const textColor = disabled
    ? THEME.colors.text.secondaryMuted
    : THEME.colors.text.primary;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-2 h-8 px-3 py-1.5 rounded cursor-pointer max-w-[292px] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {direction === 'previous' && (
        <img src={icon} alt={iconAlt} className="w-5 h-5 rotate-180" />
      )}
      <span
        className="font-sans font-medium text-xs leading-5"
        style={{ color: textColor }}
      >
        {label}
      </span>
      {direction === 'next' && (
        <img src={icon} alt={iconAlt} className="w-5 h-5" />
      )}
    </button>
  );
}
