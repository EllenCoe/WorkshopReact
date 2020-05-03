import React from 'react';
import ArticleContainer from './components/ArticleContainer';
import Footer from './components/Footer'
import ListTeam from './components/ListTeam'
import teamFront from "./data/team.json";
import teamBack from "./data/team.json";
import './App.css';


function App() {
  return (
    <div className="main-container">
      <ArticleContainer></ArticleContainer>
      <article class="article-container-team" >
          <ListTeam data = {teamFront} title = 'Track Front-End'></ListTeam>
          <ListTeam data = {teamBack} title = 'Track Back-End'></ListTeam>
      
      </article>
       
      

      
      
      
      <Footer></Footer>
    </div>
  );
}

export default App;
