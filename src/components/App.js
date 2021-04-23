import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer"
import MainPanel from "./MainPanel"
import '../styles/App.scss';

class App extends Component {

  render() {

    return (
      <div className="main">

        <header>
          <Header />
        </header>
        <main >
          <MainPanel />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
