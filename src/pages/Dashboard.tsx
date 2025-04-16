
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import MetricCard from "@/components/dashboard/MetricCard";
import DeviceTestList from "@/components/dashboard/DeviceTestList";
import ReliabilityChart from "@/components/charts/ReliabilityChart";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Sample data - in a real app, this would come from an API
  const chartData = [
    { name: 'Jan', network: 85, battery: 90, memory: 88 },
    { name: 'Feb', network: 82, battery: 87, memory: 91 },
    { name: 'Mar', network: 86, battery: 85, memory: 93 },
    { name: 'Apr', network: 90, battery: 89, memory: 94 },
    { name: 'May', network: 89, battery: 91, memory: 95 },
    { name: 'Jun', network: 93, battery: 93, memory: 96 },
  ];
  
  // Ensure these match the TestResult type from DeviceTestList component
  const testResults = [
    { id: '1', deviceName: 'iPhone 13 Pro', osVersion: 'iOS 15.4', testDate: 'Today, 2:30 PM', status: 'passed' as const, reliability: 92 },
    { id: '2', deviceName: 'Samsung Galaxy S22', osVersion: 'Android 12', testDate: 'Today, 1:15 PM', status: 'warning' as const, reliability: 78 },
    { id: '3', deviceName: 'Google Pixel 6', osVersion: 'Android 12', testDate: 'Yesterday, 5:45 PM', status: 'failed' as const, reliability: 65 },
    { id: '4', deviceName: 'iPhone SE', osVersion: 'iOS 14.6', testDate: 'Yesterday, 3:20 PM', status: 'passed' as const, reliability: 89 },
  ];
  
  return (
    <div className="container py-16 mt-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500">Monitor your application's reliability metrics</p>
        </div>
        <Button 
          className="bg-reliability-blue hover:bg-reliability-blue/90"
          onClick={() => navigate('/configure')}
        >
          New Test
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard 
          title="Overall Reliability" 
          value="87%" 
          change="+3% from last month" 
          trend="up" 
          className="border-l-4 border-reliability-blue"
        />
        <MetricCard 
          title="Tested Configurations" 
          value="24" 
          change="5 new this month" 
          trend="up" 
          className="border-l-4 border-reliability-green"
        />
        <MetricCard 
          title="Critical Issues" 
          value="3" 
          change="-2 from last month" 
          trend="down" 
          className="border-l-4 border-reliability-orange"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
            <CardDescription>View reliability metrics over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ReliabilityChart data={chartData} height={300} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Critical Conditions</CardTitle>
            <CardDescription>Conditions with lowest scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-reliability-red mr-2"></div>
                  <span>2G Network</span>
                </div>
                <span className="font-medium">65%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-reliability-orange mr-2"></div>
                  <span>10% Battery</span>
                </div>
                <span className="font-medium">72%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-reliability-yellow mr-2"></div>
                  <span>Low Memory (256MB)</span>
                </div>
                <span className="font-medium">79%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-reliability-yellow mr-2"></div>
                  <span>Background Processes</span>
                </div>
                <span className="font-medium">81%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <DeviceTestList results={testResults} />
    </div>
  );
};

export default Dashboard;
