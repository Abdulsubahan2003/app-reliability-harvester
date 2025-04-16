
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const TestConfigForm = () => {
  const [networkCondition, setNetworkCondition] = useState<string>("4g");
  const [batteryLevel, setBatteryLevel] = useState<number[]>([75]);
  const [memoryConstraint, setMemoryConstraint] = useState<boolean>(false);
  const [backgroundProcesses, setBackgroundProcesses] = useState<boolean>(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the configuration to start tests
    console.log({
      networkCondition,
      batteryLevel: batteryLevel[0],
      memoryConstraint,
      backgroundProcesses
    });
    alert("Test configuration submitted!");
  };
  
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Configure Test Scenario</CardTitle>
        <CardDescription>
          Set up the conditions under which you want to test your mobile application.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="network-condition">Network Condition</Label>
            <Select value={networkCondition} onValueChange={setNetworkCondition}>
              <SelectTrigger id="network-condition">
                <SelectValue placeholder="Select network condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="offline">Offline</SelectItem>
                <SelectItem value="2g">2G (Poor)</SelectItem>
                <SelectItem value="3g">3G (Fair)</SelectItem>
                <SelectItem value="4g">4G (Good)</SelectItem>
                <SelectItem value="5g">5G (Excellent)</SelectItem>
                <SelectItem value="unstable">Unstable Connection</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="battery-level">Battery Level ({batteryLevel[0]}%)</Label>
            <Slider
              id="battery-level"
              min={0}
              max={100}
              step={1}
              value={batteryLevel}
              onValueChange={setBatteryLevel}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="memory-constraint">Memory Constraint</Label>
              <p className="text-sm text-gray-500">Simulate low memory conditions</p>
            </div>
            <Switch
              id="memory-constraint"
              checked={memoryConstraint}
              onCheckedChange={setMemoryConstraint}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="background-processes">Background Processes</Label>
              <p className="text-sm text-gray-500">Run with background processes</p>
            </div>
            <Switch
              id="background-processes"
              checked={backgroundProcesses}
              onCheckedChange={setBackgroundProcesses}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="app-url">Application URL or Bundle ID</Label>
            <Input id="app-url" placeholder="com.example.app or https://example.com" />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="bg-reliability-blue hover:bg-reliability-blue/90">Start Test</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default TestConfigForm;
