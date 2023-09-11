FROM node:14
RUN npm install -g @redocly/cli@1.0.0-beta.129
RUN apt-get update && apt-get install -y nginx
copy ./golite-render.sh /usr/local/bin
RUN chmod +x /usr/local/bin/golite-render.sh
expose 80
cmd ["nginx", "-g", "daemon off;"]
