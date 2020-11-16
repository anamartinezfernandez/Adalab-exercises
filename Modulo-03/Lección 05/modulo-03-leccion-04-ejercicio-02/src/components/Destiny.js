import React from 'react';
import CityImage from "./CityImage";


class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev){
/*     const destiny = ev.target.value;  */
    this.destiny = ev.target.value;
/*     return  alert(`tu destino es viajar a ${destiny}`); */
this.forceUpdate(); //ejecuta el el método render
    }

  render() {
      return(
      <div className= "App">
        <label htmlFor= "destiny">Selecciona un destino</label>
        <select name="destinies" id="destiny" onChange = {this.handleChange}>
          <option value="">
            Elige tu destino
          </option>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokio">Tokio</option>
        </select>
        <CityImage city={this.destiny}/>
      </div>
      );
  }
}

export default Destiny;