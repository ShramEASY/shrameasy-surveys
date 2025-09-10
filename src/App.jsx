import { Route, Routes } from 'react-router-dom'
import './App.css'
import SurveyPage from './pages/SurveyPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surveys/publish/:surveyId" element={<SurveyPage />} />
      </Routes>
    </div>
  )
}

export default App
