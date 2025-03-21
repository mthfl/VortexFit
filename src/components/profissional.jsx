import React, { useState, useEffect } from 'react';
import { FaUserTie, FaEnvelope, FaHistory, FaTrash } from 'react-icons/fa';

function Professionals({ isAdmin }) { 
  const initialSupportRequest = {
    message: '',
    professional: '',
  };

  const [supportRequest, setSupportRequest] = useState(initialSupportRequest);
  const [isRequestingSupport, setIsRequestingSupport] = useState(false);
  const [supportHistory, setSupportHistory] = useState([]);


  const professionals = [
    { id: 1, name: 'João Silva', role: 'Personal Trainer', email: 'joao@vortexfit.com' },
    { id: 2, name: 'Maria Oliveira', role: 'Nutricionista', email: 'maria@vortexfit.com' },
    { id: 3, name: 'Pedro Santos', role: 'Fisioterapeuta', email: 'pedro@vortexfit.com' },
  ];


  useEffect(() => {
    try {
      const savedRequests = localStorage.getItem('supportRequests');
      if (savedRequests) {
        setSupportHistory(JSON.parse(savedRequests));
      }
    } catch (error) {
      console.error('Erro ao carregar chamados do localStorage:', error);
      setSupportHistory([]);
    }
  }, []);

  const handleSupportChange = (e) => {
    const { name, value } = e.target;
    setSupportRequest((prev) => ({ ...prev, [name]: value }));
  };

  const handleSupportSubmit = () => {
    try {
      const currentDate = new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
      const newRequest = {
        ...supportRequest,
        date: currentDate,
        id: Date.now(),
      };
      const updatedHistory = [...supportHistory, newRequest];
      console.log('Solicitação de apoio enviada:', newRequest);
      localStorage.setItem('supportRequests', JSON.stringify(updatedHistory));
      setSupportHistory(updatedHistory);
      alert(`Solicitação enviada para ${supportRequest.professional}: ${supportRequest.message}`);
      setSupportRequest(initialSupportRequest);
      setIsRequestingSupport(false);
    } catch (error) {
      console.error('Erro ao salvar solicitação no localStorage:', error);
    }
  };

  const handleDeleteRequest = (id) => {
    try {
      console.log('Apagando chamado com ID:', id);
      const updatedHistory = supportHistory.filter((request) => request.id !== id);
      localStorage.setItem('supportRequests', JSON.stringify(updatedHistory));
      setSupportHistory(updatedHistory);
    } catch (error) {
      console.error('Erro ao apagar chamado do localStorage:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 sm:ml-[80px] md:ml-[250px] lg:ml-[200px]">
      <h1 className="
        text-3xl font-extrabold text-[#1E3A8A] mb-8 text-center 
        bg-gradient-to-r from-[#1E3A8A] to-[#2B52C4] bg-clip-text text-transparent
      ">
        Profissionais da Academia
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
     
        <div className="col-span-full">
          <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Nossos Profissionais</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {professionals.map((professional) => (
              <div
                key={professional.id}
                className="bg-white rounded-2xl shadow-2xl p-6 border border-[#E8ECEF]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaUserTie className="text-[#1E3A8A] w-6 h-6" />
                  <h3 className="text-lg font-bold text-[#1E3A8A]">{professional.name}</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-semibold text-[#2B52C4]">Cargo:</span> {professional.role}
                  </p>
                  <p>
                    <span className="font-semibold text-[#2B52C4]">Email:</span> {professional.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

    
        <div className="col-span-full">
          <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Solicitar Apoio</h2>
          {!isRequestingSupport ? (
            <button
              onClick={() => setIsRequestingSupport(true)}
              className="
                w-full max-w-xs py-2.5 rounded-lg font-semibold text-white
                bg-gradient-to-r from-[#1E3A8A] to-[#2B52C4]
                hover:from-[#2B52C4] hover:to-[#1E3A8A]
                transition-all duration-200
              "
            >
              <FaEnvelope className="inline mr-2" /> Enviar Solicitação
            </button>
          ) : (
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-[#E8ECEF]">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold text-[#2B52C4] mb-1">
                    Escolha um Profissional:
                  </label>
                  <select
                    name="professional"
                    value={supportRequest.professional}
                    onChange={handleSupportChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2B52C4]"
                  >
                    <option value="">Selecione</option>
                    {professionals.map((prof) => (
                      <option key={prof.id} value={prof.name}>
                        {prof.name} ({prof.role})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold text-[#2B52C4] mb-1">
                    Mensagem:
                  </label>
                  <textarea
                    name="message"
                    value={supportRequest.message}
                    onChange={handleSupportChange}
                    placeholder="Digite sua solicitação de apoio"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2B52C4] h-24"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleSupportSubmit}
                    disabled={!supportRequest.professional || !supportRequest.message}
                    className={`
                      w-full py-2.5 rounded-lg font-semibold text-white
                      transition-all duration-200
                      ${
                        !supportRequest.professional || !supportRequest.message
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#1E3A8A] to-[#2B52C4] hover:from-[#2B52C4] hover:to-[#1E3A8A]'
                      }
                    `}
                  >
                    Enviar
                  </button>
                  <button
                    onClick={() => setIsRequestingSupport(false)}
                    className="
                      w-full py-2.5 rounded-lg font-semibold text-[#1E3A8A]
                      bg-gray-200 hover:bg-gray-300
                      transition-all duration-200
                    "
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        
        <div className="col-span-full">
          <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Histórico de Chamados</h2>
          {supportHistory.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {supportHistory.map((request) => (
                <div
                  key={request.id}
                  className="bg-white rounded-2xl shadow-2xl p-6 border border-[#E8ECEF] relative"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <FaHistory className="text-[#1E3A8A] w-6 h-6" />
                      <h3 className="text-lg font-bold text-[#1E3A8A]">Chamado {request.id}</h3>
                    </div>
                    {isAdmin && ( 
                      <button
                        onClick={() => handleDeleteRequest(request.id)}
                        className="text-red-500 hover:text-red-700 transition-all duration-200"
                        title="Apagar chamado"
                      >
                        <FaTrash className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <span className="font-semibold text-[#2B52C4]">Profissional:</span> {request.professional}
                    </p>
                    <p>
                      <span className="font-semibold text-[#2B52C4]">Mensagem:</span> {request.message}
                    </p>
                    <p>
                      <span className="font-semibold text-[#2B52C4]">Data:</span> {request.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-700 text-center">Nenhum chamado registrado ainda.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Professionals;