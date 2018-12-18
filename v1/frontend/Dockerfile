# -- NGINX - environment --
FROM nginx:stable-alpine

# Copy files and directories from the application
COPY index.html /usr/share/nginx/html
COPY movies.html /usr/share/nginx/html
COPY login.html /usr/share/nginx/html
COPY signup.html /usr/share/nginx/html
COPY css/ /usr/share/nginx/html/css
COPY images/ /usr/share/nginx/html/images


# Open port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]