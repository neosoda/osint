import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { courseData, flatLessons } from '../../data/courseData';
import { useCourseStore } from '../../store/useCourseStore';
import { CourseTabs } from './CourseTabs';
import { QuizEngine } from './QuizEngine';
import { MarkdownViewer } from './MarkdownViewer';
import { cn } from '../../lib/utils';

export function CoursePlayer() {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const { completedLessons, toggleLessonCompletion } = useCourseStore();

  const [activeTab, setActiveTab] = useState('cours');

  // Find Current Lesson Data
  const currentModule = courseData.find(m => m.id === moduleId);
  const currentLesson = currentModule?.lessons.find(l => l.id === lessonId);

  // Find Index in flat array for Prev/Next logic
  const currentIndex = flatLessons.findIndex(l => l.id === lessonId);
  const prevLesson = currentIndex > 0 ? flatLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < flatLessons.length - 1 ? flatLessons[currentIndex + 1] : null;

  const isCompleted = completedLessons.includes(lessonId);

  // Reset tab and scroll when lesson changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId]);

  if (!currentModule || !currentLesson) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">Leçon introuvable</h2>
          <p className="text-slate-500">Veuillez sélectionner une leçon dans le menu.</p>
        </div>
      </div>
    );
  }

  const handleNext = () => {
    if (!isCompleted) {
      toggleLessonCompletion(lessonId);
    }
    if (nextLesson) {
      navigate(`/module/${nextLesson.moduleId}/lesson/${nextLesson.id}`);
    }
  };

  const handlePrev = () => {
    if (prevLesson) {
      navigate(`/module/${prevLesson.moduleId}/lesson/${prevLesson.id}`);
    }
  };

  return (
    <div className="flex flex-col min-h-full">
      {/* Lesson Header */}
      <div className="px-4 lg:px-8 py-6 border-b border-color flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
            <span>{currentModule.title}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {currentLesson.title}
          </h2>
        </div>

        <button
          onClick={() => toggleLessonCompletion(lessonId)}
          className={cn(
            "flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all shadow-sm shrink-0",
            isCompleted
              ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/50 hover:bg-green-100 dark:hover:bg-green-900/40"
              : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80"
          )}
        >
          <CheckCircle className="w-4 h-4" />
          {isCompleted ? "Terminé" : "Marquer terminé"}
        </button>
      </div>

      {/* Tabs */}
      <CourseTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        hasQuiz={!!currentLesson.quiz}
        hasLab={!!currentLesson.lab}
      />

      {/* Dynamic Content Area */}
      <div className="flex-1 p-4 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {activeTab === 'cours' && <MarkdownViewer htmlContent={currentLesson.content} />}
          {activeTab === 'quiz' && currentLesson.quiz && <QuizEngine key={currentLesson.id} quizzes={currentLesson.quiz} />}
          {activeTab === 'lab' && currentLesson.lab && <MarkdownViewer htmlContent={currentLesson.lab} />}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="mt-auto px-4 lg:px-8 pl-10 border-t border-color bg-slate-50/50 dark:bg-slate-900/50 py-4 flex items-center justify-between sticky bottom-0 z-20 backdrop-blur-md">
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            disabled={!prevLesson}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Précédent
          </button>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleNext}
            disabled={!nextLesson}
            className="flex items-center gap-2 px-6 py-2 bg-accent-blue hover:bg-blue-600 text-white rounded-xl text-sm font-semibold shadow-sm shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Suivant
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
