import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const ItemDetailContainer = ({ product, onAdd }) => {
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(true);

  const getProduct = () => {
    return new Promise((res) => {
      setTimeout(() => {
        res(product);
      }, 1000);
    });
  };

  useEffect(() => {
    getProduct()
      .then((data) => {
          setArticle(data);
          setLoading(false);
      })
      .catch(() => console.log("rejected"));
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Loading text="Cargando..." />
  ) : (
    <div>
      <ItemDetail product={article} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
