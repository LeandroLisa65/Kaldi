import React from "react";
import ItemList from "../../components/ItemList/ItemList";

import "./Home.scss";

const Home = ({ greeting, onAdd }) => {
  return (
    <main className="home">
      <ItemList onAdd={onAdd} />
    </main>
  );
};

export default Home;
