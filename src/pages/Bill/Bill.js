import { useState } from "react"
import './Bill.scss'
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import imgEmptyBill from '../../imgs/empty/bill-empty.png'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCaretDown } from '@fortawesome/free-solid-svg-icons'
library.add(faCaretDown,faBackward)

const Bill = () => {
    const [isOder, setIsOder] = useState(true)
    return (
        <div className="bill">
            {
                isOder === false &&
                <div className="bill__empty">
                    <div className="bill__empty-img">
                        <img src={imgEmptyBill} />
                    </div>
                    <p className="bill__empty-text">Chưa có đơn hàng!</p>
                </div>
            }

            {
                isOder === true &&
                <div className="bill__container">
                    <table className="table">
                        <thead>
                            <tr className="table__title">
                                <th>Code</th>
                                <th>Customer Name</th>
                                <th>Date</th>
                                <th>Item Numbers</th>
                                <th>Total Quantity</th>
                                <th>Total Price</th>
                                <th>Return</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table__bill-product">
                                <td>
                                    <div className="table__bill-detailcode">
                                        <span className="table__bill-code">1111111</span>
                                        <span className="table__bill-detail">Detail <FontAwesomeIcon icon={faCaretDown} /></span>
                                    </div>
                                </td>
                                <td>
                                    <p className="table__bill-customer">Sơn</p>
                                </td>
                                <td>
                                    <p className="table__bill-date">1/5/2023</p>
                                </td>
                                <td>
                                    <span className="table__bill-itemnum">5</span>
                                </td>
                                <td>
                                    <span className="table__bill-totalquantity">7</span>
                                </td>
                                <td>
                                    <div className="table__bill-totalprice"><span>$ 6000</span></div>
                                </td>
                                <td>
                                    <span className="table__bill-return">&times;</span>
                                </td>
                            </tr>
                        </tbody>
                        

                    </table>

                    <div className='bill__container-btnback'>
                        <Link to="/"><FontAwesomeIcon icon={faBackward} /> Back to shop</Link>
                    </div>
                </div>
            }

        </div>
    )
}
export default Bill