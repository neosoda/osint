import React, { useState } from 'react';
import { CheckCircle, XCircle, BrainCog } from 'lucide-react';
import { cn } from '../../lib/utils';

export function QuizEngine({ quizzes }) {
    // Store selected answers: { quizId: selectedIndex }
    const [answers, setAnswers] = useState({});
    // Store validation results: { quizId: { isCorrect, selectedIndex } }
    const [results, setResults] = useState({});


    const handleSelect = (quizId, optionIndex) => {
        if (results[quizId]) return; // Don't allow changing answer after validation
        setAnswers(prev => ({ ...prev, [quizId]: optionIndex }));
    };

    const handleValidate = (quizId, correctIndex) => {
        if (answers[quizId] === undefined) {
            alert("Veuillez sélectionner une réponse.");
            return;
        }
        const isCorrect = answers[quizId] === correctIndex;
        setResults(prev => ({
            ...prev,
            [quizId]: { isCorrect, selectedIndex: answers[quizId] }
        }));
    };

    return (
        <div className="space-y-8 animate-fade-in py-6">
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500 mb-4">
                    <BrainCog className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Vérification des connaissances</h3>
                <p className="text-slate-500 dark:text-slate-400">Testez ce que vous venez d'apprendre dans cette leçon.</p>
            </div>

            {quizzes.map((q, qIndex) => {
                const hasResult = results[q.id];
                const resultData = results[q.id] || {};

                return (
                    <div
                        key={q.id}
                        className={cn(
                            "glass p-6 rounded-2xl transition-colors duration-300",
                            hasResult && resultData.isCorrect ? "border-green-500 dark:border-green-500/50" : "",
                            hasResult && !resultData.isCorrect ? "border-red-500 dark:border-red-500/50" : ""
                        )}
                    >
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                            <span className="text-indigo-500 mr-2">Q{qIndex + 1}.</span>
                            {q.question}
                        </h4>

                        <div className="space-y-3">
                            {q.options.map((opt, oIndex) => {
                                const isSelected = answers[q.id] === oIndex;
                                let optionClasses = "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer";

                                if (hasResult) {
                                    optionClasses = "opacity-50 cursor-not-allowed"; // Base state
                                    if (oIndex === q.correct) {
                                        optionClasses = "bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-600 ring-1 ring-green-400 opacity-100";
                                    } else if (isSelected && !resultData.isCorrect) {
                                        optionClasses = "bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-600 opacity-100";
                                    }
                                } else if (isSelected) {
                                    optionClasses = "border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 ring-1 ring-indigo-400";
                                }

                                return (
                                    <label
                                        key={oIndex}
                                        className={cn(
                                            "flex items-start gap-3 p-3 rounded-xl border transition-colors",
                                            optionClasses
                                        )}
                                    >
                                        <input
                                            type="radio"
                                            name={`quiz-${q.id}`}
                                            value={oIndex}
                                            checked={isSelected}
                                            onChange={() => handleSelect(q.id, oIndex)}
                                            disabled={hasResult}
                                            className="mt-1 text-indigo-500 focus:ring-indigo-500 h-4 w-4 bg-transparent border-slate-300 dark:border-slate-600"
                                        />
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{opt}</span>
                                    </label>
                                );
                            })}
                        </div>

                        {!hasResult ? (
                            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                                <button
                                    onClick={() => handleValidate(q.id, q.correct)}
                                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition shadow-sm"
                                >
                                    Valider la réponse
                                </button>
                            </div>
                        ) : (
                            <div className={cn(
                                "mt-4 p-4 rounded-xl text-sm animate-fade-in",
                                resultData.isCorrect
                                    ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                                    : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
                            )}>
                                <div className="flex gap-2 items-start">
                                    {resultData.isCorrect ? <CheckCircle className="w-5 h-5 shrink-0" /> : <XCircle className="w-5 h-5 shrink-0" />}
                                    <div>
                                        <strong>{resultData.isCorrect ? "Correct !" : "Incorrect."}</strong>
                                        <p className="mt-1">{q.explanation}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

