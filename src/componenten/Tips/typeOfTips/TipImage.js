import React, {useState, useEffect} from "react";
import axios from "axios";
import grachten from '../../../images/grachten.png'

function TipImage (props) {

    const [blobImage, setBlobImage] = useState(grachten);

    useEffect(() => {
        async function fetchImage() {
            try {
                const result = await axios.get(`https://locals4locals.herokuapp.com/api/v1/tips/${props.props}/picturePath`, {
                    responseType: 'blob',
                });
                const imagePath = result.data;
                setBlobImage(URL.createObjectURL(imagePath));

            } catch(e) {
                console.error(e);
            }
        }
        fetchImage();
    }, [props.props]);

    return (
        <>
            {blobImage && <img id="displayPic" src={blobImage} alt={props.picturePath} />}
        </>
    )
}

export default TipImage;