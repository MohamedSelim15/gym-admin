import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface PieData {
  name: string;
  value: number;
  color: string;
}

interface PieDataProps{
  data: PieData[];
}


const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
}: any) => {
  const radius = outerRadius * 0.6;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const SubscriptionPieChart = ({data}:PieDataProps) => {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="bg-white flex flex-col shadow rounded-xl p-4 border border-[#94B4C1] flex-1 w-full min-h-0">
      <span className="border-b-[1px] w-fit mb-3 border-dashed text-sm sm:text-base font-medium">
        Subscription Breakdown
      </span>

      <div className="flex flex-col xl:flex-row items-center justify-center gap-3 sm:gap-5 flex-1 min-h-0">
        
        {/* PieChart */}
        <div className="w-full xl:w-1/2 flex justify-center min-h-0">
          <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[350px]">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  paddingAngle={0}
                  labelLine={false}
                  label={renderCustomizedLabel}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [`${value}`, 'Count']} 
                  contentStyle={{
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #dee2e6',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Legend */}
        <div className="w-full xl:w-1/2 space-y-2 sm:space-y-3 overflow-y-auto">
          {data.map((entry, index) => {
            const percent = ((entry.value / total) * 100).toFixed(1);
            return (
              <div
                key={index}
                className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span
                  className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-1 sm:mt-1.5 rounded-sm"
                  style={{ backgroundColor: entry.color }}
                ></span>
                <div className="text-xs sm:text-sm min-w-0 flex-1">
                  <div className="font-medium text-gray-800 leading-relaxed break-words">
                    {entry.name}
                  </div>
                  <div className="text-gray-600 mt-1">
                    {entry.value} subscribers ({percent}%)
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPieChart;
