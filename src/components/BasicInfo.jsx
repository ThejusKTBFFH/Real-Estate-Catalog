import React from "react";
import AddNewProperty from "./AddNewProperty.jsx";
import Sidebar from "../SideBar/sidebar";
import Property from "../Display/Property";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BasicInfo.css";

export default function BasicInfo() {
  const navigator = useNavigate();
  // const location = useLocation();
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

  const onContinue = () => {
    navigator("/propertyDetail", { state: { basicDetails: basicDetails } });
  };



  return (
    <>
      <div className="home">
        <div className="one">
          <Sidebar />
        </div>
        <div className="two">
          <Property />
          <AddNewProperty />

          <div className="maincontainer">
            <div className="box1">
              <div className="row">
                <div>
                  <span className="titles">Property Type</span>

                  <div className="selectBox">
                    <select
                      defaultValue={"property"}
                      className="selectBox"
                      onChange={(e) => {
                        setDetails({
                          ...basicDetails,
                          Property_Type: e.target.value,
                        });
                      }}
                    >
                      <option value={"property"}>Select propety Type</option>
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
                  defaultValue={"property"}
                  className="selectBox"
                  onChange={(e) => {
                    setDetails({
                      ...basicDetails,
                      Negotiable: e.target.value,
                    });
                  }}
                >
                  <option value={"property"}>Select Negotiable</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="row">
                <div>
                  <span className="titles">Price</span>

                  <div className="selectBox">
                    <input
                      type={"number"}
                      placeholder="Example:10000"
                      value={basicDetails.Price}
                      onChange={(e) => { setDetails({ ...basicDetails, Price: e.target.value }) }}
                    ></input>
                  </div>
                </div>
                <div>
                  <span className="titles">Ownership</span>
                  <div className="selectBox">
                    <select
                      defaultValue={"property"}
                      className="selectBox"
                      onChange={(e) => {
                        setDetails({
                          ...basicDetails,
                          Ownership: e.target.value,
                        });
                      }}
                    >
                      <option value={"property"}>Select Ownership</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="box2">

              <div className="row">
                <div>
                  <span className="titles">Property Age</span>
                  <div className="selectBox">
                    <select
                      defaultValue={"property"}
                      className="selectBox"
                      onChange={(e) => {
                        setDetails({
                          ...basicDetails,
                          Property_Age: e.target.value,
                        });
                      }}
                    >
                      <option value={"property"}>Property Age</option>
                      <option>Flat</option>
                      <option>House</option>
                      <option>Plot</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <span className="titles">Property Approved</span>
                <div className="selectBox">
                  <select
                    defaultValue={"property"}
                    className="selectBox"
                    onChange={(e) => {
                      setDetails({
                        ...basicDetails,
                        Property_Approved: e.target.value,
                      });
                    }}
                  >
                    <option value={"property"}>Property Approved</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div>
                  <span className="titles">Property Description</span>

                  <div className="selectBox">
                    <select
                      defaultValue={"property"}
                      className="selectBox"
                      onChange={(e) => {
                        setDetails({
                          ...basicDetails,
                          Property_Description: e.target.value,
                        });
                      }}
                    >
                      <option value={"property"}></option>
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
                      defaultValue={"property"}
                      className="selectBox"
                      onChange={(e) => {
                        setDetails({
                          ...basicDetails,
                          Bank_Loan: e.target.value,
                        });
                      }}
                    >
                      <option value={"property"}>Bank Loan</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="newbuttoncontainer">
            <div className="newbutton">
              <button
                onClick={() => {
                  navigator("/home", { state: basicDetails });
                }}
              >
                Cancel
              </button>
            </div>

            <div className="newbutton">
              <button onClick={onContinue}>Save & Continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}