import React, { useState } from "react";
import "./rest.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const r = [
  {
    id: 1,
    image: "images/f1.png",
    
    texts:
      "Something about the cheesy spicy yummy delicoous fooood.  spicy yummy delicoous fooood. Something about the cheesy spicy yummy delicoous fooood.  spicy yummy delicoous fooood",
  
    time: "20 min",
    
  },
  {
    id: 2,
    image: "images/f2.png",
    
    texts:
      "Something about the cheesy spicy yummy delicoous fooood.  spicy yummy delicoous fooood. Something about the cheesy spicy yummy delicoous fooood.  spicy yummy delicoous fooood",
    
    time: "30 min",
    
  },
  {
    id: 3,
    image: "images/f3.png",
    
    texts:
      "Something about the cheesy spicy yummy delicoous fooood.  spicy yummy delicoous fooood. Something about the cheesy spicy yummy delicoous fooood.  spicy yummy delicoous fooood",
    
    time: "40 min",
    
  },
  
];
export default function Rests(s) {
  const [show, setShow] = useState(false);
  const [rest, setRest] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const re = (e) => {
    setRest(e);
  };

  return (
    <div>
      {r.map((restaurant) => (
        (typeof s.s.restaurants !== "undefined") &&
        typeof s.s.restaurants[restaurant.id - 1] !== "undefined" && (
        <li key={restaurant.id}>
          <div className="toflex">
            <div className="imgfood">
              <img src={restaurant.image} alt="rest"></img>
            </div>
            
                <div className="restaurant">
                  {typeof s.s.restaurants !== "undefined" &&
                    typeof s.s.restaurants[restaurant.id - 1] !==
                      "undefined" && (
                      <h2 className="rh">
                        {s.s.restaurants[restaurant.id - 1].restaurant.name}
                      </h2>
                    )}

                  {( typeof s.s.restaurants !== "undefined")&&(typeof s.s.restaurants[0] !== "undefined")&&console.log(s.s.restaurants[1].restaurant.cuisines)}
                  {/* {(s.s!=={})&&s.s.restaurants.map((i)=>{return console.log(i.restaurant)})} */}
                  <p style={{ width: "75%" }} className="rt">
                    {restaurant.texts}
                  </p>

                  <div className="buttons">
                    <div className="whites">
                      <p>Delivery time: {restaurant.time}</p>
                    </div>
                    <div
                      className="whites"
                      style={{ cursor: "pointer" }}
                      onClick={handleShow}
                    >
                      <p onClick={(e) => re(restaurant.id)}>
                        Click here to view cuisines
                      </p>
                    </div>
                    {r
                      .filter((r) => r.id === rest)
                      .map((restaurant) => (
                        <p key={restaurant.id}>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>{s.s.restaurants[restaurant.id - 1].restaurant.name}</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            
                             <p key={restaurant.id}>
                            {s.s.restaurants[restaurant.id - 1].restaurant.cuisines}</p>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                              Open Restaurant
                            </Button>
                          </Modal.Footer>
                        </Modal></p>
                      ))}
                  </div>
                </div>
              
          </div>
        </li>)
      ))}
    </div>
  );
}
