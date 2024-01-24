import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Serge Nadin',
        bio: 'Développeur full stack certifié passionné du Web.',
        imgSrc: 'https://gomycodelearndev.blob.core.windows.net/profiles/7edd59e4-9006-45d1-8e89-4b8b17e6ebfc-133434172427072893.jpg', // Utilisation d'une image de chat pour l'exemple
        profession: 'Developer',
      },
      show: false,
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, elapsedTime } = this.state;

    return (
      <div>
        <h1>React Interval Example</h1>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Elapsed Time: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;

