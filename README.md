# Givemeacar - Initialisation d'un projet de A à Z 

## Initialisation du projet Spring boot

### Sur https://start.spring.io/ || Directement sur l'IDE via Spring Tools SUite (plugin) 

Choisir Project: "Maven Project", language: "Java", Spring boot: "2.4.0", Packaging: "jar", Java version: "8"  

Dépendances: Web, H2, Jpa, Devtools, Security, Thymeleaf(front) 



Décompresser le projet et l'ouvrir avec le POM.xml dans l'IDE.

## Initialisation de React
### Dans l'interface de l'IDE 

Installer React si nécéssaire: npm i react-app  
Installer React dans un projet existant (dans dossier du projet): npm create react-app app

## GIT
### Travail sur 3 branches:

* Main: branche principale, on y rapatriera seulement des build "fonctionnels"  
* Dev:  branche du workflow de groupe, merge des branches persos après validation des pull requests  
* Amin/Alex/Romain: branche de travail individuelle en local  
 Workflow: travail sur branche "perso" en local, git push, validation du pull request et merge auto sur dev (en remote), pull des autres et merge du "dev" sur "perso"


## SPRINGBOOT

### Création des @Entity 

* Créer un sous-package 'Model' qui va permettre d'introduire tous nos class/bean/Entity qui seront les modeles de nos instances/objets , 
qui eux seront stockés à l'intérieur d'une base de données. 
* Ces classes vont récupérer l'annotation @Entity (connue grâce à JPA) qui va permettre d'indiquer à Spring que ce seront des modèles 
* Chaque instance d'@Entity sera donc stockée dans une BDD. Pour stocker une valeur dans une BDD, on est obligé d'avoir un ID qui sera la clé primaire
qui va permettre d'identifier notre item quand on fera des requêtes et aussi de les stocker/trier plus facilement. 
Il faut donc ajouter @Id (clé primaire) ainsi que @GeneratedValue (qui indique que la clé primaire est calculée). Si l'on veut que JPA fonctionne bien,
il faut indiquer @GeneratedValue.GenerationType.IDENTITY afin que l'Id soit auto-incrémenté (sinon on ne pourra pas executer des requetes POST)

### Création du JPA 

* Une fois nos/notre @Entity créée, il va bien falloir la stocker dans une BDD. C'est là qu'intervient JPA 
* JPA fait le pont entre notre données JAVA et la BDD (H2,Mysql,MongoDb...)

* On créer un sous-package 'Repository' ou l'on va créer une/plusieurs classe repository. On peut la nommer comme telle : nomEntityRepository
* Cette classe sera l'enfant (extends) de la class JpaRepository. Elle prendra comme paramètre 2 valeurs : <Entity, typeId>
`public class Client extends JpaRepository<Client, Integer>` Notre Jpa se basera sur la class 'Client' qui a un @Id de type Integer 
* Généralement, on a pas besoin de faire d'autre chose dans cette class car JPA connait les différentes méthodes (.findAll, .findById, .save)
qui vont servir pour les requêtes (cf Controller). Après il existe donc methodes connues de JPA qu'on peut insérer dans la class (findByNomLike, GreaterThan...)
On peut toutes les trouver sur ce site : https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/repository/JpaRepository.html

### Création du Controller 

* Nous avons donc nos @Entity qui vont contenir les modèles a envoyer à la BDD, le JPA qui va faire le pont, maintenant il nous faut une class qui va 
permettre de gérer les requêtes a envoyer a notre BDD, et pour ça on a le @Controller. 

* On créer un sous-package 'Controller' avec comme nomination : nomEntityController. Pour que SpringBoot sache que c'est notre Controller, on lui met 
l'annotation @RestController.
* @RestController signifie a SB que c'est cette class qui va envoyer les requêtes HTTP. Avec ça on a donc une ApiRest qui prend l'architecture CRUD 
(Create, Read, Update, Delete). En requête HTTP on peut traduire ça part GET, POST, PUT, DELETE. 
* Pour que notre Controller puisse utiliser notre JPA (et donc envoyer des requetes a la BDD), il faut utiliser @Autowired. Cette annotation va permettre
d'instancier (donc de créer un objet) de notre JPA, automatiquement : <br>
`@Autowired`<br> `
ClientRepository clientRepository; `

* Ensuite il ne reste plus qu'a écrire les requêtes HTTP pour visualiser, créer, updater ou supprimer les données de la BDD, voyons ça en dessous !


### Création des requêtes HTTP 

#### GET 

`@GetMapping(value="/Client")
     public Client listeAllClients (){
         return clientRepository.findAll();
     }`
     
