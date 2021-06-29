import React, {useState, useEffect} from 'react';
import './ReviewScreen.css'
import axios from "axios";

function ReviewScreen ({tipId}) {

    const [reviews, setReviews] = useState([]);
    const tipAmsterdamId = tipId;

    async function fetchData (tipAmsterdamId) {
        try {
            const result = await axios.get(`http://localhost:8080/api/v1/reviews/9/reviews`)
            // const image = await axios.get(`http://localhost:8080/api/v1/tips/${tipAmsterdamId}/picturePath`)
            console.log("result.data ", result.data)
            // console.log(image)
            setReviews(result.data)
            console.log("usestate ", reviews)
        } catch (e) {
            console.log("het is niet gelukt, error: " + e)
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
                    <img id="pictureDisplay" src="" alt=""/>
                </div>
                <div id="adressDisplay"  className="tipBoxTwo" >{review.address}</div>
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