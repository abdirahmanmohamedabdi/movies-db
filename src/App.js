import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Movie from './MoviesData'
import MovieCtx from "./components/MovieCtx";
import PostReivew from "./components/PostReivew";
import Nav from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <MovieCtx />
        {/* <PostReivew/> */}
      </main>
      {/* <MovieCard/> */}
      {/* <Movie/>  */}
    </div>
  );
}
export default App;
