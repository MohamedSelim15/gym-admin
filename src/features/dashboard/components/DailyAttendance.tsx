import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface DataItem {
  day: string;
  attendance: number;
}

interface AttendanceDataProps {
  data: DataItem[];
}


const AttendanceChart = ({data} : AttendanceDataProps) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 border border-[#94c1e9] primaryColorText">
        <span className="border-b-[1px] w-fit mb-3 border-dashed">
        Daily Attendance
      </span>
      <div className="mt-20 -ml-5">
        <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          margin={{ top:- 0, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#213448" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#213448" }}
          />
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
          <Bar
            dataKey="attendance"
            fill="#94c1e9"
            barSize={40}
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
