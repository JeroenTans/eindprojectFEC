import React, {useState, useEffect} from 'react'
import './AdminLink.css'
import {useForm} from 'react-hook-form';
import axios from "axios";

function AdminLink () {
    const [users, setUsers]= useState([])
    const [tipLink, setTipLink] = useState([])
    const { handleSubmit, register } = useForm();

    async function fetchData (data) {
        let idOne = data.adressOne;
        let idTwo = data.adressTwo;

        try {
            const result = await axios.get(`http://localhost:8080/api/v1/tips/tip/${idOne}`)
            const resultTwo = await axios.get(`http://localhost:8080/api/v1/tips/tip/${idTwo}`)
            const usernameTipOne = result.data.username
            const usernameTipTwo = resultTwo.data.username
            const postResult = await axios.post(`http://localhost:8080/api/v1/tips/addUserAndGetTipById/${usernameTipOne}/${idTwo}`)
            const postResultTwo = await axios.post(`http://localhost:8080/api/v1/tips/addUserAndGetTipById/${usernameTipTwo}/${idOne}`)
        } catch (e) {
            console.log("Get request is niet gelukt, error: " + e)
        }
    }

    async function getUsers(){
        try {
            const result = await axios.get('http://localhost:8080/api/v1/users')
            setUsers(result.data)
        } catch (e) {
            console.log("Het ophalen van de gebruikers met de USER als authority is niet gelukt.", e)
        }
    }

    async function sendAuthority(data){
        const username = data.usernameInput
        const adminAuthority = "ADMIN"
        const userAuthority = "USER"
        try {
            const resultDeleteAuth = await axios.delete(`http://localhost:8080/api/v1/users/${username}/authorities/${userAuthority}`)
            const resultAuth = await axios.post(`http://localhost:8080/api/v1/users/${username}/authorities`,{
                authority: adminAuthority
            })
        }catch (e){
            console.log("Het toevoegen van een ADMIN is niet gelukt. ", e)
        }
    }

    useEffect(()=>{
        getUsers()
    },[])

    return (
        <>
            <form className="linkForm" onSubmit={handleSubmit(fetchData)}>
                <div className="titelLink">
                    <p>Link hier de tips d.m.v. de id's van de tips op te geven.</p>
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
            <form onSubmit={handleSubmit(sendAuthority)} className="addAdmin">
                <div>Maak hier een nieuwe Admin aan</div>
                <input  className="addAdminInput"
                        type="text"
                        placeholder="Username: "
                        {...register("usernameInput")}
                        />
                        <div>
                            <button className="linkButton">Voeg authority toe</button>
                        </div>
                <div className="userShow">{users.map((user)=>(
                    <p key={user.username}>{user.authorities[0].authority === "USER" && user.username}</p>))}
                </div>
            </form>
        </>


    )
}

export default AdminLink;