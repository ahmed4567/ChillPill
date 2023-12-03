import "./App.css";
import Row from "./componants/Row.js";
import Banner from "./componants/Banner.js";
import requstes from "./req.js";
import Nav from "./Nav.js";
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row title="Treindeng Now" isLargeRow fechUrl={requstes.fetchTrending} />
      <Row title="Top Reated" fechUrl={requstes.fetchTopRated} />
      <Row title="Action" fechUrl={requstes.fetchActionMovies} />
      <Row title="Comedy" fechUrl={requstes.fetchComedyMovies} />
      <Row title="Horror" fechUrl={requstes.fetchHorrorMovies} />
      <Row title="Romance" fechUrl={requstes.fetchRomanceMovies} />
      <Row title="Documentaries" fechUrl={requstes.fetchDocumentaries} />
    </div>
  );
}

export default App;
