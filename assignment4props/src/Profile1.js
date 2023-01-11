import React from "react";
export default function Profile1(prop)
{
    return(
        <div>
            <h1>{prop.text.name}</h1>
            <p>{prop.data}</p>
        </div>
    )
}