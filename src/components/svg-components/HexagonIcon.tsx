import React, { FC } from 'react';

interface IProps {
  color: string;
}

const HexagonIcon: FC<IProps> = ({ color }) => {
  return (
    <svg data-id='tag-decoration' viewBox='0 0 13.012 13.581'>
      <path
        d='M10.643,2.259,6.634.649A1.99,1.99,0,0,0,4.664.93L1.263,3.6A1.993,1.993,0,0,0,.522,5.444l.61,4.278A1.99,1.99,0,0,0,2.36,11.288L6.37,12.9a1.99,1.99,0,0,0,1.97-.281l3.4-2.667A1.989,1.989,0,0,0,12.482,8.1l-.61-4.278A1.99,1.99,0,0,0,10.643,2.26Z'
        transform='translate(0.004 0.017)' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1' fill={color} />
    </svg>
  );
};

export default HexagonIcon;