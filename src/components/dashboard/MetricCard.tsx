
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
  className?: string;
}

const MetricCard = ({ title, value, change, trend, icon, className }: MetricCardProps) => {
  const getTrendColor = () => {
    if (!trend) return "text-gray-500";
    return trend === "up" ? "text-reliability-green" : trend === "down" ? "text-reliability-red" : "text-gray-500";
  };
  
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          {change && (
            <p className={cn("text-sm mt-1 flex items-center", getTrendColor())}>
              {trend === "up" ? "↑" : trend === "down" ? "↓" : ""}
              {change}
            </p>
          )}
        </div>
        {icon && <div className="text-reliability-blue">{icon}</div>}
      </div>
    </div>
  );
};

export default MetricCard;
