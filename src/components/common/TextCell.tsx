import { THEME } from '../../constants/theme.constants';

interface TextCellProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'muted';
  className?: string;
}

export function TextCell({ children, variant = 'primary', className = '' }: TextCellProps) {
  const colors = {
    primary: THEME.colors.text.primary,
    secondary: THEME.colors.text.secondary,
    muted: THEME.colors.text.secondaryMuted,
  };

  return (
    <p
      className={`font-normal text-sm leading-5 ${className}`}
      style={{ color: colors[variant] }}
    >
      {children}
    </p>
  );
}
