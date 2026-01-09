import { THEME } from '../../constants/theme.constants';

interface ChevronIconProps {
  direction?: 'up' | 'down';
  color?: string;
  size?: number;
  className?: string;
}

export function ChevronIcon({
  direction = 'down',
  color = THEME.colors.text.secondary,
  size = 16,
  className = '',
}: ChevronIconProps) {
  const rotation = direction === 'up' ? 'rotate-180' : '';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${rotation} ${className}`}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
