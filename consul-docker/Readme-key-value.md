# Key Value Consul

## Cadastrar valor
Para cadastrar localmente alguma chave para usar na configuração da sua aplicação você precisa visitar o seguinte link:
http://localhost:8500/ui/dc1/kv

Cadastre uma chave com o nome portNode e adicione um JSON com o seguinte valor:

```json
{
  "port": 8767
}

```

Após adicionar o json e salvar basta rodar novamente dentro da pasta servicenode o comando:

```sh
node index.js
```

Você verá que agora a porta da aplicação mudou para 8767, isso foi possível com o uso da lib do consul utilizada na linha 17, perceba que antes de iniciar a aplicação nós chamamos o serviço de Key-value do consul para verificar se existe alguma propriedade cadastrada com o nome portNode para usá-la, caso não, usamos a padrão (3000) para a demonstração anterior.

