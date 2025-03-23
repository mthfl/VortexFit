VortexFit - React Vite + Tailwind

Bem-vindo ao VortexFit, uma aplicação web desenvolvida com React, Vite e Tailwind CSS para gerenciar treinos e suporte em academias. Este projeto possui duas abas principais: uma para alunos e outra para administradores, com funcionalidades específicas para cada tipo de usuário. Todo o armazenamento de dados é feito utilizando o LocalStorage, sem necessidade de backend externo.
Funcionalidades
Aba Aluno

    Visualização dos treinos diários.
    Exemplos de execução de cada exercício.
    Acesso à ficha de treino personalizada.
    Solicitação de suporte a profissionais cadastrados.

Aba Admin

    Todas as funcionalidades da aba Aluno.
    Cadastro e edição de fichas de treino para os alunos.
    Exclusão de chamados de suporte abertos pelos alunos.

Tecnologias Utilizadas

    React: Biblioteca principal para construção da interface.
    Vite: Ferramenta de build rápida e moderna.
    Tailwind CSS: Framework CSS para estilização ágil e responsiva.
    LocalStorage: Armazenamento local para persistência de dados.

Pré-requisitos

Para executar o projeto localmente, você precisará ter instalado:

    Node.js (versão 16 ou superior recomendada).
    Um gerenciador de pacotes: npm ou yarn.

Como Executar o Projeto

Siga os passos abaixo para baixar e rodar o projeto em sua máquina:

    Clone o repositório:
    bash

git clone https://github.com/mthfl/VortexFit.git
Acesse o diretório do projeto:
bash
cd VortexFit
Instale as dependências:

    Usando npm:
    bash

npm install
Ou usando yarn:
bash

    yarn install

Inicie o servidor de desenvolvimento:

    Usando npm:
    bash

npm run dev
Ou usando yarn:
bash

        yarn dev
    Abra o navegador e acesse o endereço exibido no terminal (geralmente http://localhost:5173, mas a porta pode variar).

    Nota: O projeto utiliza o LocalStorage, então os dados são salvos localmente no navegador. Limpar o cache do navegador apagará todas as informações salvas.

Contribuições

Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias ou correções no repositório VortexFit. Este é um projeto em desenvolvimento e toda ajuda é bem-vinda!
Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
