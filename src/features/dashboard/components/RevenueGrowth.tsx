import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";


interface DataItem {
  year: string;
  value: number;
}

interface RevenueGrowthProps {
  data: DataItem[];
}

const RevenueGrowth = ({ data }: RevenueGrowthProps) => {

  const [open, setOpen] = useState(false);

  const handleOpen=()=>{
    setOpen(!open);
  }

  return (
    <div className="bg-white flex flex-col shadow rounded-xl p-4 border border-[#94B4C1] flex-1">
      <div className="flex flex-row justify-between xl:px-5 primaryColorText">
        <span className="border-b-[1px] w-fit mb-3 border-dashed">
          Revenue Growth
        </span>
        <span className="text-[#547792] flex cursor-pointer"
        onClick={handleOpen}
        >Yearly
        {open ? (
              <ChevronUp className="w-4 h-4 ml-1 mt-1.5 text-gray-500" />
            ) : (
              <ChevronDown className="w-4 h-4 ml-1 mt-1.5 text-gray-500" />
        )}
        </span>
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
              dataKey="year"
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
