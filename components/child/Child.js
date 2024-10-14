import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Child.css'
const Child = ({ products }) => {
    return (
        <div className='container product-list'>
            <div className='row'>
                {products.map(product => (
                    <div key={product.id} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
                        <div className='card h-100 border-0 product-card'>
                            <div className='image-cont'>
                                <img src={product.image} alt={product.title} className='card-img-top' style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title'>{product.title}</h5>
                                <p className='card-text'>{product.description}</p>
                                <p className='card-text'><strong>Price:</strong> ${product.price}</p>
                                <p className='card-text'><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Child;
