import React, { useState, useEffect } from 'react'
import axios from "axios";

function LinkAddressDisplayPriveTip () {

    const [privateTips, setPrivateTips] = useState([]);

    async function fetchData () {
        try {
            const result = await axios.get('http://localhost:8080/api/v1/tips/privateTip')
            console.log(result)
            setPrivateTips(result.data)
        } catch (e) {
            console.log("Get req is niet gelukt, error: " + e)
        }
    }

    async function deleteTip (id){
        // try {
        //     await axios.delete(`http://localhost:8080/api/v1/tips/${id}`)
        // } catch (e) {
        //     console.log("Get req is niet gelukt, error: " + e)
        // }
        console.log(id)
    }

    useEffect(()=>{
        fetchData()
    }, [])

    return (
        <div className="groupDisplay">
            <div className="groupMembersDisplay">
                <h2>Adress privé tips:</h2>
                {privateTips.map((priveTip)=>(
                    <div key={priveTip.id}>{priveTip.address}  <button onClick={deleteTip(privateTips.id)}
                                                                        >X</button></div>
                ))}
            </div>

        </div>
    )
}

export default LinkAddressDisplayPriveTip;