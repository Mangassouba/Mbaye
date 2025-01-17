## Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Get, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [ [Node.js](https://nodejs.org/fr)] (version 12 ou supérieure)
- [ MongoDB](https://www.mongodb.com/try/download/community)
  (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

**Clonez le repository :**

```bash
git clone https://github.com/Mbaye01/Brief-Surveys-NoSql.git

```

**Accédez au dossier du projet :**

```bash
cd Brief-Surveys-NoSql
```

**Installez les dépendances :**

```bash
npm install
```

**Utilisation**

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```

**Documentation des Modules et Fonctions**

**Module :** `Survey`
Ce module gère les enquêtes elles-mêmes.

`createSurvey(survey)`

Description : cette function permet de Crée une nouvelle enquête.

Paramètres :

```survey (Object)```:
Un objet représentant l'enquête avec les propriétés suivantes :

```idSurvey (Number)``` : Identifiant unique de l'enquête.

```name (String)``` : Nom de l'enquête.

```description (String)``` : Description de l'enquête.

```createdAt (String)``` : Date de création de l'enquête.

```createdBy (Object)```: Informations sur la personne ayant créé l'enquête,
 avec les propriétés :

```employeeName (String)``` : Nom de l'employé.

```employeeRole (String)``` : Rôle de l'employé.

```Valeur de Retour``` : Un message indiquant si l'ajout a réussi ou a échoué.

Exemple

```Crée une nouvelle enquête
const newSurvey{
  id: 1,
  name: "Enquête de Satisfaction 001",
  description: "Enquête visant à évaluer la satisfaction des clients concernant nos services.",
  createdAt: "2024-07-25T08:00:00Z",
  createdBy: {
    employeeName: "Mbaye",
    employeeRole: "Responsable du service client"
  }
};
```

`getSurveys()`

Description : Récupère toutes les enquêtes.


`getSurveyById(id)`

Description : Récupère une enquête spécifique en fonction de son id.


`updateSurvey(id, update)`

Description : Met à jour une enquête existante avec de nouvelles informations.

`deleteSurvey(id)`

Description : Supprime une enquête de la collection surveys en fonction de son id.

**Module** : `Question`

Ce module gère les questions dans les enquêtes.

`createQuestion(question)`

Description : Crée une nouvelle question dans une enquête.

Exemple

```const newQuestion = {
  id: 1,
  surveyId: 1,
  title: "Comment évalueriez-vous notre service ?",
  type: "rating",
  options: {
    minValue: 1,
    maxValue: 5,
    step: 1
  }
};
```

`getQuestions()`

Description : Récupère toutes les questions.

```
const questions = await getQuestions();
console.log(questions);
```

`getQuestionById(id)`

Description : Récupère une question spécifique en fonction de son id.

```
await getQuestionById(1);
```

`updateQuestion(id, update)`

Description : Met à jour une question existante avec de nouvelles informations.

```
await updateQuestion(1, { title: "Comment avez-vous entendu parler de nous ?" });
```

`deleteQuestion(id)`

Description : Supprime une question de la collection survey_questions en fonction de son id.

**Module :** `Answer`
Ce module gère les réponses associées aux questions dans les enquêtes.

`createAnswer(answer)`

Description : Crée une nouvelle réponse pour une question dans une enquête.

Exemple

```const newAnswer = {
  id: 1,
  questionId: 1,
  title: "Satisfait",
};
const result = await createAnswer(newAnswer);
```

`getAnswers()`

Description : Récupère toutes les réponses.

```
const answers = await getAnswers();
```

`getAnswerById(id)`

Description : Récupère une réponse spécifique en fonction de son id.

```
const answer = await getAnswerById(1);
```

`updateAnswer(id, update)`

Description : Met à jour une réponse existante avec de nouvelles informations.


`deleteAnswer(id)`

Description : Supprime une réponse de la collection survey_answers en fonction de son id.


## Authors

[Mbaye Abdoulaye Kalidou](https://github.com/Mbaye01)
