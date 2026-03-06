import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { CourseManagement } from './components/CourseManagement';
import { CourseBuilder } from './components/CourseBuilder';
import { LessonManagement } from './components/LessonManagement';
import { TutorialVideoUpload } from './components/TutorialVideoUpload';
import { QuestionBank } from './components/QuestionBank';
import { TrainingSchedule } from './components/TrainingSchedule';
import { OngoingTrainings } from './components/OngoingTrainings';
import { Employees } from './components/Employees';
import { Screen } from './types';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>('dashboard');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard':
        return <Dashboard />;
      case 'courses':
        return <CourseManagement onCreateNew={() => setActiveScreen('course-builder')} />;
      case 'course-builder':
        return <CourseBuilder />;
      case 'lessons':
        return <LessonManagement />;
      case 'tutorials':
        return <TutorialVideoUpload />;
      case 'question-bank':
        return <QuestionBank />;
      case 'schedule':
        return <TrainingSchedule />;
      case 'ongoing':
        return <OngoingTrainings />;
      case 'reports':
        return (
          <div className="p-8 space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black tracking-tight">Training Reports</h2>
                <p className="text-slate-500 mt-1">Detailed performance and attendance metrics for your training events.</p>
              </div>
            </div>
            <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center">
              <div className="size-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl text-slate-400">bar_chart</span>
              </div>
              <h3 className="text-lg font-bold">Reports Module</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mt-2">
                This module is currently being populated with real-time data from your training sessions.
              </p>
            </div>
          </div>
        );
      case 'tags':
        return (
          <div className="p-8 space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black tracking-tight">Tags Management</h2>
                <p className="text-slate-500 mt-1">Organize and categorize your content using system-wide tags.</p>
              </div>
            </div>
            <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center">
              <div className="size-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl text-slate-400">label</span>
              </div>
              <h3 className="text-lg font-bold">Tags Manager</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mt-2">
                Manage all tags used across courses, lessons, and questions from this central hub.
              </p>
            </div>
          </div>
        );
      case 'employees':
        return <Employees />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
            <div className="size-20 rounded-full bg-slate-100 flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl">construction</span>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider">Under Construction</h3>
              <p className="text-sm">The {activeScreen} module is currently being developed.</p>
            </div>
            <button 
              onClick={() => setActiveScreen('dashboard')}
              className="px-6 py-2 bg-primary text-white rounded-lg font-bold text-sm shadow-lg shadow-primary/20"
            >
              Back to Dashboard
            </button>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-background-light overflow-hidden">
      <Sidebar activeScreen={activeScreen} onScreenChange={setActiveScreen} />
      
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {renderScreen()}
        </div>
      </main>
    </div>
  );
};

export default App;
