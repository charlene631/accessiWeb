# accessiWeb

## Présentation du projet
Accessithèque est une plateforme web permettant de consulter et gérer une bibliothèque de documents et de catégories, avec un système d’authentification sécurisé et gestion des rôles (`admin` et `user`).  
Elle permet :  
- aux utilisateurs de parcourir et rechercher des documents  
- aux administrateurs de gérer les utilisateurs, catégories et documents  
- le téléversement de fichiers (Cloudinary)  
- la vérification d’email lors de l’inscription  

---

## Structure du projet

Accessitheque/
│
├── back/                       # Backend Node.js / Express
│   ├── config/                  # Configurations
│   │   ├── cloudinary.js
│   │   └── db.js
│   ├── controllers/             # Logique métier
│   │   ├── authController.js
│   │   ├── categoryController.js
│   │   ├── documentsController.js
│   │   └── userController.js
│   ├── db/
│   │   └── structure_bibliotheque.sql
│   ├── middlewares/             # Middleware
│   │   ├── authMiddleware.js
│   │   └── uploadCloudinary.js
│   ├── models/                  # Accès BDD
│   │   ├── categoryModel.js
│   │   ├── documentsModel.js
│   │   └── userModel.js
│   ├── routes/                  # Routes API
│   │   ├── authRoutes.js
│   │   ├── categoryRoutes.js
│   │   ├── documentsRoutes.js
│   │   └── userRoutes.js
│   ├── utils/
│   │   └── sendEmail.js
│   ├── server.js
│   └── package.json
│
├── front/                      # Frontend (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
├── README.md
└── ERRORS_AND_SOLUTIONS.md


---

## Installation

### Cloner le projet
```bash
git clone <url-du-repo>
cd Accessitheque

cd back
npm install express bcrypt dotenv cors jsonwebtoken multer multer-storage-cloudinary mysql2 nodemon nodemailer 
cp .env.example .env   # Créer et remplir le fichier .env (DB, Cloudinary, JWT, Gmail...)
npm run dev

cd ../front
npm install
npm run dev

Technologies utilisées

Backend : Node.js, Express, MySQL, Cloudinary, Nodemailer, JWT, bcrypt, CORS, dotenv, multer

Frontend : React, Vite

Base de données : MySQL

Déploiement : Render (backend), Vercel (frontend)

## Routes API

### Authentification (`/api/auth`)

| Méthode | URL                       | Description                                      |
|---------|---------------------------|--------------------------------------------------|
| POST    | /api/auth/register        | Inscription utilisateur + envoi email de vérification |
| POST    | /api/auth/login           | Connexion utilisateur                            |
| GET     | /api/auth/verify/:token   | Vérification d’email avec un token               |
| POST    | /api/auth/logout          | Déconnexion utilisateur                          |

### Utilisateurs (`/api/users`) – Protégé, admin uniquement

| Méthode | URL                              | Description                                 |
|---------|----------------------------------|---------------------------------------------|
| GET     | /api/users/                      | Lister tous les utilisateurs                |
| GET     | /api/users/:id                   | Récupérer un utilisateur par son ID         |
| PUT     | /api/users/:id                   | Modifier un utilisateur par son ID          |
| DELETE  | /api/users/:id                   | Supprimer un utilisateur par son ID         |
| GET     | /api/users/protected-example     | Exemple de route protégée                   |

### Catégories (`/categories`)

| Méthode | URL                              | Description                                                        |
|---------|----------------------------------|--------------------------------------------------------------------|
| GET     | /categories/getAll               | Lister toutes les catégories                                       |
| GET     | /categories/getOne?id={id}       | Récupérer une catégorie par ID (paramètre id en query)             |
| PUT     | /categories/updateOne            | Modifier une catégorie (body : { "column": "name", "newValue": "nouveauNom", "id": 1 }) |
| DELETE  | /categories/deleteOne            | Supprimer une catégorie (body : { "id": 1 })                       |
| POST    | /categories/addOne               | Ajouter une catégorie (body : { "name": "nomCategorie" })          |

### Documents (`/documents`)

| Méthode | URL                | Description                                         |
|---------|--------------------|-----------------------------------------------------|
| GET     | /documents/        | Lister tous les documents                           |
| GET     | /documents/:id     | Récupérer un document par ID                        |
| POST    | /documents/        | Ajouter un document (upload fichier via file)       |
| PUT     | /documents/:id     | Modifier un document (upload fichier via file)      |
| DELETE  | /documents/:id     | Supprimer un document                               |

### Route de base

| Méthode | URL | Description                                         |
|---------|-----|-----------------------------------------------------|
| GET     | /   | Affiche les tables présentes dans la base de données|


## Routes liste rapide: 
// GET

http://localhost:3000 => Show tables of database

http://localhost:3000/api/auth/register
http://localhost:3000/api/auth/login

http://localhost:3000/api/users/ => get all users

http://localhost:3000/api/users/:id => get user by id

//POST
http://localhost:3000/api/users/:id => update by id => 

http://localhost:3000/api/users/:id => delete by id =>

http://localhost:3000/categories
http://localhost:3000/documents