/*
Terminal Commands :

COMMANDES DE BASE :

Créer un fichier
touch myFile

Supprimer un fichier :
rm myFile

Créer un dossier :
mkdir myFolder

Supprimer un dossier :
rm -r myFolder

Vérifier les paramètres git :
git config --list

Appuyer sur 'q' équivaut à 'ECHAP'

-----------------------------------------------------------------

COMMANDES GIT DE BASE :

Initialiser un dossier GIT :

cd Documents/myFile
git init

Supprimer l'initialisation d'un dossier :
rm -fr .git

Déplacer un fichier dans git :
git mv myFile targetFolder => git mv text.txt myTextFolder

--------------

Envoyer ses fichiers dans les différentes zones du dépôt local :

1. Créer vos fichiers dans le dossier initialisé

2. Indexer vos fichiers (html, css, js...) :
git add myfile.html

3. Créer une nouvelle version des fichiers indexés (archiver votre projet)
git commit -m “Ajout du fichier html”

4. Configurer l'URL du repository dans le dépôt distant (github)
git remote add origin URL-du-repository.git

5. Relier le dépôt local au dépôt distant :
git branch -M main

6. Envoyer vos fichiers (commit) sur le dépôt distant (github)
git push -u origin main



Désormais, pour chaque modification des fichiers envoyés au dépôt distant, seules ces étapes seront à effectuer :
git add myfile.html
git commit -m “Ajout du fichier html”
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

Créer un commit de nos fichiers présents dans la branche :
git commit -m "alternative project"

Envoyer la branche au dépôt distant :
push origin myBranch

Fusionner une branche avec une autre :
Cette commande doit s'utiliser à partir de la branche dans laquelle nous voulons apporter les évolutions :
git checkout main => on sélectionner la branche "hôte"
git merge myBranch

--------------

Renommer une branche :

1. Se positionner dans la branche en question
git checkout myBranch 

2. Renommer la branch
git branch -m newName

3. Si l'ancien nom a été poussée dans le dépôt distant, on le remplace par le nouveau
git push origin -u newName

4. Puis on supprimer l'ancien nom du dépôt distant :
git push origin --delete oldName

-----------------------------------------------------------------

ACCEDER AU DEPOT DISTANT DE QUELQU'UN D'AUTRE

Copier le code .git puis effectuer cette commande dans le temrinal :

git remote add 'NAME' https://.../.git
'NAME' est un nom plus court qui permettra d'appeler le dépôt plus facilement

Récupérer les fichier du dépôt distant
git pull NAME main

Récupérer les branches du dépôt distant :
git branch --all

Dupliquer le contenu du dépôt distant dans le dépôt local
git clone https://.../.git

-----------------------------------------------------------------

CORRIGER SES ERREURS SUR VOTRE DEPOT LOCAL

ERREURS D'INDEXATION

Corriger une erreur d'indexation mais non commit :

Si par erreur, vous avez modifié puis indexé les fichiers de la branche MAIN sans les avoir commit,
il est possible de 'mettre de côté' ce travail pour l'appliquer à la branche souhaité :

1. Se positionner sur la branche main
2. Effectuer un git status pour vérifier les fichiers indexés

3. Sauvegarder votre travail :
git stash

4. La branche MAIN est de nouveau 'propre'
5. Se positionner sur la branche souhaitée

6. Vérifier la liste des travaux sauvegardés
git stash list

6.1 Appliquer le dernier 'stash' de la liste :
git stash apply

6.2 Appliquer un 'stash' précis :
git stash apply stash@{0}

--------------

ERREURS LIEES AU COMMIT 

Corriger une erreur après avoir commit :

Si vous avez commit des fichiers sur la branch MAIN (par exemple) et que vous souhaitiez le faire sur une autre branche,
il est possible de réparer cette erreur :

1. Analyser vos commit :
git log

2. Des messages représenant vos commit devraient apparaître :
commit 81de88bfbfbe7e38836596fe237aa691c77c00c1 (HEAD -> main, newBranch)
Author: Florencio <florentbaleinier@gmail.com>
Date:   Tue Mar 21 16:00:56 2023 +0100

3. Récupérer l'identifiant du commit :
81de88bfbfbe7e38836596fe237aa691c77c00c1

4. Supprimer le dernier commit de la branche principale
git reset --hard HEAD^
Le HEAD^ indique que c'est bien le dernier commit que nous voulons supprimer.

5. Se positionner sur la branche où l'on souhaitait préalablement réaliser le commit

6. Appliquer le commit sur la nouvelle branche :
git reset --hard 81de88bfbfbe7e38836596fe237aa691c77c00c1
Il n'est pas nécessaire d'écrire l'identifiant en entier. Seuls les 8 premiers caractères sont nécessaires.

--------------

Modifier le message d'un commit :

git commit -m "wrong message"

Cette commande fonctionnera uniquement sur le dernier commit réalisé :
git commit --amend -m "good message"

--------------

Oubli de fichiers dans le dernier commit :

Si vous avez effectué votre commit mais que vous avez oublier des fichiers, il est possible de les rajouter après coup.

1. Ajouter dans un premier temps le fichier manquant :
git add forgottenFile.txt

2. Modifier le dernier commit via cette commande :
git commit --amend --no-edit
La commande git commit --amend permet de modifier le dernier commit réalisé

-----------------------------------------------------------------

CORRIGER SES ERREURS SUR VOTRE DEPOT DISTANT

git revert HEAD^
Permet d'annuler sont commit public en créant un nouveau commit d'annulation

Note : 
Il vaut mieux utiliser git revert  pour annuler des changements apportés à une branche publique
et git reset pour faire de même, mais sur une branche privée. 

--------------

Générer une paire de clé SSH

1. Exécuter la commande :
$ ssh-keygen -t rsa -b 4096 -C "yourMail@example.com"

2. Mettre un nom de fichier (ou pas) puis ENTREE
3. Renseigner un mot de passe
4. Se rendre dans le dossier où a été générée la paire de clé (C:\Users\VotreNomD'Utilisateur\.ssh)
5. Récupérer la clé souhaitée (publique ou privée)

6. Se rendre dans son compte GitHub :
Settings => SSH and GPG keys => New SSH Key => Coller la clé => Confirmer avec mot de passe

--------------

Revenir à un commit spécifique en cas d'erreur 

1. Utiliser la commande
git reflog
Cette commande va loguer les commits ainsi que toutes les autres actions que vous avez pu faire en local
(vos modifications de messages, vos merges, vos resets...)

Aperçu d'un git reflog :
3f33a7b (HEAD -> main, origin/main) HEAD@{0}: commit: update
d51516d HEAD@{1}: commit: update
538c030 HEAD@{2}: commit: update comments
5dd572c HEAD@{3}: pull origin main: Fast-forward
da0da4a HEAD@{4}: commit: update comments
4040309 HEAD@{5}: checkout: moving from newname to main
4040309 HEAD@{6}: Branch: renamed refs/heads/oldname to refs/heads/newname
4040309 HEAD@{8}: checkout: moving from main to oldname

Les chiffres en début de ligne sont ce qu'on appelle le SHA (Secure Hash Algorithm).
Il permet d'identifier le commit.

2. On revient à un commit spécifique
git checkout 538c030
*/

