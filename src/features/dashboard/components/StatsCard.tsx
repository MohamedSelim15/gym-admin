interface StatItem {
  id: number;
  label: string;
  value: string;
}

interface StatsProps {
  stats: StatItem[];
}

const StatsCards = ({ stats }: StatsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-0 sm:px-4 py-2">
      {stats.map((item) => (
        <div
          key={item.id}
          className="bg-white flex flex-col shadow rounded-2xl p-3 border border-[#94B4C1] h-[80px] text-sm"
        >
          <span className="border-b-[1px] w-fit mb-2 border-dashed">{item.label}</span>
          <span className="font-semibold">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
