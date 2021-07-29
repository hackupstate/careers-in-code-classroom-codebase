import './App.css';
import {useState} from "react";
import {calculateTotal} from "./pricing";

const items = [
    {name: 'Lenovo power adapter', price: 10},
    {name: 'Zozo AC Adapter', price: 14},
    {name: 'Switching Adapter (19v)', price: 3},
    {name: 'USB Extensions', price: 4},
    {name: 'HTC Vive Headphone Cable', price: 9},
    {name: 'Smartwatch Charger', price: 4},
    {name: 'Apple Lightning Cables', price: 9},
    {name: 'Wall charger 19V ', price: 3},
    {name: 'Nintendo Mini A Charger', price: 8},
    {name: 'Skullcandy Headphones', price: 3},
    {name: 'USB B Cables', price: 7},
    {name: 'USB C Headphones', price: 8},
    {name: 'USB A to Ethernet', price: 2},
    {name: 'Wall charger to USB Micro B', price: 10},
    {name: 'Mac charger magsafe', price: 12},
    {name: 'Charger', price: 12},
    {name: 'HDMI to USB C', price: 5},
    {name: 'Wall charger 18 350mA', price: 2},
    {name: 'Wall charger 6V 400mA', price: 2},
    {name: 'iPod charger', price: 4},
    {name: 'Digital clock', price: 2},
    {name: 'USB Mini B Cables', price: 7},
    {name: 'Headphone Patch (male-to-female)', price: 2},
    {name: 'Index wall charger', price: 12},
]

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState();

    const addToCart = (item) => {
        setCartItems(prevCartItems => [...prevCartItems, item]);
    };

    const removeFromCart = (item) => {
        setCartItems(prevCartItems => prevCartItems.filter(cartItem => cartItem.name !== item.name));
    }

    const onCalculateTotal = () => {
        setTotal(calculateTotal(cartItems));
    }

    return (
        <div>
            <h1>Nathan's Web Store</h1>

            <div>
                <button onClick={onCalculateTotal}>Calculate total</button>
                {
                    total ? <p>Total is: {total}</p> : null
                }
                <p>Cart: 0</p>
                <ul>
                    {cartItems.map((item, idx) =>
                        <li key={idx}>
                            {item.name} &nbsp;
                            <button onClick={(e) => removeFromCart(item)}>Remove</button>
                        </li>
                    )}
                </ul>
            </div>

            <div className="inventory-items" style={{display: "flex", flexWrap: "wrap"}}>
                {items.map((item, idx) =>
                    <div key={idx}>
                        <p>{item.name} | ${item.price}</p>
                        <button onClick={(e) => addToCart(item)}>Add to cart</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
