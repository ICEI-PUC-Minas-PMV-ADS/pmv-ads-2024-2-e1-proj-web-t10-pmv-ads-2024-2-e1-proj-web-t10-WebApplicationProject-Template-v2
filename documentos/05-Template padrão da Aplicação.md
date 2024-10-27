# Template padrão da Aplicação

Layout padrão do site (HTML e CSS) que será utilizado em todas as páginas com a definição de identidade visual, aspectos de responsividade e iconografia.

Layout Padrão HTML
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>My page title</title>
    <link
      rel="stylesheet"
      type="text/css" />
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
      <header>
      <h1>Header</h1>
    </header>

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Our team</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <form>
        <input type="search" name="q" placeholder="Search query" />
        <input type="submit" value="Go!" />
      </form>
    </nav>
    
    <main>
       <article>
        <h2>Article heading</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam
          lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam
          viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent
          et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt
          congue enim, ut porta lorem lacinia consectetur.
        </p>

        <h3>Subsection</h3>

        <p>
          Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem.
          Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.
        </p>

        <p>
          Pelientesque auctor nisi id magna consequat sagittis. Curabitur
          dapibus, enim sit amet elit pharetra tincidunt feugiat nist imperdiet.
          Ut convallis libero in urna ultrices accumsan. Donec sed odio eros.
        </p>

        <h3>Another subsection</h3>

        <p>
          Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum
          soclis natoque penatibus et manis dis parturient montes, nascetur
          ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem
          facilisis semper ac in est.
        </p>

        <p>
          Vivamus fermentum semper porta. Nunc diam velit, adipscing ut
          tristique vitae sagittis vel odio. Maecenas convallis ullamcorper
          ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi
          diam iaculis velit, is fringille sem nunc vet mi.
        </p>
      </article>
           <h2>Related</h2>

        <ul>
          <li><a href="#">Oh I do like to be beside the seaside</a></li>
          <li><a href="#">Oh I do like to be beside the sea</a></li>
          <li><a href="#">Although in the North of England</a></li>
          <li><a href="#">It never stops raining</a></li>
          <li><a href="#">Oh well...</a></li>
        </ul>
      </aside>
    </main>    

    <footer>
      <p>©Copyright 2024 by Cidadania Digital, PUC Virtual</p>
    </footer>
  </body>
</html>

Padrão Css:

< !DOCTYPE html><html><head><style>* {
  box-sizing: border-box;
}

body {
  font-family: Arial;
  padding: 10px;
  background: #ccffca;
}

/* Header/Blog Title */
.header {
  padding: 30px;
  text-align: center;
  background: white;
}

.header h1 {
  font-size: 50px;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #097722;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 16px 20px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
  float: left;
  width: 100%;
  ;
}

/* Right column */
.rightcolumn {
  float: left;
  width: 30%;
  background-color: #ccffca;
  padding-left: 40px;
}

/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 10px;
}

/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 30px;
  margin-top: 20px;
}

/* Clear floats after the columns */
.row::after {
   display: flex;
  clear: both;
  padding: 10px;
  margin-top: 20px;
}

/* DÚVIDAS */
.DÚVIDAS {
  padding: 20px;
  text-align: left;
  background: #0b0b0b;
   margin-top: 20px;
}

/* Footer */
.footer {
  padding: 10px;
  text-align:center;
  background: #097722;
  color: #f2f2f2;
  width: 100%;
  position: absolute;
}


</style></head><body>

> **Links Úteis**:
>
> - [CSS Website Layout (W3Schools)](https://www.w3schools.com/css/css_website_layout.asp)
> - [Website Page Layouts](http://www.cellbiol.com/bioinformatics_web_development/chapter-3-your-first-web-page-learning-html-and-css/website-page-layouts/)
> - [Perfect Liquid Layout](https://matthewjamestaylor.com/perfect-liquid-layouts)
> - [How and Why Icons Improve Your Web Design](https://usabilla.com/blog/how-and-why-icons-improve-you-web-design/)
