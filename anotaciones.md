# Arrancando el proyecto integrador (etapa 2)

´´´sh
npm create vite@latest ./ -- --template react
´´´

# instalamos las dependencias

´´´sh
npm install
´´´
# Instalamos react-router

´´´sh
npm i react-router
´´´

# Creo las carpetas que voy utilizar en mi proyecto, usando el bash

´´´sh
cd src  //entro en la carpeta/directorio donde quiero crear todas estas carpetas
´´´

´´´sh
mkdir components constants contexts hooks routes pages //creo los directorios
´´´

´´´sh
cd ..   // salgo del directorio actual (src) al terminar de crear las carpetas 
´´´

# Creo los archivos que voy a usar en mis proyecto en el directorio raiz, usando bash

´´´sh
touch .env .env.example netlify.toml //touch nos permite crear archivos
´´´

## Activo el devsourcemap
css: {devSourcemap: true} -> dentro del defineConfig

## Instalo json-server como dependencia de desarollo (porque solo lo usaremos en desarollo)

´´´sh
npm i json-server -D

´´´

## Instalamos la dependencia de SASS

´´´sh
npm install -D sass-embedded
´´´

## Agrego esto en escript dentro del package json para que funcione el server
"server": "json-server --watch data/db.json --port 8080"
