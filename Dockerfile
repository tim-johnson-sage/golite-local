FROM node:14
RUN npm install -g @redocly/cli@1.0.0-beta.129
RUN npm install -g @stoplight/spectral-cli@6.6.0
RUN apt-get update && apt-get install -y nginx
copy ./golite-render.sh /usr/local/bin
copy ./.spectral.yml /usr/local/bin
copy ./functions /usr/local/bin/functions
RUN chmod +x /usr/local/bin/golite-render.sh
expose 80
cmd ["nginx", "-g", "daemon off;"]
