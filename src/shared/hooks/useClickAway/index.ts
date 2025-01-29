import React, { useEffect } from "react";

type IProps = {
  refElement: React.MutableRefObject<HTMLDivElement | null>;
  condition: boolean;
  setCondition: (value: boolean) => void;
};

export const useClickAway = ({
  refElement,
  condition,
  setCondition,
}: IProps) => {
  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        condition &&
        refElement.current &&
        !refElement.current.contains(e.target as HTMLElement)
      ) {
        setCondition(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [condition]);
};
