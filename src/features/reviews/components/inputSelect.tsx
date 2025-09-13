import { Listbox } from "@headlessui/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const InputSelect = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (filter: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  return (
    <div
      onClick={toggleOpen}
      className="flex flex-col transition-all duration-300 ease-in-out"
    >
      <Listbox value={filter} onChange={setFilter}>
        <div className="relative mt-1 w-60">
          <Listbox.Button
            className={`relative w-[100px] sm:w-[140px] xl:left-0 left-15 cursor-pointer rounded-lg border border-gray-300 bg-white py-2 pl-5  text-left shadow-md focus:outline-none ${
              !filter ? "text-gray-400" : "text-gray-900"
            }`}
          >
            {filter || "All"}
            {open ? (
              <ChevronUp className="absolute right-2 top-2 h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="absolute right-2 top-2 h-5 w-5 text-gray-500" />
            )}
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            {["All", "Positive", "Negative", "Neutral"].map((option) => (
              <Listbox.Option
                key={option}
                value={option}
                className={({ active }) =>
                  `cursor-pointer select-none py-2 pl-4 pr-4 ${
                    active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                  }`
                }
              >
                {option}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};
