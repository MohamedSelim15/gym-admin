import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown, Check } from "lucide-react";
import { Listbox } from "@headlessui/react";


interface DataItem {
  name: string;
  value: number;
}

interface RevenueGrowthProps {
  data: DataItem[];
  period: "Yearly" | "Monthly" | "Weekly";
  setPeriod: (period: "Yearly" | "Monthly" | "Weekly") => void;
}

const RevenueGrowth = ({ data, period, setPeriod }: RevenueGrowthProps) => {
  const periods: ("Yearly" | "Monthly" | "Weekly")[] = ["Yearly", "Monthly", "Weekly"];

  return (
    <div className="bg-white flex flex-col shadow rounded-xl p-4 border border-[#94B4C1] flex-1">
      <div className="flex flex-row justify-between primaryColorText relative">
        <span className="border-b-[1px] w-fit mb-3 border-dashed">
          Revenue Growth
        </span>
        <div className="relative z-10 w-[120px]">
          <Listbox value={period} onChange={setPeriod}>
            <Listbox.Button className="text-[#547792] flex items-center justify-end w-full cursor-pointer outline-none">
              {period}
              <ChevronDown className="w-4 h-4 ml-1 mt-1 text-gray-500" />
            </Listbox.Button>
            <Listbox.Options className="absolute right-0 mt-2 w-[120px] bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-20 outline-none">
              {periods.map((p) => (
                <Listbox.Option
                  key={p}
                  value={p}
                  className={({ active }) =>
                    `cursor-pointer px-3 py-1.5 flex items-center justify-between text-sm ${
                      active ? "bg-blue-50 text-blue-700" : "text-gray-700"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span>{p}</span>
                      {selected && <Check className="w-4 h-4 text-blue-600" />}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
      </div>

      <div className="w-[100%] h-[300px] mt-5">
        <ResponsiveContainer >
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6b7280" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#6b7280" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              style={{fontSize:"12px",fill: "#374151" }}
              dy={12}
            />
            <YAxis
              tickFormatter={(value) => `${value / 1000}k`}
              axisLine={false}
              tickLine={false}
              style={{ fontSize:"12px",fill: "#374151" }}
              dx={-18}
            />
            <Tooltip
              formatter={(value: number) => `${value.toLocaleString()}`}
            />

            <Area
              type="linear"
              dataKey="value"
              stroke="#21344866"
              strokeDasharray="2 2"
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueGrowth;
