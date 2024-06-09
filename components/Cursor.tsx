"use client";
import { useEffect, useRef } from "react";

export const Cursor = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.onpointermove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      ref.current?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 2000, fill: "forwards" }
      );
    };

    document.body.onclick = () => {
      ref.current?.classList.add("scale-125");
      setTimeout(() => {
        ref.current?.classList.remove("scale-125");
      }, 100);
    };
  }, [ref]);

  return (
    <>
      <div className="cursor fixed size-full inset-0 bg-[#060016] ">
        <div
          ref={ref}
          className="relative w-[320px] aspect-square  left-[-50px] top-[-50px] translate-x-[-50%] translate-y-[-50%] rounded-full bg-gradient-to-r from-indigo-500 to-teal-500 animate-bg-rotate"
        />
        <div className="absolute inset-0 z-20 backdrop-blur-[120px]"></div>
      </div>
    </>
  );
};
