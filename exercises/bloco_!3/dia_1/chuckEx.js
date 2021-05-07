import React from 'react';
import './App.css'

class Appeuijp extends React.Component {
  constructor(props) {
    super(props)
    this.fetchJoke = this.fetchJoke.bind(this);
    this.handleJoke = this.handleJoke.bind(this);
    this.state = {
      joke: '',
      jokeArray: [],
      loading: true,
    }
  }

  async fetchJoke() {
    this.setState(
      { loading: true },
      async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const responseJson = await response.json();

        this.setState({
          joke: responseJson.value,
          loading: false,
        })
      })
  }

  componentDidMount() {
    this.fetchJoke();
  }

  handleJoke() {
    this.setState(({ jokeArray, joke }) => ({
      jokeArray: [...jokeArray, joke],
    }))
    this.fetchJoke();
  }
  render() {
    const { joke, jokeArray, loading } = this.state
    const loadingElement = <p>Loading...</p>
    return (<>
      {jokeArray ? jokeArray.map((joke) => <p>{joke}</p>) : loadingElement}
      <p>{loading ? loadingElement : joke}</p>
      <button onClick={this.handleJoke}>Nova piada.</button>
    </>
    )
  }
}

export default Appeuijp;