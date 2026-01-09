export const TabType = {
  ALL: 'all',
  USER: 'user',
} as const;

export type TabType = (typeof TabType)[keyof typeof TabType];

export interface TableHeaderConfig {
  label: string;
  width: string;
}
