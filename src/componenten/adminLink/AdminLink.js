import React, {useState} from 'react'
import './AdminLink.css'
import {set, useForm} from 'react-hook-form';
import axios from "axios";

function AdminLink () {

    const { handleSubmit, formState: { errors }, register } = useForm();
    const [twoTips, setTwoTips] = useState([]);

    async function fetchData (data) {
        console.log(data)

        let idOne = data.adressOne;
        let idTwo = data.adressTwo;

        try {
            const result = await axios.get(`http://localhost:8080/api/v1/tips/tip/${idOne}`)
            console.log(result)
            setTwoTips(result.data)
        } catch (e) {
            console.log("Get req is niet gelukt, error: " + e)
        }
        try {
            const result = await axios.get(`http://localhost:8080/api/v1/tips/tip/${idTwo}`)
            console.log(result)
            setTwoTips(result.data)
        } catch (e) {
            console.log("Get req is niet gelukt, error: " + e)

        }
        console.log(twoTips)
    }

    return (

            <form className="linkForm" onSubmit={handleSubmit(fetchData)}>
                <div className="titelLink">
                    <p>Link hier de tips d.m.v. de id's van de tips op te geven</p>
                </div>
                <div className="linkInput">
                    <input  type="text"
                            className="adressOne"
                            placeholder="typ hier het eerste id in:"
                            {...register("adressOne")}
                            />
                    <input  type="text"
                            className="adressOne"
                            placeholder="type hier het tweede id in:"
                            {...register("adressTwo")}
                            />
                </div>
                <button className="linkButton">link de tips</button>
            </form>


    )
}

export default AdminLink;