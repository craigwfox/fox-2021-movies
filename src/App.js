import logo from './pizza.jpg';
import './App.css';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="LOGO!" />

        <HelloPizza />
        <HelloPizza name="rolls" adjective="sweet" />
      </header>
    </div>
  );
}

function HelloPizza({name = "pockets", adjective = "dope"}) {
  return (
    <h1>Pizza <span>{name}</span> are <span>{adjective}</span>!</h1>
  )
}

HelloPizza.propTypes = {
  name: PropTypes.string,
  adjective: PropTypes.string
}

export default App;
