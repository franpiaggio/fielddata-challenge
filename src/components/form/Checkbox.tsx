import { IMAGES } from '../../constants/images.constants';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function Checkbox({ checked = false, onChange, className = '' }: CheckboxProps) {
  const handleClick = () => {
    onChange?.(!checked);
  };

  return (
    <div
      className={`relative w-6 h-6 cursor-pointer ${className}`}
      onClick={handleClick}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <img
        className="w-full h-full"
        alt=""
        src={checked ? IMAGES.checkbox.checked : IMAGES.checkbox.default}
      />
      {checked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            className="w-4 h-4"
            alt="checked"
            src={IMAGES.checkbox.checkmark}
          />
        </div>
      )}
    </div>
  );
}
