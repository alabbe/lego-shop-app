# Lego Shop

## A propos

Projet de démo pour entretien technique.

Scope fonctionnel :
- créer une page produit
- pouvoir envoyer une demande de contact
- créer une page d'admin et lister les demandes de contact

Hors scope :
- pas d'authentification

## Technologies utilisées

- Frontend : React + Tailwind + Typescript
- Backend :  Express + Typescript
- SGBD : Postgresql

## Installation

### Base de données

- Executer le script situé dans src/db pour créer les tables.
- Insérer un utilisateur dans la table Users

## Execution en dev

- Créer un fichier .env (utiliser le fichier d'exemple .env.sample) et renseigner vos variables d'environnement

- Exécuter :
```
npm install
npm run dev
```

## Execution en prod

- Exécuter :
```
npm install
npm run build
npm install --prefix client
npm run build --prefix client
npm start
```



