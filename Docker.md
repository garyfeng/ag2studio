# Running AG2Studio in docker

AG2Studio came with a `Dockerfile` but it looks like it is for running a local dev setup. We need a standalone container that can run the AG2Studio API and the frontend servers.

## Dockerfile
Renamed the original dockerfile as `Dockerfile-ori`, and created a new `Dockerfile`. 

## Build and run

```sh
docker build -t ag2studio .
docker run -p 8081:8081 -e .env ag2studio ag2studio ui --port 8081 --host 0.0.0.0
```
