
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TestResult {
  id: string;
  deviceName: string;
  osVersion: string;
  testDate: string;
  status: "passed" | "failed" | "warning" | "running";
  reliability: number;
}

interface DeviceTestListProps {
  results: TestResult[];
}

const DeviceTestList = ({ results }: DeviceTestListProps) => {
  const getStatusBadge = (status: TestResult["status"]) => {
    switch (status) {
      case "passed":
        return <Badge className="bg-reliability-green">Passed</Badge>;
      case "failed":
        return <Badge className="bg-reliability-red">Failed</Badge>;
      case "warning":
        return <Badge className="bg-reliability-orange">Warning</Badge>;
      case "running":
        return <Badge className="bg-reliability-blue animate-pulse">Running</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b">
        <h3 className="text-lg font-medium">Recent Test Results</h3>
      </div>
      <div className="divide-y">
        {results.map((result) => (
          <div key={result.id} className="px-6 py-4 flex items-center justify-between">
            <div>
              <div className="flex items-center">
                <h4 className="font-medium">{result.deviceName}</h4>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">{result.osVersion}</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">{result.testDate}</div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <span className="font-medium">{result.reliability}%</span> reliability
              </div>
              {getStatusBadge(result.status)}
              <Button variant="outline" size="sm">View Details</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceTestList;
