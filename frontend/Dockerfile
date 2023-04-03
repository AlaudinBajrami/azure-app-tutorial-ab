FROM node:18 as builder
WORKDIR '/app'

COPY yarn.lock package.json ./
RUN yarn install
COPY ./ ./
RUN yarn build

# Ready to being served by nginx
FROM nginx:alpine
WORKDIR /opt/BackendApplication
COPY --from=builder /app/build .
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Add bash
RUN apk add --no-cache bash

COPY ./create-environment-config.sh .
COPY .env .

# Make our shell script executable
RUN chmod +x create-environment-config.sh

# Use "exec" form so that it runs as PID 1 (useful for graceful shutdown)
# Start Nginx server after copying the environment variables to env-config.js
CMD ["/bin/bash", "-c", "/opt/BackendApplication/create-environment-config.sh . && nginx -g \"daemon off;\""]
