import React from "react";
import "../stylesheet/index.scss";
import MIMIMITranslator from'./MIMIMITranslator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.text = "";
    this.handleText = this.handleText.bind(this);
  }
  handleChange(){
    this.text = text.replace(/[aáeéiíoóuú]/gi, "i");
    this.forceUpdate();
  }
  render() {
    
    return (
      <div className="App">
        <MIMIMITranslator value={}></MIMIMITranslator>
        
      </div>
    );
  }
}
export default App;