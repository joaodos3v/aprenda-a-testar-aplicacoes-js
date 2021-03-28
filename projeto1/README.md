# Projeto 1

## Aula 1

- Opção de terminal: [Fish Shell](fishshell.com)
- [Jest](https://jestjs.io/pt-BR/): *test runner* com a capacidade de realizar *assertions* (asserções)
- Um detalhe interessante é que, ao instalar as bibliotecas, é possível notar que a pasta `/node_modules` contém outra pasta chamada de `/bin`
  - Dentro deste diretório, existe um executável `jest`
  - Com isso, não precisamos ter o *jest* instalado no computador para executá-lo, bastando referenciar este executável

## Aula 2

- Ao executar o comando `yarn test` (após trocar o *alias* para `jest`), é possível notar algumas instruções
  - A mais interessante neste momento é: `testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches`
  - Este comando indica duas "buscas" realizadas com expressão regular:
    - A partir da raiz (onde o comando foi executado), busque uma pasta `__tests__/` e, dentro dela, qualquer arquivo, dentro de qualquer diretório, que acabe com as extensões `.js, .jsx, .ts ou .tsx`
    - Ou, busque recursivamente em qualquer diretório, arquivos que tenham `{nome}.spec.{ext} ou {nome}.test.{ext}`, sendo `{.ext} = .js, .jsx, .ts ou .tsx`
  - Ou seja, é a maneira que o `jest` utiliza para localizar os testes
- Outra parte importante é: `testPathIgnorePatterns: /node_modules/ - 1 match`
  - A pasta `/node_modules` é ignorada porque, além de seu tamanho, espera-se que os autores das bibliotecas utilizadas tenham criado seus próprios testes
- Extensão com alguns *snippets* úteis para testar: [Jest Snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets)
- **Dica:** para garantir que o teste não é um falso positivo (ou seja, o teste vai passar independente da implementação realizada), uma sugestão é usar a negação
  - Dessa forma, se o teste `expect(sum(2, 2)).toBe(4)` é verdadeiro, consequentemente `expect(sum(2, 2)).not.toBe(4)` **tem que falhar**
  - [.not](https://jestjs.io/pt-BR/docs/expect#not)
