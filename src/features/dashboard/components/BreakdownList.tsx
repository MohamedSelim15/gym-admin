interface BreakdownItem {
    label: string;
    value: string;
}

interface BreakdownProps {
    breakdown: BreakdownItem[];
}

const BreakdownList = ({ breakdown }: BreakdownProps) => {
    return (
        <div className="bg-white flex flex-col shadow rounded-xl p-4 border border-[#94B4C1] flex-1">
            <span className="border-b-[1px] w-fit mb-3 border-dashed">
                Total sales breakdown
            </span>
            {breakdown.map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between border-b-[1px] w-full mb-3 border-dashed"
                >
                    <span className="text-[#547792] ">{item.label}</span>
                    <span>{item.value}</span>
                </div>
            ))}
        </div>
    );
};

export default BreakdownList;
