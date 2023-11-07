import React from 'react'
import { useParams } from "react-router-dom"

const SelectedCountry = () => {
    const { id } = useParams()
    console.log(id);
    
    return (
        <div>
            <div>Hello!</div>
        </div>
    )
}

export default SelectedCountry
