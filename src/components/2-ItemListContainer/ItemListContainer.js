import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataBaseFire, ItemsbyCategory } from "../../Service/DataBase";
import ItemList from "../2.1-ItemList/ItemList";
import LoaderItem from "../Loader/Loader";
import './ItemListContainer.css';

function ItemListContainer() {
    const params = useParams();
    const idCategory = params.idCategory;
    const [products, setProducts] = useState([]);

    async function DataBase() {
        const db = await DataBaseFire()
        setProducts(db);
    }
    async function Filter(category) {
        const db = await ItemsbyCategory(category)
        setProducts(db);
    }

    useEffect(() => {
        if (idCategory === undefined) {
            DataBase();
        } else {
            Filter(idCategory);
        }
    }, [idCategory]);

    if (products.length === 0) return <LoaderItem />;

    return (
        <>
            <h1>Nuestras Cervezas</h1>
            <ItemList products={products} />
        </>
    );
}

export default ItemListContainer;

