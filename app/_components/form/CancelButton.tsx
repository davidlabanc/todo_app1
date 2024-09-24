import React from "react";

type Props = {
  onClick?: () => void;
  text: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  css?: string;
};

export default function CancelButton({
  onClick,
  text = "cancel",
  type = "reset",
  css,
}: Props) {
  return (
    <button
      type={type}
      className={`text-buttons-submit dark:text-buttons-cancel font-semibold pr-5 ${css}`}
      onClick={onClick}
      data-test='cancel-button'
    >
      {text}
    </button>
  );
}
