import './cart.css';
import '../App.css';

const Cart = () => {
    return (
        <>
        <div className="cart">
            <div className='row mx-0 mb-2'>
                <div className='col-7 px-0'><p className='mb-0 text-white'>Item</p></div>
                <div className='col-2 px-0'><p className='mb-0 text-white'>Qty</p></div>
                <div className='col-3 px-0 d-flex justify-content-end'><p className='mb-0 text-white text-end'>Price</p></div>
            </div>
            <div className='food-box'>
                <div className='row mx-0'>
                    <div className='col-7 px-0'>
                        <p className='item-name text-grey mb-0'>Item name</p>
                        <p className='mb-0 text-grey item-price'>$ 10</p>
                    </div>
                    <div className='col-2 px-0 d-flex align-items-center'>
                        <input type='number' className='w-100 qty-box'/>
                    </div>
                    <div className='col-3 px-0 d-flex align-items-center justify-content-end'>
                        <p className='text-grey mb-0 item-total-price text-end'>$ 10</p>
                    </div>
                    <div className='col-12 px-0'>
                        <p className='text-end w-100 mb-0'>X</p>
                    </div>

                </div>

            </div>
            <div className='price-figure row mx-0'>
                <div className='col-12 px-0 d-flex justify-content-between w-100 mb-1'>
                    <p className='mb-0 text-grey'>Discount</p>
                    <p className='mb-0 text-grey'>$ 0</p>
                </div>
                <div className='col-12 px-0 d-flex justify-content-between w-100'>
                    <p className='mb-0 text-grey'>Total</p>
                    <p className='mb-0 text-grey'>$ 15</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Cart;