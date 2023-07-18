import React, { useState, useEffect } from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import "./ItemList.scss";


const ItemList = ({ onAdd }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const getItems = collection(db, 'items');

    getDocs(getItems)
    .then((snapshot) => {
        setProducts(snapshot.docs.map(el => ({id: el.id, ...el.data()})))
    })
    .catch((error) => {
      console.log("Error searching items", error);
    })
    .finally(() => {
      setLoading(false);
    })

    const getCategories = collection(db,'categories');
    getDocs(getCategories)
    .then((snapshot) => {
      setCategories(snapshot.docs.map(el => ({id: el.id, ...el.data()})))
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
            {categories.map((category) => {
              let id = category.id;
              return <Link key={id} to={'/categories/'+id}>{category.description}</Link>;
            })}
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
