import { IMAGES } from '../../constants/images.constants';

export function AppHeader() {
  return (
    <header className="bg-white h-[72px] px-4 py-4 sticky top-0 z-10 flex items-center justify-center">
      <img src={IMAGES.logo} alt="FieldData" className="h-10 sm:h-12 w-auto" />
    </header>
  );
}
