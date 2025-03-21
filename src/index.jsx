import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import App from './App'; // Importa o App atualizado
import './index.css';

function Home() {
  const navigate = useNavigate();

  const handleUserDashboard = () => {
    navigate('/dashboard', { state: { isAdmin: false } }); // Usuário comum
  };

  const handleAdminDashboard = () => {
    navigate('/dashboard', { state: { isAdmin: true } }); // Admin
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F4F8] to-[#E8ECEF] flex flex-col items-center justify-center text-gray-800">
      {/* Cabeçalho */}
      <header className="w-full max-w-7xl p-6 sm:p-8 flex flex-col items-center text-center">
        <h1 className="
          text-4xl sm:text-5xl lg:text-6xl font-extrabold 
          bg-gradient-to-r from-[#1E3A8A] to-[#2B52C4] bg-clip-text text-transparent 
          mb-4 sm:mb-6
        ">
          Bem-vindo ao Vortex Fitness
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-2xl">
          Gerencie seus exercícios, acompanhe seu progresso e alcance seus objetivos de forma simples e eficiente.
        </p>
      </header>

      {/* Botões de Ação */}
      <footer className="w-full max-w-7xl p-6 sm:p-8 flex justify-center gap-4 sm:gap-6">
        <button
          onClick={handleUserDashboard}
          className="
            px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-white text-lg sm:text-xl 
            bg-gradient-to-r from-[#1E3A8A] to-[#2B52C4] 
            hover:from-[#2B52C4] hover:to-[#1E3A8A] 
            transition-all duration-300 transform hover:scale-105 hover:shadow-xl
            focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:ring-offset-2
          "
        >
         Dashboard Aluno
        </button>
        <button
          onClick={handleAdminDashboard}
          className="
            px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-white text-lg sm:text-xl 
            bg-gradient-to-r from-[#2B52C4] to-[#1E3A8A] 
            hover:from-[#1E3A8A] hover:to-[#2B52C4] 
            transition-all duration-300 transform hover:scale-105 hover:shadow-xl
            focus:outline-none focus:ring-2 focus:ring-[#2B52C4] focus:ring-offset-2
          "
        >
          Dashboard Admin
        </button>
      </footer>
    </div>
  );
}

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<App />} />
      </Routes>
    </Router>
  );
}

export default Index;