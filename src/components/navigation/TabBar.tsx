import { useTranslation } from 'react-i18next';
import { Tab } from './Tab';
import { useUIContext } from '../../hooks/useUIContext';
import { TabType } from '../../types/ui.types';

export function TabBar() {
  const { t } = useTranslation();
  const { activeTab, setActiveTab } = useUIContext();

  return (
    <div className="bg-white rounded-lg px-4 sm:px-5 py-3 flex gap-6 items-stretch overflow-x-auto">
      <Tab
        active={activeTab === TabType.ALL}
        onClick={() => setActiveTab(TabType.ALL)}
      >
        {t('tasks.allTasks')}
      </Tab>
      <Tab
        active={activeTab === TabType.USER}
        onClick={() => setActiveTab(TabType.USER)}
      >
        {t('tasks.myTasks')}
      </Tab>
    </div>
  );
}
