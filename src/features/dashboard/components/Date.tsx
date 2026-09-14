import { useState } from "react";
import Input from "../../components/Input";

const DateComponent = () => {
  const [date, setDate] = useState("");
  const [compareDate, setCompareDate] = useState("");

  return (
    <div className="flex flex-col sm:flex-row gap-2 ml-0 sm:ml-4">
      <div className="bg-white primaryColorText shadow rounded-3xl px-4 py-1 border border-[#94B4C1] w-fit flex items-center h-[45px]">
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          inputClassName="w-[140px] text-[17px] font-[500] primaryColorText border-none bg-transparent cursor-pointer"
        />
      </div>
      <div className="bg-white primaryColorText shadow rounded-3xl px-4 py-1 border border-[#94B4C1] w-full sm:w-fit flex items-center h-[45px]">
        <span className="whitespace-nowrap mr-2 text-[17px] font-[500]">Compare to:</span>
        <Input
          type="date"
          value={compareDate}
          onChange={(e) => setCompareDate(e.target.value)}
          inputClassName="w-[140px] text-[17px] font-[500] primaryColorText border-none bg-transparent cursor-pointer"
        />
      </div>
    </div>
  );
};

export default DateComponent;