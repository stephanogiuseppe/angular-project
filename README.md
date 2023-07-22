# JoseanneViana

Dependências:

- Node v18.12.1

Ambiente local:

```sh
npm i
```

```sh
ng serve
```

Acessar porta `4200`

Build da imagem:

```sh
sudo docker-compose -f "docker-compose.yml" up -d --build
```

Acessar porta `8081`

GGC

- Container Registry -> Enable Container API
- dokcer tag gcr.io/project_id_google/image_name
- docker push gcr.io/project_id_google/image_name
