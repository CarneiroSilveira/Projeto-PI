# Explicação de Expressões Regulares (Regex) e Validações Utilizadas

## O que é um Regex?
Uma **expressão regular** (ou **regex**) é uma sequência de caracteres que define um padrão de pesquisa. Elas são amplamente usadas para validar formatos de strings, como garantir que um email esteja no formato correto, ou que uma senha siga certas regras. Utilizar regex torna a validação de dados mais rápida e eficiente sem a necessidade de lógica de programação extensa.

## Regex Utilizados

### 1. **Nome e Sobrenome**
#### Regex:
```regex
/^[A-Za-z]{2,}$/

- ^: Indica o início da string.
- [A-Za-z]: Permite apenas letras (maiúsculas A-Z e minúsculas a-z).
- {2,}: A string deve ter pelo menos 2 caracteres.
- $: Indica o fim da string.

2. Username (Nome de Usuário)

/^(?=.{3,16}$)[a-zA-Z0-9]+(?:[._][a-zA-Z0-9]+)*$/

- ^: Indica o início da string.
- (?=.{3,16}$): Garante que o comprimento da string esteja entre 3 e 16 caracteres.
- [a-zA-Z0-9]+: A string deve começar com pelo menos uma letra ou número.
- (?:[._][a-zA-Z0-9]+)*: Permite que a string contenha pontos (.) ou underscores (_) seguidos de letras ou números, mas não pode ter múltiplos consecutivos.
- $: Indica o fim da string.

3. Senha

/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

- ^: Indica o início da string.
- (?=.*[a-z]): Exige pelo menos uma letra minúscula.
- (?=.*[A-Z]): Exige pelo menos uma letra maiúscula.
- (?=.*\d): Exige pelo menos um dígito (número).
- (?=.*[@$!%*?&]): Exige pelo menos um caractere especial (como @, $, !, etc.).
- [A-Za-z\d@$!%*?&]{8,}: O comprimento da senha deve ser de pelo menos 8 caracteres, permitindo letras, dígitos e caracteres especiais.
- $: Indica o fim da string.

4. Email

/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

- ^: Indica o início da string.
- [a-zA-Z0-9._%+-]+: O nome do usuário deve conter letras, números, pontos, underscores, sinais de porcentagem, mais e hífens.
- @: Exige a presença de um símbolo @.
- [a-zA-Z0-9.-]+: O domínio deve conter letras, números, pontos e hífens.
- \.[a-zA-Z]{2,6}: Exige um ponto seguido por uma extensão de 2 a 6 letras (ex.: .com, .org).
- $: Indica o fim da string.
