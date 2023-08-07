import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Panel from './Panel';
import Content from './Content';
import { twMerge } from 'tailwind-merge';
import Footer from './Footer';

type Props = {
  open: boolean;
  children: ReactNode;
  className?: string;
  onClose: () => void;
};
const Modal = ({ open, className, children, onClose }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const [runAnimate, setRunAnimate] = useState<boolean>(false);
  const refTimeout = useRef<NodeJS.Timeout>();
  const contentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (open) {
      setIsOpen(open);
      refTimeout.current = setTimeout(() => {
        setRunAnimate(true);
      }, 100);
    } else {
      setRunAnimate(false);
    }
    return () => {
      clearTimeout(refTimeout.current);
    };
  }, [open]);

  useEffect(() => {
    if (!runAnimate) {
      refTimeout.current = setTimeout(() => {
        setIsOpen(false);
      }, 500);
    }
    return () => {
      clearTimeout(refTimeout.current);
    };
  }, [runAnimate]);

  const outSideClick = (event: any) => {
    if (
      contentRef.current &&
      !contentRef.current.contains(event.target) &&
      runAnimate
    ) {
      onClose && onClose();
    }
  };

  return (
    <>
      {isOpen &&
        createPortal(
          <div
            data-testid={'modal-container'}
            className={twMerge(
              'fixed top-0 left-0 z-[9999] w-full h-full border bg-[rgba(0,0,0,.45)] transition-all duration-500',
              runAnimate ? 'visible opacity-100' : 'invisible opacity-0',
            )}
            onClick={outSideClick}
          >
            <div
              className={
                'flex items-center justify-center w-full h-full overflow-auto'
              }
            >
              <div
                className={twMerge(
                  'max-w-[80%] max-h-[80%] min-w-[30vw] min-h-[30vh] transition-all duration-500',
                  runAnimate
                    ? 'translate-x-0 visible opacity-100'
                    : '-translate-x-[200%] invisible opacity-0',
                  className,
                )}
                ref={contentRef}
              >
                {children}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};
export default Object.assign(Modal, {
  Panel,
  Content,
  Footer,
});
