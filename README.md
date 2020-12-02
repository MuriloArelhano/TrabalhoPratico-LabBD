# Trabalho Prático Laboratório de Banco de Dados

## Como Executar

Feito por: Murilo Esteca Arelhano, David Gama Serrate, Marcus Vinicius Ferreira

Video no Youtube, https://youtu.be/Q0NMFSRYhNM

**_Obs: Certifiqui-se que tem o docker instalado em sua máquina. O usuáio postgres já está configurado no arquivo docker-compose e devidamente inicializado na aplicação. Caso mude o usuário do arquivo docker, a aplicação pode parar._**

> Senha do user postgres: trabalhopratico

1. Baixe os arquivos do github e extraia-os
2. Abra seu terminal na pasta baixada e execute os seguintes comandos

> npm install

> docker-compose up -d
  
3. Certifique-se que seu postgreSQL está rodando no container docker
4. Execute os seguintes comandos no terminal

> npm run start-dev

Após isso poderá ver que as seguintes mensagens

- Banco de dados inicializado com sucesso 🏛🎲, na porta 5432
- Servidor iniciado com sucesso 🚀🎲, na porta 3000

Caso contrário algo está errado com a configuração do postgres com docker ou então com os módulos do NojeJs, cheque novamentes as informações acima.

**_Obs: Lembre-se de ter os dados dos candidatos na para "data" da raiz do projeto. Por questões de optimização os arquivos estão reduzidos._**

5. Agora é só abrir o navegador e acessar 'http://localhost:3000'. Depois fazer a construção do banco de dados e a clicando no botão "Montar Banco" e em seguida "Importar", para importar os dados

Muito importante a configuração correta do postgres com o docker (use apenas o docker-compose.yml do projeto) e não altere os dados de conexão
