import { FC, ReactNode } from "react";

interface Props {
  className: string;
  onClick: () => void;
  children: ReactNode;
}

const Button: FC<Props> = ({ className, onClick, children }) => {
  return (
    <div className={className} onClick={onClick}>
      {children}{" "}
    </div>
  );
};
export default Button;
