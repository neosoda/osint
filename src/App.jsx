import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { CoursePlayer } from './components/course/CoursePlayer';
import { ToolkitView } from './components/toolkit/ToolkitView';
import { useCourseStore } from './store/useCourseStore';
import { courseData } from './data/courseData';

function App() {
  const { theme, setTheme } = useCourseStore();

  // Apply base theme on initial load
  useEffect(() => {
    // If no theme in store but system prefers dark, set dark
    if (!localStorage.getItem('osint-course-storage') && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      // Re-apply stored theme class
      if (theme === 'dark') document.documentElement.classList.add('dark');
    }
  }, [theme, setTheme]);

  // Default redirect to first lesson
  const firstModule = courseData[0];
  const firstLesson = firstModule.lessons[0];
  const defaultPath = `/module/${firstModule.id}/lesson/${firstLesson.id}`;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Redirect root to the first lesson */}
        <Route index element={<Navigate to={defaultPath} replace />} />

        {/* Dynamic Course Player Route */}
        <Route path="module/:moduleId/lesson/:lessonId" element={<CoursePlayer />} />

        {/* Toolkit Route */}
        <Route path="toolkit" element={<ToolkitView />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
