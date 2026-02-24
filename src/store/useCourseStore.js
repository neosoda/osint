import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCourseStore = create(
    persist(
        (set, get) => ({
            completedLessons: [],
            theme: 'light',

            toggleLessonCompletion: (lessonId) => {
                set((state) => {
                    const isCompleted = state.completedLessons.includes(lessonId);
                    if (isCompleted) {
                        return { completedLessons: state.completedLessons.filter(id => id !== lessonId) };
                    } else {
                        return { completedLessons: [...state.completedLessons, lessonId] };
                    }
                });
            },

            toggleTheme: () => {
                set((state) => {
                    const newTheme = state.theme === 'light' ? 'dark' : 'light';
                    // Apply to document class immediately for seamless UX
                    if (newTheme === 'dark') {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                    return { theme: newTheme };
                });
            },

            setTheme: (theme) => {
                // Direct override for initial load
                if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
                set({ theme });
            },

            resetProgress: () => set({ completedLessons: [] }),
        }),
        {
            name: 'osint-course-storage',
            // We only want to persist completedLessons and theme
            partialize: (state) => ({
                completedLessons: state.completedLessons,
                theme: state.theme
            }),
        }
    )
);
