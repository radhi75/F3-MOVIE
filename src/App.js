import "./App.css";

import Footer from "./components/Footer";

import MovieList from "./components/Movies/MovieList";
import Navigation from "./components/Navigation";
import { moviesData } from "./assets/Data";
function App() {
  return (
    <div className="App">
      <Navigation />

      <MovieList moviesData={moviesData} />
      <Footer />
    </div>
  );
}

export default App;
