# Stage 0, "build", based on Node.js, to build and compile the frontend
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /app/build/ /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]