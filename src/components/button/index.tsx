import './index.scss';

import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type InheritedProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'onClick'> &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'disabled'>;


export type ButtonProps = InheritedProps & {
    children?: React.ReactNode;

};


  export const Button: React.FC<ButtonProps> = ({children, type, onClick }) => {
    return (
        <>
           <button type={type}  onClick={onClick} > {children} </button>
        </>
      );
  };



    