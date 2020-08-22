import React from "react";
import "./cart.css";
const c= [{
    img:"images/f1.png",
    name:"Cheezy burger",
    qty:1,
    price:200,
},{ img:"images/f2.png",
    name:"Yummy Sandwich",
    qty:1,
    price:100,
},]
export default function Checkout() {
  return (
    <div>
        <div className="order">
            <div className="imgs">
                <img src="images/Group (1).png" alt="cart"></img>
            </div>
            <div className="item">
                <h2>Confirm your order</h2>

                <div className="red">
                    {(c.map((cart)=>
                    <div className="order1">
                        <div><img src={cart.img} alt="food"></img></div>
                        <div className="wid"><p className="food">{cart.name}</p>
                        <p>Quantity: {cart.qty}</p>
                        <p>Price : Rs. {cart.price}</p></div>
                    </div>))}
                </div>
                <button type="button" className="b1">Confirm your order</button>
                <h5 className="add">Delivery address</h5>
                <p>Harid Nagra Haripagaga</p>
                <p>Jalianwala</p>
                <p>Swewd city Harappa</p>
                <p>Tivandrum-670864</p>
                <button type="button" className="b2">Change delivery address</button>
            </div>
        </div>
    </div>);}