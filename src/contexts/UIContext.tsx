import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { TabType } from '../types/ui.types';

interface UIContextValue {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const UIContext = createContext<UIContextValue | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabType>('todas');

  return (
    <UIContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </UIContext.Provider>
  );
}
