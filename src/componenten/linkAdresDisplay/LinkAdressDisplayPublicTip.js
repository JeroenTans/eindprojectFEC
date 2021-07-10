import React, {useState, useEffect} from 'react'
import axios from "axios";

function LinkAddressDisplayPublicTip () {

    const [publicTips, setPublicTips] = useState([]);
    const [reviews, setReviews] = useState([])

    async function fetchData () {
        try {
            const result = await axios.get('http://localhost:8080/api/v1/tips/publicTip')
            const resultTwo = await axios.get('http://localhost:8080/api/v1/reviews')
            setPublicTips(result.data)
            setReviews(resultTwo.data)
        } catch (e) {
            console.error("Get req is niet gelukt, error: " + e)
        }
    }

    async function deleteTip (id){
        const newArray = [];
        publicTips.map((publicTip)=>{
            if (publicTip.id !== id) newArray.push(publicTip)
        })
        setPublicTips(null)
        setPublicTips(newArray)
        try {
            await axios.delete(`http://localhost:8080/api/v1/tips/${id}`)
        } catch (e) {
            console.error("Delete req is niet gelukt, error: " + e)
        }
    }

    async function deleteReview (id){
        const newArray = [];
        reviews.map((review)=>{
            if (review.id !== id) newArray.push(review)
        })
        setReviews(null)
        setReviews(newArray)
        try {
            await axios.delete(`http://localhost:8080/api/v1/reviews/${id}`)
        } catch (e) {
            console.error("Delete req is niet gelukt, error: " + e)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div className="adminBox">
            <div className="displayAdmin">
                    <h2>Id & adres publieke tips:</h2>
                    {publicTips.map((publicTip)=>(
                    <div className="infoBox" key={publicTip.id}>Id: {publicTip.id}| adres: {publicTip.address}| Wie heeft deze tip gemaakt: {publicTip.username}   <button className="adminButton" onClick={(e)=> deleteTip(publicTip.id)}>X</button></div>))}
            </div>
            <div className="displayAdmin">
                    <h2>Delete reviews: </h2>
                    {reviews.map((review)=>(
                    <div className="infoBox" key={review.id}>Comment: {review.comment} <button className="adminButton" onClick={(e)=>deleteReview(review.id)}>X</button></div>))}
            </div>
        </div>
    )
}

export default LinkAddressDisplayPublicTip;