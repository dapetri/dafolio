FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Production Stage
RUN npm run build
FROM nginx:stable-alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Development Stage
FROM base AS development
EXPOSE 3000
CMD ["npm", "start"]
 