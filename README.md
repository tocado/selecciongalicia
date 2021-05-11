# Examen de seleccion Galicia
## Objeto
Éste repositorio tiene como objeto la demostracion de un ejemplo sencillo escrito en nodejs
## Alcance
Desde el desarrollo del ejemplo hasta la implementacion en el cluster de Kubernetes mediante la automatizacion de CD (https://es.wikipedia.org/wiki/Entrega_continua) con Jenkins
## Inicio
El modo de inicio es ejecutando (desde el directorio src)
```
node server.js
```
## Historial de Cambios
10/05/21 
- Version Inicial 
- Completo la documentacion en el punto de inicio
- Agrego el gitignore para evitar que se suban las librerias de node_modules
- Agrego dockerfile y hago pruebas en el puerto 800
- Agrego jenkinsfile con el build y el post
- Agrego run y corrijo el post
