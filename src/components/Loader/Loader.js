import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import './Loader.css';

export default function Loader() {
    return (
        <div className='container-loader'>
            <div className='flex-container'>
                <Spinner animation="grow" size="sm" />
                <Button variant="secundary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            </div>
        </div>
    )
}
