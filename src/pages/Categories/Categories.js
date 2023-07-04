import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loading from "../../components/Loading/Loading";
import { getCategories, getItems } from "../../asyncMock";

import "./Categories.scss";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

    useEffect(() => {
      getItems()
      .then((items) => {
        let categoryItems = items.filter(x => x.categoryId === parseInt(id))
        if (categoryItems.length === 0) {
          console.log("No results!");
          navigate("/");
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
