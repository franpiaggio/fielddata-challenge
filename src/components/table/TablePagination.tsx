import { useTranslation } from 'react-i18next';
import { IMAGES } from '../../constants/images.constants';
import { PaginationButton } from '../common';

interface TablePaginationProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export function TablePagination({
  onPrevious,
  onNext,
  hasPrevious,
  hasNext
}: TablePaginationProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-[rgb(105_117_134_/_0.08)] h-12 pl-4 sm:pl-5 pr-2.5 flex items-center justify-end gap-6 rounded-b-lg min-w-[768px]">
      <PaginationButton
        onClick={onPrevious}
        disabled={!hasPrevious}
        icon={IMAGES.icons.arrowLeft}
        iconAlt="previous"
        label={t('tasks.previous')}
        direction="previous"
      />

      <PaginationButton
        onClick={onNext}
        disabled={!hasNext}
        icon={IMAGES.icons.arrowRight}
        iconAlt="next"
        label={t('tasks.next')}
        direction="next"
      />
    </div>
  );
}
