import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loading from "../../components/Loading/Loading";
import { getFirestore, collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';

import "./Categories.scss";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

    useEffect(() => {

      const db = getFirestore();
      const category = doc(db, 'categories', id);

      const getItems = collection(db, 'items');
      const itemsByCategory = query(getItems, where("categoryId", "==", id));

      getDocs(itemsByCategory)
      .then((snapshot) => {
          setProducts(snapshot.docs.map(el => ({id: el.id, ...el.data()})))
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      })

      getDoc(category)
      .then((snapshot) => {
        setCategory({id: snapshot.id, ...snapshot.data()})
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      })
      
      setLoading(false);
  }, [id, navigate]);

  return (
    <div className="categories">
      <h1>Categoría {category.categoryDescription}</h1>
      {loading ? (
        <Loading text="Cargando productos..." />
      ) : (
        <div className="categories__list">
          {products.map((product) => {
            return <ItemDetail product={product} key={product.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Categories;
