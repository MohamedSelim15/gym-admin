import classNames from "classnames";

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
}) {
  return (
    <button className={classNames(types[type], className)} onClick={onClick}>
      {icon && (
        <span className={classNames("w-5 h-5", iconClassName)}>{icon}</span>
      )}
      {children}
    </button>
  );
}
