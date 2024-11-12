
```markdown
# Sistema de Atendimento de Emergência com SMS e Geolocalização

## Descrição do Projeto

Este projeto foi desenvolvido para abordar algumas das principais deficiências de sistemas de atendimento de saúde arcaicos, que frequentemente sofrem com a falta de investimentos e problemas operacionais. Durante uma competição, nossa equipe criou um protótipo funcional que busca melhorar a eficiência no atendimento de emergências usando uma solução simples baseada em SMS e geolocalização.

---

## Problemas Identificados

Identificamos três fatores principais que impactam negativamente a velocidade e a eficiência no atendimento de emergências:

1. **Regulação no Atendimento com UBS, Hospitais e Afins**
   - Muitas vezes, não há vagas disponíveis para receber pacientes, e o SAMU precisa aguardar no local até que uma vaga seja liberada, atrasando o atendimento.

2. **Trotes**
   - Apesar de parecer inacreditável, trotes ainda representam um grande problema, prejudicando o funcionamento dos sistemas de emergência e desperdiçando recursos valiosos.

3. **Dificuldade em Encontrar o Local do Paciente**
   - Problemas como ruas com nomes duplicados em diferentes bairros, falta de iluminação e condições ruins das vias dificultam o deslocamento das equipes.
   - Muitas vezes, é necessário ligar novamente para obter mais informações, mas em alguns casos o solicitante já não se encontra mais no local.

---

## Solução Proposta

Nossa equipe criou um sistema que utiliza **SMS e geolocalização** para otimizar o processo de atendimento de emergências. Aqui está um resumo de como a solução funciona:

1. **Recebimento de Solicitação**
   - Quando um usuário faz uma ligação solicitando atendimento, ele recebe um SMS contendo um link.

2. **Coleta de Geolocalização**
   - Ao clicar no link, o navegador solicita permissão para obter a localização exata do usuário.

3. **Armazenamento e Envio dos Dados**
   - A localização é salva e vinculada aos dados fornecidos durante o atendimento.
   - Um SMS contendo o local exato e informações iniciais sobre o incidente é enviado diretamente ao motorista da ambulância, otimizando o tempo de deslocamento.

---

## Resultados

Nossa solução foi apresentada em uma competição e foi bem recebida pelos jurados, conquistando o **terceiro lugar**. Ficamos orgulhosos de demonstrar como ideias simples, mas eficazes, podem fazer uma diferença real, otimizando recursos, melhorando a eficiência no atendimento de emergências e, acima de tudo, salvando vidas.

---

## Tecnologias Utilizadas

- **NestJS** para o backend, gerenciando as solicitações e integração com APIs externas.
- **SMS** para comunicação rápida e eficaz com o usuário e os motoristas de ambulância.
- **Geolocalização** via navegador para identificar e registrar a localização exata do usuário em tempo real.

---

## Como Utilizar

1. O usuário faz a ligação para solicitar atendimento.
2. O usuário recebe um SMS com um link.
3. Ao acessar o link, o navegador solicita permissão para obter a localização.
4. Os dados de localização são armazenados e vinculados às informações do atendimento.
5. Um SMS contendo os dados do incidente e a localização é enviado ao motorista da ambulância.

---

## Instalação

### Passo a Passo para Instalar e Executar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/olvvikitor/desafio_samu_hackathon.git
   ```

2. **Entre no diretório do projeto**:

   ```bash
   cd desafio_samu_hackathon
   ```

3. **Instale as dependências**:

   ```bash
   npm install
   ```

4. **Crie um arquivo `.env`** na raiz do projeto e adicione as seguintes variáveis de ambiente:

   ```env
   MONGO_STR=
   TWILIO_ACCOUNT_SID=
   TWILIO_AUTH_TOKEN=
   TWILIO_PHONE_NUMBER=
   MY_NUMBER=
   ```

5. **Execute a aplicação**:

   ```bash
   npm run start
   ```

   Ou para ambiente de desenvolvimento com hot-reloading:

   ```bash
   npm run start:dev
   ```
---

## Considerações Finais

Este projeto demonstrou que, mesmo com recursos simples, é possível desenvolver soluções que tragam grandes melhorias para a sociedade, especialmente em serviços críticos como o atendimento de emergências. Esperamos que este protótipo inspire mais investimentos e iniciativas nessa área, otimizando o atendimento e ajudando a salvar vidas.
```
