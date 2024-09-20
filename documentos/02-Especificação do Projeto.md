# Especificação do Projeto

## Perfis de Usuários

[Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.]

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 1: Aposentado</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoa acima de 60 anos 
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  1. Acesso às plataformas do governo com informações sobre
aposentadoria e benefícios.

  2. Tutoriais com mídias diversificadas sobre como navegar nas
plataformas.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 2: Assistente de idosos </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Adultos e jovens que assistem idosos.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1. Plataforma que centralize todos os sites mais utilizados por idosos para
orienta-los.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 3: Idoso trabalhador </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoa com mais de 60 anos que continua trabalhando.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  1. Acesso às plataformas do governo voltadas ao trabalhador, como a
Carteira de Trabalho Digital.

  2. Acesso às plataformas da Caixa Econômica Federal voltadas ao
trabalhador, como os aplicativos Caixa Trabalhador e FGTS.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 4: Deficiente visual </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoa com deficiência visual e pouca habilidade com tecnologias.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>  1. Plataforma que centralize todos os sites mais utilizados de serviço
público e bancos.

  2. Interface acessível, com suporte para leitores de tela.</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

[Apresente aqui as histórias de usuários que são relevantes para o projeto da solução.]

> **Link Útil**:
> - [Como escrever boas histórias de usuário](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

[Utilize o modelo de tabela abaixo para apresentar as histórias de usuários.]

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE`         |PARA ... `PORQUE`               |
|--------------------|-----------------------------------|--------------------------------|
| Aposentado         | Ter acesso fácil às plataformas   |que eu possa gerenciar
|                    |  do governo para consultar        |meus benefícios de forma
|                    |  informaçoes sobre minha          |independente e sem
|                    |aposentadoria e benefícios,        |dificuldades, evitando filas e
|                    |u s a n d o u m a i n t e r f a c e|consultas presenciais
|                    | simplificada.                                                      |
|Assistente de idosos|ter acesso fácil às plataformas   |que eu possa orientar e          |
|                     |do governo para consultar         |apoiar os idosos de forma
|                     | informações sobre minha          |eficaz, garantindo que eles
|                     |aposentadoria e benefícios,       |possam acessar e utilizar
|                     |usando uma interface              |tecnologias e serviços
|                     |simplificada.                     |digitais sem dificuldades.
|Idoso trabalhador    |acessar uma plataforma que me    |que eu possa manter minha          |
|                     |permita encontrar facilmente     |vida profissional e financeira
|                     |serviços bancários e públicos,   |organizada, sem enfrentar 
|                     |além de acessar informações      |dificuldades tecnológicas.
|                     |importantes relacionadas ao meu  |
|                     |trabalho de forma simples.       |
|Deficiente visual    |utilizar uma plataforma que      |que eu possa obter as        |
|                     |ofereça recursos de              |informações necessárias de
|                     |acessibilidade, como leitores de |forma independente. 
|                     |tela e opções de contraste alto, |
|                     |para navegar facilmente e        |
|                     |encontrar informações sobre      |     
|                     |serviços públicos.               |

## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID     | Descrição                |Prioridade|
|-------|----------------------------------|--|
| RF-01 | A aplicação deve possuir | MEDIA |
|       |  um filtro de busca para |       |
|       |  que o usuário encontre  |       |
|       |  facilmente o serviço    |       |
|       |  que procura             |       | 
| RF- 02|A aplicação deve possuir  | ALTA  |
|       | opção de alto contraste  |       |
|RF- 03 |A aplicação deve possuir  | ALTA  |
|       | opção para alterar o     |       |
|       | tamanho da fonte         |       |
|RF- 04 |A aplicação deve ser      | ALTA  |
|       |  compatível com leitores |       |
|       |  de tela, utilizando     |       |
|       | corretamente as tags e   |       |
|       | descrição adequada de    |       |
|       | imagens e  elementos     |       |
|       | gráficos                 |       |
|RF- 05 |A aplicação deve possuir  | ALTA  |
|       |  menu intuitivo, em que  |       |
|       | cada aba seja um tipo de |       |
|       | serviço                  |       |
|RF- 06 |A aplicação deve permitir | BAIXA |
|       |ao usuário cadastrar uma  |       |
|       |conta                     |       |
|RF- 07 |A aplicação deve permitir | BAIXA |
|       |ao usuário fazer o login  |       |
|       |da sua conta              |       |
|RF- 08 |A aplicação deve permitir | BAIXA |
|       |que o usuário salve os    |       |
|       |principais sites que      |       |
|       |utiliza                   |       |
 





**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  ...                    | ...   | 
| ...    |  ...                    | ...   | 

**Prioridade: Alta / Média / Baixa. 