* La requête GET permet de visualiser les données de la BDD de notre @Entity Client. Cette requête est réalisable grâce à la méthode `.findAll()` auto-générée
par JPA. 

#### GET ID  

`@GetMapping(value="/Client/{id}")
     public Client listeClientById (@Pathvariable int id){
         return clientRepository.findById(id);
     }`
     
* Toujours une requête GET mais avec l'Id qui permet de récupérer un item particulier. @Pathvariable indique qu'il faut récupérer un paramètre (l'Id) dans l'url

#### POST

```@PostMapping(value="/Client")
     public ResponseEntity<Void> createClient (@RequestBody Client client) {
         Client savedClient = clientRepository.save(client);
         
         URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedClient.getId()).toUri();
 
         return ResponseEntity.created(location).build();
     } 
```
* La requête POST permet de créer/ajouter un nouveau client à notre BDD. `ResponseEntity` permet de gérer les réponses des requêtes côté server.
@RequestBody indique que notre fonction 'createClient' va prendre en paramètre les propriétés de la classe/type Client. On éxécute la méthode
`.save` connue de JPA pour add le client. Ensuite on utilise l'URI qui va permettre d'ajouter ce nouveau client, via son Id, à notre URI
(partie après URL). Ensuite on return la ResponseEntity pour répondre au server (et donc envoyer un réponse de code `201 created`) 


#### PUT 

```
@PutMapping(value="/Client")
    public void updateClient(@RequestBody Client client) {
        clientRepository.save(client);
    }
```

* La requête PUT permet de mettre à jour un item déjà existant. C'est la même méthode que POST sauf que si on ne renseigne pas un @Id
déjà existant dans la requête SQL il y'aura une error, car il faut forcément avoir un item déjà créé pour le mettre à jour. 


#### DELETE 

```
@DeleteMapping (value = "/Client/{id}")
    public void deleteClient(@PathVariable int id){
        clientRepository.deleteById(id);
    }
```

* La requête Delete permet de supprimer un item. Ici on va pouvoir supprimer un Client de notre BDD via son id rentré en URI, grâce à
la méthode `deleteByID` connue par JPA. 


### Création du fichier SQL 

* Donc à partir de là, on a toute notre structure pour créer une ApiRest -> on a un model (@entity), notre Jpa et notre @Controller pour
envoyer les requêtes à notre BDD. Mais pour l'instant, à part notre squelette, on a pas de vraies données concernant notre @Entity Client.

* C'est là qu'intervient notre SQL ! Car pour remplir une BDD SQL, il faut du SQL. Donc il suffit de créer un fichier `dataClient.sql` dans
le dossier `Ressource` de notre projet. 
* Dans ce dossier, on va créer les différentes données de nos client , par exemple : 

```
INSERT INTO Client VALUES(1, 'Romain', "6 rue des grenouilles", 24);
INSERT INTO Client VALUES(2, 'Amin', "147 bis Avenue Jacques Cartier", 22);
INSERT INTO Client VALUES(2, 'Alex', "9 allée des Mimosas", 30);
```

* Dans nos requêtes SQL on retrouve donc toutes les propriétés demandées par l'@Entity Client (id, prenom, adresse, age). 

### Setter notre BDD H2 

* Pour que notre JpaRepository sache vers quelle BDD envoyer les requêtes SQL qu'il y'a dans le fichier dataClient.sql, on doit paramétrer
une bdd dans le fichier `application.properties`
```
# Configurations H2
spring.jpa.show-sql=true
spring.h2.console.enabled=true
spring.datasource.url=jdbc:h2:mem:testdb
```

* Ici on utilise une bdd H2 qui s'auto-configure, qui est très légère et parfaite pour des tests, mais pas pour de la persistence de données.
Pour ça il faudra utiliser une vraie BDD Sql (ou NoSql) qu'on verra par la suite. 

## Checking de l'API

* Run l'application 
* Aller sur l'adresse du server Tomcat indiqué dans la console (par défaut `http://localhost:8080/Client`)
* Cela va éxécuter une requête GET et la liste des clients s'affichera 
* Si l'on rentre `http://localhost:9090/Products/1` il nous renverra le client avec l'Id 1  
* Si l'on veut éxécuter une autre requête, on va devoir utiliser Postman car le navigateur ne peut qu'executer des requêtes GET
* Dans Postman, on peut créer des Post (en insérant une requête au format Json/Raw dans l'onglet 'body'), on peut Delete un client
avec son id, ou mettre à jour avec Put et l'id d'un client déjà existant  