import React, { useState, useEffect } from 'react'
import axios from "axios";

function LinkAddressDisplayPublicTip () {

    const [publicTips, setPublicTips] = useState([]);

    async function fetchData () {
        try {
            const result = await axios.get('http://localhost:8080/api/v1/tips/publicTip')
            console.log(result)
            setPublicTips(result.data)
        } catch (e) {
            console.log("Get req is niet gelukt, error: " + e)
        }
    }

    async function deleteTip (id){
        console.log(id)
        try {
            await axios.delete(`http://localhost:8080/api/v1/tips/${id}`)
        } catch (e) {
            console.log("Get req is niet gelukt, error: " + e)
        }
        console.log(id)
    }

    useEffect(()=>{
        fetchData()
    }, [])

    return (
        <div className="groupDisplay">
            <div className="groupMembersDisplay">
                <h2>Id & address publieke tips:</h2>
                {publicTips.map((publicTip)=>(
                    <div key={publicTip.id}>{publicTip.id}  {publicTip.address}  <button onClick={(e)=>deleteTip(publicTip.id)}>X</button>
                    </div>))}
            </div>
        </div>
    )
}

export default LinkAddressDisplayPublicTip;