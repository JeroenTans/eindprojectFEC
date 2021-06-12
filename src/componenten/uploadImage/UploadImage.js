import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import './UploadImage.css'
import * as url from "url";
import {useForm} from "react-hook-form";

function UploadImage(props) {
    const [files, setFiles] = useState([]);
    // const {getRootProps, getInputProps} = useDropzone({
    //     accept: 'image/*',
    //     onDrop: acceptedFiles => {
    //         setFiles(acceptedFiles.map(file => Object.assign(file, {
    //             preview: URL.createObjectURL(file)
    //         })));
    //     }
    // });



    console.log(props)

    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <section className="container">
            {/*<div {...getRootProps({className: 'dropzone'})}>*/}
            {/*    <input {...getInputProps()} />*/}
            {/*    <p className="textImage">Drag 'n' drop some files here, or click to select files</p>*/}
            {/*</div>*/}
            <input  type="file"
                    {...props.register}

                    />
            <aside className="imageContainer">
                {files.map(file => (
                    <div className="image" key={file.name}>
                        <div className="imageInner">
                            <img
                                src={file.preview}
                                alt={file.name}
                                className="imageDisplay"
                            />
                        </div>
                    </div>
                ))}
            </aside>
        </section>
    );
}

export default UploadImage;