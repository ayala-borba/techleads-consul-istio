# Passos para rodar o Consul localmente

## Esse passo está sendo feito assim por conta de limitações do docker no mac!
### Já estamos procurando soluções para rodar usando somente containers

## Baixar Consul, Envoy e Node

### Consul
https://www.consul.io/downloads.html

### Envoy

https://www.getenvoy.io/install/envoy/macos/

### Node
instale o NVM
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

Copie o binário do consul para /usr/local/bin e estamos prontos para começar.

Dentro da pasta consul-files rode esse comando e deixe o processo aberto:

```sh
consul agent -dev -config-file ./envoy_demo.hcl
```

Perceba que ele tentou configurar uma série de serviços sem sucesso, vamos deixar os serviços prontos.

Dentro da pasta servicenode rode o seguinte comando em uma aba do seu terminal e deixe rodando:

```sh
node index.js
```

A mesma coisa com o arquivo indexv2:

```sh
node indexv2.js
```

E a mesma coisa na pasta servicegetter:
```sh
node index.js
```

Feito isso podemos partir para os proxys.


```sh
consul connect envoy -sidecar-for servicegetter
consul connect envoy -sidecar-for servicenode1 -admin-bind localhost:19001
consul connect envoy -sidecar-for servicenode2 -admin-bind localhost:19002
```