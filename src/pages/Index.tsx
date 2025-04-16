
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container py-16">
        <div className="text-center max-w-4xl mx-auto pt-20 pb-16">
          <h1 className="text-5xl font-bold text-reliability-blue mb-6">App Reliability Assessment Platform</h1>
          <p className="text-xl text-gray-600 mb-8">
            Assess how your mobile applications perform under various real-world conditions 
            like low battery, poor network connectivity, and different device configurations.
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              className="bg-reliability-blue hover:bg-reliability-blue/90 px-8 py-2 text-lg" 
              onClick={() => navigate('/dashboard')}
            >
              View Dashboard
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-2 text-lg" 
              onClick={() => navigate('/configure')}
            >
              Start New Test
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-reliability-blue">Network Reliability</CardTitle>
              <CardDescription>Test your app's performance on varying network conditions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-reliability-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  2G/3G/4G/5G network simulation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-reliability-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Offline mode testing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-reliability-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Network fluctuation tests
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-reliability-orange">Battery Performance</CardTitle>
              <CardDescription>Evaluate your app's behavior at different battery levels</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-reliability-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Critical low battery testing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-reliability-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Battery drain analysis
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-reliability-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Power saving mode impact
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-reliability-green">Device Configurations</CardTitle>
              <CardDescription>Test across different device settings and environments</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-reliability-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Multi-device testing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-reliability-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Low memory simulation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-reliability-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Background process testing
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our platform makes it easy to thoroughly assess your mobile application's reliability
              across a wide range of real-world conditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-reliability-blue text-2xl font-bold">1</span>
              </div>
              <h3 className="font-medium mb-2">Configure Tests</h3>
              <p className="text-gray-600 text-sm">Set up test conditions to simulate real-world scenarios</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-reliability-blue text-2xl font-bold">2</span>
              </div>
              <h3 className="font-medium mb-2">Run Assessments</h3>
              <p className="text-gray-600 text-sm">Execute tests across multiple devices and conditions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-reliability-blue text-2xl font-bold">3</span>
              </div>
              <h3 className="font-medium mb-2">Analyze Results</h3>
              <p className="text-gray-600 text-sm">Review performance metrics and detailed reports</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-reliability-blue text-2xl font-bold">4</span>
              </div>
              <h3 className="font-medium mb-2">Improve App</h3>
              <p className="text-gray-600 text-sm">Implement recommended optimizations based on results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
