import React, { useState } from 'react';
import './TipInMaking.css';
import { useForm } from 'react-hook-form';

function TipInMaking ({ uploadImage, uploadAlt, adres, whatIsTheTipAbout }) {

    const { handleSubmit, formState: { errors }, register } = useForm();
    const [imageTip, setImageTip] = useState();



    function sendInfo (data) {
        console.log(data);
    }

    return (

                <form onSubmit={handleSubmit(sendInfo)}  className="tipInMakingBox">
                    <div className="pictureDisplay">
                        <input  id="fileLoader"
                                type="file"
                                // ref={register}
                                name="picture"
                                value={imageTip}
                                onChange={(e)=>setImageTip(e.target.files)}
                                />
                        {/*<img src={uploadImage} alt={uploadAlt}/>*/}
                    </div>
                    <div className="adres">
                        <input  type="text"
                                className="inputAdres"
                                placeholder="Voeg hier de titel toe:"
                                {...register("adres")}
                                />{adres}
                    </div>
                        <textarea   className="textDis"
                                    cols="30" rows="10"
                                    placeholder="Voeg hier de omschrijving toe:"
                                    {...register("textAboutTheTip")}
                                    />{whatIsTheTipAbout}
                                    <div className="checkboxTipInMakingOne">
                                        <input  type="radio"
                                                value="publiek"
                                                {...register("whatTypeOfTip")}
                                                />Prive
                                    </div>
                                    <div className="checkboxTipInMakingTwo">
                                            <input  type="radio"
                                                    value="prive"
                                                    {...register("whatTypeOfTip")}
                                                    />Publiek
                                    </div>
                    <button id="plusButton">Voeg uw tip toe</button>
                </form>

    )
}

export default TipInMaking;
