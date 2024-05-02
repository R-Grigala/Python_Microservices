import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import { Product } from '../interfaces/products';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8000/api/products');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setProducts(data);
            console.log(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);

    const del = async (id: number) => {
        try {
            if(window.confirm('Are you sure you want to delete this product?')){
                await fetch(`http://localhost:8000/api/products/${id}`, {
                    method: 'DELETE'
                });
                setProducts(products.filter((p: Product) => p.id !== id));
                console.log(`Product with id ${id} deleted successfully.`);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };      

    return (
        <Wrapper>
            <div className='pt-3 pb-2 mb-3 border-bottom'>
                <div className='btn-toolbar mb-2 mb-md-0'>
                    <Link to='/admin/products/create' className='btn btn-sm btn-outline-secondary'>Add</Link>
                </div>
            </div>
            <div>
                <div className="table-responsive small">
                    <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Likes</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(
                            (p: Product) => {
                            return (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td><img src={p.image} alt='image' height='180' /></td>
                                    <td>{p.title}</td>
                                    <td>{p.likes}</td>
                                    <td>
                                        <div className='btn-group mr-2'>
                                            <Link to={`/admin/products/${p.id}/edit`} className='btn btn-sm btn-outline-secondary'>Edit</Link>
                                            <a href='#' className='btn btn-sm btn-outline-secondary'
                                                onClick={() => del(p.id)}
                                            >Delete</a>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>
                </div>
            </div>
        </Wrapper>
    )
}

export default Products