import React from 'react';
import "./styledBar.css";

const searchBox = ({searchChanged}) => {
    return(
        // class names used here are not part of tachyons but custom css
        <div className="main">
            <input
                type="search"
                placeholder="Search Robot names.."
                onChange = {searchChanged}
            />
            <i className="fa fa-search"></i>
        </div>
    )
}

export default searchBox;