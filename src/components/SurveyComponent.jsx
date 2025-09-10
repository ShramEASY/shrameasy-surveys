// SurveyComponent.jsx
import React, { useEffect, useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/survey-core.min.css";
import { json } from "../json";

const surveyServiceUrl = "https://api.surveyjs.io/public/v1/Survey";
const surveyIOMaxPostSize = 65536;

function loadSurvey(survey, surveyId) {
  survey.beginLoading();
  fetch(`${surveyServiceUrl}/getSurvey?surveyId=${surveyId}`)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Could not load the survey JSON schema");
    })
    .then((data) => {
      survey.fromJSON(data);
      survey.endLoading();
    })
    .catch((error) => console.log(error));
}

function postResults(survey, options, surveyPostId) {
  const resultAsStr = JSON.stringify(survey.data);
  if (resultAsStr.length >= surveyIOMaxPostSize) {
    options.showSaveError(survey.getLocalizationString("savingExceedSize"));
    return;
  }
  options.showSaveInProgress();
  const dataObj = { postId: surveyPostId, surveyResult: resultAsStr };
  fetch(`${surveyServiceUrl}/post/`, {
    method: "POST",
    body: JSON.stringify(dataObj),
    headers: { "Content-Type": "application/json; charset=utf-8" },
  })
    .then((response) => {
      if (!response.ok) throw new Error("Could not post the survey results");
      options.showSaveSuccess();
    })
    .catch((error) => {
      options.showSaveError();
      console.log(error);
    });
}

export default function SurveyComponent({ surveyId }) {
  const [survey, setSurvey] = useState(null);

  useEffect(() => {
    if (!surveyId) return;

    // Find the survey entry safely
    const surveyEntry = json.find((s) => s.surveyId === surveyId);
    if (!surveyEntry) {
      console.error("Survey not found in JSON config:", surveyId);
      return;
    }

    const surveyObj = new Model();

    surveyObj.onComplete.add((sender, options) => {
      console.log("Survey Complete:", JSON.stringify(sender.data, null, 2));
      postResults(sender, options, surveyEntry.surveyPostId);
    });

    loadSurvey(surveyObj, surveyId);
    setSurvey(surveyObj);
  }, [surveyId]);

  if (!survey) return <p>Loading survey...</p>;
  return <Survey model={survey} />;
}
    