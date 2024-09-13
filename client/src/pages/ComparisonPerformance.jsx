import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { Instagram } from "react-content-loader";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackChart from "../components/FeedbackChart";
import QuestionChart from "../components/QuestionChart";

const ComparisonPerformance = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const { authorizationToken } = useAuth();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchFeedbacks = async () => {
    if (!authorizationToken) {
      toast.error("Unauthorized. Please login again.");
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/admin/feedback`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.status === 401) {
        toast.error("Unauthorized. Please login again.");
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setFeedbacks(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      toast.error("Failed to fetch feedbacks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  if (loading) {
    return <Instagram />;
  }

  const handleAnalysisClose = () => {
    setShowAnalysis(false);
    setSelectedFeedback(null); // Clear selectedFeedback when closing analysis
  };

  return (
    <div className="relative min-h-screen bg-gray-100 p-6 py-20">
      <h1 className="text-3xl font-bold text-center text-[#127c71] mb-6">Admin Performance Analysis Panel</h1>

      <FeedbackChart feedbacks={feedbacks} />

    

      {/* Modal for displaying detailed feedback */}
      <AnimatePresence>
        {selectedFeedback && !showAnalysis && (
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-80 text-white p-6 overflow-y-auto z- flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-5xl w-full h-auto bg-gray-900 rounded-lg shadow-lg p-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
                onClick={() => setSelectedFeedback(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h3 className="text-2xl font-semibold mb-4 text-white">Feedback Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {selectedFeedback.questions.map((q, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                    <p className="text-lg font-medium text-gray-200">{q.question}</p>
                    <p className="text-xl font-bold text-yellow-400">{`Rating: ${q.rating}/5`}</p>
                  </div>
                ))}
              </div>
              {selectedFeedback.comment && (
                <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold text-white">Comment:</h4>
                  <p className="text-gray-300 mt-2 italic">{selectedFeedback.comment}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for analyzing feedback */}
      <AnimatePresence>
        {showAnalysis && selectedFeedback && (
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-80 text-white p-6 overflow-y-auto z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-6xl w-full h-[80vh] bg-gray-900 rounded-lg shadow-lg p-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
                onClick={handleAnalysisClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="w-full h-full">
                <QuestionChart questions={selectedFeedback.questions} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComparisonPerformance;
