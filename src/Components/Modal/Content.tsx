import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};
const ModalContent = ({ children, className }: Props) => {
  return (
    <div
      data-testid={'modal-content'}
      className={twMerge(
        'p-3 border-b border-l border-r border-grey-500 bg-white',
        className,
      )}
    >
      {children}
    </div>
  );
};
export default ModalContent;
