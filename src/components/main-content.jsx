import React from "react";
import dogo from '../images/code-dog.gif'

function MainContainer() {
  return (
    <div id="main-content">
      <div id='intro-container'>
      <div id="intro">
        <div id='intro-header'>
          <h3><span>Olá, meu nome é</span></h3>
          <h1>Gabriel Oliveira dos Santos.</h1>
          <h1>Sou desenvolvedor web Front-End.</h1>
        </div>
        <section id="quick-about">
          <p>
            Trilhando o caminho para o Full-Stack!
            <br/>
            Sempre <span>disponível</span> para novos projetos interessantes.
          </p>
        </section>
      </div>
      <img src={ dogo } alt="coding dog" id='intro-img' />
      </div>
      <div id='about'>
        <h2>Um pouco mais sobre mim </h2>
        <p>
          Me chamo Gabriel Oliveira dos Santos, tenho 24 anos e atualmente moro em Brasília-DF.
          <br />
          Tive contato com tecnologia desde pequeno por incentivo da minha mãe, e desde o primeiro contato já me descobri apaixonado pela área.
          <br />
          Comecei a me interessar por programação em 2017, quando o maravilhoso Professor Guanabara do Curso em vídeo dísponibilizou um curso de Python gratuito no youtube.
          <br />
          Acabei tendo que me afastar do estudo por motivos financeiros. Felizmente em 2021 acabei descobrindo a Trybe, que na época acabou se tornando meu objetivo.
          <br />
          Atualmente estou terminando de me formar dev Fullstack!
        </p>
      </div>
    </div>
  );
}

export default MainContainer;