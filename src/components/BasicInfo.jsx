import React from "react";
import AddNewProperty from "./addNewProperty";
import Sidebar from "../SideBar/sidebar";
import Property from "../Display/Property";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BasicInfo.css";

export default function BasicInfo(){
  const navigator = useNavigate();
  const location = useLocation();
  const [basicDetails, setDetails] = useState({
    Property_Type: "",
    Negotiable: "",
    Price: "",
    Ownership: "",
    Property_Age: "",
    Property_Approved: "",
    Property_Description: "",
    Bank_Loan: "",
  });

  function InputExample() {
    const [value, setValue] = useState('');
  
    return (
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    );
  }

    return(
        <>
        <div className="home">
          <div className="one">
            <Sidebar />
          </div>
          <div className="two">
            <Property />
            <AddNewProperty />
            <div className="maincontainer">
            <div className="row">
              <div>
                <span className="titles">Property Type</span>

                <div className="selectBox">
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setDetails({
                        ...basicDetails,
                        Property_Type: e.target.value,
                      });
                    }}
                  >
                  <option value={"toilet"}>Select propety Type</option>
                    <option>Flat</option>
                    <option>House</option>
                    <option>Plot</option>
                  </select>
                </div>
            </div>
            </div>
            <span className="titles">Negotiable</span>
                <div className="selectBox">
                  <select 
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setDetails({
                        ...basicDetails,
                        Negotiable: e.target.value,
                      });
                    }}>
                    <option value={"toilet"}>Select Negotiable</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select> 
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <span className="titles">Price</span>

                <div className="inputBox">
              <input placeholder="Example:10000" onClick={ InputExample}></input>
                </div>
              </div>
              <div>
                <span className="titles">Ownership</span>
                <div className="selectBox">
                  <select
                     defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setDetails({
                        ...basicDetails,
                          Ownership: e.target.value,
                      });
                    }}>
                    <option value={"toilet"}>Select Ownership</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <span className="titles">Property Age</span>

                <div className="selectBox">
                  <select
                     defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setDetails({
                        ...basicDetails,
                        Property_Age: e.target.value,
                      });
                    }}>
                    <option value={"toilet"}>Property Age</option>
                    <option>Flat</option>
                    <option>House</option>
                    <option>Plot</option>
                  </select>
                </div>
              </div>
              <div>
                <span className="titles">Property Approved</span>
                <div className="selectBox">
                  <select
                       defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setDetails({
                        ...basicDetails,
                        Property_Approved: e.target.value,
                      });
                    }}>
                    <option value={"toilet"}>Property Approved</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <span className="titles">Property Description</span>

                <div className="selectBox">
                  <select
                       defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setDetails({
                        ...basicDetails,
                        Property_Description: e.target.value,
                      });
                    }}>
                    <option value={"toilet"}></option>
                    <option>Flat</option>
                    <option>House</option>
                    <option>Plot</option>
                  </select>
                </div>
              </div>
              <div>
                <span className="titles">Bank Loan</span>
                <div className="selectBox">
                  <select
                       defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setDetails({
                        ...basicDetails,
                        Bank_Loan: e.target.value,
                      });
                    }}>
                    <option value={"toilet"}>Bank Loan</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>
            </div>  
            <div className="newbuttoncontainer">
            <div className="newbutton">
              <button  onClick={() => {
                  navigator("/home",{state:basicDetails});
                }}>
                Cancel
              </button>
            </div>

            <div className="newbutton">
              <button onClick={() => {
    navigator("/propertyDetail", { state: { basicDetails: basicDetails }});
              }}>Save & Continue</button>
            </div>
          </div>
            </>
    )
}

