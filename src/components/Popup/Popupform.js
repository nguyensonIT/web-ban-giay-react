import './Popupform.scss'
const Popupform = () => {
    return (
        <>
            <div className="overlay"></div>
            <form className='form'>
                <div className='form__header'>
                    <h1 className='form__header-text'>Thông tin người mua</h1>
                    <span className='form__header-close'>&times;</span>
                </div>
                <div className='form__fullname'>
                    <label>Họ và tên</label>
                    <div className='form__fullname-inp'>
                        <input placeholder='Họ' />
                        <input placeholder='Tên' />
                    </div>
                </div>
                <div className='form__email'>
                    <label>Email</label>
                    <input placeholder='Email' />
                </div>
                <div className='form__phone'>
                    <label>Số điện thoại</label>
                    <input placeholder='Số điện thoại' />
                </div>
                <div className='form__address'>
                    <label>Địa chỉ</label>
                    <select id='province'>
                        <option value="--Chọn Tỉnh/ Thành phố--">--Chọn Tỉnh/ Thành phố--</option>
                    </select>
                    <select id='district'>
                        <option value="--Chọn Huyện/ Quận--">--Chọn Huyện/ Quận--</option>
                    </select>
                    <select id='ward'>
                        <option value="--Chọn Xã/ Phường--">--Chọn Xã/ Phường--</option>
                    </select>
                </div>
                <div className='form__homnumber'>
                    <input placeholder='Số nhà'/>
                </div>
                <div className='form__message'>
                    <textarea id='form__message-message' rows="10" cols="70">

                    </textarea>
                </div>
                <div className='form__btn'>
                    <span className='form__btn-cancel'>Hủy</span>
                    <span className='form__btn-accept'>Xác nhận</span>
                </div>
            </form>
        </>
    )
}
export default Popupform