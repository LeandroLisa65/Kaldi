import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loading from "../../components/Loading/Loading";
import { getCategories, getItems } from "../../asyncMock";

import "./Categories.scss";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

    useEffect(() => {
      getItems()
      .then((items) => {
        console.log(items);
        let categoryItems = items.filter(x => x.categoryId === parseInt(id))
        if (categoryItems.length === 0) {
          console.log("No results!");
          return;
        }
        setProducts(categoryItems);
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });
      getCategories()
      .then((categories) => {
        console.log(categories);
        let category = categories.find(x => x.id === parseInt(id))
        if (category.length === 0) {
          console.log("No results!");
          return;
        }
        setCategory(category);
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

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
