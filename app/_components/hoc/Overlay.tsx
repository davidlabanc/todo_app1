import React from 'react';

interface OverlayProps {
  overlay: boolean;
  showOverlay: () => void;
  header: string;
  children: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = (props) => {
  if (props.overlay) {
    return (
      <>
        <div 
          className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 z-40" 
          onClick={() => props.showOverlay()}
          data-test="overlay"
        ></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-4/5 z-50 lg:w-2/5">
          <div className="bg-light-bg border-light-bg dark:bg-dark-bg dark:border-dark-border border rounded-2xl w-full p-10">
            <div className="flex justify-between items-center pb-5">
              <div className="text-black font-semibold text-lg dark:text-dark-header" data-test='overlay-header'>{props.header}</div>
              <svg
                onClick={() => props.showOverlay()}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-test='close-icon'
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            {props.children}
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Overlay;
