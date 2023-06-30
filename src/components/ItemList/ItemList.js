import React, { useState, useEffect } from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { getItems } from "../../asyncMock";

import "./ItemList.scss";


const ItemList = ({ onAdd }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
      getItems()
      .then((items) => {
        console.log(items);
        if (items.length === 0) {
          console.log("No results!");
        }
        setProducts(
          items.map((item) => {
            console.log(item);
            return item;
          })
        );
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="list-container" id="list-container">
      {loading ? (
        <Loading text="Cargando productos..." />
      ) : (
        <div className="list-container__details">
          <div className="list-container__details-categories">
            <h2>Categorías</h2>
            <Link to="/categories/1">Categoría 1</Link>
            <Link to="/categories/2">Categoría 2</Link>
            <Link to="/categories/3">Categoría 3</Link>
          </div>
          <div className="list-container__details-title">
            <h3>Productos</h3>
          </div>
          <div className="list-container__list">
            {products.map((product) => {
              return (
                <ItemDetailContainer
                  key={product.id}
                  product={product}
                  onAdd={onAdd}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemList;
