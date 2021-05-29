import React from 'react';
import './MakeReview.css';
// import { ImHeart } from 'react-icons/fa';

function MakeReview () {
    return(
        <div className="boxReview">
            <form className="form">
                <div className="likeOrNot">Rate hier de tip d.m.v. hartjes</div>
                <button id="buttonHeartBroken" className="hearts">💔</button>
                <button id="buttonHeart" className="hearts">💖</button>
                <textarea className="commentPart" id="" cols="50" rows="9" placeholder="Schrijf hier uw review"/>
                <button type="submit" id="plusButton">Voeg uw review toe</button>
            </form>
        </div>
    )
}

export default MakeReview;