import React from "react";
import Card from "./card";

const CL = ({robo}) => {
    return(
        <>
            {
                robo.map(item => {
                    return(<Card key={item.id} id={item.id} name={item.name} email={item.email}/>);
                })
            }
        </>
    );
}

export default CL;


// instead of direct destructuring, we can do:
// const {id, name, email} = props 
// (can be any name for props)