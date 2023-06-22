import { mockProducts } from '../sdk/mock'
import React, { useState, useEffect } from "react";
import ProductDetailContainer from './ProductDetailContainer';

const Products = () => {
  const [items, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      mockProducts()
      .then((respuesta) => {
        return respuesta.json()})
      .then((respuesta) => {
          setItem(respuesta)
      })
      .catch((err) => {
        setLoading(false)
      })
      .finally(() => {
          setLoading(false);
      })
  }, [])

  return (
    <ProductDetailContainer items={items} loading={loading} />
  )
}

export default Products;