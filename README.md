# Examen de seleccion Galicia
## Objeto
Éste repositorio tiene como objeto la demostracion de un ejemplo sencillo escrito en nodejs
## Alcance
Desde el desarrollo del ejemplo hasta la implementacion en el cluster de Kubernetes mediante la automatizacion de CD (https://es.wikipedia.org/wiki/Entrega_continua) con Jenkins
## Inicio
El modo de inicio es ejecutando (desde el directorio src)
```
npm install
node server.js
```
## Build
La construccion de la imagen se puede hacer con
```
docker build -t selecciongalicia .
```
## Run
La imagen se puede correr desde dockerhub o desde la imagen recien creada con
```
docker run --name selecciongalicia -p 3000:3000 -d <imagen>
```
donde ``<imagen>`` puede ser
- para dockerhub ```tkd157/selecciongalicia```
- para la imagen recien creada ```selecciongalicia```
## Historial de Cambios
10/05/21 
- Version Inicial 
- Completo la documentacion en el punto de inicio
- Agrego el gitignore para evitar que se suban las librerias de node_modules
- Agrego dockerfile y hago pruebas
- Agrego jenkinsfile con el build y el post
- Agrego run y corrijo el post

11/05/21
- Agrego el deploy en k8s mediante nodeport
- Agrego avances visuales en la aplicacion 
- Ultimos Ajustes
