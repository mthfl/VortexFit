import React, { useState, useEffect } from 'react';
import { FaUser, FaClipboardCheck, FaDumbbell, FaUserMd, FaBars, FaTimes } from 'react-icons/fa';

function Sidebar({ onExerciseClick, onDailyExerciseClick, onAssessmentClick, onProfessionalsClick, isAdmin }) { 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const sidebar = document.querySelector('.sidebar');
            const toggleButton = document.querySelector('.sidebar-toggle');
            if (sidebar && !sidebar.contains(event.target)) {
                if (toggleButton && !toggleButton.contains(event.target)) {
                    setIsSidebarOpen(false);
                }
            }
        };

        if (isSidebarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarOpen]);

    return (
        <>
            {/* Botão de toggle para mobile */}
            <button
                className={`
                    sm:hidden fixed top-4 left-4 z-50 
                    p-3 rounded-full 
                    text-[#1E3A8A] bg-white 
                    hover:bg-[#2B52C4] hover:text-white
                    transition-all duration-200 ease-in-out
                    shadow-md
                    sidebar-toggle
                `}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                aria-label={isSidebarOpen ? "Fechar menu" : "Abrir menu"}
            >
                {isSidebarOpen ? (
                    <FaTimes className="w-6 h-6 transform transition-transform duration-200" />
                ) : (
                    <FaBars className="w-6 h-6 transform transition-transform duration-200" />
                )}
            </button>

            {/* Overlay para mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 w-[75%] sm:w-[250px] lg:w-[200px] 
                    bg-[#E8ECEF] h-screen flex flex-col py-4 
                    transform transition-transform duration-300 ease-in-out 
                    z-50
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}
                    sidebar
                `}
            >
                {/* Cabeçalho da Sidebar */}
                <div className="w-full px-4 flex justify-between items-center mb-6">
                    <h2 className="sm:block text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#1E3A8A] to-[#2B52C4] bg-clip-text text-transparent hover:from-[#2B52C4] hover:to-[#1E3A8A] transition-all duration-300 ease-in-out">
                        {isAdmin ? 'Admin Dashboard' : 'Aluno Dashboard'}
                    </h2>
                    <button
                        className="sm:hidden p-2 rounded-full text-[#1E3A8A] hover:bg-[#2B52C4] hover:text-white transition-all duration-200"
                        onClick={() => setIsSidebarOpen(false)}
                        aria-label="Fechar menu"
                    >
                        <FaTimes className="w-6 h-6" />
                    </button>
                </div>

                {/* Lista de itens */}
                <ul className="space-y-3 flex flex-col w-full px-3">
                    {[
                        { 
                            text: 'Avaliação', 
                            icon: <FaClipboardCheck className="w-5 h-5" />, 
                            onClick: onAssessmentClick 
                        },
                        { 
                            text: 'Exercícios', 
                            icon: <FaDumbbell className="w-5 h-5" />, 
                            onClick: onExerciseClick
                        },
                        { 
                            text: 'Rotina',
                            icon: <FaDumbbell className="w-5 h-5" />, 
                            onClick: onDailyExerciseClick
                        },
                        { 
                            text: 'Profissionais', 
                            icon: <FaUserMd className="w-5 h-5" />, 
                            onClick: onProfessionalsClick
                        },
                    ].map((item, index) => (
                        <li key={index} className="w-full">
                            <a
                                href="#"
                                className={`sidebar-link flex items-center gap-3 
                                    text-[#1E3A8A] hover:text-[#2B52C4] hover:bg-gray-200 rounded-lg p-3 
                                    transition-all duration-200 w-full text-left`}
                                aria-label={`Navegar para ${item.text}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (item.onClick) item.onClick();
                                    setIsSidebarOpen(false);
                                }}
                            >
                                {item.icon}
                                <span className="text-base">{item.text}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Sidebar;