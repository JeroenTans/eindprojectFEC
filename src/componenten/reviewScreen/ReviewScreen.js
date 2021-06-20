import React, {useState, useEffect} from 'react';
import './ReviewScreen.css'
import axios from "axios";

function ReviewScreen () {

    const [reviews, setReviews] = useState([]);

    async function fetchData () {
        try {
            const result = await axios.get(`http://localhost:8080/api/v1/reviews/1`)
            console.log(result.data)
            setReviews(result.data)
            console.log(reviews)
        } catch (e) {
            console.log("het is niet gelukt, error: " + e)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])

    return (
        <>
            {/*{reviews.map((review)=>(*/}
            <div key={reviews.id} className="tipBox">
                <div className="tipBoxTwo" id="pictureDisplay">
                    <img id="pictureDisplay" src="" alt=""/>
                </div>
                <div id="adressDisplay"  className="tipBoxTwo" >{reviews.address}</div>
                <div id="textDisplayTip"  className="tipBoxTwo">{reviews.comment}</div>
                {reviews.brokenHeart?(
                <button id="buttonHeartBrokenScreen" className="heartsScreen">💔</button>):""}
                {reviews.heart?(
                <button id="buttonHeartScreen" className="heartsScreen">💖</button>):""}
            </div>
            {/*))}*/}
        </>

    )
}

export default ReviewScreen;