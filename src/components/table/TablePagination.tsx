import { THEME } from '../../constants/theme.constants';

interface TablePaginationProps {
  onLoadMore: () => void;
  hasMore: boolean;
}

export function TablePagination({
  onLoadMore,
  hasMore
}: TablePaginationProps) {
  if (!hasMore) return null;

  return (
    <div className="bg-[rgb(105_117_134_/_0.08)] h-12 pl-4 sm:pl-5 pr-2.5 flex items-center justify-center rounded-b-lg">
      <button
        onClick={onLoadMore}
        className="font-semibold text-sm hover:underline transition-colors"
        style={{ color: THEME.colors.primary as any }}
      >
        Cargar más
      </button>
    </div>
  );
}
