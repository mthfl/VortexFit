import React, { useState, useEffect } from 'react';
import { FaDumbbell, FaRedo, FaClock, FaCheckCircle } from 'react-icons/fa';

function MMain({ showAllExercises, isAdmin }) {
    const initialExercises = [
        // SEGUNDA-FEIRA (Treino Upper - Parte Superior)
        {
            name: 'Supino Máquina',
            gifUrl: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3k4MzM1YzFlejk2b2pqazF0cGtlNWhkeTg5dHJrNmVnenF0NWFscSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zWgoRq2HvZdEMF31Al/giphy.gif',
            bodyPart: 'Peito',
            restTime: 60,
            sets: 4,
            reps: 10,
            day: 'Segunda-feira',
            specificBodyPart: 'Peitoral maior',
            benefits: 'Fortalecimento do peito, ombros e tríceps',
            precautions: 'Manter a coluna alinhada e evitar sobrecarga nos ombros',
        },
        {
            name: 'Supino Inclinado com Halteres',
            gifUrl: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGd1cW5wa25tM3J2MTR3emdscmFweTg0cG1iaGYxYngxNzF5b2g0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yu1zNB6CSPSzPuAtBc/giphy.gif',
            bodyPart: 'Peito',
            restTime: 60,
            sets: 4,
            reps: 12,
            day: 'Segunda-feira',
            specificBodyPart: 'Peitoral maior (parte superior)',
            benefits: 'Desenvolvimento da parte superior do peito',
            precautions: 'Controlar o movimento para evitar lesões nos ombros',
        },
        {
            name: 'Puxada unilateral',
            gifUrl: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2ViNDBpMGdmemZ2N3BlYmYxOTl3bTYzYnVqMmhubjRodjlzMHc2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sgPwyhcruryJfo4OlF/giphy.gif',
            bodyPart: 'Costas',
            restTime: 60,
            sets: 4,
            reps: 12,
            day: 'Segunda-feira',
            specificBodyPart: 'Grande dorsal',
            benefits: 'Fortalecimento das costas e melhora da postura',
            precautions: 'Evitar puxar com os ombros, focar nas costas',
        },
        {
            name: 'Remada Curvada',
            gifUrl: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmY0czg3ZHZqNWZweDYzMWtsOTZrbTFnajQ1YzQzcGNhNHhudjh6MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rZND0nzFbFKRb61jxe/giphy.gif',
            bodyPart: 'Costas',
            restTime: 60,
            sets: 4,
            reps: 10,
            day: 'Segunda-feira',
            specificBodyPart: 'Grande dorsal e trapézio',
            benefits: 'Fortalecimento das costas e estabilização do core',
            precautions: 'Manter a coluna neutra para evitar lesões',
        },
        {
            name: 'Desenvolvimento com Halteres',
            gifUrl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHM0OHJwaDh4eGM2ZmNtcHAzcHRld2JseHBleWdhd2hzeDBvaWtvMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S9g4eWCFOucJJdfN1C/giphy.gif',
            bodyPart: 'Ombros',
            restTime: 60,
            sets: 4,
            reps: 12,
            day: 'Segunda-feira',
            specificBodyPart: 'Deltóide anterior e médio',
            benefits: 'Fortalecimento dos ombros e melhora da estabilidade',
            precautions: 'Evitar elevar demais os halteres para não sobrecarregar as articulações',
        },
        {
            name: 'Tríceps Unilateral na Polia',
            gifUrl: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2VraXgwaXJkcWw1enc5YXNtMGg3dzk5ODhuZDV1bWhmODNicXdqYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HA2tg3gjjqRTEbC2bd/giphy.gif',
            bodyPart: 'Tríceps',
            restTime: 45,
            sets: 3,
            reps: 15,
            day: 'Segunda-feira',
            specificBodyPart: 'Tríceps braquial',
            benefits: 'Tonificação e fortalecimento dos braços',
            precautions: 'Manter o cotovelo fixo para evitar compensações',
        },

        // TERÇA-FEIRA (Treino Lower - Parte Inferior)
        {
            name: 'Terra',
            gifUrl: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3dqeGlhdWQ0NDkyMHlydDJsOHZoZDBhZnpsY29teWpldGxpcG96bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/a65gT5KMI1p8y8llvb/giphy.gif',
            bodyPart: 'Pernas',
            restTime: 90,
            sets: 4,
            reps: 10,
            day: 'Terça-feira',
            specificBodyPart: 'Quadríceps e glúteos',
            benefits: 'Fortalecimento das pernas e melhora da resistência',
            precautions: 'Ajustar o peso para evitar sobrecarga nos joelhos',
        },
        {
            name: 'Extensora',
            gifUrl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWJveDd3d3pjNnp0cWhhNDZ6ODFxdGNrMmxudzluc3lsb2xjenZxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/w88f1J6siEm5kZIOq1/giphy.gif',
            bodyPart: 'Quadríceps',
            restTime: 60,
            sets: 3,
            reps: 15,
            day: 'Terça-feira',
            specificBodyPart: 'Quadríceps femoral',
            benefits: 'Isolamento e fortalecimento dos quadríceps',
            precautions: 'Evitar travar os joelhos na extensão completa',
        },
        {
            name: 'Mesa Flexora',
            gifUrl: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm54aDg1eG81emdpNnY5ZDJ5bTl0MzZxZ3VlMThiazBiZDR3amd6OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8pBe47g8WqX7WdAGeK/giphy.gif',
            bodyPart: 'Posterior de Coxa',
            restTime: 60,
            sets: 3,
            reps: 12,
            day: 'Terça-feira',
            specificBodyPart: 'Isquiotibiais',
            benefits: 'Fortalecimento da parte posterior da coxa',
            precautions: 'Controlar o movimento para evitar lesões nos joelhos',
        },
        {
            name: 'Stiff',
            gifUrl: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExemwzdWwwb3A4cDNoYzJkb2szYWx5b3J0MXdtM2FsMm03M3M5dmZ1NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Efm7ahfrertWveTuF7/giphy.gif',
            bodyPart: 'Posterior de Coxa',
            restTime: 60,
            sets: 3,
            reps: 10,
            day: 'Terça-feira',
            specificBodyPart: 'Isquiotibiais e glúteos',
            benefits: 'Melhora da flexibilidade e força na posterior',
            precautions: 'Manter a coluna reta para evitar lesões lombares',
        },
        {
            name: 'Panturrilha',
            gifUrl: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbm1yMHE1aWhvMXo5djl3eWd5YXdseHIxbXpwY2Jzb2lseWpubmpyciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Nz9GKJ6saoIFCG4N43/giphy.gif',
            bodyPart: 'Panturrilha',
            restTime: 45,
            sets: 4,
            reps: 20,
            day: 'Terça-feira',
            specificBodyPart: 'Gastrocnêmio e sóleo',
            benefits: 'Fortalecimento das panturrilhas e estabilidade do tornozelo',
            precautions: 'Realizar o movimento completo sem travar os joelhos',
        },

        // QUARTA-FEIRA (Cardio ou Descanso Ativo)
        {
            name: 'Cardio em Alta Intensidade',
            gifUrl: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXRpcmZjNXM5anRueGRsYzg0NDZzd2Rqa2R3MjF6eDc3cTdkbjFhMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gOWH4zRYAgECu68q3a/giphy.gif',
            bodyPart: 'Cardio',
            restTime: 60,
            sets: 1,
            reps: '20min',
            day: 'Quarta-feira',
            specificBodyPart: 'Sistema cardiovascular',
            benefits: 'Melhora da resistência e queima calórica',
            precautions: 'Monitorar frequência cardíaca e evitar excesso',
        },

        // QUINTA-FEIRA (Treino Upper - Parte Superior)
        {
            name: 'Supino Reto smith',
            gifUrl: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW04ZDRrNml4MDg4Zm80bTBhZGt5em8zMmpyMXo1NXhwY250eDY5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT4AZrJ7t6Y8hMpAW9/giphy.gif',
            bodyPart: 'Peito',
            restTime: 60,
            sets: 4,
            reps: 10,
            day: 'Quinta-feira',
            specificBodyPart: 'Peitoral maior',
            benefits: 'Fortalecimento do peito e estabilização dos ombros',
            precautions: 'Controlar a descida para evitar lesões',
        },
        {
            name: 'Peck Deck',
            gifUrl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTJ0ZW0zOTFxaWZ6OW0yOWNwNzJ5bmg4NW5oYjljZ2JoY2Znd3phbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wdutMIvga094N0X47R/giphy.gif',
            bodyPart: 'Peito',
            restTime: 60,
            sets: 3,
            reps: 12,
            day: 'Quinta-feira',
            specificBodyPart: 'Peitoral maior',
            benefits: 'Isolamento do peito e melhora da definição',
            precautions: 'Ajustar o assento para evitar tensão nos ombros',
        },
        {
            name: 'Remada unilateral',
            gifUrl: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnB1OTN0NnZtOXlvdGJ2YmF5YmdkcXNpMDdnZ2FzMnpmNzFxdDl6cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fQQ1Q0rCBtUkhyKlQ2/giphy.gif',
            bodyPart: 'Costas',
            restTime: 60,
            sets: 4,
            reps: 12,
            day: 'Quinta-feira',
            specificBodyPart: 'Grande dorsal e bíceps',
            benefits: 'Fortalecimento dos latissimus e braços',
            precautions: 'Evitar balançar o corpo durante o movimento',
        },
        {
            name: 'Remada Baixa com Pegada neutra',
            gifUrl: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWlqZ3kydWdjaXBwb2d5ejBvdnc5dDBkdjQzMGh6ZmNxcnNvN3VqaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UtgoXnY0rIeuMhLOC8/giphy.gif',
            bodyPart: 'Costas',
            restTime: 60,
            sets: 4,
            reps: 10,
            day: 'Quinta-feira',
            specificBodyPart: 'Grande dorsal e trapézio',
            benefits: 'Fortalecimento das costas médias',
            precautions: 'Manter postura ereta para proteger a lombar',
        },
        {
            name: 'Rosca com Barra',
            gifUrl: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzVneHRweWI0bTN0MXMxYzY1bW9ibGU5azJ4c2pwN3d4ZTh4bmFiZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IS2u2cakAIZ3gLlMZ4/giphy.gif',
            bodyPart: 'Bíceps',
            restTime: 45,
            sets: 3,
            reps: 12,
            day: 'Quinta-feira',
            specificBodyPart: 'Bíceps braquial',
            benefits: 'Fortalecimento e definição dos braços',
            precautions: 'Evitar balançar o tronco durante o exercício',
        },
        {
            name: 'Encolhimento para Trapézio',
            gifUrl: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTFja3BpYXkweGRsdXo4ZmZzZm9wdW8zNWxtY3k4NnE0YWtmNHM4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MvYUyKErkaNRVgxrUX/giphy.gif',
            bodyPart: 'Trapézio',
            restTime: 45,
            sets: 3,
            reps: 12,
            day: 'Quinta-feira',
            specificBodyPart: 'Trapézio superior',
            benefits: 'Fortalecimento do trapézio e melhora da postura',
            precautions: 'Evitar girar os ombros para não forçar as articulações',
        },

        // SEXTA-FEIRA (Treino Lower - Parte Inferior)
        {
            name: 'Agachamento livre',
            gifUrl: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2xjNWdkdjFzdzB1ZHBxNmkwZnNmNjJ6bWF5ajk5Zms1cDhhamVkNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gVCoYUK1eOjRElTzWE/giphy.gif',
            bodyPart: 'Pernas',
            restTime: 60,
            sets: 3,
            reps: 12,
            day: 'Sexta-feira',
            specificBodyPart: 'Quadríceps, glúteos e isquiotibiais',
            benefits: 'Fortalecimento unilateral das pernas',
            precautions: 'Manter o tronco ereto e joelhos alinhados',
        },
        {
            name: 'Leg Press Horizontal',
            gifUrl: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjBzOTl3emNieTltMnZndHd2czR2YXl5dnh1d2V0dzBrNmhjeTVwZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nM620sUD4WNezd0JdI/giphy.gif',
            bodyPart: 'Pernas',
            restTime: 90,
            sets: 4,
            reps: 10,
            day: 'Sexta-feira',
            specificBodyPart: 'Quadríceps e glúteos',
            benefits: 'Fortalecimento geral das pernas',
            precautions: 'Evitar travar os joelhos no topo do movimento',
        },
        {
            name: 'Cadeira Flexora',
            gifUrl: 'https://i.postimg.cc/dDcPpbWP/Treino-de-perna-Afundo-Avan-o-4-X10-Leg-Press-45-4-X10-Agachamento-Smith-4-X10-Hack-4-X10-Stiff.jpg',
            bodyPart: 'Posterior de Coxa',
            restTime: 60,
            sets: 3,
            reps: 12,
            day: 'Sexta-feira',
            specificBodyPart: 'Isquiotibiais',
            benefits: 'Fortalecimento da parte posterior da coxa',
            precautions: 'Controlar o movimento para evitar lesões',
        },
        {
            name: 'Mesa Flexora',
            gifUrl: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm54aDg1eG81emdpNnY5ZDJ5bTl0MzZxZ3VlMThiazBiZDR3amd6OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8pBe47g8WqX7WdAGeK/giphy.gif',
            bodyPart: 'Posterior de Coxa',
            restTime: 60,
            sets: 3,
            reps: 12,
            day: 'Sexta-feira',
            specificBodyPart: 'Isquiotibiais',
            benefits: 'Isolamento da posterior da coxa',
            precautions: 'Evitar pesos excessivos para proteger os joelhos',
        },
        {
            name: 'Elevação Lateral',
            gifUrl: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHB0eWF3M2RlMm45M201bGc5NTl5bnd1MWNvdXhyN2ZnODlua3U1ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Wt5yDvoG0z1OI6amQi/giphy.gif',
            bodyPart: 'Ombros',
            restTime: 45,
            sets: 3,
            reps: 12,
            day: 'Sexta-feira',
            specificBodyPart: 'Deltóide lateral',
            benefits: 'Definição e fortalecimento dos ombros',
            precautions: 'Evitar pesos excessivos para não sobrecarregar as articulações',
        },

        // SÁBADO (Treino de Braços e Ombros)
        {
            name: 'Rosca Direta na Polia',
            gifUrl: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3BucHM3cHZ6dXVsc2g2Z2JwaHpucnNyc2s5ZHdzMTZseXlrNzN3eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lTqivBGIilyyUSwfVs/giphy.gif',
            bodyPart: 'Bíceps',
            restTime: 45,
            sets: 3,
            reps: 12,
            day: 'Sábado',
            specificBodyPart: 'Bíceps braquial',
            benefits: 'Fortalecimento contínuo dos bíceps',
            precautions: 'Manter cotovelos fixos para evitar compensações',
        },
        {
            name: 'Rosca Unilateral com Halteres',
            gifUrl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExajgxdndvZnJ2ZDJudG1va2szdzQ2M2p4YzZpZmd1bmMwbDJobjZkZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sMnM4XfGkOtz2vzZw7/giphy.gif',
            bodyPart: 'Bíceps',
            restTime: 45,
            sets: 3,
            reps: 12,
            day: 'Sábado',
            specificBodyPart: 'Bíceps braquial',
            benefits: 'Fortalecimento unilateral dos braços',
            precautions: 'Controlar a descida para evitar lesões',
        },
        {
            name: 'Rosca scoot',
            gifUrl: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzkzeXozdWZ3Z25kZmF1YWtmeDZ2Z3E1YXpjcGluNTRvZmd0dHk5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/daf0hmY11KYirrryCc/giphy.gif',
            bodyPart: 'Bíceps',
            restTime: 45,
            sets: 3,
            reps: 12,
            day: 'Sábado',
            specificBodyPart: 'Bíceps braquial',
            benefits: 'Alongamento e fortalecimento dos bíceps',
            precautions: 'Evitar balançar os ombros durante o movimento',
        },
        {
            name: 'Tríceps na Barra Reta',
            gifUrl: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTd5NGRoNW5xNWVhbThkbGd4a252bWxqdTNvNmJhdDE0b241czBrNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AKDJmf8g2ouT3Xebdf/giphy.gif',
            bodyPart: 'Tríceps',
            restTime: 45,
            sets: 3,
            reps: 12,
            day: 'Sábado',
            specificBodyPart: 'Tríceps braquial',
            benefits: 'Fortalecimento e definição dos tríceps',
            precautions: 'Manter cotovelos alinhados para evitar tensão',
        },
        {
            name: 'Tríceps Testa',
            gifUrl: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjQ5MGlreWxqbzY5dzN5bXFvc2t1MnBwZnV5NmNna21qeXE5bXdrbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CYG4BS9hMO9V0RqWIc/giphy.gif',
            bodyPart: 'Tríceps',
            restTime: 45,
            sets: 3,
            reps: 12,
            day: 'Sábado',
            specificBodyPart: 'Tríceps braquial (cabeça longa)',
            benefits: 'Alongamento e fortalecimento dos tríceps',
            precautions: 'Controlar o peso para evitar impacto na cabeça',
        },
        {
            name: 'Posterior de Ombro na Polia',
            gifUrl: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmVhNjJlbTJicTFwODZyMmU5ODZ2cWF6Z21uZWNhajZtMW5hNG5zMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/feoVg31aZtRrDatQuz/giphy.gif',
            bodyPart: 'Ombros',
            restTime: 45,
            sets: 3,
            reps: 12,
            day: 'Sábado',
            specificBodyPart: 'Deltóide posterior',
            benefits: 'Fortalecimento da parte posterior dos ombros',
            precautions: 'Manter postura para evitar compensações',
        },
        {
            name: 'Peck Deck Inverso',
            gifUrl: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXJ0b3A3ZG5hbXllbHI1a2hrcDRodGZ1cXNkNzl4YzM4Z2w2b3k5ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ala0SejliXpNed0E6K/giphy.gif',
            bodyPart: 'Ombros',
            restTime: 45,
            sets: 3,
            reps: 12,
            day: 'Sábado',
            specificBodyPart: 'Deltóide posterior e trapézio',
            benefits: 'Melhora da postura e fortalecimento dos ombros',
            precautions: 'Ajustar a máquina para evitar tensão excessiva',
        },

        // DOMINGO (Cardio Leve ou Descanso Completo)
        {
            name: 'Cardio Leve',
            gifUrl: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXRpcmZjNXM5anRueGRsYzg0NDZzd2Rqa2R3MjF6eDc3cTdkbjFhMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gOWH4zRYAgECu68q3a/giphy.gif',
            bodyPart: 'Cardio',
            restTime: 60,
            sets: 1,
            reps: '20min',
            day: 'Domingo',
            specificBodyPart: 'Sistema cardiovascular',
            benefits: 'Recuperação ativa e melhora da circulação',
            precautions: 'Manter intensidade baixa para evitar fadiga',
        },
    ];

    const [exercises, setExercises] = useState(
        initialExercises.map(ex => ({ ...ex, completedSets: 0, isResting: false, restTimer: ex.restTime }))
    );
    const [currentDay, setCurrentDay] = useState('');

    const daysOfWeek = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

    useEffect(() => {
        const today = new Date();
        const dayIndex = today.getDay();
        const adjustedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
        setCurrentDay(daysOfWeek[adjustedIndex]);
    }, []);

    const filteredExercises = showAllExercises ? exercises : exercises.filter(ex => ex.day === currentDay);

    useEffect(() => {
        const interval = setInterval(() => {
            setExercises(prevExercises =>
                prevExercises.map(ex => {
                    if (ex.isResting && ex.restTimer > 0) {
                        return { ...ex, restTimer: ex.restTimer - 1 };
                    } else if (ex.isResting && ex.restTimer === 0) {
                        return { ...ex, isResting: false, restTimer: ex.restTime };
                    }
                    return ex;
                })
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleSetComplete = (originalIndex) => {
        setExercises(prevExercises =>
            prevExercises.map((ex, i) => {
                if (i === originalIndex && ex.completedSets < ex.sets) {
                    const newCompletedSets = ex.completedSets + 1;
                    return {
                        ...ex,
                        completedSets: newCompletedSets,
                        isResting: newCompletedSets < ex.sets,
                        restTimer: ex.restTime,
                    };
                }
                return ex;
            })
        );
    };

    const renderDailyExercise = (exercise, index) => {
        const originalIndex = exercises.findIndex(ex => ex.name === exercise.name && ex.day === exercise.day);
        return (
            <div
                key={index}
                className={`
                    bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-6 
                    transition-all duration-200 transform 
                    ${exercise.completedSets === exercise.sets ? 'border-4 border-green-500' : 'border border-[#E8ECEF] hover:shadow-3xl hover:-translate-y-2'}
                    flex flex-col relative overflow-hidden
                `}
            >
                {exercise.completedSets === exercise.sets && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                        <FaCheckCircle className="w-4 h-4" /> Concluído
                    </div>
                )}
                <h2 className="text-2xl font-extrabold text-[#1E3A8A] mb-4 tracking-tight">
                    {exercise.name}
                </h2>
                <div className="mb-6">
                    <img
                        src={exercise.gifUrl}
                        alt={`Exercício: ${exercise.name}`}
                        className="rounded-lg w-full h-[220px] object-cover shadow-md"
                    />
                </div>
                <div className="space-y-3 text-gray-700 text-sm">
                    <p className="flex items-center gap-2">
                        <FaDumbbell className="text-[#2B52C4] w-4 h-4" />
                        <span className="font-semibold text-[#2B52C4]">Parte do corpo:</span> {exercise.bodyPart}
                    </p>
                    <p className="flex items-center gap-2">
                        <FaRedo className="text-[#2B52C4] w-4 h-4" />
                        <span className="font-semibold text-[#2B52C4]">Repetições:</span> {exercise.reps}
                    </p>
                    <p className="flex items-center gap-2">
                        <FaCheckCircle className="text-[#2B52C4] w-4 h-4" />
                        <span className="font-semibold text-[#2B52C4]">Séries:</span> {exercise.completedSets}/{exercise.sets}
                    </p>
                    <p className="flex items-center gap-2">
                        <FaClock className="text-[#2B52C4] w-4 h-4" />
                        <span className="font-semibold text-[#2B52C4]">Descanso:</span>{' '}
                        {exercise.isResting ? (
                            <span className="text-red-500 font-bold">{exercise.restTimer}s</span>
                        ) : (
                            `${exercise.restTime}s`
                        )}
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="font-semibold text-[#2B52C4]">Dia:</span> {exercise.day}
                    </p>
                </div>
                <div className="mt-4 bg-gray-200 rounded-full h-2.5">
                    <div
                        className="bg-[#1E3A8A] h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${(exercise.completedSets / exercise.sets) * 100}%` }}
                    ></div>
                </div>
                <button
                    onClick={() => handleSetComplete(originalIndex)}
                    disabled={exercise.completedSets === exercise.sets || exercise.isResting}
                    className={`
                        mt-4 w-full py-2.5 rounded-lg font-semibold text-white
                        transition-all duration-200
                        ${exercise.completedSets === exercise.sets
                            ? 'bg-green-500 cursor-not-allowed'
                            : exercise.isResting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-[#1E3A8A] to-[#2B52C4] hover:from-[#2B52C4] hover:to-[#1E3A8A]'}
                    `}
                >
                    {exercise.completedSets === exercise.sets
                        ? 'Exercício Concluído'
                        : exercise.isResting
                        ? `Descansando (${exercise.restTimer}s)`
                        : 'Marcar Série Concluída'}
                </button>
            </div>
        );
    };

    const renderAllExercises = (exercise, index) => (
        <div
            key={index}
            className="
                bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-6 
                transition-all duration-200 transform 
                border border-[#E8ECEF] hover:shadow-3xl hover:-translate-y-2
                flex flex-col relative overflow-hidden
            "
        >
            <h2 className="text-2xl font-extrabold text-[#1E3A8A] mb-4 tracking-tight">
                {exercise.name}
            </h2>
            <div className="mb-6">
                <img
                    src={exercise.gifUrl}
                    alt={`Exercício: ${exercise.name}`}
                    className="rounded-lg w-full h-[220px] object-cover shadow-md"
                />
            </div>
            <div className="space-y-3 text-gray-700 text-sm">
                <p className="flex items-center gap-2">
                    <FaDumbbell className="text-[#2B52C4] w-4 h-4" />
                    <span className="font-semibold text-[#2B52C4]">Parte do corpo:</span> {exercise.bodyPart}
                </p>
                <p className="flex items-center gap-2">
                    <span className="font-semibold text-[#2B52C4]">Porção específica:</span> {exercise.specificBodyPart}
                </p>
                <p className="flex items-center gap-2">
                    <span className="font-semibold text-[#2B52C4]">Benefícios:</span> {exercise.benefits}
                </p>
                <p className="flex items-center gap-2">
                    <span className="font-semibold text-[#2B52C4]">Cuidados:</span> {exercise.precautions}
                </p>
                <p className="flex items-center gap-2">
                    <span className="font-semibold text-[#2B52C4]">Dia:</span> {exercise.day}
                </p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100 p-8 sm:ml-[80px] md:ml-[250px] lg:ml-[200px]">
            <h1 className="
                text-3xl font-extrabold text-[#1E3A8A] mb-8 text-center 
                bg-gradient-to-r from-[#1E3A8A] to-[#2B52C4] bg-clip-text text-transparent
            ">
                {isAdmin ? 'Admin Dashboard' : 'Aluno Dashboard'} {showAllExercises ? '(Todos)' : `(${currentDay})`}
            </h1>

            {!showAllExercises && (
                <div className="mb-12 flex justify-center">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:grid-rows-2 max-w-4xl w-full">
                        {daysOfWeek.map((day, index) => (
                            <div
                                key={day}
                                className={`
                                    px-4 py-3 sm:px-4 sm:py-4 rounded-lg font-semibold transition-all duration-200 
                                    text-base sm:text-lg lg:text-sm
                                    min-w-[120px] sm:min-w-[150px] lg:min-w-[100px]  
                                    whitespace-nowrap
                                    ${currentDay === day 
                                        ? 'bg-gradient-to-r from-[#1E3A8A] to-[#2B52C4] text-white' 
                                        : 'bg-white text-gray-700 border border-[#E8ECEF] opacity-50 cursor-not-allowed'}
                                    ${index >= 4 ? 'sm:col-span-1 sm:col-start-auto' : ''} 
                                    ${index === 4 ? 'sm:col-start-2' : ''} 
                                    ${index === 5 ? 'sm:col-start-3' : ''} 
                                    ${index === 6 ? 'sm:col-start-4' : ''} 
                                `}
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {filteredExercises.length > 0 ? (
                <div className="space-y-12 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-12">
                    {filteredExercises.map((exercise, index) =>
                        showAllExercises
                            ? renderAllExercises(exercise, index)
                            : renderDailyExercise(exercise, index)
                    )}
                </div>
            ) : (
                <p className="text-center text-gray-500 text-lg">
                    Nenhum exercício encontrado para {showAllExercises ? 'a lista completa' : `hoje (${currentDay})`}.
                </p>
            )}
        </div>
    );
}

export default MMain;