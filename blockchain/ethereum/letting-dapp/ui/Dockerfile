FROM nginx:1.15.2-alpine
COPY ./build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8000
HEALTHCHECK --interval=60s --timeout=15s --start-period=30s CMD curl --fail http://localhost:8080 || exit 1   
ENTRYPOINT ["nginx","-g","daemon off;"]