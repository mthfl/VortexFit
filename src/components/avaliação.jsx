import React, { useState, useEffect } from 'react';
import { FaClipboardCheck, FaTrash } from 'react-icons/fa';

function Assessment({ isAdmin }) { 
  const initialAssessment = {
    name: '',
    age: '',
    date: '',
    weight: '',
    height: '',
    imc: '',
  };

  const [assessment, setAssessment] = useState(initialAssessment);
  const [isEditing, setIsEditing] = useState(false);
  const [allAssessments, setAllAssessments] = useState([]);

  useEffect(() => {
    try {
      const savedAssessments = localStorage.getItem('assessments');
      if (savedAssessments) {
        setAllAssessments(JSON.parse(savedAssessments));
      }
    } catch (error) {
      console.error('Erro ao carregar do localStorage:', error);
      setAllAssessments([]);
    }
  }, []);

  const calculateIMC = (weight, height) => {
    try {
      if (weight && height) {
        const heightInMeters = parseFloat(height.replace(',', '.'));
        const weightInKg = parseFloat(weight.replace(',', '.'));
        if (heightInMeters > 0) {
          return (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);
        }
      }
      return '';
    } catch (error) {
      console.error('Erro ao calcular IMC:', error);
      return '';
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === 'height') {
      value = value.replace(/[^0-9,]/g, '');
      if (/^\d$/.test(value)) {
        value = `${value},`;
      }
      const regex = /^\d{0,2}(,\d{0,2})?$/;
      if (!regex.test(value) && value !== '') return;
    }

    if (name === 'age') {
      const regex = /^\d{0,2}$/;
      if (!regex.test(value) && value !== '') return;
    }

    setAssessment((prev) => {
      const newAssessment = { ...prev, [name]: value };
      if (name === 'weight' || name === 'height') {
        newAssessment.imc = calculateIMC(newAssessment.weight, newAssessment.height);
      }
      console.log('Estado atualizado:', newAssessment);
      return newAssessment;
    });
  };

  const handleSave = () => {
    try {
      const currentDate = new Date().toLocaleDateString('pt-BR');
      const updatedAssessment = { ...assessment, date: currentDate };
      const newAssessments = [...allAssessments, updatedAssessment];
      console.log('Salvando:', updatedAssessment);
      localStorage.setItem('assessments', JSON.stringify(newAssessments));
      setAllAssessments(newAssessments);
      setAssessment(initialAssessment);
      setIsEditing(false);
    } catch (error) {
      console.error('Erro ao salvar no localStorage:', error);
    }
  };

  const handleNewAssessment = () => {
    console.log('Iniciando nova avaliação');
    setAssessment(initialAssessment);
    setIsEditing(true);
  };

  const handleDelete = (index) => {
    try {
      console.log('Apagando avaliação no índice:', index);
      const updatedAssessments = allAssessments.filter((_, i) => i !== index);
      localStorage.setItem('assessments', JSON.stringify(updatedAssessments));
      setAllAssessments(updatedAssessments);
    } catch (error) {
      console.error('Erro ao apagar do localStorage:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 sm:ml-[80px] md:ml-[250px] lg:ml-[200px]">
      <h1 className="
        text-3xl font-extrabold text-[#1E3A8A] mb-8 text-center 
        bg-gradient-to-r from-[#1E3A8A] to-[#2B52C4] bg-clip-text text-transparent
      ">
        Avaliação Física
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
     
        {isAdmin && (
          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-[#E8ECEF]">
            <div className="flex items-center gap-3 mb-4">
              <FaClipboardCheck className="text-[#1E3A8A] w-6 h-6" />
              <h2 className="text-xl font-bold text-[#1E3A8A]">
                {isEditing ? 'Nova Avaliação' : 'Iniciar Avaliação'}
              </h2>
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold text-[#2B52C4] mb-1">
                    Nome:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={assessment.name || ''}
                    onChange={handleChange}
                    placeholder="Digite seu nome"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2B52C4]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold text-[#2B52C4] mb-1">
                    Idade:
                  </label>
                  <input
                    type="text"
                    name="age"
                    value={assessment.age || ''}
                    onChange={handleChange}
                    placeholder="Digite sua idade (máx. 99)"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2B52C4]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold text-[#2B52C4] mb-1">
                    Peso (kg):
                  </label>
                  <input
                    type="text"
                    name="weight"
                    value={assessment.weight || ''}
                    onChange={handleChange}
                    placeholder="Ex: 75,5"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2B52C4]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold text-[#2B52C4] mb-1">
                    Altura (m):
                  </label>
                  <input
                    type="text"
                    name="height"
                    value={assessment.height || ''}
                    onChange={handleChange}
                    placeholder="Ex: 1,75"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2B52C4]"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    disabled={!assessment.name || !assessment.age || !assessment.weight || !assessment.height}
                    className={`
                      w-full py-2.5 rounded-lg font-semibold text-white
                      transition-all duration-200
                      ${
                        !assessment.name || !assessment.age || !assessment.weight || !assessment.height
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#1E3A8A] to-[#2B52C4] hover:from-[#2B52C4] hover:to-[#1E3A8A]'
                      }
                    `}
                  >
                    Salvar
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
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
            ) : (
              <button
                onClick={handleNewAssessment}
                className="
                  w-full py-2.5 rounded-lg font-semibold text-white
                  bg-gradient-to-r from-[#1E3A8A] to-[#2B52C4]
                  hover:from-[#2B52C4] hover:to-[#1E3A8A]
                  transition-all duration-200
                "
              >
                Nova Avaliação
              </button>
            )}
          </div>
        )}

       
        <div className="col-span-full">
          <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Histórico de Avaliações</h2>
          {allAssessments.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allAssessments.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-2xl p-6 border border-[#E8ECEF] relative"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <FaClipboardCheck className="text-[#1E3A8A] w-6 h-6" />
                      <h3 className="text-lg font-bold text-[#1E3A8A]">Avaliação {index + 1}</h3>
                    </div>
                    {isAdmin && (
                      <button
                        onClick={() => handleDelete(index)}
                        className="text-red-500 hover:text-red-700 transition-all duration-200"
                        title="Apagar avaliação"
                      >
                        <FaTrash className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <span className="font-semibold text-[#2B52C4]">Nome:</span>{' '}
                      {item.name || 'Não informado'}
                    </p>
                    <p>
                      <span className="font-semibold text-[#2B52C4]">Idade:</span>{' '}
                      {item.age ? `${item.age} anos` : '-'}
                    </p>
                    <p>
                      <span className="font-semibold text-[#2B52C4]">Data:</span> {item.date}
                    </p>
                    <p>
                      <span className="font-semibold text-[#2B52C4]">Peso:</span>{' '}
                      {item.weight ? `${item.weight}kg` : '-'}
                    </p>
                    <p>
                      <span className="font-semibold text-[#2B52C4]">Altura:</span>{' '}
                      {item.height ? `${item.height}m` : '-'}
                    </p>
                    <p>
                      <span className="font-semibold text-[#2B52C4]">IMC:</span> {item.imc || '-'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-700 text-center">Nenhuma avaliação registrada.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Assessment;