import React from 'react';
import MediaList from "./MediaList";
import '../stylesheet/App.css';

class App extends React.Component {
/*   constructor(props) {
    super(props);
  } */
  render() {
    return (
      <div className="App">
        <MediaList/>
      </div>
    );
  }
}

export default App;
