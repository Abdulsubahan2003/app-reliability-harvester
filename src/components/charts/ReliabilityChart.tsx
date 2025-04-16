
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface DataPoint {
  name: string;
  network: number;
  battery: number;
  memory: number;
}

interface ReliabilityChartProps {
  data: DataPoint[];
  height?: number;
}

const ReliabilityChart = ({ data, height = 300 }: ReliabilityChartProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4">Reliability Metrics Over Time</h3>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="network" stackId="1" stroke="#2563eb" fill="#93c5fd" name="Network Reliability" />
          <Area type="monotone" dataKey="battery" stackId="2" stroke="#f97316" fill="#fed7aa" name="Battery Efficiency" />
          <Area type="monotone" dataKey="memory" stackId="3" stroke="#22c55e" fill="#86efac" name="Memory Usage" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReliabilityChart;
