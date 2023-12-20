## Getting started

Install Docker
```
For windows
https://docs.docker.com/desktop/install/windows-install/
For Ubuntu
https://docs.docker.com/engine/install/ubuntu/
For Mac
https://docs.docker.com/desktop/install/mac-install/
```

Clone Project
```
$ git clone git@github.com:cinoyraz31/disease-simple-crud.git
$ cd disease-simple-crud
$ cp .env.example .env
```

Running Docker Compose
```
$ docker-compose build #create image
$ docker-compose up -d #create container
```

DB Execute
```
Create new DB: disease
Running table create: db/testdump.sql
```

Running Application
```
http://localhost:5000
can you download on /postman
```