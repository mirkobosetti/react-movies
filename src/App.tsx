import { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img
            src="./hero.png"
            alt="hero banner"
          />
          <h1>
            Find <span className="text-gradient">Movies</span> You Love
          </h1>
        </header>

        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </div>
  );
};

export default App;
