# Test Cases for Professor Controller

## Caso de Teste 1: `GET /professors`

**Descrição:**
Verificar se a rota retorna todos os professores cadastrados.

**Propósito:**
Assegurar que a rota retorna uma lista completa de professores e maneja erros apropriadamente.

**Pré-condição:**
- API em execução.
- Banco de dados de teste configurado e acessível (se necessário).

**Procedimento de teste:**
1. Configurar o mock para o método `findAll` do modelo `Professor`.
2. Realizar um `GET` para `/professors`.
3. Verificar se o status da resposta é 200.
4. Verificar se o corpo da resposta contém a lista esperada.

**Resultados Esperados:**
- Status HTTP 200.
- Corpo da resposta com uma lista de professores.

**Resultados que podem dar erro e exemplificá-los:**
- Status HTTP 500 se houver erro no servidor.
- Corpo da resposta com `{ error: 'Error fetching professors' }`.

**Pós-condição:**
- Sem alterações persistentes no estado da aplicação ou banco de dados.

**Codigo**

![image](https://github.com/w0lfzin/ponderada/assets/84356798/a2f0f86d-c9ab-4e10-8c35-01710fa38ea7)


**Pequena Conclusão:**
Essencial para validar a funcionalidade básica da listagem de professores. Assegura a integridade da operação de listagem e a robustez do sistema ao lidar com falhas.

---

## Caso de Teste 2: `GET /professors/:id`

**Descrição:**
Verificar se a rota retorna um professor específico pelo ID.

**Propósito:**
Confirmar que a rota retorna o professor correto com base no ID fornecido e trata erros corretamente.

**Pré-condição:**
- API em execução.
- Banco de dados de teste configurado e acessível, contendo ao menos um professor.

**Procedimento de teste:**
1. Configurar o mock para o método `findByPk` do modelo `Professor`.
2. Realizar um `GET` para `/professors/:id` com um ID válido.
3. Verificar se o status da resposta é 200.
4. Verificar se o corpo da resposta contém os detalhes do professor.

**Resultados Esperados:**
- Status HTTP 200.
- Corpo da resposta contém os detalhes do professor com o ID solicitado.

**Resultados que podem dar erro e exemplificá-los:**
- Status HTTP 404 se o professor com o ID especificado não for encontrado.
- Corpo da resposta com `{ error: 'Professor not found.' }`.

**Pós-condição:**
- Sem alterações persistentes no estado da aplicação ou banco de dados.

**Codigo**

![image](https://github.com/w0lfzin/ponderada/assets/84356798/d4902929-b8db-40c8-82f5-8523354352aa)


**Pequena Conclusão:**
Este caso de teste é crucial para verificar se o sistema está respondendo com os dados corretos para um único professor e lidando adequadamente com casos onde o professor não existe.

---
