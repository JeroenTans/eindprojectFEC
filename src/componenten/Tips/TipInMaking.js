import React, { useState } from 'react';
import './TipInMaking.css';
import { useForm } from 'react-hook-form';

function TipInMaking ({ uploadImage, uploadAlt, adres, whatIsTheTipAbout }) {

    const { handleSubmit, formState: { errors }, register } = useForm();
    const [publicTip, togglePublicTip] = useState(true);
    const [privedTip, togglePrivedTip] = useState(false);
    const [imageTip, setImageTip] = useState();



    function sendInfo (data) {
        console.log(data);
        console.log("Public tip: " + publicTip)
        console.log("Prive tip: " + privedTip)
        // console.log(imageTip)

        // const storageRef = app.storage().ref();
        // const fileRef = storageRef.child(data.image[0].name);
        // fileRef.put(data.image[0]).then(()=>{
        //     console.log("uploaded a file")
        // });
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
                    <div className="checkboxTipInMakingOne" >
                        <input  type="checkbox"
                                checked={publicTip}
                                onChange={(e)=>privedTip?togglePublicTip(false):togglePublicTip(e.target.checked)}
                                />Publiek
                    </div>
                    <div className="checkboxTipInMakingTwo">
                        <input  type="checkbox"
                                checked={privedTip}
                                onChange={(e)=>publicTip?togglePrivedTip(false):togglePrivedTip(e.target.checked)}
                                />Prive
                    </div>
                    <button id="plusButton">Voeg uw tip toe</button>
                </form>

    )
}

export default TipInMaking;
