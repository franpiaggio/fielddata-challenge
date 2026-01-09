import type { ReactNode } from 'react';

interface TabProps {
  active: boolean;
  onClick: () => void;
  icon?: string;
  children: ReactNode;
}

export function Tab({ active, onClick, icon, children }: TabProps) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center gap-2 px-2 py-2 cursor-pointer relative
        transition-colors border-b-[3px]
        ${active ? 'border-b-primary' : 'border-b-transparent'}
      `}
    >
      {icon && <img src={icon} alt="" className="w-5 h-5" />}
      <span
        className="font-sans text-sm font-medium leading-5"
        style={{ color: active ? '#364152' : '#697586' }}
      >
        {children}
      </span>
    </div>
  );
}
