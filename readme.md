
# Direcionar o local para o remoto 
- git remote add origin https://github.com/ElcimarSilva/projetogit.git

# Para o problema do autenticação do token
https://stackoverflow.com/questions/68775869/support-for-password-authentication-was-removed-please-use-a-personal-access-to

git config --global user.name "your_github_username"  serve para definir um username default na maquina
git config --global user.email "your_github_email" serve para definir um email default na maquina
git config -l 

#  Mais comandos git
- git checkout -b  serve para criação de um branch
- git checkout serve para alternar entre branches

- git status ver o status da branch

- git push origin nomedabranch serve para subir os arquivos, quando se esta na main não é preciso do origin porém quando se esta em outra branch é necessario especificar qual é ela.


# Merge reverso com a master (processo realizado ao finalizar uma tarefa e abrir um merge request)
- git pull -p (dentro da master)
- git merge master (dentro da branch trabalhada)
- git push

# Video explicação git 
- https://www.youtube.com/watch?v=UBAX-13g8OM


# Comandos utéis
- git log --oneline #para verificar o historico de commits
- git remote -v #para verificar o repo remoto
- git -T git@github.com # para verificar se chave ssh esta configurada
