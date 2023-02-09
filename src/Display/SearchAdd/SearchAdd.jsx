import React from "react";
import SearchLogo from "../HomeLogo/searchlogo.svg"
import "./SearchAdd.css"

const SearchAdd = ()=>{
    return(
        <>
            <div className="searchAdd">
                <div className="search">
                    <div>
                        <input type="text" placeholder="Search PPD ID" />
                    </div>
                    <div>
                        <img src={SearchLogo} alt="Search" srcset="" />
                    </div>
                </div>
                <div className="add">
                    <button>+ Add Property</button>
                </div>
            </div>
        </>
    )
}

export default SearchAdd;