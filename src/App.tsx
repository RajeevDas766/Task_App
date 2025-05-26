import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import TasksOverview from './pages/TasksOverview';
import GoSocial from './pages/GoSocial';
import TaskDetails from './pages/TaskDetails';
import AskGuru from './pages/AskGuru';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow px-72 py-2">
          <Navigation />
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <Routes>
            <Route path="/" element={<TasksOverview />} />
            <Route path="/social" element={<GoSocial />} />
            <Route path="/task/:id" element={<TaskDetails />} />
            <Route path="/askguru" element={<AskGuru />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
