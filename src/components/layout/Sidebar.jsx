import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, ChevronDown, CheckCircle2, RotateCcw, MonitorPlay, BrainCog, TerminalSquare, Wrench, Search, UserSearch, Building2, Users, Drama, Telescope, FlaskConical, GraduationCap } from 'lucide-react';
import { courseData, flatLessons } from '../../data/courseData';
import { useCourseStore } from '../../store/useCourseStore';
import { cn } from '../../lib/utils';

// Icon Map helper to load imported lucide string names
const iconMap = {
    Gavel: <Shield className="w-4 h-4" />,
    Shield: <Shield className="w-4 h-4" />,
    Server: <MonitorPlay className="w-4 h-4" />,
    Search: <Search className="w-4 h-4" />,
    UserSearch: <UserSearch className="w-4 h-4" />,
    Building2: <Building2 className="w-4 h-4" />,
    Users: <Users className="w-4 h-4" />,
    BrainCog: <BrainCog className="w-4 h-4" />,
    Drama: <Drama className="w-4 h-4" />,
    Telescope: <Telescope className="w-4 h-4" />,
    FlaskConical: <FlaskConical className="w-4 h-4" />,
    GraduationCap: <GraduationCap className="w-4 h-4" />,
};

export function Sidebar({ isOpen, onClose }) {
    const { completedLessons, resetProgress } = useCourseStore();

    // Keep track of which modules are open in the accordion
    const [openModules, setOpenModules] = useState(() => courseData.map(m => m.id));

    const toggleModule = (id) => {
        setOpenModules(prev =>
            prev.includes(id) ? prev.filter(mId => mId !== id) : [...prev, id]
        );
    };

    const progressPercentage = Math.round((completedLessons.length / flatLessons.length) * 100) || 0;

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside className={cn(
                "fixed inset-y-0 left-0 z-50 w-72 sidebar-bg border-r border-color transform transition-transform duration-300 ease-in-out flex flex-col",
                isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            )}>
                {/* Brand */}
                <div className="h-20 flex items-center px-6 border-b border-color shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-cyber-500 flex items-center justify-center shadow-lg shadow-cyber-500/20">
                            <Shield className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h1 className="font-bold text-sm tracking-tight text-slate-900 dark:text-white">OSINT & SOCENG</h1>
                            <p className="text-[10px] uppercase tracking-wider text-cyber-600 dark:text-cyber-400 font-bold mt-0.5">Cohorte 2026</p>
                        </div>
                    </div>
                </div>

                {/* Global Progress */}
                <div className="px-6 py-5 border-b border-color shrink-0">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">PROGRESSION GLOBALE</span>
                        <span className="text-sm font-bold text-cyber-600 dark:text-cyber-400">{progressPercentage}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-cyber-500 transition-all duration-500 ease-out"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                </div>

                {/* Curriculum Scroll Area */}
                <div className="flex-1 overflow-y-auto py-6 px-4 space-y-6">
                    {courseData.map((module) => (
                        <div key={module.id} className="accordion-group">
                            <button
                                onClick={() => toggleModule(module.id)}
                                className="w-full flex items-center justify-between py-2 px-2 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-colors group"
                            >
                                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 group-hover:text-cyber-600 dark:group-hover:text-cyber-400 transition-colors">
                                    {iconMap[module.icon]}
                                    <h3 className="text-xs font-bold uppercase tracking-wider">{module.title}</h3>
                                </div>
                                <ChevronDown className={cn(
                                    "w-4 h-4 text-slate-400 transition-transform duration-200",
                                    openModules.includes(module.id) ? "rotate-180" : ""
                                )} />
                            </button>

                            <div className={cn(
                                "mt-2 space-y-1 overflow-hidden transition-all",
                                openModules.includes(module.id) ? "block" : "hidden"
                            )}>
                                {module.lessons.map((lesson, idx) => {
                                    const isCompleted = completedLessons.includes(lesson.id);

                                    return (
                                        <NavLink
                                            key={lesson.id}
                                            to={`/module/${module.id}/lesson/${lesson.id}`}
                                            onClick={() => window.innerWidth < 1024 && onClose()}
                                            className={({ isActive }) => cn(
                                                "w-full text-left p-3 rounded-xl flex items-start gap-3 transition-all group",
                                                isActive
                                                    ? "bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm"
                                                    : "border border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/40"
                                            )}
                                        >
                                            {({ isActive }) => (
                                                <>
                                                    <div className="mt-0.5 shrink-0">
                                                        {isCompleted ? (
                                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                        ) : (
                                                            <div className={cn(
                                                                "w-4 h-4 rounded-full border-2",
                                                                isActive ? "border-cyber-500" : "border-slate-300 dark:border-slate-600 group-hover:border-slate-400"
                                                            )}></div>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <p className={cn(
                                                            "text-sm font-medium",
                                                            isActive ? "text-cyber-700 dark:text-cyber-400"
                                                                : isCompleted ? "text-slate-600 dark:text-slate-400"
                                                                    : "text-slate-700 dark:text-slate-300"
                                                        )}>
                                                            {idx + 1}. {lesson.title}
                                                        </p>
                                                        <div className="flex gap-2 mt-1">
                                                            {lesson.quiz && <span className="text-[9px] uppercase font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 px-1.5 py-0.5 rounded">Quiz</span>}
                                                            {lesson.lab && <span className="text-[9px] uppercase font-bold text-orange-500 bg-orange-50 dark:bg-orange-500/10 px-1.5 py-0.5 rounded">Lab</span>}
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </NavLink>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    {/* Toolkit Link */}
                    <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800/50">
                        <NavLink
                            to="/toolkit"
                            onClick={() => window.innerWidth < 1024 && onClose()}
                            className={({ isActive }) => cn(
                                "w-full flex items-center justify-between py-3 px-3 rounded-xl transition-all group",
                                isActive
                                    ? "bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-400 font-bold"
                                    : "border border-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-indigo-600 dark:hover:text-indigo-400"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <Wrench className="w-4 h-4" />
                                <span className="text-sm">Boîte à Outils OSINT</span>
                            </div>
                            <div className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-500/20 text-[10px] font-bold tracking-wider rounded-md text-indigo-600 dark:text-indigo-400 uppercase">
                                +50 Outils
                            </div>
                        </NavLink>
                    </div>

                </div >

                {/* Footer Actions */}
                < div className="p-4 border-t border-color shrink-0" >
                    <button
                        onClick={resetProgress}
                        className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-500 hover:text-red-500 transition-colors"
                    >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Réinitialiser la progression
                    </button>
                </div >
            </aside >
        </>
    );
}
