import React from "react";
import Card from "./card";

const CL = ({robo}) => {

    // if you want to see Error Boundaries in action, uncomment the below 3 lines

    // if (true){
    //     throw Error('This was wilful!');
    // }

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