import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataItem {
  month: string;
  year: string;
  flow: number;
  label?: string;
}

interface SalesChartProps {
  data: DataItem[];
}

const SalesChart = ({ data }: SalesChartProps) => {
  const formattedData = data.map((item) => ({
    ...item,
    label: `${item.month}-${item.year}`,
  }));

  return (
    <div className="bg-white flex flex-col shadow rounded-xl p-4 border border-[#94B4C1] flex-[2]">
      <div className="flex flex-col primaryColorText">
        <span className="border-b-[1px] w-fit mb-3 border-dashed">
          Total sales over time
        </span>
        <span className="font-medium">EGP 240,875</span>
      </div>

      <div className="w-[100%] h-[300px] xl:-ml-7 py-5 xl:px-10 mt-10">
        <ResponsiveContainer>
          <LineChart data={formattedData} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
            <XAxis
              dataKey="label"
              stroke="#213448"
              tick={{ fontSize: 12 }}
            />
            <YAxis
              stroke="#213448"
              tickFormatter={(value) => `${value} EGP`}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              formatter={(value: number) => [`${value} EGP`, "Flow"]}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Line
              type="linear"
              dataKey="flow"
              stroke="#1e3a8a"
              strokeWidth={2}
              dot={{ fill: "#1e3a8a", strokeWidth: 2, r: 2 }}
              activeDot={{ r: 5, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
