import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">ShramEASY Survey Portal</h1>
      <p className="mb-4">
        Welcome! Choose a survey link below to participate.
      </p>
      <ul className="list-disc ml-6">
        <li>
          <Link
            to="/surveys/publish/a-8655-5a4b133eacbd"
            className="text-blue-600 underline"
          >
            Construction Services & Materials Survey
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
