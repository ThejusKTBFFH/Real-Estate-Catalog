import React from "react";
import AddNewProperty from "./AddNewProperty";
import Sidebar from "../SideBar/sidebar";
import Property from "../Display/Property";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./LocationInfo.css";
import axios from "axios";

const LocationInfo = () => {
  const location = useLocation()
  const basicDetails = location.state.basicDetails;
  //console.log( details);

  const localmail = (window.localStorage.getItem("email"));
  const propertyDetails = location.state.propertyDetails;
  const generalInfo = location.state.generalInfo;
  const navigator = useNavigate()



  const [locationInfo, setLocationInfo] = useState({
    email: localStorage.getItem("email"),
    city: "",
    area: "",
    pincode: "",
    address: "",
    landmark: "",
    latitude: "",
    longitude: "",
  });

  const allDetails = Object.assign(
    basicDetails,
    propertyDetails,
    generalInfo,
    locationInfo
  );
  const onAdd = async (e) => {
    e.preventDefault();

    // console.log(allDetails)

    axios.post('http://localhost:8081/property', allDetails)
      .then(response => {
        console.log(response.data);
        alert("properties added successfully")
        navigator("/home");
      })
      .catch(error => {
        console.log(error);
        navigator("/home");
      });





  }


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
                  <span>Email</span>

                  <div className="selectBox">
                    <input
                      value={locationInfo.email}
                      className="selectBox"
                      placeholder="Email"
                      onBlur={(e) => { if (location.email != localStorage.getItem("email")) { alert("Please enter the email linked to this account") } }}
                      onChange={(e) => {
                        setLocationInfo({
                          ...LocationInfo,
                          email: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>

                <div>
                  <span>City</span>
                  <div className="selectBox">
                    <select
                      defaultValue={"Property"}
                      className="selectBox"
                      onChange={(e) => {
                        setLocationInfo({
                          ...LocationInfo,
                          city: e.target.value,
                        });
                      }}
                    >
                      <option value={"Property"}>Select City</option>
                      <option>Delhi</option>
                      <option>Ranchi</option>
                      <option>Mumbai</option>
                      <option>Bangalore</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div>
                  <span> Area</span>

                  <div className="selectBox">
                    <select
                      defaultValue={"Property"}
                      className="selectBox"
                      onChange={(e) => {
                        setLocationInfo({
                          ...LocationInfo,
                          area: e.target.value,
                        });
                      }}
                    >
                      <option value={"Property"}>Select Area</option>
                      <option>Yes</option>
                      <option>NO</option>
                    </select>
                  </div>
                </div>

                <div>
                  <span>Pincode</span>
                  <div className="selectBox">
                    <select
                      defaultValue={"Property"}
                      className="selectBox"
                      onChange={(e) => {
                        setLocationInfo({
                          ...LocationInfo,
                          pincode: e.target.value,
                        });
                      }}
                    >
                      <option value={"Property"}>Select Pincode</option>
                      <option>834004</option>
                      <option>834001</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="box2">
              <div className="row">
                <div>
                  <span>Address</span>

                  <div className="selectBox">
                    <input
                      className="selectBox"
                      placeholder="Address"
                      onChange={(e) => {
                        setLocationInfo({
                          ...LocationInfo,
                          address: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>

                <div>
                  <span>Landmark</span>
                  <div className="selectBox">
                    <input
                      className="selectBox"
                      placeholder="Landmark"
                      onChange={(e) => {
                        setLocationInfo({
                          ...LocationInfo,
                          landmark: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div>
                  <span>Latitude</span>

                  <div className="selectBox">
                    <input
                      className="selectBox"
                      placeholder="Latitude"
                      onChange={(e) => {
                        setLocationInfo({
                          ...LocationInfo,
                          latitude: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>

                <div>
                  <span>Longitude</span>
                  <div className="selectBox">
                    <input
                      className="selectBox"
                      placeholder="Latitude"
                      onChange={(e) => {
                        setLocationInfo({
                          ...LocationInfo,
                          longitude: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="newbuttoncontainer">
            <div className="newbutton">
              <button
                onClick={() => {
                  navigator("/generalInfo");
                }}
              >
                Previous
              </button>
            </div>

            <div className="newbutton">
              <button onClick={onAdd}>Add Property</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LocationInfo;