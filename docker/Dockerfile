# 
FROM node:18

# menginstall curl
RUN apt-get install curl

# menentukan folder
WORKDIR /src

# disimpen di root folder
COPY app.js .  

EXPOSE 3000

ENTRYPOINT ["/bin/bash", "-c", "node"]

CMD ["/src/app.js"]