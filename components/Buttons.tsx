import { ReactNode, HTMLAttributes, FC } from "react";
import cn from 'classnames';

const DEFAULT = 'border border-solid border-transparent focus:outline-none';

const STYLES = {
  primary: 'text-white bg-indigo-500 hover:bg-indigo-600',
  secondary: 'text-white bg-red-400 hover:bg-red-500',
};

type StylesType = typeof STYLES

type Props = {
  color: keyof StylesType,
  children?: ReactNode
  className: string,
}& HTMLAttributes<HTMLButtonElement>;


const Button:FC<Props> = ({ color, children, className, ...props }) => {
  const classNames = cn([className, DEFAULT, STYLES[color]]);

  return (
    <button type="button" {...props} className={classNames}>
      {children}
    </button>
  );
};

export default Button;