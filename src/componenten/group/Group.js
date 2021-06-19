import React, { useState, useEffect } from 'react'
import './Group.css'
import AddButton from "../button/AddButton";
import { useForm } from "react-hook-form";
import axios from "axios";

function Group () {

    const { handleSubmit, formState: { errors }, register } = useForm();
    const [group, setWholeGroup] = useState([]);

    async function sendInfo (data) {

        try {
            await axios.post('http://localhost:8080/api/v1/group', data)
        } catch (e) {
            console.log("Het is niet gelukt, error: " + e)
        }

    }

    async function fetchData () {
        try {
            const result = await axios.get('http://localhost:8080/api/v1/group')
            console.log(result)
            setWholeGroup(result.data)
        } catch (e) {
            console.log("Get req is niet gelukt, error: " + e)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])

    return (
        <>
            <div>
                <form className="groupDisplay" onSubmit={handleSubmit(sendInfo)}>
                    <label id="groupMember" htmlFor="groeplid toevoegen">Voeg het e-mail adres toe van degene zie u aan de groep wilt toevoegen in
                        <input  type="text"
                                id="inputField"
                                placeholder="nieuw groeplid: "
                                {...register("emailAddress")}
                                />
                    </label>
                        <AddButton className="buttonPlus"/>
                    <div className="groupMembersDisplay">
                        <p>Groep leden:</p>
                            {group.map((groupMember)=>(
                            <div key={groupMember.id}>{groupMember.emailAddress}</div>

                            ))}
                    </div>
                </form>
            </div>
        </>
    )
}

export default Group;