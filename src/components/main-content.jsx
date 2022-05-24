import React from "react";
import dogo from '../images/code-dog.gif'

function MainContainer() {
  return (
    <div id="main-content">
      <div id='intro-container'>
      <div id="intro">
        <h3><span>Olá, meu nome é</span></h3>
        <h1>Gabriel Oliveira dos Santos.</h1>
        <h1>Sou desenvolvedor web Front-End.</h1>
        <section id="quick-about">
          <p>
            Trilhando o caminho para o Full-Stack!
            <br/>
            Sempre <span>disponível</span> para novos projetos com ideias interessantes.
          </p>
        </section>
      </div>
      <img src={ dogo } alt="coding dog" id='intro-img' />
      </div>
    </div>
  );
}

export default MainContainer;