import React from 'react';
import photo from './photo.jpg';
import './App.css';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="App-photo" alt= "foto"/>
        <div className= "App-header-title">
          <h1 className= "App-header-maintitle">Ana Martínez</h1>
          <h2 className= "App-header-subtitle">Sábado 31 de octubre de 2020</h2>
        </div>
      </header>
      <main className="App-main">
        <p className="App-main-text">Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada faucibus massa, quis lectus maecenas tempus euismod cum auctor posuere mollis. Id interdum sem proin lacus maecenas malesuada eleifend curae volutpat, semper habitasse senectus integer magna auctor praesent hac, dis himenaeos convallis tempus blandit ullamcorper vulputate velit. Convallis taciti eget per magnis eros vestibulum nascetur nullam, arcu aenean nisl nunc ultrices donec quisque, vitae suspendisse a rutrum blandit cras cursus
        </p>
      </main>
      <footer className="App-footer">
        <p className="App-footer-text">Leer más...</p>
        <i className="fas fa-heartbeat"></i>
      </footer>
    </div>
  );
}

export default App;
