import './item.css';
import '../App.css';

const Item = () => {
    return (
        <>
        <div className="card food-item border-0" >
            <img src="https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg" alt="" class="card-img-top"/>
            <div className="card-body">
                <h5 class="card-title text-white">Item Title</h5>
                <p className='text-grey'>price</p>
                <button class="btn btn-primary fs-12">Add to Cart</button>
            </div>
        </div>
        </>
    )
}
export default Item;