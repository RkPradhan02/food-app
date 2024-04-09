import Item from "./Item";
import Cart from "./Cart";
import './food-container.css';

const FoodContainer = () => {
    return (
        <div className="food-container">
            <div className="fooditems">
                <Item/>
                <Item/>
                <Item/>
                <Item/>

            </div>
            <Cart/>
        </div>
    )
}
export default FoodContainer;