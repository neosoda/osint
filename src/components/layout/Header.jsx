import React from 'react';
import { Shield, Menu, Moon, Sun, MonitorPlay, BrainCog, TerminalSquare } from 'lucide-react';
import { useCourseStore } from '../../store/useCourseStore';

export function Header({ onMenuClick }) {
    const { theme, toggleTheme } = useCourseStore();

    return (
        <header className="h-16 border-b border-color bg-main sticky top-0 z-30 flex items-center justify-between px-4 lg:px-8 transition-colors duration-300">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                    <Menu className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3 lg:hidden">
                    <div className="w-8 h-8 rounded-lg bg-cyber-500/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-cyber-600 dark:text-cyber-400" />
                    </div>
                    <div>
                        <h1 className="font-bold text-sm tracking-tight text-slate-900 dark:text-white">OSINT & SOCENG</h1>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={toggleTheme}
                    className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Basculer le thème"
                >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
            </div>
        </header>
    );
}
