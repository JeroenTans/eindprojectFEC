import './MakeReview.css';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import axios from "axios";

function MakeReview ({smallTipId}) {

    const { handleSubmit, formState: { errors }, register } = useForm();
    const [heartFe, toggleHeartFe] = useState(true);
    const [brokenHeartFe, toggleBrokenHeartFe] = useState(false);
    const [reviewSucces, setReviewSucces] = useState(false);
    const tipId = smallTipId;


    async function sendInfo (data) {
            const dataObject = {
            tipAmsterdamId: tipId,
            brokenHeart: brokenHeartFe,
            heart: heartFe,
            comment: data.comment,
                address: "Herengracht 81!"

        }
        console.log("Wat stuur ik mee ", dataObject)
        try {
            await axios.post('http://localhost:8080/api/v1/reviews/savereview', dataObject)
            setReviewSucces(true);
        } catch (e) {
            console.error("Het plaatsen van de review is niet gelukt, error: " + e)
        }
    }

    return(
        <form   onSubmit={handleSubmit(sendInfo)}
                className="completeFormReview">
            <div className="hearts">
                <label className="labelHearts">Rate de tip d.m.v. de hartjes!</label>
                    <input  type="checkbox"
                            name="heart"
                            checked={heartFe}
                            onChange={(e)=>brokenHeartFe?toggleBrokenHeartFe(false) && toggleHeartFe(e.target.checked):toggleHeartFe(e.target.checked)}
                            />💖
                    <input  type="checkbox"
                            name="heart"
                            checked={brokenHeartFe}
                            onChange={(e)=> heartFe?toggleHeartFe(false) && toggleBrokenHeartFe(e.target.checked):toggleBrokenHeartFe(e.target.checked)}
                            />💔
            </div>
                <textarea   className="commentPart"
                            id="" cols="50" rows="9"
                            placeholder="Schrijf hier uw review:"
                            {...register("comment")}
                            />
            <div className="buttonReview">
                <button type="submit" id="plusButtonReview">Voeg uw review toe</button>
                {reviewSucces && <p className="succes-message">Bedankt voor de review!</p>}
            </div>
        </form>
    )
}

export default MakeReview;

// <div className="boxReview">
//     <form className="form">
//         <div className="likeOrNot" placeholder="halooo"/>Rate hier de tip d.m.v. hartjes
//         <button type="checkbox" id="buttonHeartBroken" className="hearts">💔</button>
//         <button type="checkbox" id="buttonHeart" className="hearts">💖</button>

        // <textarea   className="commentPart"
        //             id="" cols="50" rows="9"
        //             placeholder="Schrijf hier uw review"/>
        // <button type="submit" id="plusButton">Voeg uw review toe</button>
//     </form>
// </div>