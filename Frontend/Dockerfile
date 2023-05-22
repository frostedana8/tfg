FROM node:18 as build-step 
RUN mkdir -p /app
WORKDIR /app
COPY ./MovieGuesser/package.json /app
RUN npm install
COPY ./MovieGuesser /app
RUN npm run build --prod

FROM nginx:latest
COPY --from=build-step /app/dist/movie-guesser /usr/share/nginx/html
