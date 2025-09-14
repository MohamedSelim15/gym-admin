import { Listbox } from "@headlessui/react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { useLocation } from "react-router-dom";


export default function Input({
  label,
  type,
  placeholder,
  value,
  onChange,
  options,
  withAdd,
  inputClassName,
  lableClassName,
  listClassName,
  flex = "col",
}) {
  const pathname = useLocation();
  const defaultListClassName =
    "w-full flex justify-between items-center border border-[#94B4C1] rounded-[10px] py-[17px] px-[23px] md:text-[18px] text-[14px] font-medium ";
  const defaultInputClassName =
    "border border-[#94B4C1] rounded-[10px] md:text-[18px] text-[14px] py-[7px] md:py-[17px] px-[11px] md:px-[23px] font-medium ";
  return (
    <div className="flex flex-col w-full">
      <label className={`${lableClassName} `}>{label}</label>

      {(type === "text" || type === "email" || type === "password") && (
        <input
          type={type}
          placeholder={placeholder}
          className={`
            ${inputClassName || defaultInputClassName} ${
            pathname.pathname === "/reviews"
              ? "ml-4 py-[5px] px-[23px] relative top-0 "
              : "py-[17px] px-[23px] font-medium"
          }
            transition-all duration-300 ease-in-out
            outline-none
            border border-[#94B4C1] rounded-[10px]
            py-[17px] px-[23px]
            text-[18px] font-medium
            hover:scale-102
            focus:scale-102 focus:border-[#213448] focus:shadow-[0_0_5px_rgba(33,52,72,0.5)]
            
          `}
          value={value}
          onChange={onChange}
        />
      )}

      {type === "select" && (
        <Listbox value={value} onChange={onChange}>
          {({ open }) => (
            <div className="relative">
              <Listbox.Button
                className={`
                  ${listClassName || defaultListClassName}
                  transition-all duration-300 ease-in-out
                  outline-none
                  hover:scale-102
                  focus:scale-102 focus:border-[#213448] focus:shadow-[0_0_5px_rgba(33,52,72,0.5)]
                  ${!value ? "text-[#7f7f7f]" : "text-[#15243F]"}
                `}
              >
                {value || `${placeholder || "Select an option"}`}
                {open ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </Listbox.Button>

              <Listbox.Options
                className={`absolute mt-2
                              ${
                                pathname.pathname === "/reviews"
                                  ? "w-[150px]"
                                  : "w-full"
                              }
               bg-white border p-[10px] border-gray-200 rounded-lg shadow-lg z-10`}
              >
                {options.map((option, index) => (
                  <Listbox.Option
                    key={index}
                    value={option}
                    className={({ active }) =>
                      `cursor-pointer flex justify-between items-center px-[10px] py-[5px] rounded-[10px] hover:text-[18px]  ${
                        active ? "bg-blue-100  " : "text-gray-700 "
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span>{option}</span>
                        {selected && (
                          <Check className="w-4 h-4 text-blue-600" />
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}

                {withAdd && (
                  <Listbox.Option
                    value="add_new"
                    className="cursor-pointer flex justify-between items-center px-4 py-2 text-gray-700"
                  >
                    + Add New Category
                  </Listbox.Option>
                )}
              </Listbox.Options>
            </div>
          )}
        </Listbox>
      )}
      {type === "date" && (
        <input
          type="date"
          className={`
      ${inputClassName || defaultInputClassName}
      bg-white
      text-[#15243F]
      transition-all duration-300 ease-in-out
      outline-none
      hover:scale-102
      focus:scale-102
      focus:border-[#213448]
      focus:shadow-[0_0_5px_rgba(33,52,72,0.5)]
    `}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
