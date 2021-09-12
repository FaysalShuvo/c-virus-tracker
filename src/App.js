import React from "react";
import styles from "./App.module.css";
import { Cards, Charts, Countries } from "./components";
import { fetchData } from "./api";
class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Countries />
        <Charts />
      </div>
    );
  }
}

export default App;
