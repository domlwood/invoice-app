FROM strapi/base

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

ENV NODE_ENV production

#RUN npm run initKeycloakEnvVars
RUN npm run build
RUN npm i -g knex

EXPOSE 1337

CMD ["npm", "run", "start"]
