import React from 'react';


class Item extends React.Component {
  handleWrite(event){
    if (event.target.value === "cebolla")
    alert ("Odio la cebolla");
    }
  }

  render() {
    return (
      <textarea name="textarea" placeholder= "Aquí escribe" onKeyPress= {this.handleWrite}></textarea>
    );
  }
}


export default OnionHater;