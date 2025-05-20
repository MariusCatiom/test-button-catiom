import React, {FC, ReactNode} from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

const Button:FC<Props> = ({children}) => {
  return (
    <button onClick={() => {
      console.log("button clicked")
    }} style={{
      padding: '10px',
    }}>{children}</button>
  );
};

export default Button;