import { useTranslation } from 'react-i18next';
import { Tab } from './Tab';
import { useUIContext } from '../../hooks/useUIContext';
import { IMAGES } from '../../constants/images.constants';

export function TabBar() {
  const { t } = useTranslation();
  const { activeTab, setActiveTab } = useUIContext();

  return (
    <div className="bg-white rounded-lg px-4 sm:px-5 py-3 flex gap-6 items-stretch overflow-x-auto">
      <Tab
        active={activeTab === 'todas'}
        onClick={() => setActiveTab('todas')}
        icon={IMAGES.tabs.allTasks}
      >
        {t('tasks.allTasks')}
      </Tab>
      <Tab
        active={activeTab === 'mis'}
        onClick={() => setActiveTab('mis')}
      >
        {t('tasks.myTasks')}
      </Tab>
    </div>
  );
}
