import React from 'react';



class HalfPage extends React.Component {
  render() {
    return <div className= "HalfPage">{this.props.children}</div>;
  }
}

export default HalfPage;