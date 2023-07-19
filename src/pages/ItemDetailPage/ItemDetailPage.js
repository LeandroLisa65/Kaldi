import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCount from "../../components/ItemCount/ItemCount";
import Loading from "../../components/Loading/Loading";
import CartContext from "../../contexts/cartContext";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

import "./ItemDetailPage.scss";

const ItemDetailPage = ({ onAdd }) => {
  const { setCart, setQnt } = useContext(CartContext);
  const [article, setArticle] = useState();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, 'items', id);

    getDoc(item)
    .then((snapshot) => {
      setProduct({id: snapshot.id, ...snapshot.data()})
    })
    .catch((error) => {
      console.log("Error searching items", error);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [id, navigate]);

  useEffect(() => {
    setArticle(product);
  }, [product]);

  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    setQnt((value) => value + quantity);
    article.quantity = quantity;

    const prod = {
      id: article.id,
      name: article.name,
      description: article.description,
      stock: article.stock,
      price: article.price,
      brand: article.brand,
      model: article.model,
      quantity: article.quantity,
      gender: article.gender,
      image: article.image,
    };

    setCart((value) => [...value, prod]);
  };

  return (
    <div className="itemPage">
      {loading ? (
        <div className="loading-items" style={{ margin: "0 auto" }}>
          <Loading text="Cargando productos..." />
        </div>
      ) : (
        <div className="container itemPage__detail">
          <div className="row">
            {/* IMAGE */}
            <div className="col-sm-12 col-md-8 itemPage__detail-image">
              <div>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="Imagen de Producto"
                />
              </div>
            </div>
            {/* BUY */}
            <div className="col-sm-12 col-md-4 itemPage__detail-buy">
              <div>
                <div className="counter item itemPage__detail-buy-sale">
                  <div className="">
                    <h3 className="card-title">{product.name}</h3>
                    <p>{product.description}</p>
                    <h3>${product.price}</h3>
                    <h6>Stock: {product.stock}</h6>
                  </div>
                  <div className="itemPage__detail-buy-sale-buttons">
                    <ItemCount
                      initial={1}
                      min={0}
                      max={product.stock}
                      onAdd={onAdd}
                      setQuantity={setQuantity}
                    />
                    <div className="counter btn-buy" style={{ width: "15rem", backgroundColor: "#7f4f83", borderRadius:"40px" }}>
                      <div className="counter__buttonAdd">
                        <button onClick={handleClick}>
                          Agregar al carrito {quantity}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <div className="col-sm-12 col-md-8 itemPage__detail-description">
              <div className="itemPage__details">
                <h3>Características:</h3>
                <h5>Marca: {product.brand}</h5>
                <h5>Modelo: {product.model}</h5>
                {product.gender && <h5>Género: {product.gender}</h5>}
                <h3>Descripción:</h3>
                <h5>{product.description}</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailPage;
