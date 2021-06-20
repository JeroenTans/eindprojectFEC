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
        window.location.reload();
    }

    async function fetchData () {
        try {
            const result = await axios.get('http://localhost:8080/api/v1/group')
            setWholeGroup(result.data)
        } catch (e) {
            console.log("Get req is niet gelukt, error: " + e)
        }
    }


    async function deleteGroupMember (id){
        console.log(id)
        try {
            await axios.delete(`http://localhost:8080/api/v1/group/${id}`)
        } catch (e) {
            console.log("Get req is niet gelukt, error: " + e)
        }
        window.location.reload();
    }

    useEffect(()=>{
        fetchData()
    }, [])

    return (
        <>
            <div className="groupDisplay">
                <form onSubmit={handleSubmit(sendInfo)}>
                    <label id="groupMember" htmlFor="groeplid toevoegen">Voeg het e-mail adres toe van degene zie u aan de groep wilt toevoegen in
                        <input  type="text"
                                id="inputField"
                                placeholder="nieuw groeplid: "
                                {...register("emailAddress")}
                                />
                    </label>
                        <AddButton className="buttonPlus"/>
                </form>
                    <div className="groupMembersDisplay">
                        <p>Groep leden:</p>
                            {group.map((groupMember)=>(
                            <div className="infoBox" key={groupMember.id}>{groupMember.emailAddress}  <button onClick={(e)=>deleteGroupMember(groupMember.id)}>X</button></div>))}
                    </div>
            </div>
        </>
    )
}

export default Group;