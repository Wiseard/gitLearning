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

-------------

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



*/

