import "bootstrap/dist/css/bootstrap.min.css";
import MovieCtx from "./components/MovieCtx";
import Nav from "./components/Navbar";

function App() {
  return (
    <div className="Nav">
      <header>
        <Nav />
      </header>
      <div className="Main">
        <main>
          <MovieCtx />
        </main>
      </div>
    </div>
  );
}
export default App;
