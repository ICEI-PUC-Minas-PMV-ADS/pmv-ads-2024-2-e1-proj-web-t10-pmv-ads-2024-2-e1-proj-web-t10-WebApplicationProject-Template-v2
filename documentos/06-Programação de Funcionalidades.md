# Programação de Funcionalidades

Implementação da aplicação descritas por meio dos requisitos codificados.
O Projeto Cidaddania Digital, desenvolveu um acesso prático e dinâmico, para pessoas com idades de 45 anos a 60 anos com dificuldades ou limitações em acessar sites ou até mesmo o preenchimento de cadastro ou formulários.
Aplica-se com tutorias e videos para o esclarecimento de dúvidas, criando também uma fidelidade em um cadastro no mesmo, sendo assim possuindo uma aproximidade ao usuário na prática de suas necessidades como:
Tutorais com passo a passo e Videos; 
Agendamento de Consultas e Exames;
Informações sobre Aposentadorias;
Área especial para Deficientes(PCD);
Momento Entertenimento;
Fale Conosco;
E uma central com Dúvidas Frequentes;
Área de Pesquisa e Busca.

[Utilize a estrutura abaixo para cada funcionalidade entregue na etapa]


### Título da funcionalidade


![image](https://github.com/user-attachments/assets/11c18761-06e5-4921-b7b2-c051dab64b32)

[Adicione imagem da funcionalidade/tela]

#### Requisito atendido
Os elementos inceridos na barra principal ficou bem visível, e de fácil acesso ao usurário, para que sua navegação seja de modo intuitiva.

[RF-X: adicione a descrição do requisito atendido]


#### Artefatos da funcionalidade

Código de pesquisa e busca.
  <form>
    <input type="search" name="q" placeholder="Pesquisar" />
    <input type="submit" value="Buscar" />
  </form>
Código de Barra Principal da Página
<div class="topnav">
    <a href="#">QUEM SOMOS</a>
    <a href="#">TUTORIAIS</a>
    <a href="#">AGENDAMENTOS</a>
    <a href="#">APOSENTADORIA</a>
    <a href="#">DEFICIENTES(PCD)</a>
    <a href="#">ENTERTENIMENTO</a>
    <a href="#" style="float:right">FALE CONOSCO</a>
  </div>

Código de Cadastro para Usuários
<div class="rightcolumn">
      <div class="card">
        <h2>Cadastre-se</h2>
        <div <form action="/signup" method="post">
          <p>
            <label>Gênero</label><br>
            <label>
              <input type="radio" name="title" value="masculino">
              Masculino
            </label>
            <label>
              <input type="radio" name="title" value="feminino">
              Feminino
            </label>
          </p>
          <p>
            <label>Nome Completo</label><br>
            <input type="text" name="nome completo">
          </p>
          <p>
            <label>Email</label><br>
            <input type="email" name="email" required>
          </p>
          <p>
            <label>Número de Celular</label><br>
            <input type="telefone" name="celular">
          </p>
          <p>
            <label>Senha</label><br>
            <input type="senha" name="senha">
          </p>
          <p>
            <label>Estado</label><br>
            <select>
              <option>Belo Horizonte</option>
              <option>São Paulo</option>
              <option>Rio de Janeiro</option>
              <option>Espírito Santo</option>
              <option>Santa Catarina</option>
            </select>
          </p>
          <p>
            <label>
              <input type="checkbox" value="termos">
              Eu concordo com os <a href="/termos">termos e condições</a>
            </label>
          </p>
          <p>
            <button>Cadastrar</button>
            <button type="resetar">Entrar</button>
          </p>
          </form>
          <p>Tenha uma experiência dinâmica e prática conosco.</p>
        </div>
        Código para as Sugestões
        <div>
          <form action="/subscribe" method="post">
            <fieldset>
              <legend>SUGESTÕES</legend>
              <div class="form-group">
                <label for="usr">Nome:</label>
                <input type="text" class="form-control" id="usr">
              </div>
              <div class="form-group">
                <label for="celular">Celular</celular>:</label>
                <input type="celular" class="form-control" id="celular">
                <div class="form-group">
                  <label for="comment">Esvreva aqui:</label>
                  <textarea class="form-control" rows="5" id="comment"></textarea>
                </div>
              </div>
              <button>Enviar Sugestão</button>
            </fieldset>
        </div>
        </form>

        Códigos para as Dúvidas
 <aside>
    <h2>DÚVIDAS</h2>
    <ul>
      <li><a href="#">NÃO CONSIGO FAZER O LOGIN</a></li>
      <li><a href="#">ESQUECI MINHA SENHA</a></li>
      <li><a href="#">DÚVIDAS SOBRE OS TUTORIAIS</a></li>
      <li><a href="#">DÚVIDAS SOBRE APOSENTADORIA</a></li>
      <li><a href="#">DÚVIDAS SOBRE APLICATIVOS DE BANCO</a></li>
      <li><a href="#">TUDO SOBRE FGTS</a></li>
    </ul>
  </aside>

  [Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]

#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]


#### Instruções de acesso

Ao selecionar e clicar, o usuário será direcionado para outra página no qual foi escolhido.
Possui um cadastro com adicionais do gênero masculino ou feminino, nome completo,e-mail, número de celular, e a criação de uma senha, selecionar de qual estado do Brasil o usuário reside, possui também o termo e condições ao finalizar o cadastro, a seguir existe uma central com Dúvidas Frequentes na qual o usuário pode se identificar e ou selecionar será direcional para outra página resolvento suas dúvidas.
Existe um quadro de Sugestões no fim da página, caso não foi solucionado alguma necesidade do usuário para que podemos nos atualizar e criar elementos para atende-los. 

[Adicione as orientações de acesso à funcionalidade]
#### Responsável
Ariel filipe Nascimento
[Adicione nome do responsável pelo desenvolvimento da funcionalidade]


> **Links Úteis**:
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

