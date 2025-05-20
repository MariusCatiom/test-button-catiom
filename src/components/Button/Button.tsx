import React, {FC, ReactNode} from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

const Button:FC<Props> = ({children}) => {

  const logFn = () => {
    console.log("buttonClicked")
  }

  return (
    <button
      type="button"
      onClick={logFn}
      style={{
        padding: '10px',
        background: 'red',
    }}>{children}</button>
  );
};

export default Button;