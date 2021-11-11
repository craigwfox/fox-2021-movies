import './App.css';
import { Counter } from './Counter';
import { Accordion } from './Accordion';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <HelloPizza />

      <Accordion />

      <Counter />
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
