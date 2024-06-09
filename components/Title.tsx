import clsx from "clsx";
import { PropsWithChildren } from "react";

type TitleProps = PropsWithChildren<JSX.IntrinsicElements["h2"]>;

export const Title = ({ children, ...props }: TitleProps) => {
  return (
    <h2
      {...props}
      className={clsx(
        "text-2xl mt-14 mb-10",
        "bg-gradient-to-r from-blue-400 to-blue-300 inline-block text-transparent bg-clip-text",
        props.className
      )}
    >
      {children}
    </h2>
  );
};
