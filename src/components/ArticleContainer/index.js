import React from "react";

import './ArticleContainer.css';
import Header from '../Header';
import ArticleContainerSectionTitle from '../ArticleContainerSectionTitle';
import ArticleContainerSectionSubTitle from '../ArticleContainerSectionSubTitle';

const ArticleContainer = () => {

  return (
    <article className="article-container">
          <Header></Header>
          <ArticleContainerSectionTitle></ArticleContainerSectionTitle>
          <ArticleContainerSectionSubTitle title = 'sobre' text = 'Uma iniciativa do Women Who Code Recife que tem o objetivo de desenvolver projetos pro-bonos e comerciais para colocar em prática os conhecimentos adquiridos  nos meetups e grupos de estudos do WWCode.'></ArticleContainerSectionSubTitle>
          <ArticleContainerSectionSubTitle title = 'proposta' text = ' Protagonização nos treinamentos em diversas tecnologias nos Meetups do WWcode, desenvolver projetos de qualidade feito com muito amor, acreditamos que juntas somos mais agregando conhecimento umas com as outras, um time engajado, com vontade de fazer e conquistar.'></ArticleContainerSectionSubTitle>
                
      </article>
  );
}

export default ArticleContainer;

