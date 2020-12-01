# givemeacar

## Initialisation du projet Spring boot
### Sur https://start.spring.io/

Choisir Project: "Maven Project", language: "Java", Spring boot: "2.4.0", Packaging: "jar", Java version: "8"  
Dépendances: Web, H2, Jpa, Lombok

Décompresser le projet et l'ouvrir avec le POM.xml dans l'IDE.

## Initialisation de React
### Dans l'interface de l'IDE 

Installer React si nécéssaire: npm i react-app  
Créer projet (dans dossier du projet): npm create react-app app

## GIT
### Travail sur 3 branches:

* Main: branche principale, on y rapatriera seulement des build "fonctionnels"  
* Dev:  branche du workflow de groupe, merge des branches persos après validation des pull requests  
* Amin/Alex/Romain: branche de travail individuel en local  
 Workflow: travail sur branche "perso" en local, git push, validation du pull request et merge auto sur dev (en remote), pull des autres et merge du "dev" sur "perso"
