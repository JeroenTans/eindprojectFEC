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
            console.error("Get req is niet gelukt, error: " + e)
        }
    }

    async function deleteTip (id){
        const newArray = [];
        privateTips.map((privateTip)=>{
            if (privateTip.id !== id) newArray.push(privateTip)
        })
        setPrivateTips(null)
        setPrivateTips(newArray)
        try {
            await axios.delete(`http://localhost:8080/api/v1/tips/${id}`)
        } catch (e) {
            console.error("Delete req is niet gelukt, error: " + e)
        }
    }

    async function deleteUser (username){
        const newArray = [];
        users.map((user)=>{
            if (user.username !== username) newArray.push(user)
        })
        setUsers(null)
        setUsers(newArray)
        try {
            await axios.delete(`http://localhost:8080/api/v1/users/${username}`)
        } catch (e) {
            console.error("Delete req is niet gelukt, error: " + e)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="adminBox">
            <div className="displayAdmin">
                <h2>Id & adress privé tips:</h2>
                {privateTips.map((priveTip)=>(
                    <div className="infoBox" key={priveTip.id}>Id: {priveTip.id}| Address: {priveTip.address}| Wie heeft deze tip gemaakt: {priveTip.username} <button className="adminButton" onClick={(e)=>deleteTip(priveTip.id)}>X</button></div>))}
            </div>
            <div className="displayAdmin">
                <h2>Delete users: </h2>
                {users.map((user)=>(
                    <div className="infoBox" key={user.username}>name: {user.username}| Authority: {user.authorities[0].authority} <button className="adminButton" onClick={(e)=>deleteUser(user.username)}>X</button></div>))}
            </div>
        </div>
    )
}

export default LinkAddressDisplayPriveTip;