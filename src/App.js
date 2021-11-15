import './App.css';
import { MoviesList } from './movies/MoviesList';

function App() {
  return (
    <main id="maincontent" className="App">
      <h1>The Foxy movies of 2021 🍿</h1>
      <MoviesList />
    </main>
  );
}

export default App;
