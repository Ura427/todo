import React from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  id: number;
  text: string;
  status: boolean;
  variant: CardVariant;
  onClick?: () => void;
  children?: React.ReactNode;
  //   children?: JSX.Element | JSX.Element[];
}

const Card: React.FC<CardProps> = ({ id, text, status, variant, onClick, children }) => {
  return (
    <div
      style={{
        backgroundColor: "grey",
        border: variant === CardVariant.outlined ? "1px solid grey" : "none",
        background: variant === CardVariant.primary ? "lightgrey" : "none",
      }}
      onClick={onClick}
    >
      {id}: {text} {status === true ? "done" : "in progress"}
      {children}
    </div>
  );
};

export default Card;
