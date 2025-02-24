FROM nginx:latest
LABEL MAINTAINER=martin@mjhooper.co.uk
LABEL desc="This is my test website for using json files in Astro masde websites"
COPY dist /usr/share/nginx/html

