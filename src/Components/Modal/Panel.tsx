import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};
const ModalPanel = ({ children, className }: Props) => {
  return (
    <div
      data-testid={'modal-panel'}
      className={twMerge('bg-blue-500 text-white p-3', className)}
    >
      {children}
    </div>
  );
};
export default ModalPanel;
