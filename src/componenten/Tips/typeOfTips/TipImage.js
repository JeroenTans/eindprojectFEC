import React, {useState, useEffect} from "react";
import axios from "axios";

function TipImage ({props}) {

    const [blobImage, setBlobImage] = useState('');
    console.log("props!!", props.id)

    useEffect(() => {
        async function fetchImage() {
            try {
                // haal een afbeelding op op basis van de id property
                const result = await axios.get(`http://localhost:8080/api/v1/tips/${props.id}/picturePath`, {
                    responseType: 'blob',
                });

                const imagePath = result.data;
                // zet deze binary file om naar iets wat we kunnen uitlezen en zet het in de state
                setBlobImage(URL.createObjectURL(imagePath));

            } catch(e) {
                console.error(e);
            }
        }
        fetchImage();
    }, [props.id]);

    // Het enige wat we teruggeven is de afbeelding!
    return (
        <>
            {blobImage && <img src={blobImage} alt={props.picturePath} />}
        </>
    )
}

export default TipImage;