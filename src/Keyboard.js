import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Keyboard extends Component {
  selectLetter(evt) {
    console.log(evt.target.innerText);
    evt.target.disabled = true;
    console.log(evt.target.disabled);
  }

  render() {
    const letters = 'abcdefghijklmnopqrstuvw';
    const letterBtns = letters.split('').map((letter) =>
      <button className='btn btn-default' onClick={this.selectLetter}>
        { letter }
      </button>
    );
    return (
      <div className='container'>
        { letterBtns }
      </div>
    );
  }
}

export default Keyboard;