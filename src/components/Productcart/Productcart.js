import './Productcart.scss'
import Popupdelete from '../Popup/Popupdelete'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import { AppContext } from '../../App'
library.add(faCaretRight, faCaretLeft)

const Productcart = ({ item }) => {

    const { dataCart, setDataCart } = useContext(AppContext)
    const [isClickShow, setIsClickShow] = useState(false)

    const handleDeleteShowPopup = (id) => {
        setIsClickShow(true)
    }

    const handleDelete = (id) => {
        let newDataCart = dataCart.filter((item) => item.id !== id)
        localStorage.setItem('KEYDATACART', JSON.stringify(newDataCart))
        setDataCart(newDataCart)
    }

    const handleDerease = (id) => {
        const currProduct = dataCart.find((item) => item.id === id)
        if (currProduct.soLuong === 1) {
            setIsClickShow(true)
        } else {
            const newDataCart = dataCart.map((item) =>
                item.id === id ?
                    { ...item, soLuong: item.soLuong - 1 }
                    : item
            )
            localStorage.setItem('KEYDATACART', JSON.stringify(newDataCart))
            setDataCart(newDataCart)

        }
    }

    const handleIncrease = (id) => {
        const currProduct = dataCart.find((item) => item.id === id)

        if (currProduct.soLuong < currProduct.quantity) {
            const newDataCart = dataCart.map((item) =>
                item.id === id ?
                    { ...item, soLuong: item.soLuong + 1 }
                    : item
            )
            localStorage.setItem('KEYDATACART', JSON.stringify(newDataCart))
            setDataCart(newDataCart)
        } else return
    }

    return (
        <>
            {isClickShow && <Popupdelete item = {item} handleDelete = {handleDelete}  setIsClickShow = {setIsClickShow}/>}
            <tbody key={item.id}>
                <tr className='product-body'>
                    <td>
                        <div className='container'>
                            <div className='product-img'>
                                <img src={item.img} />
                            </div>
                            <div className='product-detail'>
                                <p className='product-name'>{item.name}</p>
                                <p className='product-qnt'>Quantity: <span>{item.quantity}</span></p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className='box-qnt'>
                            <span className='iconqnt decrease' onClick={() => handleDerease(item.id)}><FontAwesomeIcon icon={faCaretLeft} /></span>
                            <span className='qnt'>{item.soLuong}</span>
                            <span className='iconqnt increase' onClick={() => handleIncrease(item.id)}><FontAwesomeIcon icon={faCaretRight} /></span>
                        </div>
                    </td>
                    <td>
                        <div className='subtotal'>
                            $ <span>{item.price.toLocaleString('en-US')}</span>
                        </div>
                    </td>
                    <td>
                        <div className='total'>
                            $ <span>{(item.price * item.soLuong).toLocaleString('en-US')}</span>
                        </div>
                    </td>
                    <td>
                        <div className='clear' onClick={() => handleDeleteShowPopup(item.id)}>
                            <span>&times;</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </>
    )
}
export default Productcart