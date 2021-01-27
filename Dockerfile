# Test
FROM node:alpine
ENV NODE_ENV=development
WORKDIR /app

COPY package*.json /app/

# CI and release builds should use npm ci to fully respect the lockfile.
# Local development may use npm install for opportunistic package updates.
#RUN npm install 

COPY . .
#CMD ["next", "start"]
