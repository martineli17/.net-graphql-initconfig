# GraphQL .NET usando HotChocolate

## Pacotes
- HotChocolate.AspNetCore
- HotChocolate.Data

## Exemplo
- Neste exemplo foi utilizado o Entity Framework integrado com o Postgres para realizar o armazenamento dos dados

## Configuração
<p>Para o servidor GraphQL foi utilizado o pacote HotChocolate. No próprio site deles tem mais informações sobre as possibilidades de configurações: https://chillicream.com/docs/hotchocolate</p>
<ol>
  <li>Primeiro é necessário instalar os pacotes necessários</li>
  <li>
    <p>Após isso, é necessário iniciar as configurações do servidor</p>

    builder.Services.AddGraphQLServer()
  </li>
  <li>
    <p>Feito isso, precisa-se definir as queries. Query é o arquivo responsável por definir quais os dados estarão disponíveis para serem consultados</p>
    <ul>
      <li><a href="https://github.com/martineli17/.net-graphql-initconfig/blob/master/GraphQL/Api/GraphQL/Queries/ClientQueryType.cs">Client Query</a></li>
      <li><a href="https://github.com/martineli17/.net-graphql-initconfig/blob/master/GraphQL/Api/GraphQL/Queries/PaymentQueryType.cs">Payment Query</a></li>
    </ul>
    <p>Nota-se que as queries tem alguns atributos que permitem habilitar a integração com o EF e também o nome do recurso dispobilizado.</p>
    <p>Após a criação, elas precisam ser registradas para que o servidor consiga disponibilizá-las</p>

    .AddQueryType(q => q.Name("query"))
    .AddType<ClientQueryType>()
    .AddType<PaymentQueryType>();
  </li>
  <li>
    <p>Feito isso, como foi utilizado o Entity Framework para persistência de dados, falta a configuração necessária para que a integração do servidor com o EF funcione e trascreva a consulta solicitada via GraphQL para queries de banco de dados.</p>
    <p>Com isso, a solicitação dos dados fica mais flexível para a necessidade do client e não precisa de implementações específicas no back-end.</p>
    
    .AddProjections() //Permite selecionar os campos
    .AddFiltering() // Permite filtrar os dados
    .AddSorting() // Permite a ordenação dos dados
  </li>
  <li>
    No final, a configuração ficou:

    builder.Services
    .AddGraphQLServer()
    .AddProjections()
    .AddFiltering()
    .AddSorting()
    .AddQueryType(q => q.Name("query"))
        .AddType<ClientQueryType>()
        .AddType<PaymentQueryType>();
  </li>
</ol>
<p>Realizando estas configurações, basta iniciar o servidor e testar</p>

## Front-end
<p>Neste exemplo, foi implementado uma aplicação frontend (NextJs) para simular as buscas dos dados por demanda, solicitando somente o necessário para cada ação do usuário.</p>
<a href="https://github.com/martineli17/.net-graphql-initconfig/blob/master/frontend/src/services/api/client.service.ts">Service</a>
<ul>
  <li>
    <p>Na tela inicial, irá solicitar os clientes e o seu nome</p>

    const query = {
        query: `{
        clients
            (
                skip: ${skip},
                take: ${take},
                order: [{ name: ASC }]
            )
            {
                items {
                    name
                    id
                }
            }
        }
        `
    }
  </li>
  <li>
    <p>Na opção de detalhes, irá filtrar pelo ID do cliente selecionado e retornar o E-mail e Nome</p>

    const query = {
        query: `{
        clients
            (
                where: {
                    id: {eq: "${idClient}"}
                }
            )
            {
                items {
                    name
                    email
                }
            }
        }
        `
    }
  </li>
  <li>
    <p>Na opção de pagamentos, irá filtrar pelo ID do cliente selecionado e retornar os pagamentos relacionados a ele</p>

    const query = {
        query: `{
        payments
            (
                where: {
                    clientId: {eq: "${idClient}"}
                }
            )
            {
                items {
                    value
                    paidWhen
                }
            }
        }
        `
    }
  </li>
</ul>

![image](https://github.com/martineli17/.net-graphql-initconfig/assets/50757499/bf99fa7a-f6f9-468f-9b1b-79ff9dc67054)


