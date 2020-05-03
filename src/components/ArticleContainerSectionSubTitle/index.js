import React from "react";
import './ArticleContainerSectionSubTitle.css';

function ArticleContainerSectionSubTitle(props) {
  return (
    <section className="article-container__section-subtitle">
      <h3>{props.title}</h3>
      <p>
          {props.text}
      </p>
  </section>


  );
}

export default ArticleContainerSectionSubTitle;

