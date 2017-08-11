import React, { Component } from 'react';
import Keyboard from './Keyboard';
import Image from './Image';
import SecretWord from './SecretWord';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import guess0 from './static/images/guess0.png';
import guess1 from './static/images/guess1.png';
import guess2 from './static/images/guess2.png';
import guess3 from './static/images/guess3.png';
import guess4 from './static/images/guess4.png';
import guess5 from './static/images/guess5.png';


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { guess: guess0,
                   numGuesses: 0,
                   secretWord: 'moon',
                   correctLetterGuessed: '' }

    this.changeImage = this.changeImage.bind(this);
    this.increaseNumGuess = this.increaseNumGuess.bind(this);
  }

  increaseNumGuess(ltr) {
    if (this.state.secretWord.indexOf(ltr) === -1) {
      this.setState({ numGuesses: this.state.numGuesses + 1 },
                      () => {this.changeImage() });
    } else {
      this.setState({ correctLetterGuessed: ltr },
                      () => {console.log('correct letter guess'); });
    }
    console.log(this.state);
  }

  changeImage() {
    if (this.state.numGuesses === 1) {
      this.setState({ guess: guess1 });
    } else if (this.state.numGuesses === 2) {
      this.setState({ guess: guess2 });
    } else if (this.state.numGuesses === 3) {
      this.setState({ guess: guess3 });
    } else if (this.state.numGuesses === 4) {
      this.setState({ guess: guess4 });
    } else if (this.state.numGuesses === 5) {
      this.setState({ guess: guess5 });
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Image guess={ this.state.guess } />
        </div>
        <div className='container'>
          <div className='row'>
            <SecretWord word={ this.state.secretWord }
                        letter={ this.state.correctLetterGuessed } />
          </div>
        </div>
        <div className='row'>
          <Keyboard onLetterSelect={ this.increaseNumGuess }
                    guesses={ this.state.numGuesses } />
        </div>
      </div>
    );
  }
}

export default Game;