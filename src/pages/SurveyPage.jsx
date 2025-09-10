import React from "react";
import { useParams } from "react-router-dom";
import SurveyComponent from "../components/SurveyComponent";

export default function SurveyPage() {
  const { surveyId } = useParams();

  return (
    <div className="  max-w-3xl mx-auto">
      <SurveyComponent surveyId={surveyId}/>
    </div>
  );
}
