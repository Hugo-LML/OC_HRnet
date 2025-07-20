import { FC, SVGProps } from 'react';

export const ChevronDown: FC<SVGProps<SVGSVGElement>> = ({ color = '#000', ...props }) => {
  return (
    <svg width={7} height={4} viewBox='0 0 7 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M2.728 3.867.133 1.27A.454.454 0 1 1 .775.63L3.05 2.903 5.324.63a.454.454 0 1 1 .643.642L3.37 3.867a.454.454 0 0 1-.643 0Z'
        className='transition-all duration-500'
        fill={color}
      />
    </svg>
  );
};
