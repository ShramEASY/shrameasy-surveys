import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [surveys, setSurveys] = useState([
    {
      id: "edee70e5-84c2-4e8a-8655-5a4b133eacbd",
      title: "Construction Services & Materials Survey",
      description: "Share your experience with construction services and materials to help improve industry standards.",
      participants: 1245,
      category: "Construction",
      estimatedTime: "8-10 minutes"
    }
  ]);

  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading surveys from an API
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-800">ShramEASY</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your opinion matters! Participate in our surveys to help improve services and products across various industries.
          </p>
        </header>


        {/* Main Content */}
        <main className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">Available Surveys</h2>
            <p className="text-gray-600">Select a survey to participate and share your valuable feedback.</p>
          </div>

          {isLoading ? (
            // Loading Skeleton
            <div className="p-6">
              <div className="animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
                <div className="h-10 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
          ) : (
            // Survey List
            <div className="p-6">
              {surveys.length === 0 ? (
                <div className="text-center py-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No surveys available at the moment</h3>
                  <p className="text-gray-500">Please check back later for new surveys.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {surveys.map((survey) => (
                    <div key={survey.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row md:items-start justify-between">
                        <div className="mb-4 md:mb-0 md:mr-4 flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{survey.title}</h3>
                          <p className="text-gray-600 mb-3">{survey.description}</p>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                            <span className="inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              {survey.category}
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Link
                            to={`/surveys/publish/${survey.id}`}
                            className="inline-flex items-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                          >
                            Start Survey
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm mt-10">
          {/* <p>© {new Date().getFullYear()} ShramEASY. All rights reserved.</p> */}
          <p className="mt-1">Your feedback helps us improve and serve you better.</p>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;