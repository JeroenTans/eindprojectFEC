import React, {useState, useEffect} from "react";
import axios from "axios";

function TipImage (props) {

    const [blobImage, setBlobImage] = useState('');

    useEffect(() => {
        async function fetchImage() {
            try {
                const result = await axios.get(`http://localhost:8080/api/v1/tips/${props.props}/picturePath`, {
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