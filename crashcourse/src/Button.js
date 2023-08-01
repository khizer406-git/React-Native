import React from 'react'

const Button = ({color,text}) => {
  
    const handleClick = () => {
        console.log("Clicked")
    } 

    return (
        <div>
            <button style={{backgroundColor:{color}}} onClick={handleClick}>{text}</button>
        </div>
    )
}

export default Button;