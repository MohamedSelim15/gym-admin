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
  flex="col",
}) {

  const pathname = useLocation();
  return (
    <div className={`flex flex-${flex} w-full `}>
      <label className="inputLabel mb-2">{label}</label>

      {type === "text" && (
        <input
          type={type}
          placeholder={placeholder}
          className=" 
            border border-[#94B4C1] rounded-[10px] 
            py-[17px] px-[23px] 
            text-[18px] font-medium
            transition-all duration-300 ease-in-out
            outline-none
            hover:scale-102
            focus:scale-102 focus:border-[#213448] focus:shadow-[0_0_5px_rgba(33,52,72,0.5)]
          "
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
                  w-full flex justify-between items-center
                  border border-[#94B4C1] rounded-[10px] 
                ${pathname.pathname === "/reviews" ? "ml-4 py-[5px] px-[23px] relative top-0 " : "py-[17px] px-[23px] font-medium"}
                  text-[18px] font-
                  transition-all duration-300 ease-in-out
                  outline-none
                  hover:scale-102
                  focus:scale-102 focus:border-[#213448] focus:shadow-[0_0_5px_rgba(33,52,72,0.5)]
                  ${!value ? "text-[#7f7f7f]" : "text-[#15243F]"}
                `}
              >
                {value || "Select category"}
                {open ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </Listbox.Button>

              <Listbox.Options className={`absolute mt-2
                              ${pathname.pathname === "/reviews" ? "w-[150px]" : "w-full"}
               bg-white border p-[10px] border-gray-200 rounded-lg shadow-lg z-10`}>
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
    </div>
  );
}
