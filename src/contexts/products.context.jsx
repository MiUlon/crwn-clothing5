import { createContext, useEffect, useState } from "react";
// import { createCollectionAndDocuments } from '../utils/firebase/firebase.utils';
// import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     createCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    const value = { products, setProducts };

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};