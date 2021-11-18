import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { MoviesList } from './movies/MoviesList'
import { MovieDetail } from './movies/MovieDetail'

function App() {
  return (
    <div className="page-wrapper">
      <header className="site-header">
        <h1>The Foxy movies of 2021 🍿</h1>
      </header>
      <main id="maincontent" className="App main">
        <Router>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/details" element={<MovieDetail />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
