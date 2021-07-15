import React, { useState, useEffect } from 'react'
import './Group.css'
import AddButton from "../button/AddButton";
import { useForm } from "react-hook-form";
import axios from "axios";
import {useAuthContext} from "../../context/AuthContextProvider";
import ErrorMessage from "../errorMessage/ErrorMessage";

function Group () {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const [group, setWholeGroup] = useState([]);
    const [groupSucces, setGroupSucces] = useState(false);
    const {user} = useAuthContext()

    // const getUsername = groupMember.username.substring(0, groupMember.username.indexOf('@'))
    // const username = getUsername.substring(0, 1).toUpperCase() + getUsername.substring(1, getUsername.length);
    //

    async function sendInfo (data) {
        const groupObject = {
            groupName: data.groupName,
            emailAddress: user.username
        }
        try {
            await axios.post('http://localhost:8080/api/v1/group', groupObject)
            setGroupSucces(true);
        } catch (e) {
            console.error("Het is niet gelukt, error: " + e)
        }
    }

    async function fetchData () {
        const groupName = user.groupName
        try {
            const result = await axios.get(`http://localhost:8080/api/v1/users/getUsersByGroupName/${groupName}`)
            setWholeGroup(result.data)
        } catch (e) {
            console.error("Get req is niet gelukt, error: " + e)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])

    return (
            <div className="groupDisplay">
                <form onSubmit={handleSubmit(sendInfo)}>
                    <label className="groupMember" htmlFor="groeplid toevoegen">Voeg uw groep toe
                        <input  type="text"
                                id="inputField"
                                placeholder="Groep: "
                                {...register("groupName", {
                                    required: true
                                })}
                                />{errors.groupName && <ErrorMessage message="Wilt u een groep joinen, dan moet u een groep invullen."/>}
                    </label>
                        <AddButton className="buttonPlus"/>
                        {groupSucces && <p className="succes-message">De groep word toegevoegd</p>}
                </form>
                    <div className="groupMembersDisplay">
                        <p className="groupMember" >Groep : {user && user.groupName} | Groep leden:</p>
                            {group.map((groupMember)=>(
                            <div className="infoBox" key={groupMember.username}>{groupMember.username.substring(0, 1).toUpperCase() + groupMember.username.substring(1, groupMember.username.indexOf('@'))}</div>))}
                    </div>
            </div>
    )
}

// const getUsername = user.email.substring(0, user.email.indexOf('@'))
// const username = getUsername.substring(0, 1).toUpperCase() + getUsername.substring(1, getUsername.length);

export default Group;