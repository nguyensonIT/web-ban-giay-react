import './Popupdelete.scss'
const Popupdelete = ({setIsClickShow,handleDelete,item}) => {

    const handleCancel = ()=> {
        setIsClickShow(false)
    }

    const handleDeleteProduct = () =>{
        handleDelete(item.id)
        setIsClickShow(false)
    }

    const handleClickOverlay = () => {
        setIsClickShow(false)
    }

    return(
        <div className="popup" >
            <div className='overlay' onClick={()=>handleClickOverlay()}></div>
            <div className='box'>
                <div className='box__title'>
                    <p className='box__title-text'>Bạn có muốn xóa sản phẩm này không? </p>
                </div>
                <div className='box__btn'>
                    <span className='box__btn-cancel' onClick={()=>handleCancel()}>HỦY</span>
                    <span className='box__btn-delete' onClick={()=>handleDeleteProduct()}>XÓA</span>
                </div>
            </div>
        </div>
    )
}
export default Popupdelete