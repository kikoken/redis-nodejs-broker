FROM node:alpine

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos necesarios para construir
COPY package.json .
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto
EXPOSE 3001

# Establecer el comando para iniciar la aplicación
CMD [ "npm", "start" ]
