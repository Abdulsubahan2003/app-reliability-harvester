
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ComparisonView = () => {
  // Sample data - would come from an API in a real app
  const comparisonData = [
    {
      metric: 'Network Reliability',
      Test1: 89,
      Test2: 82,
      Test3: 94,
    },
    {
      metric: 'Battery Efficiency',
      Test1: 94,
      Test2: 87,
      Test3: 91,
    },
    {
      metric: 'Memory Usage',
      Test1: 96,
      Test2: 95,
      Test3: 92,
    },
    {
      metric: 'Startup Time',
      Test1: 88,
      Test2: 76,
      Test3: 90,
    },
    {
      metric: 'UI Responsiveness',
      Test1: 92,
      Test2: 85,
      Test3: 95,
    },
  ];

  const testConfigs = [
    { 
      id: 'Test1', 
      name: 'iOS 15.4 - 4G', 
      device: 'iPhone 13 Pro', 
      network: '4G', 
      battery: '80%', 
      date: '2023-04-15' 
    },
    { 
      id: 'Test2', 
      name: 'iOS 15.4 - 3G', 
      device: 'iPhone 13 Pro', 
      network: '3G', 
      battery: '45%', 
      date: '2023-04-15' 
    },
    { 
      id: 'Test3', 
      name: 'iOS 15.4 - WiFi', 
      device: 'iPhone 13 Pro', 
      network: 'WiFi', 
      battery: '90%', 
      date: '2023-04-15' 
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Test Comparison</h2>
        <p className="text-gray-500">Compare results across different test configurations</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testConfigs.map((config) => (
          <Card key={config.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{config.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-500">Device:</span>
                  <span>{config.device}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Network:</span>
                  <span>{config.network}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Battery:</span>
                  <span>{config.battery}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date:</span>
                  <span>{config.date}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Tabs defaultValue="chart">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="chart">Chart View</TabsTrigger>
          <TabsTrigger value="table">Table View</TabsTrigger>
        </TabsList>
        <TabsContent value="chart">
          <Card>
            <CardHeader>
              <CardTitle>Performance Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={comparisonData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="metric" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Test1" name="iOS 15.4 - 4G" fill="#2563eb" />
                    <Bar dataKey="Test2" name="iOS 15.4 - 3G" fill="#f97316" />
                    <Bar dataKey="Test3" name="iOS 15.4 - WiFi" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="table">
          <Card>
            <CardHeader>
              <CardTitle>Performance Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">Metric</th>
                      <th scope="col" className="px-6 py-3">iOS 15.4 - 4G</th>
                      <th scope="col" className="px-6 py-3">iOS 15.4 - 3G</th>
                      <th scope="col" className="px-6 py-3">iOS 15.4 - WiFi</th>
                      <th scope="col" className="px-6 py-3">Difference</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row) => (
                      <tr key={row.metric} className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          {row.metric}
                        </th>
                        <td className="px-6 py-4">{row.Test1}%</td>
                        <td className="px-6 py-4">{row.Test2}%</td>
                        <td className="px-6 py-4">{row.Test3}%</td>
                        <td className="px-6 py-4">
                          <span className={row.Test3 - row.Test2 > 0 ? "text-reliability-green" : "text-reliability-red"}>
                            {row.Test3 - row.Test2 > 0 ? "+" : ""}{row.Test3 - row.Test2}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComparisonView;
