import React, { SyntheticEvent, useState } from 'react'
import Wrapper from './Wrapper';

const ProductsCreate = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(title, image);
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className='form-group'>
                    <label>Title</label>
                    <input type='text' className='form-control' name='title'
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Image</label>
                    <input type='text' className='form-control' name='image'
                        onChange={e => setImage(e.target.value)}
                    />
                </div>
                <button className='btn btn-outline-secondary'>Save</button>
            </form>

        </Wrapper>
    )
}

export default ProductsCreate;