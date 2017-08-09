import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Image extends Component {
  render() {
    let image = this.props.guess;
    return (
        <div className='col-sm-4 col-sm-offset-4 row'>
          <img src={ image } alt='sharks' />
        </div>
    );
  }
}

export default Image;