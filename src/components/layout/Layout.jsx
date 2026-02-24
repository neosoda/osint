import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export function Layout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex bg-main min-h-screen">
            {/* Sidebar - Desktop fixed, Mobile overlay */}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            {/* Main Content Area */}
            <div className="flex-1 lg:pl-72 flex flex-col min-h-screen">
                <Header onMenuClick={() => setIsSidebarOpen(true)} />

                <main className="flex-1 relative">
                    {/* Outlet renders the matched child route (e.g. CoursePlayer) */}
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
