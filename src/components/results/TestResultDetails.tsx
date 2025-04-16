
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TestDetailProps {
  testId: string;
}

const TestResultDetails = ({ testId }: TestDetailProps) => {
  // This would be fetched from an API in a real application
  const testResult = {
    id: testId,
    deviceName: "iPhone 13 Pro", 
    osVersion: "iOS 15.4",
    testDate: "2023-04-15 14:30:22",
    status: "passed" as const,
    reliability: 92,
    networkScore: 89,
    batteryScore: 94,
    memoryScore: 96,
    startupTime: "1.2s",
    logs: [
      { level: "info", message: "Application started successfully", timestamp: "14:30:22" },
      { level: "info", message: "Network connectivity test started", timestamp: "14:30:24" },
      { level: "warning", message: "Minor latency detected in API call", timestamp: "14:30:28" },
      { level: "info", message: "Battery consumption test started", timestamp: "14:31:05" },
      { level: "info", message: "Memory utilization test started", timestamp: "14:32:15" },
      { level: "info", message: "All tests completed successfully", timestamp: "14:33:45" },
    ],
    issues: [
      { 
        severity: "low", 
        description: "API response time exceeded 200ms under 3G conditions", 
        recommendation: "Optimize API calls or implement better caching" 
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{testResult.deviceName}</h2>
          <p className="text-gray-500">OS: {testResult.osVersion} • {testResult.testDate}</p>
        </div>
        <Badge className={testResult.status === "passed" ? "bg-reliability-green" : "bg-reliability-red"}>
          {testResult.status === "passed" ? "Passed" : "Failed"}
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Network</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-reliability-blue">{testResult.networkScore}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Battery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-reliability-orange">{testResult.batteryScore}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Memory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-reliability-green">{testResult.memoryScore}%</div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>Key performance indicators from the test run</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-500">Startup Time</p>
              <p className="text-xl font-medium">{testResult.startupTime}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Battery Drain</p>
              <p className="text-xl font-medium">3.2%/hr</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Memory Peak</p>
              <p className="text-xl font-medium">245 MB</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">API Latency</p>
              <p className="text-xl font-medium">189 ms</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="issues">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="issues">Issues</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
        <TabsContent value="issues" className="border rounded-md p-4 mt-2">
          {testResult.issues.length === 0 ? (
            <p className="text-center py-4 text-gray-500">No issues detected</p>
          ) : (
            <div className="space-y-4">
              {testResult.issues.map((issue, index) => (
                <div key={index} className="border-l-4 border-reliability-orange pl-4 py-2">
                  <div className="flex items-center">
                    <Badge className={
                      issue.severity === "high" ? "bg-reliability-red" : 
                      issue.severity === "medium" ? "bg-reliability-orange" : 
                      "bg-reliability-yellow"
                    }>
                      {issue.severity}
                    </Badge>
                    <span className="ml-2 font-medium">{issue.description}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{issue.recommendation}</p>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="logs" className="border rounded-md p-4 mt-2">
          <div className="space-y-2 font-mono text-sm">
            {testResult.logs.map((log, index) => (
              <div key={index} className="flex">
                <span className="text-gray-500 w-20">{log.timestamp}</span>
                <span className={
                  log.level === "error" ? "text-reliability-red" :
                  log.level === "warning" ? "text-reliability-orange" :
                  "text-gray-700"
                }>
                  [{log.level}] {log.message}
                </span>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="recommendations" className="border rounded-md p-4 mt-2">
          <div className="space-y-4">
            <div className="border-l-4 border-reliability-green pl-4 py-2">
              <p className="font-medium">Optimize API Caching</p>
              <p className="text-sm text-gray-600">Implement better caching strategies to reduce API calls during poor network conditions.</p>
            </div>
            <div className="border-l-4 border-reliability-blue pl-4 py-2">
              <p className="font-medium">Background Process Management</p>
              <p className="text-sm text-gray-600">Limit background processes when battery is below 20% to improve battery efficiency.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TestResultDetails;
