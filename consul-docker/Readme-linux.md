# Passos para rodar o Consul localmente

## Criar imagem com Envoy

Entre na pasta consul-files e rode o seguinte comando:

```sh
docker build -t consul-envoy .
```

rode isso dentro da consul-files

```sh
docker run --rm -d  -v$(pwd)/envoy_demo.hcl:/etc/consul/envoy_demo.hcl --name consul-agent --network host consul:1.7.0 agent -dev -config-file /etc/consul/envoy_demo.hcl
```

Verifique se deu certo executando:

```sh
docker logs -f consul-agent
```

Agora que o consul está rodando vamos deixar as imagens prontas:

Dentro da pasta servicenode verifique se o arquivo index.js e Dockerfile está configurado para responder "version 1" e escutar na porta 3000 e depois execute:

```sh
docker build -t servicenode:v1 .
```

após terminado mude o arquivo index.js e Dockerfile para responder version 2 e escutar na porta 3001 e execute:

```sh
docker build -t servicenode:v2 .
```

após esse processo vá para a pasta servicegetter e execute:

```sh
docker build -t servicegetter:techleads .
```

Feito isso temos tudo pronto para começar.

Vamos começar executando os três containers das aplicações, servicenode-v1, servicenode-v2 e servicegetter:


```sh
docker run -d --rm -p 3002:3002 --network host servicegetter:techleads

docker run -d --rm -p 3000:3000 --network host servicenode:v1

docker run -d --rm -p 3001:3001 --network host servicenode:v2

// cheque se tudo está rodando com
docker ps
```

E agora adicionamos os proxys utilizando a imagem que buildamos no primeiro passo (Envoy)

```sh
docker run --rm -d --name service-node-v1-proxy --network host consul-envoy -sidecar-for servicenode1
docker run --rm -d --name service-node-v2-proxy --network host consul-envoy -sidecar-for servicenode2 -admin-bind localhost:19001
docker run --rm -d --name service-getter-proxy --network host consul-envoy -sidecar-for servicegetter -admin-bind localhost:19002
```
