import React from "react";
import "./remain.css";
import Rating from "@material-ui/lab/Rating";
import Rev from "./review";
const items = [{
  image:"images/f1.png",
  name:"Cheezy burger",
  desc:"Something about the round good lucking handsome burger...",
  offs:20,
  price:200,
},
{
  image:"images/f2.png",
  name:"Yummy sandwich",
  desc:"Something about the round good lucking handsome sandwich...",
  offs:15,
  price:100,
},
{
  image:"images/f3.png",
  name:"Cheezy rolls",
  desc:"Something about the round long good lucking handsome rolls...",
  offs:30,
  price:300,
},]

export default function Rmain() {
  return (
    <div>
      <div className="restflex">
        <div>
          <img src="images/f2.png" alt="restimage" className="rimage"></img>
        </div>
        <div className="rdes">
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
          <h1>Restaurant 2</h1>
          <p>
            Something about the good food from awesome restaurant to fill your
            hungry tummy. The bestt food from the best restaurant is a random
            text.
          </p>
          <h4>Delivery time:30min</h4>
        </div>
      </div>
      <div className="boxes">
        {items.map((item)=>
        <div className="restflex">
          <div>
            <img src={item.image} alt="food"></img>
          </div>
          <div>
            <div className="headflex">
              <div>
                <h2>{item.name}</h2>
              </div>
              <div>
                <p className="off">{item.offs}% off</p>
              </div>
            </div>
            <p>{item.desc}</p>
            <h4>Rs. {item.price}</h4>
          </div>
          <div>
            <button type="button" className="carting">
              Add to cart
            </button>
          </div>
        </div>)}
      </div>
      <h3 className="rehead">Give your reviews about this restaurant</h3>
      <Rev/>
    </div>
  );
}
