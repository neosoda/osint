import React, { useEffect, useRef } from 'react';
import { Check, Copy } from 'lucide-react';

// Helper component to add copy buttons to all <pre> blocks safely after rendering HTML
export function MarkdownViewer({ htmlContent }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Remove old copy buttons to avoid duplicates on re-render
    const oldBtns = containerRef.current.querySelectorAll('.copy-btn');
    oldBtns.forEach(btn => btn.remove());

    const blocks = containerRef.current.querySelectorAll('pre');

    blocks.forEach(block => {
      block.classList.add('group');
      // Create button wrapper
      const btn = document.createElement('button');
      btn.className = 'copy-btn absolute top-2 right-2 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700 opacity-0 group-hover:opacity-100 flex items-center justify-center';
      btn.title = "Copier le code";
      btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';

      btn.onclick = async () => {
        const codeElement = block.querySelector('code');
        const text = codeElement ? codeElement.innerText : block.innerText;

        try {
          await navigator.clipboard.writeText(text);
          btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-green-400"><path d="M20 6 9 17l-5-5"/></svg>';
          setTimeout(() => {
            btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
          }, 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      };

      block.appendChild(btn);
    });
  }, [htmlContent]);

  return (
    <div
      ref={containerRef}
      className="prose dark:prose-invert max-w-none animate-fade-in py-4"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
