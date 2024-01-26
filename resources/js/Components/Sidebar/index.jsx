import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 h-full w-64 fixed top-0 left-0 overflow-y-auto">
            {/* Sidebar content */}
            <div className="p-4 text-white">
                <h1 className="text-2xl font-bold">Sidebar</h1>
                <ul className="mt-4">
                    <li className="py-2">
                        <a href="#" className="block text-gray-300 hover:text-white">
                            Dashboard
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="#" className="block text-gray-300 hover:text-white">
                            Projects
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="#" className="block text-gray-300 hover:text-white">
                            Messages
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="#" className="block text-gray-300 hover:text-white">
                            Settings
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export {Sidebar};