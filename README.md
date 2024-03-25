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

## Caso de Teste 3: `POST /professors`

**Descrição:**
Testar a criação de um novo professor através da rota POST.

**Propósito:**
Assegurar que a rota `POST /professors` aceita dados válidos de um novo professor, cria um registro no banco de dados e retorna os detalhes do professor criado com um status HTTP 201.

**Pré-condição:**
- API em execução.
- Banco de dados de teste configurado e acessível.

**Procedimento de teste:**
1. Configurar o mock para o método `create` do modelo `Professor`.
2. Realizar um `POST` para `/professors` com um payload válido para criação de professor.
3. Verificar se o status da resposta é 201.
4. Verificar se o corpo da resposta corresponde ao professor recém-criado.

**Resultados Esperados:**
- Status HTTP 201 (Created).
- Corpo da resposta com os detalhes do professor criado.

**Resultados que podem dar erro e exemplificá-los:**
- Status HTTP 400 se dados inválidos forem fornecidos.
- Corpo da resposta com a mensagem de erro relevante (e.g., campos faltantes ou dados mal formatados).

**Codigo**
![image](https://github.com/w0lfzin/ponderada/assets/84356798/fb1d6d45-c975-4652-b355-bf1158d2dea6)
![image](https://github.com/w0lfzin/ponderada/assets/84356798/f740d0f1-79b9-4bfc-a548-6827d554ada9)


**Pós-condição:**
- Um novo registro de professor deve ser adicionado ao banco de dados de teste (simulado pelo mock).

---

## Caso de Teste 4: `PUT /professors/:id`

**Descrição:**
Testar a atualização de um professor existente.

**Propósito:**
Garantir que a rota `PUT /professors/:id` atualize um professor existente com dados válidos e retorne os detalhes atualizados do professor.

**Pré-condição:**
- API em execução.
- Banco de dados de teste configurado e acessível.
- Um registro de professor existente no banco de dados de teste.

**Procedimento de teste:**
1. Configurar o mock para o método `findByPk` e `save` do modelo `Professor`.
2. Realizar um `PUT` para `/professors/:id` com um payload de atualização válido.
3. Verificar se o status da resposta é 200.
4. Verificar se o corpo da resposta contém os detalhes do professor atualizados.

**Resultados Esperados:**
- Status HTTP 200 (OK).
- Corpo da resposta com os detalhes do professor atualizados.

**Resultados que podem dar erro e exemplificá-los:**
- Status HTTP 404 se o professor com o ID especificado não existir.
- Status HTTP 400 se os dados de atualização forem inválidos.

**Codigo**

![image](https://github.com/w0lfzin/ponderada/assets/84356798/a15e4273-b46c-4b5d-81de-a7945b78d117)


**Pós-condição:**
- Os detalhes do professor especificado são atualizados no banco de dados de teste (simulado pelo mock).

---

## Caso de Teste 5: `DELETE /professors/:id`

**Descrição:**
Testar a exclusão de um professor.

**Propósito:**
Verificar se a rota `DELETE /professors/:id` exclui um professor existente e retorna uma resposta apropriada.

**Pré-condição:**
- API em execução.
- Banco de dados de teste configurado e acessível.
- Um registro de professor existente que pode ser excluído.

**Procedimento de teste:**
1. Configurar o mock para o método `findByPk` e `destroy` do modelo `Professor`.
2. Realizar um `DELETE` para `/professors/:id`.
3. Verificar se o status da resposta é 200.
4. Verificar se o corpo da resposta indica sucesso na exclusão.

**Resultados Esperados:**
- Status HTTP 200 (OK).
- Corpo da resposta indicando que a exclusão foi bem-sucedida.

**Resultados que podem dar erro e exemplificá-los:**
- Status HTTP 404 se o professor com o ID especificado não existir.

**Codigo**

![image](https://github.com/w0lfzin/ponderada/assets/84356798/19ed56e6-0631-4ff3-8e24-388dd482ea9f)


**Pós-condição:**
- O registro do professor especificado é removido do banco de dados de teste (simulado pelo mock).

---

## Caso de Teste 4: `PUT /professors/:id`

**Descrição:**  
Testar a funcionalidade de atualização dos dados de um professor existente na rota `PUT /professors/:id`.

**Propósito:**  
Assegurar que a rota de atualização aceite e processe adequadamente os dados de um professor, retornando o registro atualizado e manuseando os casos de erro de forma apropriada.

**Pré-condição:**  
- O servidor da API está em execução.
- Os mocks do modelo `Professor` estão configurados corretamente.
- Um registro de professor existente com um ID específico para teste está preparado para ser atualizado.

**Procedimento de teste:**  
1. Configurar o mock do método `findByPk` do modelo `Professor` para retornar um professor existente.
2. Configurar o mock do método `update` para simular a atualização do professor.
3. Fazer uma requisição HTTP `PUT` para a rota `/professors/:id` com os dados atualizados do professor.
4. Verificar se o status HTTP da resposta é `200` (OK).
5. Verificar se o corpo da resposta contém os dados atualizados do professor.

**Resultados Esperados:**  
- Uma resposta com status `200` (OK).
- O corpo da resposta deve ser um objeto que contém os dados atualizados do professor.

**Resultados que podem dar erro e exemplificá-los:**  
- Status `404` (Not Found) se o professor com o ID especificado não for encontrado.
- Status `400` (Bad Request) se os dados de atualização fornecidos forem inválidos (por exemplo, nome em branco ou CPF mal-formatado).

**Codigo:**  
![image](https://github.com/w0lfzin/ponderada/assets/84356798/d661588c-6998-4477-9960-782772686dc7)

**Pós-condição:**  
- O registro do professor no banco de dados de teste (mockado) é atualizado com os novos dados.

