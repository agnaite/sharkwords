import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Keyboard extends Component {
  render() {
    const letters = 'abcdefghijklmnopqrstuvw';
    const letterBtns = letters.split('').map((letter) =>
      <button className='btn btn-default'>{ letter }</button>
    );
    return (
      <div className='container'>
        { letterBtns }
      </div>
    );
  }
}

export default Keyboard;