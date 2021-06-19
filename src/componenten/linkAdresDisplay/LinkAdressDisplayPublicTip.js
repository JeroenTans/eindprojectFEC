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

    useEffect(()=>{
        fetchData()
    }, [])

    return (
        <div className="groupDisplay">
            <div className="groupMembersDisplay">
                <h2>Adress privé tips:</h2>
                {publicTips.map((publicTip)=>(
                    <div key={publicTip.id}>{publicTip.address}</div>

                ))}
            </div>
        </div>
    )
}

export default LinkAddressDisplayPublicTip;