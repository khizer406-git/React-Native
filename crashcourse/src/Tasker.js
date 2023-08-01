import React from 'react'

const Tasker = () => {

    const tasks = [
        {
            name: "Khizer",
            id: "1",
            age: "23",
        },
        {
            name: "Dua",
            id: "2",
            age: "25",
        },
        {
            name: "Hassan",
            id: "3",
            age: "25",
        },
        {   
            name: "Hafsa",
            id: "3",
            age: "25",
        },
    ]
    return (
        <div>
            {tasks.map( (obj) => {
                console.log(obj.name);
                return(
                    <h3 key={obj.id}>{obj.name}</h3>
                )   
            })}
        </div>
    )
}

export default Tasker;