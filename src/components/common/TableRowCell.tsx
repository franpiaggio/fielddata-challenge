import { TABLE_COLUMN_WIDTHS } from '../../constants/theme.constants';
import { TextCell } from './TextCell';

interface TableRowCellProps {
  icon?: string;
  iconAlt?: string;
  children: React.ReactNode;
  width?: keyof typeof TABLE_COLUMN_WIDTHS;
  gap?: 'small' | 'medium';
}

export function TableRowCell({
  icon,
  iconAlt = '',
  children,
  width,
  gap = 'small'
}: TableRowCellProps) {
  const gapClass = gap === 'small' ? 'gap-1.5' : 'gap-2.5';
  const widthStyle = width ? { width: TABLE_COLUMN_WIDTHS[width] } : undefined;

  return (
    <div className={`flex items-center ${gapClass}`} style={widthStyle}>
      {icon && <img src={icon} alt={iconAlt} className="w-6 h-6" />}
      {typeof children === 'string' ? (
        <TextCell>{children}</TextCell>
      ) : (
        children
      )}
    </div>
  );
}
