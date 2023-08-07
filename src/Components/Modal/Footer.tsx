import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
  className?: string;
};
const ModalFooter = ({ children, className }: Props) => {
  return (
    <div
      data-testid={'modal-footer'}
      className={twMerge(
        'p-3 bg-white w-full border-l border-r border-b border-grey-500',
        className,
      )}
    >
      {children}
    </div>
  );
};
export default ModalFooter;
