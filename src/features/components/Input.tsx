import { Listbox } from "@headlessui/react";
import { Check, ChevronDown, ChevronUp, Calendar } from "lucide-react";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface InputProps {
  label?: string;
  type: "text" | "email" | "password" | "select" | "date";
  placeholder?: string;
  value: string;
  onChange: (value: any) => void;
  options?: string[];
  withAdd?: boolean;
  inputClassName?: string;
  labelClassName?: string;
  listClassName?: string;
  flex?: "row" | "col";
}

export default function Input({
  label,
  type,
  placeholder,
  value,
  onChange,
  options,
  withAdd,
  inputClassName,
  labelClassName,
  listClassName,
  flex = "col",
}: InputProps) {
  const pathname = useLocation();
  const defaultListClassName =
    "w-full flex justify-between items-center border border-[#94B4C1] rounded-[10px] py-[17px] px-[23px] md:text-[18px] text-[14px] font-medium ";
  const defaultInputClassName =
    "border border-[#94B4C1] rounded-[10px] md:text-[18px] text-[14px] py-[7px] md:py-[17px] px-[11px] md:px-[23px] font-medium ";
  return (
    <div className="flex flex-col w-full">
      {label && <label className={`${labelClassName} `}>{label}</label>}

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
      {type === "textarea" && (
        <textarea
          placeholder={placeholder}
          className={`
      ${inputClassName || defaultInputClassName}
      whitespace-normal break-words resize-none
      transition-all duration-300 ease-in-out
      outline-none
      hover:scale-102
      focus:scale-102 focus:border-[#213448] focus:shadow-[0_0_5px_rgba(33,52,72,0.5)]
    `}
          value={value}
          onChange={onChange}
          rows={4} // default height
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
                  <ChevronUp className="w-5 h-5  text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5  text-gray-500" />
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
        <div className="w-full relative custom-datepicker-wrapper flex items-center">
          <DatePicker
            selected={value ? new Date(value) : null}
            onChange={(date: Date | null) => {
              if (date) {
                // Adjust for local time zone to avoid date shifting
                const offset = date.getTimezoneOffset() * 60000;
                const localDate = new Date(date.getTime() - offset);
                onChange({ target: { value: localDate.toISOString().split("T")[0] } });
              } else {
                onChange({ target: { value: "" } });
              }
            }}
            placeholderText={placeholder || "mm/dd/yyyy"}
            className={`
              ${inputClassName || defaultInputClassName}
              w-full
              bg-white
              text-[#15243F]
              transition-all duration-300 ease-in-out
              outline-none
              hover:scale-102
              focus:scale-102
              focus:border-[#213448]
              focus:shadow-[0_0_5px_rgba(33,52,72,0.5)]
              pr-10
            `}
            wrapperClassName="w-full"
            dateFormat="yyyy-MM-dd"
          />
          <Calendar className="absolute right-4 w-5 h-5 text-gray-600 pointer-events-none" />
        </div>
      )}
    </div>
  );
}
