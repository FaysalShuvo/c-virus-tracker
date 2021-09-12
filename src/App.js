import React from "react";
import styles from "./App.module.css";
import { Cards, Charts, Countries } from "./components";

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <Countries />
        <Charts />
      </div>
    );
  }
}

export default App;
