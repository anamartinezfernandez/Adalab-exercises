import React from 'react';

import './';

class TextInput extends React.Component {
  constructor(props){
  super(props);
  this.handleChange = this.handleChange.bind(this);
}
handleChange(event){
  const text= event.current.value;
}
render() {
  return (
    <label htmlFor="translator" className="App__label">
    Escribe aquí:
      <textarea
        className="App__label--text"
        name="tranlator"
        id="tranlator"
        cols="30"
        rows="10"
        onChange={this.handleChange}
      ></textarea>
    </label>
    );
  }
}
export default TextInput;