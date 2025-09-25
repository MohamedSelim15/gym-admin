import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

interface DataItem {
  month: string;
  flow: number;
}

interface MemberGrowthProps {
  data: DataItem[];
}

const MemberGrowth = ({ data }: MemberGrowthProps) => {
  return (
    <div className="bg-white flex flex-col shadow rounded-xl p-4 border border-[#94B4C1] flex-1">
      <div className="flex flex-col primaryColorText">
        <span className="border-b-[1px] w-fit mb-3 border-dashed">
          Member Growth
        </span>
      </div>

      <div className="w-[100%] h-[300px] mt-5">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
            
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#213448"}}
              dy={5}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#213448" }}
              dx={-20}
            />

            <Tooltip
              formatter={(value: number) => [`${value}`, "Members"]}
              labelFormatter={(label) => `Month: ${label}`}
            />

            <Line
              type="monotone"
              dataKey="flow"
              stroke="#547792"
              strokeWidth={2}
              dot={{ fill: "#547792", r: 4 }}
              activeDot={{ r: 7, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MemberGrowth;
