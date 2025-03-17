import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar.jsx';
import MMain from './components/main.jsx';
import Assessment from './components/avaliação.jsx';
import Professionals from './components/profissional.jsx';
import './index.css';

function App() {
  const location = useLocation();
  const isAdmin = location.state?.isAdmin || false;

  const [view, setView] = useState('daily'); 
  const [showAllExercises, setShowAllExercises] = useState(false);

  const handleExerciseClick = () => {
    setShowAllExercises(true);
    setView('all');
  };

  const handleDailyExerciseClick = () => {
    setShowAllExercises(false);
    setView('daily');
  };

  const handleAssessmentClick = () => {
    setView('assessment');
  };

  const handleProfessionalsClick = () => {
    setView('professionals');
  };

  return (
    <>
      <Sidebar 
        onExerciseClick={handleExerciseClick} 
        onDailyExerciseClick={handleDailyExerciseClick}
        onAssessmentClick={handleAssessmentClick}
        onProfessionalsClick={handleProfessionalsClick}
        isAdmin={isAdmin} 
      />
      <main>
        {view === 'assessment' ? (
          <Assessment isAdmin={isAdmin} />
        ) : view === 'professionals' ? (
          <Professionals isAdmin={isAdmin} />
        ) : (
          <MMain showAllExercises={showAllExercises} isAdmin={isAdmin} />
        )}
      </main>
    </>
  );
}

export default App;