import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useContext } from 'react';

import './Product.scss'
import { AppContext } from '../../App';
library.add(faCartPlus)

const Product = ({ item }) => {
    const { dataCart, setDataCart, dataProduct, setDataProduct } = useContext(AppContext)
    const handleAddCart = (id) => {
        const productExist = dataCart.find(item => item.id === id)
        const product = dataProduct.find(item => item.id === id)
        if (product.quantity > 0) {
            if (productExist) {
                const newDataCart = dataCart.map(item =>
                    item.id === id
                        ? { ...item, soLuong: item.soLuong + 1 }
                        : item
                )
                localStorage.setItem('KEYDATACART', JSON.stringify(newDataCart))
                setDataCart(newDataCart)
            } else {
                setDataCart(
                    prev => {
                        const result = [...prev, { ...product, soLuong: 1 }]
                        localStorage.setItem('KEYDATACART', JSON.stringify(result))
                        return result
                    }
                )
            }
        }


    }
    return (
        <div className='box'>
            <div className="product">
                <div className="product__img">
                    <img src={item.img} />
                </div>
                <div className="product__content">
                    <div onClick={() => handleAddCart(item.id)} className='product__content-addcart'>
                        <FontAwesomeIcon icon={faCartPlus} />
                    </div>
                    <p className="product__content-name">{item.name}</p>
                    <div className="product__content-detail">
                        <p className="product__content-detail__price">${item.price.toLocaleString('en-US')}</p>
                        <p className="product__content-detail__qnt">Quantity: <span>{item.quantity}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product