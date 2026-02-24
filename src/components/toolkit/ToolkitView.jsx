import React, { useState, useMemo } from 'react';
import { Search, ShieldAlert, ExternalLink, Wrench, ShieldCheck, Zap } from 'lucide-react';
import { toolkitData } from '../../data/toolkitData';
import { cn } from '../../lib/utils';

export function ToolkitView() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedDifficulty, setSelectedDifficulty] = useState('All');

    // Extract unique categories and difficulties for filters
    const categories = useMemo(() => {
        const cats = new Set(toolkitData.map(item => item['Catégorie']).filter(Boolean));
        return ['All', ...Array.from(cats)].sort();
    }, []);

    const difficulties = useMemo(() => {
        const diffs = new Set(toolkitData.map(item => item['Difficulté']).filter(Boolean));
        return ['All', ...Array.from(diffs)].sort();
    }, []);

    // Filter logic
    const filteredTools = useMemo(() => {
        return toolkitData.filter(tool => {
            const matchesSearch = tool['Outil']?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool['Description']?.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || tool['Catégorie'] === selectedCategory;
            const matchesDifficulty = selectedDifficulty === 'All' || tool['Difficulté'] === selectedDifficulty;
            return matchesSearch && matchesCategory && matchesDifficulty;
        });
    }, [searchQuery, selectedCategory, selectedDifficulty]);

    return (
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 md:py-12 bg-slate-50 dark:bg-[#0b1120]">
            <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">

                {/* Header section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2.5 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-xl">
                                <Wrench className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                                Boîte à Outils OSINT
                            </h1>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl">
                            Référentiel complet des outils d'investigation, d'anonymisation et de Red Team, répertoriés selon notre méthodologie stricte.
                        </p>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800/50 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Rechercher un outil, une stack (ex: DNS, Shodan)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 transition-shadow outline-none text-sm placeholder:text-slate-500"
                        />
                    </div>

                    <div className="flex gap-4 w-full md:w-auto">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl text-slate-700 dark:text-slate-200 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none flex-1 md:flex-none cursor-pointer"
                        >
                            {categories.map(c => (
                                <option key={c} value={c}>{c === 'All' ? 'Toutes les catégories' : c}</option>
                            ))}
                        </select>

                        <select
                            value={selectedDifficulty}
                            onChange={(e) => setSelectedDifficulty(e.target.value)}
                            className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl text-slate-700 dark:text-slate-200 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none flex-1 md:flex-none cursor-pointer"
                        >
                            {difficulties.map(d => (
                                <option key={d} value={d}>{d === 'All' ? 'Toutes les difficultés' : d}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Dashboard Stat */}
                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <div className="px-2.5 py-1 bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 rounded-lg">
                        {filteredTools.length} {filteredTools.length > 1 ? 'outils trouvés' : 'outil trouvé'}
                    </div>
                </div>

                {/* Toolkit Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredTools.map((tool, idx) => {

                        // Determine difficulty color mapping
                        const diffLower = tool['Difficulté']?.toLowerCase() || '';
                        let diffStyle = 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300';
                        if (diffLower.includes('facile') || diffLower.includes('débutant')) diffStyle = 'bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400';
                        else if (diffLower.includes('intermédiaire')) diffStyle = 'bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400';
                        else if (diffLower.includes('avancé')) diffStyle = 'bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-400';

                        return (
                            <div key={idx} className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
                                <div className="flex justify-between items-start gap-4 mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500">
                                                {tool['Type'] || 'Outil'}
                                            </span>
                                            {tool['Catégorie'] && (
                                                <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-md text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                                                    {parseCategoryPrefix(tool['Catégorie'])}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                            {tool['Outil']}
                                        </h3>
                                    </div>
                                    <span className={cn("px-2.5 py-1 text-xs font-bold rounded-lg whitespace-nowrap", diffStyle)}>
                                        {tool['Difficulté'] || 'N/A'}
                                    </span>
                                </div>

                                <p className="text-slate-600 dark:text-slate-400 text-sm flex-1 leading-relaxed">
                                    {tool['Description']}
                                </p>

                                {tool['OPSEC'] && (
                                    <div className="mt-5 p-3.5 bg-amber-50 dark:bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl">
                                        <div className="flex items-start gap-2.5">
                                            <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
                                            <div>
                                                <span className="text-xs font-bold text-amber-800 dark:text-amber-500 uppercase tracking-widest block mb-0.5">Règle OPSEC</span>
                                                <p className="text-sm font-medium text-amber-900 dark:text-amber-200/80 leading-snug">
                                                    {tool['OPSEC']}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {tool['Lien'] && tool['Lien'] !== '—' && (
                                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <a
                                            href={tool['Lien']}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                                        >
                                            Dépôt / Site officiel <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {filteredTools.length === 0 && (
                    <div className="text-center py-20 px-4">
                        <Zap className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Aucun outil trouvé</h3>
                        <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                            Nous n'avons pas trouvé d'outil correspondant à "{searchQuery}" avec ces filtres.
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
}

// Helper to remove emojis from category names for cleaner tags
function parseCategoryPrefix(catStr) {
    // Removes standard emoji and leading spaces to just get text
    return catStr.replace(/^[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, '').trim();
}
