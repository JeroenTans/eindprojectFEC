import React from 'react'
import './Group.css'
import AddButton from "../button/AddButton";
import {useForm} from "react-hook-form";

function Group () {

    const { handleSubmit, formState: { errors }, register } = useForm();

    function sendInfo (data) {
        console.log(data)
    }

    return (
        <div>
            <form className="groupDisplay" onSubmit={handleSubmit(sendInfo)}>
                <label id="groupMember" htmlFor="groeplid toevoegen">Voeg het e-mail adres toe van degene zie u aan de groep wilt toevoegen in
                    <input  type="text"
                            placeholder="nieuw groeplid: "
                            {...register("groupMember")}
                            />
                </label>
                    <AddButton className="buttonPlus"/>
            </form>

        </div>
    )
}

export default Group;