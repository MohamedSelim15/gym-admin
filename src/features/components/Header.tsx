import { useLocation } from "react-router-dom";

interface HeaderProps {
  pageName: string;
  pageLogo: string;
  buttonText?: string;
  buttonClassName?: string;
  onButtonClick?: () => void;
  width?: string;
}

export default function Header({
  pageName,
  pageLogo,
  buttonText,
  buttonClassName,
  onButtonClick,
  width="w-[135px]",
}: HeaderProps) {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col xl:space-y-0 space-y-10 xl:flex-row justify-between items-center w-full mb-20 primaryColorText">
      <div className="text-2xl font-medium">
        <i className={`${pageLogo} mr-2`}></i>
        {pageName}
      </div>

      <div className="relative">
        <i className="fa-solid fa-magnifying-glass mr-2 absolute left-2 top-2.5"></i>
        <input
          className="border-1 border-[#213448] rounded-2xl pl-10 px-4 py-1"
          type="search"
          placeholder="Search"
        />
      </div>

      <div>
        <button
          onClick={onButtonClick}
          className={`bg-[#C9D36A] h-[50px]
          ${width} rounded-3xl cursor-pointer `}
        >
          <span className={`${buttonClassName}`}>{buttonText}</span>
        </button>
      </div>
    </div>
  );
}
