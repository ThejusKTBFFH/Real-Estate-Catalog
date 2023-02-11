import React from "react";
import SearchLogo from "../HomeLogo/searchlogo.svg";
import { useNavigate } from "react-router-dom";
import "./SearchAdd.css";

const SearchAdd = () => {
    const navigator=useNavigate();
  return (
    <>
      <div className="searchAdd">
        <div className="search">
          <div>
            <input type="text" placeholder="Search PPD ID" />
          </div>
          <div>
            <img src={SearchLogo} alt="Search" />
          </div>
        </div>
        <div className="add">
          <button onClick={() => navigator("/basicInfo")}>
            + Add Property
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchAdd;
