FROM node:alpine

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos necesarios para construir
COPY package*.json .

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos
COPY ./dist ./dist

# Exponer el puerto
EXPOSE 3000

# Establecer el comando para iniciar la aplicación
CMD [ "npm", "start" ]
