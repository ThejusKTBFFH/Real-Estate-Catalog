import React from "react";
import { useState } from "react";
import Property from "../Display/Property";
import SideBar from "../SideBar/sidebar";
import AddNewProperty from "./addNewProperty";
import { useLocation, useNavigate } from "react-router-dom";
import "./PropertyDetails.css";
// import { useEffect } from "react";


const PropertyDetail = () => {
  const location = useLocation();
  const navigator = useNavigate();

  const [propertyDetails, setPropertyDetails] = useState({
    length: "",
    Breadth: "",
    Total_Area: "",
    Area_Unit: "",
    No_Of_BHK: "",
    No_Of_Floor: "",
    Attached: "",
    Weastern_Toilet: "",
    Furnished: "",
    Car_Parking: "",
    Lift: "",
    Electricity: "",
    Facing: "",
  });
  const basicDetails = location.state.basicDetails;
 
  const onContinue = () => {
    //console.log(propertyDetails);
    navigator("/generalInfo", { state: { propertyDetails, basicDetails } });
  };

  return (
    <>
      <div className="home">
        <div className="one">
          <SideBar />
        </div>

        <div className="two">
          <Property />
          <AddNewProperty />

          <div className="maincontainer">
            <div className="box1">
            <div className="row">
              <div>
                <span>Length</span>

                <div className="selectBox">
                  <input
                    className="selectBox"
                    placeholder="Example: 1000"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        length: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div>
                <span>Breadth</span>
                <div className="selectBox">
                  <input
                    className="selectBox"
                    placeholder="Example: 1000"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Breadth: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div>
                <span>Total Area</span>

                <div className="selectBox">
                  <input
                    className="selectBox"
                    placeholder="Example: 7500"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Total_Area: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div>
                <span>Area Unit</span>
                <div className="selectBox">
                  <select
                    defaultValue={"Area"}
                    className="selectBox"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Area_Unit: e.target.value,
                      });
                    }}
                  >
                    <option value={"Area"}>Area Unit</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div>
                <span>No Of BHK</span>

                <div className="selectBox">
                  <select
                    defaultValue={"BHK"}
                    className="selectBox"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        No_Of_BHK: e.target.value,
                      });
                    }}
                  >
                    <option value={"BHk"}>Select No fo BHK</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>

              <div>
                <span>No Of Floor</span>
                <div className="selectBox">
                  <select
                    defaultValue={"Floor"}
                    className="selectBox"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        No_Of_Floor: e.target.value,
                      });
                    }}
                  >
                    <option value={"floor"}>Select No fo Floor</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div>
                <span>Attached</span>

                <div className="selectBox">
                  <select
                    defaultValue={"Attached"}
                    className="selectBox"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Attached: e.target.value,
                      });
                    }}
                  >
                    <option value={"Attached"}>Select Attached</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>

              </div>

              <div>
                <span>Weastern Toilet</span>
                <div className="selectBox">
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Weastern_Toilet: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}> Select Western Toilet</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="box2">

            <div className="row">
              <div>
                <span>Furnished</span>

                <div className="selectBox">
                  <select
                    defaultValue={"Furnished"}
                    className="selectBox"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Furnished: e.target.value,
                      });
                    }}
                  >
                    <option value={"Furnished"}>Select Furnished</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>

              <div>
                <span>Car Parking</span>
                <div className="selectBox">
                  <select
                    defaultValue={"Parking"}
                    className="selectBox"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Car_Parking: e.target.value,
                      });
                    }}
                  >
                    <option value={"Parking"}>Select Car Parking</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div>
                <span className="titles">Lift</span>

                <div className="selectBox">
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Lift: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Western Toilet</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>

              <div>
                <span className="titles">Electricity</span>
                <div className="selectBox">
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Electricity: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Western Toilet</option>
                    <option>Yes</option>
                    <option>NO</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div>
                <span className="titles">Facing</span>

                <div className="selectBox">
                  <select
                    defaultValue={"toilet"}
                    className="selectBox"
                    onChange={(e) => {
                      setPropertyDetails({
                        ...propertyDetails,
                        Facing: e.target.value,
                      });
                    }}
                  >
                    <option value={"toilet"}>Western Toilet</option>
                    <option>Yes</option>
                    <option>NO</option>
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
                    navigator("/basicInfo");
                  }}
                >
                  Previous
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
};

export default PropertyDetail;