import classNames from "classnames";
import { useState } from "react";

const types = {
  primary: "bg-[#213448] text-white shadow-[0_0_5px_rgba(33,52,72,0.5)] ",
  outline:
    "border-[1px] border-[#213448] primaryColorText shadow-[0_0_5px_rgba(33,52,72,0.5)] ",
};
export default function Button({
  onClick,
  className,
  type,
  children,
  icon,
  iconClassName,
  enabled,
  setEnabled,
}) {
  function handleClick() {
    if (setEnabled) {
      setEnabled((prev) => !prev);
    }
  }
  return (
    <>
      {type === "toggle" ? (
        <div className="flex w-full sm:w-[75%] h-full gap-[10px] flex-col sm:flex-row sm:gap-[20px] items-center">
          <button
            onClick={handleClick}
            className={`${className}
      ${enabled ? "bg-[#213448]" : "bg-white"}
      border border-[#213448] rounded-full
      shadow-[0_0_5px_rgba(33,52,72,0.5)]
      relative inline-flex items-center
      transition-colors duration-300
      w-5 h-5 sm:w-12 sm:h-6 md:w-14 md:h-7`}
          >
            <span
              className={`inline-block h-4 w-4 rounded-full transform transition duration-300
        ${
          enabled
            ? "sm:translate-x-8 md:translate-x-8.5 translate-x-10 bg-white"
            : "translate-x-0.5 bg-[#213448]"
        }`}
            />
          </button>
          <p className="text-[#213448] text-[12px] sm:text-[18px]">
            Allow Comments
          </p>
        </div>
      ) : (
        <button
          className={classNames(types[type], className)}
          onClick={onClick}
        >
          {icon && (
            <span className={classNames("w-5 h-5", iconClassName)}>{icon}</span>
          )}
          {children}
        </button>
      )}
    </>
  );
}
