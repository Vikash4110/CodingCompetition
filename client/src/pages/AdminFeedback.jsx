import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { Instagram } from "react-content-loader";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackChart from "../components/FeedbackChart";
import QuestionChart from "../components/QuestionChart";

const AdminFeedback = () => {
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
    <>
      <br /><br /><br /><br />
      <div className="relative min-h-screen bg-gradient-to-r from-blue-50 via-pink-50 to-purple-50 p-6">
        <h1 className="text-4xl font-extrabold text-center text-[#127c71] mb-10">
          Admin Feedback Panel
        </h1>

        {/* Feedback cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {feedbacks.length === 0 ? (
            <div className="text-center text-gray-600 italic">No feedback available.</div>
          ) : (
            feedbacks.map((feedback) => (
              <motion.div
                key={feedback._id}
                className="relative bg-white shadow-2xl rounded-3xl border-2 border-[#ffc221] p-6 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedFeedback(feedback)}
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Teacher: {feedback.teacherId ? feedback.teacherId.teacher_name : "Unknown"}
                </h2>
                <p className="text-gray-600 mb-2">Subject: {feedback.teacherId ? feedback.teacherId.subject_name : "N/A"}</p>
                <p className="text-gray-600 mb-4">Subject Code: {feedback.teacherId ? feedback.teacherId.subject_code : "N/A"}</p>
                <div className="mt-4">
                  <div className="text-2xl font-bold text-[#127c71] mb-2">
                    Average Rating: <span className="text-4xl">{feedback.averageRating}/5</span>
                  </div>
                  <div className="text-lg font-medium text-gray-600">
                    Total Ratings: <span className="text-xl text-[#127c71]">{feedback.totalRating}</span>
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                    onClick={() => setSelectedFeedback(feedback)}
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-green-400 to-teal-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                    onClick={() => setShowAnalysis(true)}
                  >
                    Analyze
                  </motion.button>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Modal for displaying detailed feedback */}
        <AnimatePresence>
          {selectedFeedback && !showAnalysis && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-6 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative max-w-4xl w-full h-[90vh] bg-white rounded-xl shadow-xl p-6 overflow-scroll"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                  onClick={() => setSelectedFeedback(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h3 className="text-3xl font-bold mb-4 text-[#127c71] text-center">Feedback Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedFeedback.questions.map((q, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-3xl shadow-2xl border-2 border-[#ffc221]">
                      <p className="text-lg font-medium text-gray-700">{q.question}</p>
                      <p className="text-xl font-bold text-yellow-500">{`Rating: ${q.rating}/5`}</p>
                    </div>
                  ))}
                </div>
                {selectedFeedback.comment && (
                  <div className="mt-6 bg-gray-100 p-4 rounded-3xl shadow-2xl border-2 border-[#ffc221]">
                    <h4 className="text-lg font-semibold text-gray-800">Comment:</h4>
                    <p className="text-gray-600 mt-2 italic">{selectedFeedback.comment}</p>
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
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-6 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
            
              <motion.div
                className="relative max-w-6xl w-full h-[80vh] bg-white rounded-xl shadow-xl p-6 pt-20"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
               <h3 className="text-3xl font-bold mb-4 text-gray-500 text-center">Feedback Analysis</h3>
                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                  onClick={handleAnalysisClose}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
    </>
  );
};

export default AdminFeedback;
