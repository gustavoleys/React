import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SingleItemDataBaseFire } from "../../Service/DataBase";
import ItemDetail from "../3.1-ItemDetail/ItemDetail";
import LoaderItem from "../Loader/Loader";
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
    const idProduct = useParams().idProduct;
    const [products, setProducts] = useState([]);

    async function SingleItem(idProduct) {
        const db = await SingleItemDataBaseFire(idProduct)
        return setProducts(db);
    }

    useEffect(() => {
        SingleItem(idProduct)
    }, [idProduct]);

    if (products.id === undefined) return <LoaderItem />;
    return (
        <ItemDetail products={products} />
    );
}

