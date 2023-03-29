import React from 'react'
import { Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import "./Start.css";

export default function Start() {
    return (
        <div className='Start-Container'>
            <LinkContainer className='Container' to="/productos">
                <Link>
                    <h1 className='tittle_h1'>Conoce nuestras cervezas</h1>
                    <Image className='imagen1' fluid src="../fondo.jpg" alt="fondo"></Image>
                </Link>
            </LinkContainer>
        </div>
    )
}
