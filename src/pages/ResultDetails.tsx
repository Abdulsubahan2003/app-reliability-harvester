
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TestResultDetails from "@/components/results/TestResultDetails";

const ResultDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  if (!id) {
    navigate('/results');
    return null;
  }
  
  return (
    <div className="container py-16 mt-8">
      <div className="flex items-center mb-8">
        <Button variant="outline" onClick={() => navigate('/results')} className="mr-4">
          ← Back to Results
        </Button>
        <h1 className="text-3xl font-bold">Test Result Details</h1>
      </div>
      
      <TestResultDetails testId={id} />
    </div>
  );
};

export default ResultDetails;
