import React from "react"
import { useParams } from "react-router-dom"

export default function User() {
    const {id} = useParams()
    return  <>
                <h1>User Profile Page</h1>
                <p>User ID is <b>{id}</b></p>
            </>
}