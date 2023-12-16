import "./App.css";
import Row from "./componants/pages/home/Row.js";
import Banner from "./componants/pages/home/Banner.js";
import requstes from "./req.js";
import Nav from "./componants/pages/home/Nav.js";
import Login from "./componants/pages/logein/Login.js";
import Singup from "./componants/pages/logein/Singup.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [userLogedin, setUserState] = useState(true);
  return (
    <div className="app">
      <Router>
        <div>
          <section>
            <Routes>
              {" "}
              <Route path="/Singup" element={<Singup />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <>
                    {" "}
                    <Nav />
                    <Banner />
                    <Row
                      title="Treindeng Now"
                      isLargeRow
                      fechUrl={requstes.fetchTrending}
                    />
                    <Row title="Top Reated" fechUrl={requstes.fetchTopRated} />
                    <Row title="Action" fechUrl={requstes.fetchActionMovies} />
                    <Row title="Comedy" fechUrl={requstes.fetchComedyMovies} />
                    <Row title="Horror" fechUrl={requstes.fetchHorrorMovies} />
                    <Row
                      title="Romance"
                      fechUrl={requstes.fetchRomanceMovies}
                    />
                    <Row
                      title="Documentaries"
                      fechUrl={requstes.fetchDocumentaries}
                    />
                  </>
                }
              />
            </Routes>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
