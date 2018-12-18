# -- NGINX - environment --
FROM nginx:stable-alpine

# Copy files and directories from the application
COPY index.html /usr/share/nginx/html

# Open port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]