import React from "react";
import "./review.css";
import Rating from "@material-ui/lab/Rating";

export default function Rev(){
    return(<div className="rev">
        <Rating name="half-rating" defaultValue={0} precision={0.5} className="stars"/>
        <textarea className="ta"></textarea>
        <button type="button" className="review-submit">Sumbit review</button>
    </div>);
}