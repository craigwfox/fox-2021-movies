import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="LOGO!" />
        <HelloPizza />
      </header>
    </div>
  );
}

function HelloPizza() {
  return <h1>Pizza pockets are dope!</h1>
}

export default App;
