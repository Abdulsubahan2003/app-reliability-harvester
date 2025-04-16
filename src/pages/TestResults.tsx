
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const TestResults = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  
  // Sample data - would be fetched from an API in a real app
  const results = [
    { id: '1', appName: 'Shopping App', deviceName: 'iPhone 13 Pro', osVersion: 'iOS 15.4', testDate: 'Apr 15, 2023', status: 'passed' as const, reliability: 92 },
    { id: '2', appName: 'Shopping App', deviceName: 'Samsung Galaxy S22', osVersion: 'Android 12', testDate: 'Apr 15, 2023', status: 'warning' as const, reliability: 78 },
    { id: '3', appName: 'Shopping App', deviceName: 'Google Pixel 6', osVersion: 'Android 12', testDate: 'Apr 14, 2023', status: 'failed' as const, reliability: 65 },
    { id: '4', appName: 'Banking App', deviceName: 'iPhone SE', osVersion: 'iOS 14.6', testDate: 'Apr 14, 2023', status: 'passed' as const, reliability: 89 },
    { id: '5', appName: 'Banking App', deviceName: 'Samsung Galaxy A52', osVersion: 'Android 11', testDate: 'Apr 13, 2023', status: 'passed' as const, reliability: 91 },
    { id: '6', appName: 'Fitness App', deviceName: 'iPhone 12', osVersion: 'iOS 15.3', testDate: 'Apr 12, 2023', status: 'warning' as const, reliability: 82 },
  ];
  
  const filteredResults = filter === "all" 
    ? results 
    : results.filter(result => result.status === filter);
  
  const getStatusBadge = (status: 'passed' | 'failed' | 'warning' | 'running') => {
    switch (status) {
      case 'passed':
        return <Badge className="bg-reliability-green">Passed</Badge>;
      case 'failed':
        return <Badge className="bg-reliability-red">Failed</Badge>;
      case 'warning':
        return <Badge className="bg-reliability-orange">Warning</Badge>;
      case 'running':
        return <Badge className="bg-reliability-blue animate-pulse">Running</Badge>;
      default:
        return null;
    }
  };
  
  const handleViewDetails = (id: string) => {
    navigate(`/results/${id}`);
  };
  
  return (
    <div className="container py-16 mt-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Test Results</h1>
          <p className="text-gray-500">View and analyze test results across devices and conditions</p>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4 gap-4">
        <div className="flex-1">
          <Input placeholder="Search by app or device..." />
        </div>
        <div className="w-48">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Results</SelectItem>
              <SelectItem value="passed">Passed</SelectItem>
              <SelectItem value="warning">Warning</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Application
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Device / OS
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Test Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reliability
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredResults.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                  No results found matching your filter.
                </td>
              </tr>
            ) : (
              filteredResults.map((result) => (
                <tr key={result.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{result.appName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{result.deviceName}</div>
                    <div className="text-sm text-gray-500">{result.osVersion}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{result.testDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{result.reliability}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(result.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" className="text-reliability-blue hover:text-reliability-blue/80" onClick={() => handleViewDetails(result.id)}>
                      View Details
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestResults;
