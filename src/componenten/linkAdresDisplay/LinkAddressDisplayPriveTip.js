import React, { useState, useEffect } from 'react'
import axios from "axios";
import "./LinkAddressDisplayPriveTip.css"

function LinkAddressDisplayPriveTip () {

    const [privateTips, setPrivateTips] = useState([]);
    const [users, setUsers] = useState([])

    async function fetchData () {
        try {
            const result = await axios.get('http://localhost:8080/api/v1/tips/privateTip')
            const resultTwo = await axios.get('http://localhost:8080/api/v1/users')
            setPrivateTips(result.data)
            setUsers(resultTwo.data)
        } catch (e) {
            console.log("Get req is niet gelukt, error: " + e)
        }
    }

    async function deleteTip (id){

        try {
            await axios.delete(`http://localhost:8080/api/v1/tips/${id}`)
        } catch (e) {
            console.log("Delete req is niet gelukt, error: " + e)
        }
        window.location.reload();
    }

    async function deleteUser (username){

        try {
            await axios.delete(`http://localhost:8080/api/v1/users/${username}`)
        } catch (e) {
            console.log("Delete req is niet gelukt, error: " + e)
        }
        window.location.reload();
    }
    //
    // useEffect(
    //     fetchData()
    // , [])

    useEffect(()=>{
        fetchData()
        // deleteUser();
        // deleteTip();
    },[])

    return (
        <div className="adminBox">
            <div className="displayAdmin">
                <h2>Id & adress privé tips:</h2>
                {privateTips.map((priveTip)=>(
                    <div className="infoBox" key={priveTip.id}>Id: {priveTip.id}| Address: {priveTip.address}  <button className="adminButton" onClick={(e)=>deleteTip(priveTip.id)}>X</button></div>))}
            </div>
            <div className="displayAdmin">
                <h2>Delete users: </h2>
                {users.map((user)=>(
                    <div className="infoBox" key={user.username}>name: {user.username}  <button className="adminButton" onClick={(e)=>deleteUser(user.username)}>X</button></div>))}
            </div>
        </div>
    )
}

export default LinkAddressDisplayPriveTip;