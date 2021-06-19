import React, { useState } from 'react'
import './Group.css'
import AddButton from "../button/AddButton";
import { useForm } from "react-hook-form";
import axios from "axios";

function Group () {

    const { handleSubmit, formState: { errors }, register } = useForm();

    async function sendInfo (data) {

        try {
            await axios.post('http://localhost:8080/api/v1/group_members/post_group_members', data)
        } catch (e) {
            console.log("Het is niet gelukt, error: " + e)
        }

    }

    return (
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
            </form>

        </div>
    )
}

export default Group;