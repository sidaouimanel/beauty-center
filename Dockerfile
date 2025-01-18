# Étape 1 : Construire l'application React (frontend)
FROM node:16-alpine AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le projet pour construire la partie frontend
COPY . .

# Construire l'application React
RUN npm run build

# Étape 2 : Exécuter l'application avec une image Nginx
FROM nginx:alpine

# Copier les fichiers construits dans le conteneur Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
