import React from 'react'
import './AdminLink.css'
import { useForm } from 'react-hook-form';

function AdminLink () {

    const { handleSubmit, formState: { errors }, register } = useForm();

    function sendInfo (e) {
        console.log(e);
    }

    return (

            <form className="linkForm" onSubmit={handleSubmit(sendInfo)}>
                <div className="titelLink">
                    <p>Link hier de tips d.m.v. de adressen op te geven</p>
                </div>
                <div className="linkInput">
                    <input  type="text"
                            className="adressOne"
                            placeholder="typ hier het eerste adres in:"
                            {...register("adressOne")}
                            />
                    <input  type="text"
                            className="adressOne"
                            placeholder="type hier het tweede adres in:"
                            {...register("adressTwo")}
                            />
                </div>
                <button className="linkButton">link de tips</button>
            </form>

    )
}

export default AdminLink;