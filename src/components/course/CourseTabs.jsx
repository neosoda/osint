import React from 'react';
import { BookOpen, HelpCircle, TerminalSquare } from 'lucide-react';
import { cn } from '../../lib/utils';

export function CourseTabs({ activeTab, setActiveTab, hasQuiz, hasLab }) {
    const tabs = [
        { id: 'cours', label: 'Cours', icon: BookOpen, show: true },
        { id: 'quiz', label: 'Quiz', icon: HelpCircle, show: hasQuiz },
        { id: 'lab', label: 'Lab', icon: TerminalSquare, show: hasLab }
    ];

    return (
        <div className="flex px-4 lg:px-8 border-b border-color">
            {tabs.filter(t => t.show).map(tab => {
                const Icon = tab.icon;
                return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "tab-btn",
                            activeTab === tab.id ? "tab-active" : ""
                        )}
                    >
                        <Icon className="w-4 h-4 ml-1" />
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
}
