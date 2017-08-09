import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Keyboard extends Component {
  constructor(props) {
    super(props);

    this.selectLetter = this.selectLetter.bind(this);
  }

  selectLetter(evt) {
    // disable letter that was guessed
    evt.target.disabled = true;
    this.props.onLetterSelect();

    // if more than 5 guesses have been made, disable all the buttons
    if (this.props.guesses > 3) {
      const btns = document.getElementsByClassName('btn');
      for (let i=0; i<btns.length; i++) {
        btns[i].setAttribute('disabled', true);
      }
    }
  }

  render() {
    const letters = 'abcdefghijklmnopqrstuvw';
    const letterBtns = letters.split('').map((letter, i) =>
      <button key={i} className='btn btn-default col-sm-2' onClick={this.selectLetter}>
        { letter }
      </button>
    );
    return (
        <div className='col-sm-4 col-sm-offset-4 row'>
          { letterBtns }
        </div>
    );
  }
}

export default Keyboard;