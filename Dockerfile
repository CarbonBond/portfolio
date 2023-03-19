FROM node:latest AS builder

WORKDIR /app

COPY package*.json ./

COPY . .

RUN apt-get update || : && apt-get install python -y

RUN npm ci 

RUN npm run build && npm prune --production

ENV PORT 80

EXPOSE 80

CMD ["node", "build"]
