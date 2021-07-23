import React, {useState, useEffect} from 'react';
import './ReviewScreen.css'
import axios from "axios";
import TipImage from "../Tips/typeOfTips/TipImage";

function ReviewScreen ({tipId, addressTip}) {

    const [reviews, setReviews] = useState([]);
    const tipAmsterdamId = tipId;
    const addressTipReview = addressTip

    async function fetchData (tipAmsterdamId) {
        try {
            const result = await axios.get(`https://locals4locals.herokuapp.com/api/v1/reviews/${tipAmsterdamId}/reviews`)
            setReviews(result.data)
        } catch (e) {
            console.error("het is niet gelukt, error: " + e)
        }
    }

    useEffect(()=>{
        fetchData(tipAmsterdamId)
    }, [])

    return (
        <>
            {reviews.map((review)=>(
            <div key={review.id} className="tipBox">
                <div className="tipBoxTwo" id="pictureDisplay">
                    <TipImage props={tipAmsterdamId}/>
                </div>
                <div id="adressDisplay"  className="tipBoxTwo" >{addressTipReview}</div>
                <div id="textDisplayTip"  className="tipBoxTwo">{review.comment}</div>
                {review.brokenHeart?(
                <button id="buttonHeartBrokenScreen" className="heartsScreen">💔</button>):""}
                {review.heart?(
                <button id="buttonHeartScreen" className="heartsScreen">💖</button>):""}
            </div>
            ))}
        </>

    )
}

export default ReviewScreen;