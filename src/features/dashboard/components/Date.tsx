import Input from "../../components/Input";


const Date = () => {
  return (
              <div className="flex flex-col sm:flex-row gap-2 ml-0 sm:ml-4">
            <div className="bg-white primaryColorText shadow rounded-3xl px-4 py-2 border border-[#94B4C1] w-fit">
              {/* <i className="fa-regular fa-calendar mr-1"></i>
              <span>Today</span> */}
              <Input
                type="date"
                onChange={() => {}}
                inputClassName="w-full text-[17px] font-[500] primaryColorText border-none"
              />
              </div>
            <div className="bg-white primaryColorText shadow rounded-3xl px-4 py-2 border border-[#94B4C1] w-full sm:w-1/4">
              Compare to: Oct 2-Nov 6, 2025 </div>
          </div>
  )
}

export default Date