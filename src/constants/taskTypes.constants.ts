import type { TaskType } from '../types/task.types';
import structureIcon from '../assets/icons/task-types/structure.svg';
import agricultureIcon from '../assets/icons/task-types/agriculture.svg';
import healthIcon from '../assets/icons/task-types/health.svg';
import livestockIcon from '../assets/icons/task-types/livestock.svg';
import financeIcon from '../assets/icons/task-types/finance.svg';

export const TASK_TYPE_CONFIG: Record<TaskType, {
  translationKey: string;
  icon: string;
  colors: {
    bg: string;
    border: string;
    textColor: string;
  };
}> = {
  estructura: {
    translationKey: 'taskTypes.structure',
    icon: structureIcon,
    colors: {
      bg: 'rgba(0, 149, 255, 0.16)',
      border: '#0095ff',
      textColor: '#0095ff',
    },
  },
  agricultura: {
    translationKey: 'taskTypes.agriculture',
    icon: agricultureIcon,
    colors: {
      bg: 'rgba(0, 128, 42, 0.16)',
      border: '#00802a',
      textColor: '#00802a',
    },
  },
  sanidad: {
    translationKey: 'taskTypes.health',
    icon: healthIcon,
    colors: {
      bg: 'rgba(138, 56, 245, 0.15)',
      border: '#8a38f5',
      textColor: '#8a38f5',
    },
  },
  ganaderia: {
    translationKey: 'taskTypes.livestock',
    icon: livestockIcon,
    colors: {
      bg: 'rgba(127, 68, 0, 0.15)',
      border: '#7f4400',
      textColor: '#7f4400',
    },
  },
  finanzas: {
    translationKey: 'taskTypes.finance',
    icon: financeIcon,
    colors: {
      bg: 'rgba(0, 119, 173, 0.15)',
      border: '#0077ad',
      textColor: '#0077ad',
    },
  },
};
