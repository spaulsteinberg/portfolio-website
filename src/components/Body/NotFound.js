import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="text-center">
            <p className="text-white">Sorry, that page doesn't exist here &#128550;</p>
            <p>
                <NavLink exact to="/">Click here to go home</NavLink>
            </p>
        </div>
    )
}

export default NotFound;