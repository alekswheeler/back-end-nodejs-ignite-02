# Desafio 2

  Back-end com nodejs.
  
## Rotas

* [POST] /users
    
    Cria novos usuários, não permite emails repetidos
    Recebe nome e email no body da requisição (JSON)

* [GET] /users/:user_id

    Retorna um objeto de usuário se o id existir
    Recebe o id nos parâmetros da rota

* [PATCH] /users/:user_id/admin

    Torna um usuário admin, não permite ids inexistentes
    Recebe o id nos parâmetros da rota

* [GET] /users

    Recebe um id no header da requisição, apenas retorna a lista se o usuário for admin

## Exemplo de um objeto usuário


        {
            name: "fulano"
            email: "fulano@email.com"
            admin: false
            created_at: "2022-04-01T13:10:43.353Z"
            updated_at: "2022-04-01T13:10:43.353Z"
        }

## Como executar
    
Clone o repositório, e na pasta do repositório instale as dependências:

    npm install

E em seguida "suba" o servidor

    npm run dev

Para testar você pode utilizar o insomnia ou software equivalente para realizar as requisições.

## Conceitos aplicados

Nesta aplicação foram utilizados conceitos de SOLID. Entre eles responsabilidade única, substituição de responsabilidade de Liskov. 
Os testes incluem a testagem destes conceitos. Para executar os testes execute:

    npm run test

## Material

[Template](https://github.com/rocketseat-education/ignite-template-introducao-ao-SOLID) do repositório para implementação.
