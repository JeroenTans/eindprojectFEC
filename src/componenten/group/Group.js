import React, { useState, useEffect } from 'react'
import './Group.css'
import AddButton from "../button/AddButton";
import { useForm } from "react-hook-form";
import axios from "axios";
import {useAuthContext} from "../../context/AuthContextProvider";
import ErrorMessage from "../errorMessage/ErrorMessage";
import {uppercaseFirstLetter} from "../../helpers/upperCase";

function Group () {

    const {handleSubmit, register, formState: {errors} } = useForm();
    const [group, setWholeGroup] = useState([]);
    const [groupSucces, setGroupSucces] = useState(false);
    const {user, userGroupNameContextState, setUserGroupNameContextState} = useAuthContext()

    async function sendInfo (data) {
        const groupObject = {
            groupName: data.groupName,
            emailAddress: user.username
        }
        setUserGroupNameContextState(data.groupName)
        try {
            await axios.post('https://locals4locals.herokuapp.com/api/v1/group', groupObject)
            setGroupSucces(true);
        } catch (e) {
            console.error("Het is niet gelukt, error: " + e)
        }
    }

    async function fetchData () {
        try {
            const result = await axios.get(`https://locals4locals.herokuapp.com/api/v1/users/getUsersByGroupName/${userGroupNameContextState}`)
            setWholeGroup(result.data)
        } catch (e) {
            console.error("Get req is niet gelukt, error: " + e)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [userGroupNameContextState, group])

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
                        <p className="groupMember" >Groep : {userGroupNameContextState} | Groep leden:</p>
                            {group.map((groupMember)=>(
                            <div className="infoBox" key={groupMember.username}>{uppercaseFirstLetter(groupMember.username.substring(0, 1).toUpperCase(), groupMember.username.substring(1, groupMember.username.indexOf('@')))}</div>))}
                    </div>
            </div>
    )
}

export default Group;