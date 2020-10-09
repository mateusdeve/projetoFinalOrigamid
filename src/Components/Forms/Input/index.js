import React from 'react'
import './styles.css'

const Input = ({label, type, name, value, onChange, error, onBlur }) => {
    return (
        <div className="wrapper">
            <label  className="label" htmlFor={name}>{label}</label>
            <input
            className="input"
            id={name} 
            name={name} 
            type={type} 
            onChange={onChange} 
            onBlur={onBlur}
            value={value}/>
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default Input
