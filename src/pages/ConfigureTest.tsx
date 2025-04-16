
import TestConfigForm from "@/components/configure/TestConfigForm";

const ConfigureTest = () => {
  return (
    <div className="container py-16 mt-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Configure Test</h1>
        <p className="text-gray-500">Set up test conditions to assess your application's reliability</p>
      </div>
      
      <TestConfigForm />
    </div>
  );
};

export default ConfigureTest;
