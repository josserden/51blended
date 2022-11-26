import React, {
  FC,
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from 'react';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className='inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md'
      {...props}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5 mr-2'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6'
        />
      </svg>

      {children}
    </button>
  );
};
