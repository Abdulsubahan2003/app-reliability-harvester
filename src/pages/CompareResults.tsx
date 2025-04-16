
import ComparisonView from "@/components/compare/ComparisonView";

const CompareResults = () => {
  return (
    <div className="container py-16 mt-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Compare Test Results</h1>
        <p className="text-gray-500">Compare reliability across different test scenarios</p>
      </div>
      
      <ComparisonView />
    </div>
  );
};

export default CompareResults;
