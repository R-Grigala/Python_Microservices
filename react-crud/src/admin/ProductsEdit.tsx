import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Wrapper from './Wrapper';
import { Product } from '../interfaces/products';

const ProductsEdit = () => {
    const { id } = useParams<{ id: string }>();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const product: Product = await response.json();
                setTitle(product.title);
                setImage(product.image);
            } catch (error) {
                setError("error");
            }
        };
        fetchProduct();
    }, [id]);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/api/products/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title,
                    image
                })
            });
            if (!response.ok) {
                throw new Error('Failed to update product');
            }
            setRedirect(true);
        } catch (error) {
            setError("Error: Channel is closed.");
        }
    };

    if (redirect) {
        return <Navigate to={'/admin/products/'} />;
    }

    return (
        <Wrapper>
            {error && <div className="error">{error}</div>}
            <form onSubmit={submit}>
                <div className='form-group'>
                    <label>Title</label>
                    <input type='text' className='form-control' name='title'
                        defaultValue={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Image</label>
                    <input type='text' className='form-control' name='image'
                        defaultValue={image}
                        onChange={e => setImage(e.target.value)}
                    />
                </div>
                <button className='btn btn-outline-secondary'>Save</button>
            </form>
        </Wrapper>
    );
};

export default ProductsEdit;
