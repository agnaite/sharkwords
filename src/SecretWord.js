import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class SecretWord extends Component {
  constructor(props) {
    super(props);

    this.state = { secretWord: '' };
  }
  componentWillMount() {
    const wordSplit = this.props.word;
    const wordObj = {};

    for (let i=0; i < wordSplit.length; i++) {
      wordObj[i] = [wordSplit[i], false];
    }
    this.setState({ secretWord: wordObj });
  }

  render() {
    const secretWord = Object.keys(this.state.secretWord).map((key, i) =>
      (this.state.secretWord[key][1] === true) ? (
        <div key={i} className='col-sm-2'>
          {this.state.secretWord[key][0]}
        </div>
      ) : (
        <div key={i} className='col-sm-2'>
          ____
        </div>
      )
    );
    console.log(secretWord);
    return (
      <div className='col-sm-4 col-sm-offset-4 row'>
        { secretWord }
      </div>
    );
  }
}

export default SecretWord;