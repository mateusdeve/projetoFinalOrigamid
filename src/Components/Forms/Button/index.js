import React from 'react'
import './styles.css'

const Button = ({children, ...props}) => {
    return (
        <button {...props} className="button">{children}</button>
    )
}

export default Button
