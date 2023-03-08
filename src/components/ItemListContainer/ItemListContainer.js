import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';


function ItemListContainer() {

const [products, setProducts] = useState([]);

const params = useParams();
const idCategory = params.idCategory;

function DataBase() {
    fetch('/productos/productos.json',{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
  )
        .then((res) => {
        return res.json();
        })
        .then((json) => {

        setProducts(json);
        });
}

function Filter (filter) {
    fetch('/productos/productos.json')
    .then((res) => {
    return res.json();
    })
    .then( (json) => {
        let respuesta = json.filter((item) => item.category === filter);
    setProducts(respuesta);
    });

}

useEffect( () => {
    
    if (idCategory === undefined) {
        
        DataBase();

    } else {
        console.log(idCategory);
        Filter (idCategory);

    }   
    }, []);

    return (
        <>
            <h1>Nuestras Cervezas</h1>
            <ItemList products={products} />
        </>
    );
    }
    
    export default ItemListContainer;

