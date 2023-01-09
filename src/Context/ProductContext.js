import allproducts from "../Assets/products";
import _categories from "../Assets/categories";
import { createContext, useContext, useEffect, useState } from "react";
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState(_categories);
  const [category, setCategory] = useState("");
  const [productID, setProductID] = useState("");
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getCategories = async () => {
      setCategories(categories);
    };
    getCategories();
    setLoading(false);
  }, []);

  const getProductData = async () => {

    if (category && category.length > 0) {
      setProductList(
        allproducts.filter( (oneProduct) => oneProduct.category == category
        )
      );
      setLoading(false);
    } else {
      setProductList(allproducts);
      setCategory("");
      setLoading(false);
    }
    console.log("product **", product);

  };
  useEffect(() => {
    setLoading(true);
    getProductData();
  }, [category]);

  const getProductDetail = () => {
    setProduct(allproducts.find((oneProduct) => oneProduct.id == productID));
    console.log(product);
    setLoading(false);
  };
  useEffect(() => {
    if (productID) {
      getProductDetail();
      console.log("productID:  ", productID);
    }
  }, [productID]);

  const values = {
    product,
    productList,
    productID,
    setProductID,
    categories,
    setCategory,
    loading,
  };
  // console.log("productID", productID)
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
