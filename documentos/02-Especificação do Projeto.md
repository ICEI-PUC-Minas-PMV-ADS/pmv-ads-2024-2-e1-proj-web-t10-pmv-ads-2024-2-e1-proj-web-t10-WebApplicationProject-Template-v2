# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01: Prestador do Serviço</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Empresas que fornecem os serviços de exames (hospitais, laboratórios, clínicas de especialidades, etc..</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1 - Disponibilizar lista de exames que são executados no estabelecimento;
2 - Apresentar calendário com quadro de disponibilidade de vagas;
3 - Apontar cuidados para cada exame a ser agendado (exemplo dietas específicas, jejum, medicamentos a serem administrados com pré-requisitos dos exames);
4 - Evidências quais documentações necessitam ser anexadas para realização dos exames;
5 - Chat entre o estabelecimento e unidade solicitante de exames.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 02: Solicitante do serviço</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Unidade solicitante dos exames para o paciente</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1 - Absorver documentação necessária para anexar no Agendamento do Exames;
2 - Trabalhar critérios orientativos com os pacientes para minimização de erros;
3 - Orientar o paciente de forma clara e objetiva;
4 - Emitir protocolo de marcação dos exames com informações que o paciente possa acessar via web;
5 - Chat entre o estabelecimento e unidade solicitante de exames.

</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 03: Pacientes</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Público-alvo a ser atendido</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1 - Acesso rápido e fácil de acesso ao sistema
2 - Ambiente didático e intuitivo, o menos burocrático possível;
3 - Diferentes formas de buscar resultados de exames (CPF, CNS, cartão nacional de saúde) 



</td>
</tr>
</tbody>
</table>




## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Pacientes          | Melhorar o tempo de espera| Os casos de emergência e urgência devem ser marcados de imediato, passar informações mais claras em relação às marcações para evitar que os pacientes procurem o lugar errado para marcar os exames.                               |
| Pacientes          | Maior eficácia no tempo   | Otimizar o processo, para facilitar as marcações dos exames                              |
|Pacientes           | Criar fluxo de orientação com todas as etapas para o processo de marcação | Para não ter riscos de no final no processo, mas marcações serem canceladas|
|Pacientes           | Agilidade no tempo de resposta| Definir estratégias e prioridades de agendamento para pacientes que aguardam a resposta dos exames a muito tempo |
|Prestador|Liberação de mais cotas de exames | É necessária uma revisão das cotas para população de modo que supram a necessidade dos solicitantes |
|Pacientes|Processo de marcação mais transparente|Divulgar com mais eficiência para que a população entenda como funciona todo processo de marcação.|
|Pacientes|Redução das caminhadas desnecessárias|É difícil ter que ir no psf para consultar, depois pegar o exames, posteriormente ir marcar, para depois coletar e por fim pegar o resultado.|
|Pacientes|Conhecer quais exames são disponibilizados |Na maioria das vezes tem muitos exames que nem sabemos que tem pelo sus.|
|Pacientes|Redução da burocracia|Para tornar o sus mais funcional, tanta cópia de documento, comprovantes cartão sus, etc|


## Requisitos do Projeto

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
|RF-01|	Deve priorizar marcação de exames por ordem de criticidade: O sistema deve permitir a marcação imediata de exames para casos classificados como emergência e urgência.|	ALTA|
|RF-02|Sistema de login facilitado (Gov.br ou dados básicos, como CPF)|	ALTA|
|RF-03|Otimização do processo de agendamento de exames: O sistema deve ser otimizado para facilitar o processo de marcação de exames, tornando-o mais rápido e intuitivo.	|ALTA|
|RF-04|Fluxo de orientação completo:Minimizar o risco de cancelamentos de marcações devido à falta de informações ou erros no processo.	|ALTA|
|RF-05|	Priorização de exames pendentes:O sistema deve implementar estratégias que priorizem o agendamento para pacientes que aguardam há mais tempo por resultados de exames.	|MÉDIA|
|RF-06|	Liberação de cotas para exames de alta complexidade:O sistema deve permitir a liberação eficiente de cotas para exames de alta complexidade, como tomografias e ressonâncias, para reduzir a dificuldade na marcação.|	MÉDIA|
|RF-07|	Deve possuir FAQ: Área de perguntas e respostas mais comuns	|ALTA|
|RF-08|	Redução da burocracia para agendamento de exames:Simplificar o processo de marcação de exames, reduzindo a quantidade de documentação necessária (como cópias de documentos e comprovantes).	|MÉDIA|
|RF-09|Informação sobre exames disponíveis no SUS:Disponibilizar uma lista completa e atualizada dos exames oferecidos pelo SUS, acessível no sistema.	|ALTA|
|RF-10|	Deve possuir mecanismo de avisos e notícias úteis:Notificação de exames marcados, vacinas e tratamentos disponíveis |	MÉDIA|

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
|RNF- 01|	O sistema deve ser compatível com os principais navegadores.|	ALTA|
|RNF- 02|	O sistema deve ser amigável para usuários de todas as idades.| 	ALTA|
|RNF- 03| O sistema deve demandar pouco consumo de dados.|BAIXA|
|RNF- 04|	A aplicação deve ser responsiva|MÉDIA|
|RNF- 05|	O sistema deve atender a LGPD.	|ALTA|
|RNF- 06|	O sistema deve estar disponível 24 horas por dia durante todos os dias.	|ALTA|
|RNF- 07|	Deve-se ter backup de todos os dados feito de forma automática no menor período de tempo possível.	|ALTA|
|RNF- 08|	O sistema deve diminuir o tempo necessário para a marcação de exames no SUS.	|ALTA|
|RNF- 09|	O sistema deve deixar o processo de marcar um exame mais transparente para o paciente.	|ALTA|

**Prioridade: Alta / Média / Baixa. 

