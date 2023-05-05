import Productcart from '../../components/Productcart/Productcart'
import Popupform from '../../components/Popup/Popupform'
import './Cart.scss'
import imgEmpty from '../../imgs/empty/empty-cart.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../App';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
library.add(faBackward)




const Cart = () => {
    const [isClickShowForm, setIsClickShowForm] = useState(false)
    const { dataCart, setDataCart } = useContext(AppContext)

    const totalPriceCart = () => {
        let totalPriceProductInCart = 0
        for (let product of dataCart) {
            totalPriceProductInCart += product.price * product.soLuong
        }
        return totalPriceProductInCart
    }

    const handleOnclickShowForm = () => {
        setIsClickShowForm(true)
    }

    return (
        <div className='cart-container'>
            <div className="cart">
                {
                    dataCart.length === 0 ?
                        <>
                            <div className='cart__empty'>
                                <div className='cart__empty-img'>
                                    <img src={imgEmpty} />
                                </div>
                                <div className='cart__empty-btn'>
                                    <Link to="/"><FontAwesomeIcon icon={faBackward} /> Back to shop</Link>
                                </div>
                            </div>
                        </> :
                        <>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                        <th>Total</th>
                                        <th>Clear Cart</th>
                                    </tr>
                                </thead>
                                {
                                    dataCart.map((item) => {
                                        return (
                                            <Productcart item={item} key={item.id} />
                                        )
                                    })
                                }
                            </table>
                            <div className='cart__footer'>
                                <div className='cart__footer-btnback'>
                                    <Link to="/"><FontAwesomeIcon icon={faBackward} /> Back to shop</Link>
                                </div>
                                <div className='cart__footer-box'>
                                    <div className='cart__footer-total'>
                                        <span className='cart__footer-label'>Total: $<span className='cart__footer-num'>{totalPriceCart().toLocaleString('en-US')}</span></span>
                                    </div>
                                    <button onClick={()=>handleOnclickShowForm()}>BUY</button>
                                </div>
                            </div>
                        </>
                }
            </div>
            {isClickShowForm === true && <Popupform setIsClickShowForm = {setIsClickShowForm}/>} 
        </div>
    )
}

export default Cart