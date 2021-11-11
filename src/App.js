import './App.css';
import { Input } from './Input';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <HelloPizza />

      <Input placeholder="stuffy stuff" />
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
