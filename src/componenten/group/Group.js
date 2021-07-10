import React, { useState, useEffect } from 'react'
import './Group.css'
import AddButton from "../button/AddButton";
import { useForm } from "react-hook-form";
import axios from "axios";
import {useAuthContext} from "../Context/AuthContextProvider";

function Group () {

    const { handleSubmit, register } = useForm();
    const [group, setWholeGroup] = useState([]);
    const [groupSucces, setGroupSucces] = useState(false);
    const {user} = useAuthContext()

    async function sendInfo (data) {
        const groupObject = {
            groupName: data.groupName,
            emailAddress: user.username
        }
        try {
            await axios.post('http://localhost:8080/api/v1/group', groupObject)
            setGroupSucces(true);
        } catch (e) {
            console.log("Het is niet gelukt, error: " + e)
        }
    }

    async function fetchData () {
        const groupName = user.groupName
        try {
            const result = await axios.get(`http://localhost:8080/api/v1/users/getUsersByGroupName/${groupName}`)
            setWholeGroup(result.data)
        } catch (e) {
            console.log("Get req is niet gelukt, error: " + e)
        }
    }

    // async function deleteGroupMember (id){
    //     console.log(id)
    //     try {
    //         await axios.delete(`http://localhost:8080/api/v1/group/${id}`)
    //     } catch (e) {
    //         console.log("Get req is niet gelukt, error: " + e)
    //     }
    // }

    useEffect(()=>{
        fetchData()
    }, [])

    return (
            <div className="groupDisplay">
                <form onSubmit={handleSubmit(sendInfo)}>
                    <div>
                        {/*<input type="text"*/}
                        {/*placeholder="Groepsnaam:"*/}
                        {/*       {...register("groupName")}*/}
                        {/*/>*/}
                    </div>
                    <label id="groupMember" htmlFor="groeplid toevoegen">Voeg uw groep toe
                        <input  type="text"
                                id="inputField"
                                placeholder="Groep: "
                                {...register("groupName")}
                                />
                    </label>
                        <AddButton className="buttonPlus"/>
                        {groupSucces && <p className="succes-message">De groep word toegevoegd</p>}
                </form>
                    <div className="groupMembersDisplay">
                        <p>Groep : {user && user.groupName} | Groep leden:</p>
                            {group.map((groupMember)=>(
                            <div className="infoBox" key={groupMember.username}>{groupMember.username}</div>))}
                    </div>
            </div>
    )
}

export default Group;