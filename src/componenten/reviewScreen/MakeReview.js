import './MakeReview.css';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

function MakeReview () {

    const { handleSubmit, formState: { errors }, register } = useForm();

    function sendInfo (data) {
        console.log(data);
    }

    return(
        <form   onSubmit={handleSubmit(sendInfo)}
                className="completeFormReview">
            <div className="hearts">
                <label className="labelHearts">Rate de tip d.m.v. de hartjes!</label>
                    <input  type="radio"
                            name="heart"
                            value="heart"
                            {...register("loveOrNot")}
                            />💖
                    <input  type="radio"
                            name="heart"
                            value="brokenHeart"
                            {...register("loveOrNot")}
                            />💔
            </div>
                <textarea   className="commentPart"
                            id="" cols="50" rows="9"
                            placeholder="Schrijf hier uw review:"
                            {...register("comment")}
                            />
            <div className="buttonReview">
                <button type="submit" id="plusButtonReview">Voeg uw review toe</button>
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