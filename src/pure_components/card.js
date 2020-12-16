import React from "react";

const c1 = ({id,name,email}) => {
    return(
        <div className="tc bg-light-green dib br3 pas3 ma2 grow bw2 shadow-5">
            <img alt ="robos" src={`https://robohash.org/bgset_bg1/${id}?size=200x200`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default c1;