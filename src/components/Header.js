import React from 'react';
import Title from '../images/Title.svg';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="title">
          <img src={ Title } alt="Sistema Solar" />
        </h1>
      </header>
    );
  }
}

export default Header;
