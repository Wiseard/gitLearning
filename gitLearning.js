/*
Terminal Commands :

COMMANDES DE BASE :

Créer un fichier
touch myFile

Vérifier les paramètres git :
git config --list

-------------

Initialiser un dossier GIT :

cd Documents/myFile
git init

Supprimer l'initialisation d'un dossier :
rm -fr .git

-------------

Créer un ficher dans un dossier :
mkdir myFile

Déplacer un fichier dans git :
git mv myFile targetFolder => git mv text.txt myTextFolder

Indexer vos fichiers html, css, js... :
git add myfile.html

Créer une nouvelle version des fichiers indexés (archiver votre projet)
git commit -m “Ajout du fichier html”

-------------

Configurer l'URL du repository dans le dépôt distant (github)
git remote add origin
origin URL-du-repository.git

Relier le dépôt local au dépôt distant :
git branch -M main

Envoyer nos fichiers (commit) sur le dépôt distant (github)voyer 
git push -u origin main

-----------------------------------------------------------------

BRANCHES

Connaître les branches présentes dans le projet :
git branch => l'étoile signifie que c'est la branche dans laquelle on se situe

Créer une branche :
git branch myBranch

Supprimer une branche :
git branch -D myBranch

Sélectionner la branche dans laquelle on souhaite se situer :
git checkout myBranch

Créer un commit de nos fichiers présents dan sla branche :
git commit -m "alternative project"

Envoyer la branche au dépôt distant :
push origin myBranch

Fusionner une branche avec une autre :
Cette commande doit s'utiliser à partir de la branche dans laquelle nous voulons apporter les évolutions :
git checkout main => on sélectionner la branche "hôte"
git merge myBranch



-----------------------------------------------------------------

A UN DEPOT DISTANT DE QUELQU'UN D'AUTRE

Copier le code .git puis effectuer cette commande dans le temrinal :

git remote add 'NAME' https://.../.git
'NAME' est un nom plus court qui permettra d'appeler le dépôt plus facilement

Récupérer les fichier du dépôt distant
git pull NAME main

Récupérer les branches du dépôt distant :
git branch --all

Dupliquer le contenu du dépôt distant dans le dépôt local
git clone https://.../.git

*/

