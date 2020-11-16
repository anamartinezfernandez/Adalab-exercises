import React from "react";

/* class MediaCard extends React.Component {
  render(){
    return ( );
  }
} */

const MediaCard = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={props.picture} className="App-photo" alt= "foto"/>
        <div className= "App-header-title">
          <h1 className= "App-header-maintitle">{props.name}</h1>
          <h2 className= "App-header-subtitle">{props.date}</h2>
        </div>
      </header>
      <main className="App-main">
        <p className="App-main-text">{props.text}
        </p>
      </main>
      <footer className="App-footer">
        <p className="App-footer-text">Leer más...</p>
        <p>{props.likes}</p>
        <i class="fas fa-heart">{props.heart}</i>
      </footer>
    </div>
  );
}


export default MediaCard; 