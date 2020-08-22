import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./demo.css";
export default function Demoslide() {
  return (
    <div>
      <div className="carousels">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/1 1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="ct">Best food for Best price</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/2 4.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <div>
                <h1 className="ct">Fastest delivery</h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/3 1.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <div>
                <h1 className="ct">Tasty food for you</h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div >
        <h1 className="heads">Food delivered on fingertips</h1>
      </div>

      <button type="button" className="logs">
        Login to place order
      </button>
      <button type="button" className="logs">
        New user?Register here
      </button>
    </div>
  );
}
