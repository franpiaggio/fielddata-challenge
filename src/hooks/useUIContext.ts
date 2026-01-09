import { useContext } from 'react';
import { UIContext } from '../contexts/UIContext';

export function useUIContext() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUIContext must be used within UIProvider');
  }
  return context;
}
