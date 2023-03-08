import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
    const idProduct = useParams().idProduct;
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('/productos/productos.json')
            .then((res) => {
            return res.json();
            })
            .then((json) => {
                const respuesta = json.filter((item) => item.id === Number(idProduct));
                setProducts(respuesta);
            });
        }, []);
    
        return (
            <>
                <ItemDetail products={products} />
            </>
        );
        }

